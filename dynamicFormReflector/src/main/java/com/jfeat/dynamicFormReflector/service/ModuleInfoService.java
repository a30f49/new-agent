package com.jfeat.dynamicFormReflector.service;

import com.jfeat.dynamicFormReflector.dao.model.ModuleInfo;

public interface ModuleInfoService {
    ModuleInfo getByModuleCode(String moduleCode);

    Boolean saveModule(ModuleInfo module);

}
