package com.jfeat.dynamicFormReflector.dao.model;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Getter;
import lombok.Setter;

import java.util.Map;

@Getter
@Setter
@TableName("t_module_info")
public class ModuleInfo {
    /**
     * 主键id（自增）
     */
    @TableId(type = IdType.AUTO)
    private Long id;

    /**
     * 模块名称
     */
    private String moduleName;

    /**
     * 模块代码（唯一标识）
     */
    private String moduleCode;

    /**
     * 包路径
     */
    private String modulePackage;

    /**
     * 模块配置信息（JSON格式）
     */
    @TableField(exist = false)
    private Map<String,Object> config;

    private String configJson;
}