package com.jfeat.dynamicFormReflector.service.impl;

import com.jfeat.dynamicFormReflector.service.DynamicFormReflectorService;
import com.jfeat.dynamicFormReflector.utils.ApiPathDetector;
import com.jfeat.dynamicFormReflector.utils.ControllerClassLoader;
import com.jfeat.dynamicFormReflector.utils.EntityClassLoader;
import com.jfeat.dynamicFormReflector.utils.FieldMetaParser;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.lang.reflect.Field;
import java.util.*;
import java.util.stream.Collectors;

import static com.jfeat.dynamicFormReflector.utils.PageInfoBuilder.buildPageInfo;

@Service
public class DynamicFormReflectorServiceImpl implements DynamicFormReflectorService {


    @Override
    public Map<String, Object> generateConfig(String moduleName, Boolean includeAdvanced) {
        try {
            Class<?> entityClass = EntityClassLoader.loadEntityClass(moduleName);
            Class<?> controllerClass = ControllerClassLoader.load(moduleName);

            Map<String, Object> config = new LinkedHashMap<>();

            // 基础配置
            config.put("pageName", buildPageInfo(moduleName));
            config.putAll(ApiPathDetector.detectCrudPaths(controllerClass));

            // 字段配置
            List<Map<String, Object>> fields = Arrays.stream(entityClass.getDeclaredFields())
                    .filter(f -> includeAdvanced || !isAdvancedField(f))
                    .map(FieldMetaParser::parseField)
                    .filter(Objects::nonNull)
                    .collect(Collectors.toList());
            config.put("createFields", fields);

            return config;

        } catch (ClassNotFoundException e) {
            throw new RuntimeException("模块不存在");
        }
    }

    private boolean isAdvancedField(Field f) {
        return f.isAnnotationPresent(Deprecated.class)
                || f.getName().equals("version");
    }
}
