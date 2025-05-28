
package com.jfeat.task.model.DTO;

import com.jfeat.task.model.DO.WfTask;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * @description: WfTask响应DTO
 */
@Data
@ApiModel(value = "WfTask响应DTO", description = "")
public class WfTaskRespDTO implements Serializable {

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
     * 通过实体类构建
     *
     * @param wftask
     * @return
     */
    public static WfTaskRespDTO of(WfTask wftask) {
        WfTaskRespDTO dto = new WfTaskRespDTO();
        dto.setId(wftask.getId());
        dto.setUserId(wftask.getUserId());
        dto.setProcessInstanceId(wftask.getProcessInstanceId());
        dto.setStepId(wftask.getStepId());
        dto.setFormId(wftask.getFormId());
        dto.setFormType(wftask.getFormType());
        dto.setStatus(wftask.getStatus());
        dto.setName(wftask.getName());
        dto.setHandleTime(wftask.getHandleTime());
        return dto;
    }
}