
package com.jfeat.task.model.DTO;

import com.jfeat.task.model.DO.WfTask;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * @description: WfTask请求DTO
 */
@Data
@ApiModel(value = "WfTask请求DTO", description = "")
public class WfTaskReqDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty(value = "主键")
    private Long id;
    @ApiModelProperty(value = "用户ID")
    private Long userId;
    @ApiModelProperty(value = "流程实例ID")
    private Long processInstanceId;
    @ApiModelProperty(value = "step_id")
    private Long stepId;
    @ApiModelProperty(value = "表单ID")
    private Long formId;
    @ApiModelProperty(value = "form_type")
    private String formType;
    @ApiModelProperty(value = "status")
    private String status;
    @ApiModelProperty(value = "name")
    private String name;
    @ApiModelProperty(value = "handle_time")
    private LocalDateTime handleTime;

    /**
     * 转换为实体类
     *
     * @return
     */
    public WfTask to() {
        WfTask entity = new WfTask();
        entity.setId(id);
        entity.setUserId(userId);
        entity.setProcessInstanceId(processInstanceId);
        entity.setStepId(stepId);
        entity.setFormId(formId);
        entity.setFormType(formType);
        entity.setStatus(status);
        entity.setName(name);
        entity.setHandleTime(handleTime);
        return entity;
    }
}