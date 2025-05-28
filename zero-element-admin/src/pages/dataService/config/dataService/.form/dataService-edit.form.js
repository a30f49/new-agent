const API = require('../.setting/dataService-api');

module.exports = {
  "layout": "TitleContent",
  "title": "编辑",
  "items": [
    {
      "component": "Form",
      "config": {
        "layout": "Grid",
        "layoutConfig": {
          "value": [12, 12]
        },
        "fields": [
          {
            "field":"groupMenuId",
            "label":"菜单选择",
            "type":"select-fetch",
            "props":{
              "placeholder": "请输入选择",
              "style":{
                "width":"240px"
              }
            },
            "options":{
              "API":"/api/crud/menu/custom/group?_t=1622176307848",
              "label":"menuName",
              "value":"id"
            }
          },
          {
            "label": "表单标识",
            "field": "entityName",
            "type": "input",
            "props": {
              "placeholder": "请输入英文",
              "style":{
                "width":"240px"
              }
            },
            "rules": [
              "required"
            ],
            "span":24
          },
          {
            "label": "表单名称",
            "field": "name",
            "type": "input",
            "props": {
              "placeholder": "请输入表单的名称",
              "style":{
                "width":"240px"
              }
            },
            "rules": [
              "required"
            ],
            "span": 24,
          },
          {
            "label": "备注",
            "field": "note",
            "type": "text-area",
            "props": {
              "placeholder": "请输入表单的更多信息",
              "style":{
                "width":"240px"
              }
            },
            "autoSize": {
              "minRows": 10
            },
            "showCount":"true",
            "maxLength":"200",
            "rules": [],
            "span": 12
          },

        ],
        "API": {
          getAPI: API.getAPI,
          updateAPI: API.updateAPI
        }
      }
    },
  ],
  "id": "8lw4lj1f"
}
