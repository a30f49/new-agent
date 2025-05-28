package com.jfeat.dynamicFormReflector.utils;

public class EntityClassLoader {
    private static final String[] ENTITY_PACKAGES = {"com.jfeat.task.model.DO", "com.business.model"};

    public static Class<?> loadEntityClass(String moduleName) throws ClassNotFoundException {
        // 按常见命名规则搜索实体类
        String[] possibleNames = {
                moduleName,
                moduleName + "Entity",
                moduleName + "Model"
        };

        for (String pkg : ENTITY_PACKAGES) {
            for (String name : possibleNames) {
                try {
                    return Class.forName(pkg + "." + name);
                } catch (ClassNotFoundException ignored) {}
            }
        }
        throw new ClassNotFoundException("实体类未找到: " + moduleName);
    }
}