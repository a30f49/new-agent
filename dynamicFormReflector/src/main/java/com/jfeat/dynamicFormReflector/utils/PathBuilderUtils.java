package com.jfeat.dynamicFormReflector.utils;

import java.util.Arrays;

public class PathBuilderUtils {

    /**
     * 构建完整 API 路径
     * @param basePath 控制器类级别路径（如 "/api/users"）
     * @param methodPaths 方法级别路径数组（如 @GetMapping("/list")）
     * @return 规范化后的完整路径（如 "/api/users/list"）
     */
    public static String buildPath(String basePath, String[] methodPaths) {
        // 处理空路径
        basePath = (basePath == null) ? "" : basePath.trim();

        // 获取方法级第一个有效路径
        String methodPath = Arrays.stream(methodPaths)
                .filter(p -> p != null && !p.trim().isEmpty())
                .findFirst()
                .orElse("");

        // 路径标准化拼接
        String fullPath = normalizePath(basePath) + normalizePath(methodPath);

        // 替换路径变量占位符（Spring的 {id} → 前端的 [id]）
        return fullPath.replaceAll("\\{([^}]+)}", "[$1]");
    }

    /**
     * 标准化单个路径段：
     * 1. 确保不以 "/" 开头（避免双斜杠）
     * 2. 确保不以 "/" 结尾
     */
    private static String normalizePath(String path) {
        if (path == null || path.isEmpty()) return "";

        // 移除首尾空格
        path = path.trim();

        // 处理开头斜杠
        if (path.startsWith("/")) {
            path = path.substring(1);
        }

        // 处理结尾斜杠
        if (path.endsWith("/")) {
            path = path.substring(0, path.length() - 1);
        }

        return path.isEmpty() ? "" : "/" + path;
    }


}
