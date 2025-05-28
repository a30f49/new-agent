package com.jfeat.dynamicFormReflector.utils;

import org.springframework.context.ApplicationContext;

import java.io.IOException;
import java.nio.file.*;
import java.nio.file.attribute.BasicFileAttributes;
import java.util.ArrayList;
import java.util.EnumSet;
import java.util.List;
import java.util.stream.Collectors;

public class ControllerClassLoader {
    // 定义Controller类所在的包路径（可按项目结构调整）
    private static final String[] CONTROLLER_PACKAGES = {
            "com.jfeat.task.api",
            "com.project.modules"
    };

    // 常见Controller类命名规则
    private static final String[] POSSIBEL_CLASS_NAME = {
            "Controller",  // User → UserController
            "Api",          // User → UserApi
            "Resource"      // User → UserResource
    };
    private static final String BASE_PACKAGE="com";



    public static Class<?> findBeanClassByName(String className, ApplicationContext context) {
        // 统一将目标类名转为小写，实现忽略大小写匹配
        String targetClassName = className.toLowerCase();

        String[] beanNames = context.getBeanDefinitionNames();
        for (String beanName : beanNames) {
            if (beanName.toLowerCase().equals(targetClassName)) {
                Class<?> beanClass = context.getType(beanName);
                if (beanClass != null) {
                    return beanClass;
                }
            }


        }
        throw new RuntimeException("未找到类: " + className);
    }

    /**
     * 根据模块名动态加载Controller类
     * @param moduleCode 模块名（如 "User"）
     * @return 对应的Controller类
     * @throws ClassNotFoundException 类不存在时抛出
     */
    public static Class<?> load(String moduleCode) throws ClassNotFoundException {
        // 在所有包路径下尝试加载类
        for (String pkg : CONTROLLER_PACKAGES) {
            for (String className : POSSIBEL_CLASS_NAME) {
                String fullClassName = pkg + "." + moduleCode+className;
                try {
                    return Class.forName(fullClassName);
                } catch (ClassNotFoundException ignored) {
                    // 忽略，继续尝试下一个可能性
                }
            }
        }
        throw new ClassNotFoundException("Controller类未找到: " + moduleCode);
    }

    public static Class<?> load(String modulePackage,String moduleCode) throws ClassNotFoundException {


        List<Path> dirResults = findControllerDirs(BASE_PACKAGE, modulePackage);
        List<String> packageResults = dirResults.stream()
                .map(path -> {
                    // 转换为相对路径（相对于当前工作目录）
                    Path relativePath = Paths.get("").toAbsolutePath().relativize(path);
                    // 将路径分隔符替换为点，并去掉开头的斜杠
                    return relativePath.toString()
                            .replace(FileSystems.getDefault().getSeparator(), ".")
                            .replaceAll("^\\.+", "");
                })
                .collect(Collectors.toList());


        // 在所有包路径下尝试加载类
        for (String pkg : packageResults) {
            for (String className : POSSIBEL_CLASS_NAME) {
                String fullClassName = pkg + "." +moduleCode+ className;
                try {
                    return Class.forName(fullClassName);
                } catch (ClassNotFoundException ignored) {
                    // 忽略，继续尝试下一个可能性
                }
            }
        }
        throw new ClassNotFoundException("Controller类未找到: " + moduleCode);
    }


    public static List<Path> findControllerDirs(String basePackage, String modulePackage) {
        Path startPath;
        int maxDepth;

        // 模式选择
        if (modulePackage != null && !modulePackage.isEmpty()) {
            startPath = Paths.get(modulePackage.replace('.', '/'));
            maxDepth = Integer.MAX_VALUE; // 无深度限制
        } else {
            startPath = Paths.get(basePackage.replace('.', '/'));
            maxDepth = 5; // 限制5层深度
        }

        List<Path> result = new ArrayList<>();

        try {
            Files.walkFileTree(startPath, EnumSet.noneOf(FileVisitOption.class), maxDepth, new FileVisitor<Path>() {
                private int currentDepth = 0;

                @Override
                public FileVisitResult preVisitDirectory(Path dir, BasicFileAttributes attrs) {
                    // 计算相对深度（从起点开始）
                    int relativeDepth = dir.getNameCount() - startPath.getNameCount();

                    // 在模块模式下跳过深度检查
                    if (modulePackage == null && relativeDepth > maxDepth) {
                        return FileVisitResult.SKIP_SUBTREE;
                    }

                    // 检查目标目录
                    String dirName = dir.getFileName().toString().toLowerCase();
                    if (dirName.equals("controller") || dirName.equals("api")) {
                        result.add(dir);
                    }
                    return FileVisitResult.CONTINUE;
                }

                @Override
                public FileVisitResult visitFile(Path file, BasicFileAttributes attrs) {
                    return FileVisitResult.CONTINUE;
                }

                @Override
                public FileVisitResult visitFileFailed(Path file, IOException exc) {
                    System.err.println("访问文件失败: " + file + " (" + exc.getMessage() + ")");
                    return FileVisitResult.CONTINUE;
                }

                @Override
                public FileVisitResult postVisitDirectory(Path dir, IOException exc) {
                    currentDepth--;
                    return FileVisitResult.CONTINUE;
                }
            });
        } catch (IOException e) {
            System.err.println("遍历目录失败: " + e.getMessage());
        } catch (SecurityException e) {
            System.err.println("权限不足: " + e.getMessage());
        }

        return result;
    }



}