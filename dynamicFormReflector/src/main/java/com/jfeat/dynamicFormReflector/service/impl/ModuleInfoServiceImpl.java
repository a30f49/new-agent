package com.jfeat.dynamicFormReflector.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.jfeat.dynamicFormReflector.mapper.ModuleInfoMapper;
import com.jfeat.dynamicFormReflector.dao.model.ModuleInfo;
import com.jfeat.dynamicFormReflector.service.ModuleInfoService;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import javax.annotation.Resource;

@Service
public class ModuleInfoServiceImpl implements ModuleInfoService {

    @Resource
    ModuleInfoMapper moduleInfoMapper;


    @Override
    public ModuleInfo getByModuleCode(String moduleCode) {
        QueryWrapper<ModuleInfo> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("module_code", moduleCode);
        return moduleInfoMapper.selectOne(queryWrapper);
    }

    @Override
    public Boolean saveModule(ModuleInfo module) {
        // 1. 参数校验
        if (!StringUtils.hasText(module.getModuleName())) {
            throw new IllegalArgumentException("模块名称不能为空");
        }
        if (!StringUtils.hasText(module.getModuleCode())) {
            throw new IllegalArgumentException("模块代码不能为空");
        }

        // 2. 根据模块代码查询现有记录
        QueryWrapper<ModuleInfo> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("module_code", module.getModuleCode());
        ModuleInfo existingModule = moduleInfoMapper.selectOne(queryWrapper);

        // 3. 存在则更新，不存在则新增
        if (existingModule != null) {
            // 保留原有ID进行更新
            module.setId(existingModule.getId());
            return moduleInfoMapper.updateById(module) > 0;
        } else {
            return moduleInfoMapper.insert(module) > 0;
        }
    }
}
