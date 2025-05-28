const API = require('../.setting/dataService-api');

module.exports = {
  "layout": "BaseTitle",
  "title": "详情",
  "items": [
    {
      "layout": "Content",
      "component": "Form",
      "config": {
        "layout": "Grid",
        "layoutConfig": {
          
          "layoutArea": [
            {
              "layout": "Grid",
              "length": 1,
              "value": [
                24
              ]
            },
            {
              "layout": "Grid",
              "length": 2,
              "value": [
                12,
                12
              ]
            },
            {
              "layout": "Grid",
              "length": 2,
              "value": [
                12,
                12
              ]
            },
            {
              "layout": "Grid",
              "length": 1,
              "value": [
                24
              ]
            },
            {
              "layout": "Grid",
              "length": 1,
              "value": [
                24
              ]
            }
          ]
        },
        "fields": [
          {
            "label": "项目",
            "field": "projectId",
            "type": "modal-radio",
            "props": {},
            "rules": [
              "required"
            ],
            "options": {
              "title": "选择项目",
              "label": "name",
              "editLabel": "name",
              "value": "projectId",
              "API": "/api/crud/project/projects",
              "fields": [
                {
                  "label": "名称",
                  "field": "name"
                },
                {
                  "label": "状态",
                  "field": "status"
                }
              ]
            }
          },
          {
            "label": "活动名称",
            "field": "name",
            "type": "input",
            "props": {
              "placeholder": "请输入活动的名称"
            },
            "rules": [
              "required"
            ]
          },
          {
            "label": "状态",
            "field": "status",
            "type": "select",
            "props": {},
            "rules": [
              "required"
            ],
            "options": [
              {
                "label": "等待出工",
                "value": 1
              },
              {
                "label": "出工完成",
                "value": 2
              },
              {
                "label": "作废",
                "value": 3
              }
            ]
          },
          {
            "label": "出工日期",
            "field": "createTime",
            "type": "date",
            "props": {
              "placeholder": "请选择日期"
            },
            "rules": []
          },
          {
            "label": "最后修改日期",
            "field": "updateTime",
            "type": "date",
            "props": {
              "placeholder": "请选择日期"
            },
            "rules": []
          },
          {
            "label": "备注",
            "field": "note",
            "type": "text-area",
            "props": {
              "placeholder": "请输入表单的更多信息"
            },
            "rules": []
          }
        ],
        "API": {
          "getAPI": API.getAPI
        }
      }
    },
    {
      "layout": "Content",
      "component": "ChildrenList",
      "config": {
        "itemsField": "items",
        "oneMany": {
          "tableName": "",
          "field": ""
        },
        "actions": [
          {
            "title": "添加数据",
            "type": "children-modal-add",
            "options": {
              "modalTitle": "添加数据",
              "modalWidth": 1080,
              "items": [
                {
                  "layout": "Empty",
                  "component": "ChildrenForm",
                  "config": {
                    "fields": [
                      {
                        "label": "",
                        "field": "",
                        "type": "modal-radio",
                        "options": {
                          "title": "选择采购单",
                          "label": "name",
                          "editLabel": "name",
                          "value": "id",
                          "API": "/api/crud/vms/purchaseOrders",
                          "fields": [
                            {
                              "label": "名称",
                              "field": "name"
                            }
                          ],
                          "saveData": {
                            "requestNumber": "采购申请流水",
                            "vmsOrderNumber": "采购单流水号"
                          }
                        }
                      },
                      {
                        "label": "名称",
                        "field": "name",
                        "type": "input"
                      },
                      {
                        "label": "采购单流水号",
                        "field": "vmsOrderNumber",
                        "type": "number"
                      },
                      {
                        "label": "采购申请流水",
                        "field": "requestNumber",
                        "type": "plain"
                      },
                      {
                        "label": "收费",
                        "field": "charge",
                        "type": "number"
                      },
                      {
                        "label": "备注",
                        "field": "note",
                        "type": "plain"
                      }
                    ]
                  }
                }
              ]
            }
          }
        ],
        "fields": [
          {
            "label": "",
            "field": ""
          },
          {
            "label": "名称",
            "field": "name"
          },
          {
            "label": "采购单流水号",
            "field": "vmsOrderNumber"
          },
          {
            "label": "采购申请流水",
            "field": "requestNumber"
          },
          {
            "label": "收费",
            "field": "charge"
          },
          {
            "label": "备注",
            "field": "note"
          }
        ],
        "operation": [
          {
            "title": "编辑",
            "type": "childEditModal",
            "options": {
              "outside": true,
              "modalTitle": "编辑数据",
              "modalWidth": 580,
              "layout": "Content",
              "items": [
                {
                  "layout": "Empty",
                  "component": "ChildrenForm",
                  "config": {
                    "fields": [
                      {
                        "label": "",
                        "field": "",
                        "type": "modal-radio",
                        "options": {
                          "title": "选择采购单",
                          "label": "name",
                          "editLabel": "name",
                          "value": "id",
                          "API": "/api/crud/vms/purchaseOrders",
                          "fields": [
                            {
                              "label": "名称",
                              "field": "name"
                            }
                          ],
                          "saveData": {
                            "requestNumber": "采购申请流水",
                            "vmsOrderNumber": "采购单流水号"
                          }
                        }
                      },
                      {
                        "label": "名称",
                        "field": "name",
                        "type": "input"
                      },
                      {
                        "label": "采购单流水号",
                        "field": "vmsOrderNumber",
                        "type": "number"
                      },
                      {
                        "label": "采购申请流水",
                        "field": "requestNumber",
                        "type": "plain"
                      },
                      {
                        "label": "收费",
                        "field": "charge",
                        "type": "number"
                      },
                      {
                        "label": "备注",
                        "field": "note",
                        "type": "plain"
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "title": "移除",
            "type": "removeChild",
            "options": {
              "icon": "delete",
              "color": "#f5222d"
            }
          }
        ]
      }
    }
  ],
  "id": "8lw4lj1f"
}