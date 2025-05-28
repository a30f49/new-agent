
package com.jfeat.task.model.DO;


import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.io.Serializable;
import java.time.LocalDateTime;

@Data
@TableName("wf_task")
@ApiModel(value = "WfTask", description = "")
public class WfTask implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.AUTO)
    @ApiModelProperty(value = "主键")
    private Long id;

    @ApiModelProperty(value = "用户ID")
    private Long userId;

    @ApiModelProperty(value = "流程实例ID",required = true)
    private Long processInstanceId;

    @ApiModelProperty(value = "step_id")
    private Long stepId;

    @ApiModelProperty(value = "表单ID")
    private Long formId;

    @ApiModelProperty(value = "form_type")
    private String formType;

    @ApiModelProperty(value = "status")
    private String status;

    @ApiModelProperty(value = "name",example = "填写姓名")
    private String name;

    @ApiModelProperty(value = "handle_time")
    private LocalDateTime handleTime;
}