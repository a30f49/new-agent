const apiSettings = require('./.setting/dataService-api');

module.exports = {
  layout: 'Content',
  title: '数据服务',
  items: [
    {
      component: 'Search',
      config: {
        type:"default",
        fields: [
          {
            field: 'name', label: '名称', type: 'search',
            props: {
              placeholder: '请输入',
            }
          }
        ],
      },
    },
    {
      component: 'Table',
      config: {
        API: {
          listAPI: apiSettings.listAPI,
          deleteAPI: apiSettings.deleteAPI,
        },
        actions: [
          {
            "title": "新增",
            "type": "modal",
            "options": {
              "modalTitle": "新增",
              "modalWidth": 600,
              "outside": true,
              "items": [
                {
                  "component": "Form",
                  "config": {
                    "layout": "Grid",
                    "layoutConfig": {
                      "value": [
                        24
                      ]
                    },
                    "API": {
                      "createAPI": "/api/cfg/data/services",
                    },
                    "fields": [
                      {
                        "label": "名称",
                        "rules": [
                          {
                            "type": "required"
                          }
                        ],
                        "props": {
                          "placeholder": "请输入"
                        },
                        "type": "input",
                        "field": "name"
                      },
                      {
                        "label": "实体名",
                        "rules": [
                          {
                            "type": "required"
                          }
                        ],
                        "props": {
                          "placeholder": "请输入"
                        },
                        "type": "input",
                        "field": "serviceName"
                      }
                    ]
                  }
                }
              ]
            },
            "expect": {
              "permission": ""
            }
          },
        ],
        fields: [
          { field: 'name', label: '名称' },
          { field: 'serviceName', label: '实体名' },
        ],
        operation: [
          {
            title: '设计字段', type: 'path',
            options:{
              outside: true,
              path: "dataService/dataService-designAttrs",
              query:{
                entityName: 'entityName'
              }
            }
          },
          // {
          //   title: '字段值', type: 'path',
          //   options:{
          //     outside: true,
          //     path: "dataService/dataService-designAttrsValue",
          //     query:{
          //       entityName: 'entityName'
          //     }
          //   }
          // },
          {
            "title": "编辑",
            "type": "modal",
            "options": {
              "modalTitle": "编辑",
              "modalWidth": 600,
              "outside": true,
              "items": [
                {
                  "component": "Form",
                  "config": {
                    "layout": "Grid",
                    "layoutConfig": {
                      "value": [
                        24
                      ]
                    },
                    "API": {
                      "getAPI": "/api/cfg/data/services/(id)",
                      "updateAPI": "/api/cfg/data/services/(id)",
                    },
                    "fields": [
                      {
                        "label": "名称",
                        "rules": [
                          {
                            "type": "required"
                          }
                        ],
                        "props": {
                          "placeholder": "请输入"
                        },
                        "type": "input",
                        "field": "name"
                      },
                      {
                        "label": "实体名",
                        "rules": [
                          {
                            "type": "required"
                          }
                        ],
                        "props": {
                          "placeholder": "请输入"
                        },
                        "type": "input",
                        "field": "serviceName"
                      }
                    ]
                  }
                }
              ]
            },
            "expect": {
              "permission": ""
            }
          },
          {
            title: '删除', type: 'delete'
          }
        ]
      },
    },
  ],
};
