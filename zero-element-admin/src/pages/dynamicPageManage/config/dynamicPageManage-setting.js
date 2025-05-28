import { get as getEndpoint } from "zero-element/lib/utils/request/endpoint";
import { getToken } from "zero-element/lib/utils/request/token";

function getPort(){
  let endpoint = getEndpoint()
  let host = document.location.host
  let url = document.location.href
  let http = url.split("//")[0]
  if(["",null,undefined].includes(endpoint)){
    endpoint = http+ "//"+ host
  }
  return endpoint
}
getPort()
export const setting = {
  "pageName": {
    "table": "动态页面管理",
    "new": "新增动态页面",
    "edit": "编辑动态页面"
  },
  "listAPI": "/api/pageconfig/lowMainPage/lowMainPages",
  "createAPI": "/api/pageconfig/lowMainPage/lowMainPages",
  "getAPI": "/api/pageconfig/lowMainPage/lowMainPages/[id]",
  "updateAPI": "/api/pageconfig/lowMainPage/lowMainPages/[id]",
  "deleteAPI": "/api/pageconfig/lowMainPage/lowMainPages/(id)",
  "columns": 1,
  "createFields": [
    { "label":"页面名称","field":"pageName","type":"input","rules": [
      {
        "type": "required"
      }
    ],
    "props": {
      "placeholder": "请输入"
    } },
    {
      "label": "页面标题",
      "rules": [
        {
          "type": "required"
        }
      ],
      "props": {
        "placeholder": "请输入"
      },
      "type": "input",
      "field": "pageTitle"
    },
    { "label":"数据接口", "field":"apiEndpoint",      "rules": [
        {
          "type": "required"
        }
      ],
      "props": {
        "placeholder": "请输入"
      },
      "type": "input" },
    { "label":"新建页面标题", "field":"formAddTitle",      "rules": [
        {
          "type": "required"
        }
      ],
      "props": {
        "placeholder": "请输入"
      },
      "type": "input" },
    { "label":"页面视图标题", "field":"formViewTitle",      "rules": [
        {
          "type": "required"
        }
      ],
      "props": {
        "placeholder": "请输入"
      },
      "type": "input" },
    { "label":"页面编辑标题", "field":"formEditTitle",      "rules": [
        {
          "type": "required"
        }
      ],
      "props": {
        "placeholder": "请输入"
      },
      "type": "input" },
    { "label":"页面内容布局", "field":"contentLayout",      "rules": [
        {
          "type": "required"
        }
      ],
      "props": {
        "placeholder": "请输入"
      },
      "type": "input" },
    { "label":"组件列表排序", "field":"contentItems",      "rules": [
        {
          "type": "required"
        }
      ],
      "props": {
        "placeholder": "请输入"
      },
      "type": "input" },
    { "label":"组件容器属性", "field":"contentItemContainerStyle",
      "type": "json" },
    { "label":"列表字段", "field":"listFields",
      "type": "json" },
    { "label":"列表操作排列", "field":"listOperationFields",
      "type": "json" },
    { "label":"表单新建字段排列", "field":"formAddFields",
      "type": "json" },
    { "label":"列表视图字段排列", "field":"formViewFields",
      "type": "json" },
    { "label":"列表编辑字段排列", "field":"formEditFields",
      "type": "json" },
    { "label":"表单默认内容布局", "field":"formDefaultContentLayout",
      "rules": [
        {
          "type": "required"
        }
      ],
      "props": {
        "placeholder": "请输入"
      },
      "type": "input" },
    { "label":"表单模态框默认宽度", "field":"formDefaultWidth",      "rules": [
        {
          "type": "required"
        }
      ],
      "props": {
        "placeholder": "请输入"
      },
      "type": "input" }
  ],
  "updateFields": [
    { "label":"页面名称","field":"pageName","type":"input","rules": [
      {
        "type": "required"
      }
    ],
    "props": {
      "placeholder": "请输入"
    } },
    {
      "label": "页面标题",
      "rules": [
        {
          "type": "required"
        }
      ],
      "props": {
        "placeholder": "请输入"
      },
      "type": "input",
      "field": "pageTitle"
    },
    { "label":"数据接口", "field":"apiEndpoint",      "rules": [
        {
          "type": "required"
        }
      ],
      "props": {
        "placeholder": "请输入"
      },
      "type": "input" },
    { "label":"新建页面标题", "field":"formAddTitle",      "rules": [
        {
          "type": "required"
        }
      ],
      "props": {
        "placeholder": "请输入"
      },
      "type": "input" },
    { "label":"页面视图标题", "field":"formViewTitle",      "rules": [
        {
          "type": "required"
        }
      ],
      "props": {
        "placeholder": "请输入"
      },
      "type": "input" },
    { "label":"页面编辑标题", "field":"formEditTitle",      "rules": [
        {
          "type": "required"
        }
      ],
      "props": {
        "placeholder": "请输入"
      },
      "type": "input" },
    { "label":"页面内容布局", "field":"contentLayout",      "rules": [
        {
          "type": "required"
        }
      ],
      "props": {
        "placeholder": "请输入"
      },
      "type": "input" },
    { "label":"组件列表排序", "field":"contentItems",      "rules": [
        {
          "type": "required"
        }
      ],
      "props": {
        "placeholder": "请输入"
      },
      "type": "input" },
    { "label":"组件容器属性", "field":"contentItemContainerStyle",
      "type": "json" },
    { "label":"列表字段", "field":"listFields",
      "type": "json" },
    { "label":"列表操作排列", "field":"listOperationFields",
      "type": "json" },
    { "label":"表单新建字段排列", "field":"formAddFields",
      "type": "json" },
    { "label":"列表视图字段排列", "field":"formViewFields",
      "type": "json" },
    { "label":"列表编辑字段排列", "field":"formEditFields",
      "type": "json" },
    { "label":"表单默认内容布局", "field":"formDefaultContentLayout",
      "rules": [
        {
          "type": "required"
        }
      ],
      "props": {
        "placeholder": "请输入"
      },
      "type": "input" },
    { "label":"表单模态框默认宽度", "field":"formDefaultWidth", "rules": [
        {
          "type": "required"
        }
      ],
      "props": {
        "placeholder": "请输入"
      },
      "type": "input" }
  ],
  "map": {},
  "layout": {
    "table": "Content",
    "form": "TitleContent"
  },
  "tableActions": [
    {
      "title": "添加", "type": "fromModal",
      "options": {
        "modalTitle": "添加",
        "modalWidth": 600,
        "api":{
          "createAPI":"/api/pageconfig/lowMainPage/lowMainPages"
        },
        "fields": [
          { "label": "页面名称", "field": "pageName", "defaultValue": "", "placeholder": "请输入页面名称,必须为英文" },
          { "label": "页面标题", "field": "pageTitle", "defaultValue": "标题" },
          { "label": "新建页面标题", "field": "formAddTitle", "defaultValue": "新增" },
          { "label": "页面视图标题", "field": "formViewTitle", "defaultValue": "查看" },
          { "label": "页面编辑标题", "field": "formEditTitle", "defaultValue": "编辑" },
          // 行对齐 2022-04-08 新增选项 
          {
              "label": "行对齐", "field": "columnAlign", "type": "select", "defaultValue": "left", 
              "options": [
                  { "label": "居中", "value": "center" },
                  { "label": "左对齐", "value": "left" },
                  { "label": "右对齐", "value": "right" },
              ]
          },
          { "label": "数据接口", "field": "apiEndpoint", "defaultValue": "" },
          {
              "header": "高级设置", "children": [
                  {
                      "label": "页面内容布局", "field": "contentLayout", "type": "select",
                      "defaultValue": "Content",
                      "options": [
                          { "label": "Empty", "value": "Empty" },
                          { "label": "Title", "value": "Title" },
                          { "label": "BaseTitle", "value": "BaseTitle" },
                          { "label": "NotTitleContent", "value": "NotTitleContent" },
                          { "label": "TitleContent", "value": "TitleContent" },
                          { "label": "Loading", "value": "Loading" },
                          { "label": "Alone", "value": "Alone" },
                          { "label": "Row", "value": "Row" },
                          { "label": "SearchLayout", "value": "SearchLayout" },
                          { "label": "Grid", "value": "Grid" },
                          { "label": "Content", "value": "Content" },
                          { "label": "Items", "value": "Items" },
                      ]
                  },
                  { "label": "页面最小宽度", "field": "pageMinWidth" },
                  // { "label":"组件列表排序", "field":"contentItems","type":"JSON" },
                  // { "label":"列表字段", "field":"listFields","type":"JSON" },
                  // { "label":"列表操作排列", "field":"listOperationFields","type":"JSON" },
                  // { "label":"表单新建字段排列", "field":"formAddFields","type":"JSON" },
                  // { "label":"列表视图字段排列", "field":"formViewFields","type":"JSON" },
                  // { "label":"列表编辑字段排列", "field":"formEditFields","type":"JSON" },
                  {
                      "label": "表单默认内容布局", "field": "formDefaultContentLayout", "type": "select",
                      "defaultValue": "TitleContent",
                      "options": [
                          { "label": "Empty", "value": "Empty" },
                          { "label": "Title", "value": "Title" },
                          { "label": "BaseTitle", "value": "BaseTitle" },
                          { "label": "NotTitleContent", "value": "NotTitleContent" },
                          { "label": "TitleContent", "value": "TitleContent" },
                          { "label": "Loading", "value": "Loading" },
                          { "label": "Alone", "value": "Alone" },
                          { "label": "Row", "value": "Row" },
                          { "label": "SearchLayout", "value": "SearchLayout" },
                          { "label": "Grid", "value": "Grid" },
                          { "label": "Content", "value": "Content" },
                          { "label": "Items", "value": "Items" },
                      ]
                  },
                  {
                      "label": "搜索布局", "field": "searchType", "type": "select", "defaultValue": "MoreSearch", "options": [
                          { "label": "垂直 ", "value": "MoreSearch" },
                          { "label": "水平", "value": "Search" },
                      ]
                  },
                  {
                      "label": "搜索按钮类型", "field": "searchButtonType", "type": "select", "defaultValue": "text", "options": [
                          { "label": "图标", "value": "default" },
                          { "label": "文字", "value": "text" },
                      ]
                  },
                  { "label": "组件容器属性", "field": "contentItemContainerStyle", "type": "JSON" },
                  { "label":"表单模态框默认宽度", "field":"formDefaultWidth","type":"number" },
              ]
          }
      ]
      }
    }
  ],
  "tableOperation": [
    {
      "title": "编辑整体页面",
      "type": "path",
      "options": {
        "outside": true,
        "path": "/dynamicPageTool"
      }
    },
    {
      "title": "编辑页面", "type": "modal",
      "options": {
        "outside": true,
        "modalTitle": "编辑",
        "modalWidth": 600,
        "layout":"Empty",
        "items":[
          {
            component: 'DynamicPageForm',
            config: {
              API: {
                "getAPI":"/api/pageconfig/lowMainPage/lowMainPages/(id)",
                "updateAPI":"/api/pageconfig/lowMainPage/lowMainPages/(id)"
              },
              "fields": [
                { "label": "页面名称", "field": "pageName", "defaultValue": "", "placeholder": "请输入页面名称,必须为英文" },
                { "label": "页面标题", "field": "pageTitle", "defaultValue": "标题" },
                { "label": "新建页面标题", "field": "formAddTitle", "defaultValue": "新增" },
                { "label": "页面视图标题", "field": "formViewTitle", "defaultValue": "查看" },
                { "label": "页面编辑标题", "field": "formEditTitle", "defaultValue": "编辑" },
                // 行对齐 2022-04-08 新增选项 
                {
                    "label": "行对齐", "field": "columnAlign", "type": "select", 
                    "options": [
                        { "label": "居中", "value": "center" },
                        { "label": "左对齐", "value": "left" },
                        { "label": "右对齐", "value": "right" },
                    ]
                },
                { "label": "数据接口", "field": "apiEndpoint", "defaultValue": "" },
                {
                    "header": "高级设置", "children": [
                        {
                            "label": "页面内容布局", "field": "contentLayout", "type": "select",
                            "defaultValue": "Content",
                            "options": [
                                { "label": "Empty", "value": "Empty" },
                                { "label": "Title", "value": "Title" },
                                { "label": "BaseTitle", "value": "BaseTitle" },
                                { "label": "NotTitleContent", "value": "NotTitleContent" },
                                { "label": "TitleContent", "value": "TitleContent" },
                                { "label": "Loading", "value": "Loading" },
                                { "label": "Alone", "value": "Alone" },
                                { "label": "Row", "value": "Row" },
                                { "label": "SearchLayout", "value": "SearchLayout" },
                                { "label": "Grid", "value": "Grid" },
                                { "label": "Content", "value": "Content" },
                                { "label": "Items", "value": "Items" },
                            ]
                        },
                        { "label": "页面最小宽度", "field": "pageMinWidth" },
                        // { "label":"组件列表排序", "field":"contentItems","type":"JSON" },
                        // { "label":"列表字段", "field":"listFields","type":"JSON" },
                        // { "label":"列表操作排列", "field":"listOperationFields","type":"JSON" },
                        // { "label":"表单新建字段排列", "field":"formAddFields","type":"JSON" },
                        // { "label":"列表视图字段排列", "field":"formViewFields","type":"JSON" },
                        // { "label":"列表编辑字段排列", "field":"formEditFields","type":"JSON" },
                        {
                            "label": "表单默认内容布局", "field": "formDefaultContentLayout", "type": "select",
                            "defaultValue": "TitleContent",
                            "options": [
                                { "label": "Empty", "value": "Empty" },
                                { "label": "Title", "value": "Title" },
                                { "label": "BaseTitle", "value": "BaseTitle" },
                                { "label": "NotTitleContent", "value": "NotTitleContent" },
                                { "label": "TitleContent", "value": "TitleContent" },
                                { "label": "Loading", "value": "Loading" },
                                { "label": "Alone", "value": "Alone" },
                                { "label": "Row", "value": "Row" },
                                { "label": "SearchLayout", "value": "SearchLayout" },
                                { "label": "Grid", "value": "Grid" },
                                { "label": "Content", "value": "Content" },
                                { "label": "Items", "value": "Items" },
                            ]
                        },
                        {
                            "label": "搜索布局", "field": "searchType", "type": "select", "defaultValue": "MoreSearch", "options": [
                                { "label": "垂直 ", "value": "MoreSearch" },
                                { "label": "水平", "value": "Search" },
                            ]
                        },
                        {
                            "label": "搜索按钮类型", "field": "searchButtonType", "type": "select", "defaultValue": "text", "options": [
                                { "label": "图标", "value": "default" },
                                { "label": "文字", "value": "text" },
                            ]
                        },
                        { "label": "组件容器属性", "field": "contentItemContainerStyle", "type": "JSON" },
                        { "label":"表单模态框默认宽度", "field":"formDefaultWidth","type":"number" },
                    ]
                }
            ]
            }
          }
        ]
      }
    },
    // {
    //   "title": "编辑页面",
    //   "type": "path",
    //   "options": {
    //     "outside": true,
    //     "path": "/dynamicPageTool/dynamicPage-edit"
    //   }
    // },
    {
      "title": "加载字段",
      "type": "request",
      "options": {
        "outside": false,
        "tips": "确定要加载该页面数据接口的字段吗?",
        "API": "/addLowFields",
        "method": "post",
        "data":{
          "endpoint":getPort(),
          "token":getToken()
        },
        "query":{
          "pageId":"id",
          "originApi": "apiEndpoint"
        }
      }
    },
    {
      "title": "下载页面",
      "type": "downloadPage",
      "options": {
        "outside": false,
        "API": "/api/pageconfig/lowMainPage/lowMainPages/(id)",
      }
    },
    
    {
      "title": "展示配置", "type": "modal",
      "options": {
        "outside": false,
        "modalTitle": "页面配置",
        "modalWidth": 1000,
        "layout":"Empty",
        "items":[
          {
            "component": 'DynamicPageShowConfig',
            "config": {
              "API":{
                "getAPI":"/api/pageconfig/lowMainPage/lowMainPages/(id)",
              }
            }
          }
        ]
      }
    },
    // {
    //   "title": "生成导航",
    //   "type": "request",
    //   "options": {
    //     "outside": true,
    //     "tips": "确定要生成该页面的导航吗?",
    //     "API": "/api/pageconfig/menu/menus",
    //     "method": "post",
    //     "data":{
    //       // C 目录， M 菜单
    //       "menuType":"C",
    //       "pid": "62",
    //       "endpoint":getPort()
    //     },
    //     "query":{
    //       "id":"id",
    //       "menuName":"pageTitle",
    //       "component":"/sys/testPageFetch?id=[id]"
    //     }
    //   }
    // },
    {
      "title": "删除",
      "type": "delete",
      "options": {
        "outside": false
      }
    }
  ],
  "searchFields": [
    {
      "label": "页面标题",
      "field": "pageTitle",
      "type": "search",
      "props": {
        "placeholder": ""
      }
    }
  ],
  "tableFields": [
    { "label":"页面名称","field":"pageName" },
    { "label":"页面标题", "field":"pageTitle" },
    { "label":"新建页面标题", "field":"formAddTitle" },
    { "label":"页面视图标题", "field":"formViewTitle" },
    { "label":"页面编辑标题", "field":"formEditTitle" },
    { "label":"数据接口", "field":"apiEndpoint" },
    { "label":"页面内容布局", "field":"contentLayout" },
    { "label":"表单默认内容布局", "field":"formDefaultContentLayout" },
    { "label":"表单模态框默认宽度", "field":"formDefaultWidth" }
  ],
  "viewConfig": [
    {
      "title": "详情",
      "type": "plain",
      "fields": [
        { "label":"页面名称","field":"pageName" },
        { "label":"页面标题", "field":"pageTitle" },
        { "label":"数据接口", "field":"apiEndpoint" },
        { "label":"新建页面标题", "field":"formAddTitle" },
        { "label":"页面视图标题", "field":"formViewTitle" },
        { "label":"页面编辑标题", "field":"formEditTitle" },
        { "label":"页面内容布局", "field":"contentLayout" },
        { "label":"组件列表排序", "field":"contentItems" },
        { "label":"组件容器属性", "field":"contentItemContainerStyle" },
        { "label":"列表字段", "field":"listFields" },
        { "label":"列表操作排列", "field":"listOperationFields" },
        { "label":"表单新建字段排列", "field":"formAddFields" },
        { "label":"列表视图字段排列", "field":"formViewFields" },
        { "label":"列表编辑字段排列", "field":"formEditFields" },
        { "label":"表单默认内容布局", "field":"formDefaultContentLayout" },
        { "label":"表单模态框默认宽度", "field":"formDefaultWidth" }
      ]
    }
  ]
}