package com.jfeat.task.api;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.jfeat.task.model.DO.WfTask;
import com.jfeat.task.service.WfTaskService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/wfTasks")
@Api(tags = "工作流任务管理接口")
public class TaskController {

    @Autowired
    private WfTaskService wfTaskService;

    @PostMapping
    @ApiOperation("创建新任务")
    public ResponseEntity<WfTask> create(@RequestBody WfTask wfTask) {
        boolean saved = wfTaskService.save(wfTask);
        return saved ? ResponseEntity.ok(wfTask) : ResponseEntity.badRequest().build();
    }

    @GetMapping("/{id}")
    @ApiOperation("通过ID获取任务详情")
    public ResponseEntity<WfTask> getById(
            @ApiParam(value = "任务ID", required = true)
            @PathVariable Long id) {
        WfTask task = wfTaskService.getById(id);
        return task != null ? ResponseEntity.ok(task) : ResponseEntity.notFound().build();
    }

    @GetMapping("")
    @ApiOperation("分页查询任务列表")
    public Map<String,Object> pageList(
            @ApiParam(value = "当前页", defaultValue = "1") @RequestParam(defaultValue = "1") Integer current,
            @ApiParam(value = "每页数量", defaultValue = "10") @RequestParam(defaultValue = "10") Integer size,
            @ApiParam("任务状态过滤") @RequestParam(required = false) String status) {

        Page<WfTask> page = new Page<>(current, size);
        QueryWrapper<WfTask> wrapper = new QueryWrapper<>();
        if (status != null) {
            wrapper.eq("status", status);
        }
        Map<String,Object> map = new HashMap<>();
        map.put("data",wfTaskService.page(page, wrapper));
        map.put("code", HttpStatus.OK.value());
        return map;
    }

    @PutMapping("/{id}")
    @ApiOperation("更新任务信息")
    public ResponseEntity<WfTask> update(
            @ApiParam(value = "任务ID", required = true) @PathVariable Long id,
            @RequestBody WfTask wfTask) {
        wfTask.setId(id);
        boolean updated = wfTaskService.updateById(wfTask);
        return updated ? ResponseEntity.ok(wfTask) : ResponseEntity.badRequest().build();
    }

    @DeleteMapping("/{id}")
    @ApiOperation("删除指定任务")
    public ResponseEntity<Void> delete(
            @ApiParam(value = "任务ID", required = true) @PathVariable Long id) {
        boolean removed = wfTaskService.removeById(id);
        return removed ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }



}