package com.jfeat.dynamicFormReflector.utils;

import io.swagger.annotations.Api;

import java.util.LinkedHashMap;
import java.util.Map;

public class PageInfoBuilder {

    /**
     * 构建页面基础信息
     * @param moduleName 模块名（如 "User"）
     * @return 包含table/new/edit/name的Map
     */
    public static Map<String, String> buildPageInfo(String moduleName) {
        Map<String, String> pageInfo = new LinkedHashMap<>();

        // 从Swagger注解获取中文名（如果有）
        String chineseName = resolveChineseName(moduleName);

        // 默认逻辑：无注解时直接使用模块名
        pageInfo.put("table", chineseName != null ? chineseName : moduleName);
        pageInfo.put("new", "新增" + (chineseName != null ? chineseName : moduleName));
        pageInfo.put("edit", "编辑" + (chineseName != null ? chineseName : moduleName));
        pageInfo.put("name", moduleName.toLowerCase()); // 缓存键

        return pageInfo;
    }

    /**
     * 通过反射获取Swagger @Api注解的中文描述
     */
    private static String resolveChineseName(String moduleName) {
        try {
            Class<?> controllerClass = ControllerClassLoader.load(moduleName);
            Api swaggerAnno = controllerClass.getAnnotation(Api.class);
            if (swaggerAnno != null) {
                return swaggerAnno.value(); // 例如 @Api(value = "用户模块")
            }
        } catch (Exception e) {
            // 忽略异常，返回null
        }
        return null;
    }
}