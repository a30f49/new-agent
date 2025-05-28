package com.jfeat.dynamicFormReflector.utils;

import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Method;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

import static com.jfeat.dynamicFormReflector.utils.PathBuilderUtils.buildPath;

public class ApiPathDetector {
    public static Map<String, String> detectCrudPaths(Class<?> controllerClass) {
        Map<String, String> paths = new HashMap<>();
        // 类级别基础路径
        RequestMapping classMapping = controllerClass.getAnnotation(RequestMapping.class);
        String basePath = classMapping != null ? classMapping.value()[0] : "";

        for (Method method : controllerClass.getMethods()) {
            if (method.isAnnotationPresent(GetMapping.class)) {
                detectGetMethod(method, basePath, paths);
            } else if (method.isAnnotationPresent(PostMapping.class)) {
                paths.put("createAPI", buildPath(basePath, method.getAnnotation(PostMapping.class).value()));
            } else if (method.isAnnotationPresent(DeleteMapping.class)) {
                paths.put("deleteAPI", buildPath(basePath, method.getAnnotation(DeleteMapping.class).value()));

            }else if (method.isAnnotationPresent(PutMapping.class)) {
                paths.put("updateAPI", buildPath(basePath, method.getAnnotation(PutMapping.class).value()));
            }
        }
        return paths;
    }

    private static void detectGetMethod(Method method, String basePath, Map<String, String> paths) {
        // 检查方法参数中是否包含@PathVariable注解
        boolean hasPathVariable = Arrays.stream(method.getParameters())
                .anyMatch(param -> param.isAnnotationPresent(PathVariable.class));
        String[] methodPaths = method.getAnnotation(GetMapping.class).value();

        if (hasPathVariable) {
            paths.put("getAPI", buildPath(basePath, methodPaths));
        }else {
            paths.put("listAPI", buildPath(basePath, methodPaths));
        }
    }


}