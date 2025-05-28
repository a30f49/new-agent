package com.jfeat.dynamicFormReflector.service;

import java.util.Map;

public interface DynamicFormReflectorService {

    Map<String, Object> generateConfig(String moduleName,Boolean includeAdvanced);
}
