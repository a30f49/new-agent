package com.jfeat.dynamicFormReflector.utils;

import io.swagger.annotations.ApiModelProperty;
import io.swagger.annotations.ApiParam;
import org.springframework.web.bind.annotation.*;
import com.baomidou.mybatisplus.annotation.TableName;

import javax.validation.constraints.NotBlank;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.lang.reflect.Parameter;
import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;


public class FieldMetaParser {

    public static Map<String, List<Map<String, Object>>> extractRequestFields(Class<?> controllerClass,Boolean includeAdvanced) {
        Map<String, List<Map<String, Object>>> result = new HashMap<>();
        for (Method method : controllerClass.getMethods()) {
            List<Map<String,Object>> search = new ArrayList<>();
            Parameter[] parameters = method.getParameters();

            // 检测方法是否有GetMapping注解
            if (method.isAnnotationPresent(GetMapping.class)) {
                GetMapping getMapping = method.getAnnotation(GetMapping.class);

                // 检测是否为无路径或根路径的GET方法
                boolean isRootPath = Arrays.stream(getMapping.value())
                        .anyMatch(path -> path.isEmpty() || path.equals("/"));

                if (isRootPath) {
                    // 遍历方法参数
                    for (Parameter param : method.getParameters()) {
                        if (param.isAnnotationPresent(RequestParam.class)) {
                            Map<String, Object> paramMap = new HashMap<>();
                            paramMap.put("field", param.getName());
                            paramMap.put("type", "search");

                            // 获取参数上的ApiParam注解
                            ApiParam apiParam = param.getAnnotation(ApiParam.class);
                            if (apiParam != null) {
                                Map<String, String> props = new HashMap<>();
                                props.put("placeholder", apiParam.value());
                                paramMap.put("props", props);
                            }

                            search.add(paramMap);
                        }
                    }
                    result.put("search", search);
                }
            }

            for (Parameter param : parameters) {
               if (param.isAnnotationPresent(RequestBody.class)) {
                    // 提取请求体类中的字段信息
                    Class<?> requestBodyClass = param.getType();
//                    List<Map<String, Object>> fields = extractFieldsFromClass(requestBodyClass);

                    List<Map<String, Object>> fields = new ArrayList<>();
                    // 处理当前类的字段
                    fields.addAll(Arrays.stream(requestBodyClass.getDeclaredFields())
                            .filter(f -> includeAdvanced || !isAdvancedField(f))
                            .map(FieldMetaParser::parseField)
                            .collect(Collectors.toList()));
                    
                    // 递归处理父类字段
                    Class<?> superClass = requestBodyClass.getSuperclass();
                    while (superClass != null && superClass != Object.class) {
                        // 检查父类是否有@TableName注解
                        if (superClass.isAnnotationPresent(com.baomidou.mybatisplus.annotation.TableName.class)) {
                            fields.addAll(Arrays.stream(superClass.getDeclaredFields())
                                    .filter(f -> includeAdvanced || !isAdvancedField(f))
                                    .map(FieldMetaParser::parseField)
                                    .collect(Collectors.toList()));
                        }
                        superClass = superClass.getSuperclass();
                    }
                    // 根据方法类型绑定到 create/updateFields
                    if (method.isAnnotationPresent(PostMapping.class)) {
                        result.put("createFields", fields);
//                        展示将详情和创建返回一样的
                        result.put("viewConfig", fields);
                        result.put("tableFields", fields);
                    } else if (method.isAnnotationPresent(PutMapping.class)) {
                        result.put("updateFields", fields);
                    }
                    break;
                }
            }

        }
        return result;
    }


    // 反射类字段生成表单配置
    private static List<Map<String, Object>> extractFieldsFromClass(Class<?> clazz) {
        List<Map<String, Object>> fields = new ArrayList<>();
        for (Field field : clazz.getDeclaredFields()) {
            Map<String, Object> fieldConfig = new HashMap<>();
            String fieldName = field.getName();
            // 基础字段信息
            fieldConfig.put("field", fieldName);
            fieldConfig.put("label", camelToChinese(fieldName)); // 示例：将 "userName" 转为 "用户名"
            // 根据字段类型推断表单类型
            Class<?> fieldType = field.getType();
            if (fieldType == boolean.class || fieldType == Boolean.class) {
                fieldConfig.put("type", "switch");
            } else if (fieldType.isEnum()) {
                fieldConfig.put("type", "select");
                fieldConfig.put("options", buildEnumOptions(fieldType));
            } else {
                fieldConfig.put("type", "input");
            }
            // 处理校验注解（如 @NotBlank）
            List<Map<String, String>> rules = new ArrayList<>();
            if (field.isAnnotationPresent(NotBlank.class)) {
                rules.add(Collections.singletonMap("type", "required"));
            }
            if (!rules.isEmpty()) {
                fieldConfig.put("rules", rules);
            }
            fields.add(fieldConfig);
        }
        return fields;
    }

    // 将字段名转换为中文标签（示例实现）
    private static String camelToChinese(String camelStr) {
        // 实现逻辑：例如通过字典映射或规则转换
        return camelStr; // 实际项目中需完善
    }

    // 生成枚举类型的 options
    private static List<Map<String, String>> buildEnumOptions(Class<?> enumClass) {
        List<Map<String, String>> options = new ArrayList<>();
        for (Object enumConstant : enumClass.getEnumConstants()) {
            Map<String, String> option = new HashMap<>();
            option.put("label", ((Enum<?>) enumConstant).name());
            option.put("value", ((Enum<?>) enumConstant).name());
            options.add(option);
        }
        return options;
    }

    public static Map<String, Object> parseField(Field field) {
        Map<String, Object> config = new LinkedHashMap<>();

        // 基础信息
        config.put("field", field.getName());
        config.put("type", resolveFieldType(field));
        config.put("label", camelToChinese(field.getName()));

        // Swagger注解处理
        ApiModelProperty swaggerAnno = field.getAnnotation(ApiModelProperty.class);
        if (swaggerAnno != null) {
            config.put("label", swaggerAnno.value());
            if (!swaggerAnno.example().isEmpty()) {
                config.put("props", Map.of("placeholder", swaggerAnno.example()));
            }
            if (swaggerAnno.required()) {
                List<Map<String,Object>> list = new ArrayList<>();
                Map<String, Object> map =  new HashMap<String, Object> ();
                map.put("required", true);
                list.add(map);
                config.put("rules",list);
            }
        }


//        // JSR303验证规则
//        config.put("rules", resolveValidationRules(field));
//
//        // 枚举处理
//        if (field.getType().isEnum()) {
//            config.put("options", resolveEnumOptions(field.getType()));
//        }

        return config;
    }

    private static String resolveFieldType(Field field) {
        Class<?> type = field.getType();
        if (type == LocalDateTime.class) return "datetime";
        if (type == boolean.class || type == Boolean.class) return "switch";
        if (Number.class.isAssignableFrom(type)) return "input";
        if (type.isEnum()) return "select";
        return "input";
    }

    public static boolean isAdvancedField(Field f) {
        String fieldName = f.getName();
        return f.isAnnotationPresent(Deprecated.class)
                || fieldName.equals("version") 
                || fieldName.equals("serialVersionUID")
                || !Character.isLowerCase(fieldName.charAt(0));
    }
}