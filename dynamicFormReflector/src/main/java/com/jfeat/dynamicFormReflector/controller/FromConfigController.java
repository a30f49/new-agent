package com.jfeat.dynamicFormReflector.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.jfeat.dynamicFormReflector.dao.model.ModuleInfo;
import com.jfeat.dynamicFormReflector.mapper.ModuleInfoMapper;
import com.jfeat.dynamicFormReflector.service.ModuleInfoService;
import com.jfeat.dynamicFormReflector.utils.ApiPathDetector;
import com.jfeat.dynamicFormReflector.utils.ControllerClassLoader;
import com.jfeat.dynamicFormReflector.utils.FieldMetaParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.io.IOException;
import java.util.*;

import static com.jfeat.dynamicFormReflector.utils.PageInfoBuilder.buildPageInfo;

@RestController
@RequestMapping("/forms")
public class FromConfigController {


    @Resource
    ModuleInfoService moduleInfoService;
    @Autowired
    private ModuleInfoMapper moduleInfoMapper;

    @GetMapping("")
    public Map<String, Object> generateConfig(@RequestParam Integer id) {

        System.out.println(id);
        String moduleCode="Task";
        Boolean includeAdvanced = false;
        try {
            Class<?> controllerClass = ControllerClassLoader.load(moduleCode);

            Map<String, Object> config = new LinkedHashMap<>();

            // 基础配置
            config.put("pageName", buildPageInfo(moduleCode));
            config.put("columns", 1);

//
//            "map": {},
//            "layout": {
//                "form": "TitleContent",
//                        "table": "Content"
//            },
            Map<String,Object> layout = new HashMap<>();
            layout.put("form", "TitleContent");
            layout.put("table", "Content");
            config.put("layout",layout );
            // 直接添加原生JSON配置（使用Map表示）
            // 构建 tableActions
            List<Map<String, Object>> tableActions = new ArrayList<>();
            Map<String, Object> addAction = new LinkedHashMap<>();
            addAction.put("title", "添加");
            addAction.put("type", "path");
            Map<String, Object> addOptions = new LinkedHashMap<>();
            addOptions.put("style", "primary");
            addOptions.put("path", "checkfiles/checkfiles--add");
            addAction.put("options", addOptions);
            tableActions.add(addAction);
            config.put("tableActions", tableActions);

// 构建 tableOperation
            List<Map<String, Object>> tableOperations = new ArrayList<>();

// 详情操作
            Map<String, Object> viewOp = new LinkedHashMap<>();
            viewOp.put("title", "详情");
            viewOp.put("type", "path");
            Map<String, Object> viewOptions = new LinkedHashMap<>();
            viewOptions.put("outside", true);
            viewOptions.put("path", "checkfiles/checkfiles--view");
            viewOp.put("options", viewOptions);
            tableOperations.add(viewOp);

// 编辑操作
            Map<String, Object> editOp = new LinkedHashMap<>();
            editOp.put("title", "编辑");
            editOp.put("type", "path");
            Map<String, Object> editOptions = new LinkedHashMap<>();
            editOptions.put("outside", true);
            editOptions.put("path", "checkfiles/checkfiles-edit");
            editOp.put("options", editOptions);
            tableOperations.add(editOp);

// 删除操作
            Map<String, Object> deleteOp = new LinkedHashMap<>();
            deleteOp.put("title", "删除");
            deleteOp.put("type", "delete");
            tableOperations.add(deleteOp);

            config.put("tableOperation", tableOperations);

            config.putAll(ApiPathDetector.detectCrudPaths(controllerClass));

            config.putAll(FieldMetaParser.extractRequestFields(controllerClass,includeAdvanced));
            Gson gson = new Gson();
            String json = gson.toJson(config);
            System.out.println(json);
            Map<String, Object> response = new LinkedHashMap<>();

//            {code:200,msg:"success",support:"json",cur:"json"}
            response.put("code", HttpStatus.OK.value());
            response.put("data", config);
            response.put("cur",null);
//            ModuleInfo byModuleCode = moduleInfoService.getByModuleCode(moduleCode);
            ModuleInfo byModuleCode = moduleInfoMapper.selectById(id);
            if (byModuleCode != null && !byModuleCode.getConfigJson().isEmpty()) {
                ObjectMapper mapper = new ObjectMapper();
                Map<String, Object> map = mapper.readValue(byModuleCode.getConfigJson(), Map.class);
                response.put("cur",map);
                response.put("data",map);
            }
            return response;
        } catch (ClassNotFoundException e) {
            throw new RuntimeException("模块不存在");
        } catch (JsonMappingException e) {
            throw new RuntimeException(e);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

    }

    @PostMapping
    public Map<String, Object> saveModuleConfig(@RequestBody ModuleInfo moduleInfo) {
//        Gson gson = new Gson();
//        String json = gson.toJson(moduleInfo.getConfig());
//        moduleInfo.setConfigJson(json);
        moduleInfoService.saveModule(moduleInfo);
        Map<String, Object> response = new LinkedHashMap<>();
        response.put("code", HttpStatus.OK.value());
        response.put("msg", "success");
        return response;
    }



}