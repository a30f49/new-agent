// 组件配置
export const fieldsConfig = [
    {
        "label": "字段名称", //首选使用 含括表单标签和列表标签
        "field": "fieldLabel"
    },
    // {
    //     "label": "绑定字段名称",
    //     "field": "fieldBinding"
    // },
    {
        "label": "绑定字段名称",
        "field": "fieldBinding",
        "type": "fetchSelect",
        "options": {
            "API": "/api/crud/lowMainPage/lowMainPages/(id)",
            "label": "fieldItemName",
            "value": "fieldItemName",
            "dataField": "data.lowFieldss"
        }
    },
    {
        "label": "展示范围", "field": "fieldScopes", "type": "select", "mode": "multiple", "options": [
            { "label": "page", "value": "page" },
            { "label": "搜索", "value": "filter" },
            { "label": "列表", "value": "table" },
            { "label": "编辑", "value": "edit" },
            { "label": "新增", "value": "add" },
            { "label": "详情", "value": "view" }
        ]
    },
    // { "label":"唯一范围", "field":"fieldScope","type":"select","options":[
    //     {"label":"page","value":"page"},
    //     {"label":"filter","value":"filter"},
    //     {"label":"table","value":"table"},
    //     {"label":"edit","value":"edit"},
    //     {"label":"add","value":"add"},
    //     {"label":"view","value":"view"}
    // ] },


    {
        "header": "列表设置",
        "children": [
            {
                "label": "列表项组件类型",
                "field": "listColumnType",
                "toolTips": {
                    "type": "link",
                    "path": "/valueType-ui.html",
                    "tipsValue": "查看组件效果页面"
                },
                "type": "select",
                "options": [
                    { "label": "编号(索引)", "value": "index" },
                    { "label": "视频", "value": "video" },
                    { "label": "文本", "value": "plain" },
                    { "label": "文本数组", "value": "join" },
                    // { "label": "map", "value": "map" },
                    { "label": "图片", "value": "image" },
                    // { "label": "thumb", "value": "thumb" },
                    { "label": "标签(背景)", "value": "tag" },
                    // { "label": "dot", "value": "dot" },
                    // { "label": "currency", "value": "currency" },
                    // { "label": "percentage", "value": "percentage" },
                    // { "label": "url", "value": "url" },
                    // { "label": "下载按钮", "value": "download" },
                    // { "label": "ellipsis", "value": "ellipsis" },
                    // { "label": "complex", "value": "complex" },
                    // { "label": "count-down", "value": "count-down" },
                    // { "label": "input-number", "value": "input-number" },
                    // { "label": "input-text", "value": "input-text" },
                    // { "label": "input-select", "value": "input-select" },
                    // { "label": "input-select-fetch", "value": "input-select-fetch" }
                    { "label": "显示已过去时间", "value": "time-convert" }
                ], "defaultValue": "plain"
            },
            {
                "label": "列表标签",
                "field": "listColumnName"
            },
            {
                "label": "字体加粗",
                "field": "listFontWeight",
                "type": "select", "options": [
                    { "label": "100", "value": "100" },
                    { "label": "200", "value": "200" },
                    { "label": "300", "value": "300" },
                    { "label": "400", "value": "400" },
                    { "label": "500", "value": "500" },
                    { "label": "600", "value": "600" },
                    { "label": "700", "value": "700" },
                    { "label": "800", "value": "800" },
                    { "label": "900", "value": "900" },
                    { "label": "bold", "value": "bold" },
                    { "label": "bolder", "value": "bolder" },
                    { "label": "normal", "value": "normal" },
                    { "label": "lighter", "value": "lighter" },
                ]
            },
            {
                "label": "字体大小",
                "field": "listFontSize",
                "type": "text",
                "options": [
                    { "value": "10" },
                    { "value": "15" },
                    { "value": "20" },
                    { "value": "25" }
                ]
            },
            {
                "label": "字体颜色",
                "field": "listFontColor",
                "type": "color",
                "options": [
                    { "label": "黑色", "value": "#000" },
                    { "label": "白色", "value": "#FFF" },
                    { "label": "红色", "value": "#E64D45" },
                    { "label": "棕色", "value": "#9A3E3B" },
                    { "label": "绿色", "value": "#2F6534" },
                    { "label": "蓝色", "value": "#3D9CB2" },
                    { "label": "黄色", "value": "#FCC200" },
                ]
            },
            {
                "label": "列表布局",
                "field": "listColumnLayout",
                "type": "select",
                "options": [
                    { "label": "Table", "value": "Table" },
                    { "label": "ReportTable", "value": "ReportTable" },
                    { "label": "TreeTable", "value": "TreeTable" },
                    { "label": "ChildrenTable", "value": "ChildrenTable" },
                    { "label": "TreeList", "value": "TreeList" },
                    { "label": "AutoReport", "value": "AutoReport" },
                    { "label": "TableSelect", "value": "TableSelect" },
                    { "label": "ItemList", "value": "ItemList" },
                    { "label": "Search", "value": "Search" },
                    { "label": "AutoReportSearch", "value": "AutoReportSearch" },
                    { "label": "Form", "value": "Form" },
                    { "label": "ChildrenForm", "value": "ChildrenForm" },
                ],
                "defaultValue": "TreeTable"
            },
            {
                "label": "列表对齐",
                "field": "listColumnAlign",
                "type": "select",
                "options": [
                    { "label": "左对齐", "value": "left" },
                    { "label": "居中对齐", "value": "center" },
                    { "label": "右对齐", "value": "right" },
                ],
                "defaultValue": "left"
            },
            {
                "label": "列表项宽度",
                "field": "listColumnWidth",
                "type": "number"
            },
            {
                "label": "列表项组件属性",
                "field": "listColumnOptions",
                "type": "JSON"
            },
            { "label": "字段值过滤", "field": "fieldValueFilter", "type": "JSON" },
        ]
    },
    {
        "header": "表单设置",
        "children": [
            {
                "label": "表单输入组件",
                "toolTips": {
                    "type": "link",
                    "path": "/formItemType-ui.html",
                    "tipsValue": "查看组件效果页面"
                },
                "field": "formInputType", "type": "select",
                "options": [
                    { "label": "头像", "value": "avatars" },
                    // { "label": "视频", "value": "videoview" },
                    // { "label": "分割", "value": "Space" },
                    { "label": "文本", "value": "plain" },
                    { "label": "图片", "value": "image" },
                    // { "label": "隐藏域", "value": "hidden" },
                    // { "label": "分割分组", "value": "group" },
                    { "label": "输入框", "value": "input" },
                    // { "label": "搜索框", "value": "search" },
                    // { "label": "输入框(单位)", "value": "inputType" },
                    { "label": "密码框", "value": "password" },
                    { "label": "数字输入框", "value": "number" },
                    { "label": "单选框", "value": "radio" },
                    { "label": "开关", "value": "switch" },
                    { "label": "下拉框", "value": "select" },
                    { "label": "复选框", "value": "checkbox" },
                    // { "label": "map", "value": "map" },
                    { "label": "验证码", "value": "captcha" },
                    // { "label": "标签", "value": "tags" },
                    { "label": "下载", "value": "download" },
                    { "label": "展示json格式", "value": "json" },
                    { "label": "日期", "value": "date" },
                    // { "label": "week", "value": "week" },
                    { "label": "月份", "value": "month" },
                    { "label": "日期范围", "value": "range" },
                    { "label": "上传", "value": "direct-upload" },
                    { "label": "时分秒范围", "value": "time-range" },
                    { "label": "表格选择", "value": "table-select" },
                    { "label": "单选模态框", "value": "modal-radio" },
                    { "label": "复选模态框", "value": "modal-checkbox" },
                    { "label": "上传图片", "value": "upload-image" },
                    { "label": "上传文件", "value": "upload-file" },
                    { "label": "复选框(网络)", "value": "checkbox-fetch" },
                    { "label": "单选框(网络)", "value": "select-fetch" },
                    // { "label": "select-fetch-val", "value": "select-fetch-val" },
                    // { "label": "select-field", "value": "select-field" },
                    { "label": "文本域", "value": "text-area" },
                    { "label": "富文本", "value": "rich-text" },
                    // { "label": "一对多", "value": "one-mary" },
                    { "label": "数字范围", "value": "number-range" },
                    { "label": "省市区", "value": "pcd" },
                    // { "label": "pcdm", "value": "pcdm" },
                    // { "label": "pcdForSearch", "value": "pcdForSearch" },
                    // { "label": "toptips", "value": "toptips" },
                    { "label": "上传图片", "value": "imageBox" },
                    // { "label": "path", "value": "path" },
                    // { "label": "upload_file_single", "value": "upload_file_single" },
                ], "defaultValue": "input"
            },
            {
                "label": "表单视图组件", "field": "formViewType", "type": "select",
                "options": [
                    // { "label": "index", "value": "index" },
                    { "label": "视频", "value": "video" },
                    { "label": "文本", "value": "plain" },
                    // { "label": "join", "value": "join" },
                    // { "label": "map", "value": "map" },
                    { "label": "图片", "value": "image" },
                    // { "label": "thumb", "value": "thumb" },
                    { "label": "标签", "value": "tag" },
                    // { "label": "dot", "value": "dot" },
                    // { "label": "currency", "value": "currency" },
                    // { "label": "percentage", "value": "percentage" },
                    // { "label": "url", "value": "url" },
                    // { "label": "download", "value": "download" },
                    // { "label": "ellipsis", "value": "ellipsis" },
                    // { "label": "complex", "value": "complex" },
                    { "label": "一对多", "value": "one-mary" },
                    // { "label": "count-down", "value": "count-down" },
                    // { "label": "input-number", "value": "input-number" },
                    // { "label": "input-text", "value": "input-text" },
                    // { "label": "input-select", "value": "input-select" },
                    // { "label": "input-select-fetch", "value": "input-select-fetch" }
                ], "defaultValue": "plain"
            },
            {
                "label": "一对多JSON配置",
                "toolTips": {
                    "type": "one-mary",
                    "tipsValue": "配置说明"
                },
                "field": "fieldViewOneManyOptions", "type": "input", "expect": {
                    "field": "formViewType",
                    "value": "one-mary"
                }
            },
            { "label": "表单标签", "field": "formFieldTitle" },//新增、编辑、查看标签
            { "label": "字段表单提示", "field": "formFieldHint" },
            { "label": "字段表单输入错误提示", "field": "formFieldTips" },
            { "label": "表单项是否必填", "field": "formInputRequired", "type": "switch" },
            { "label": "右侧说明", "field": "formFieldQuestion" },
            {
                "label": "字段值下拉框选项", "field": "fieldValueOptions", "type": "JSON", "expect": {
                    "field": "",
                    "value": ""
                }
            },
            { "label": "表单输入组件属性", "field": "formInputOptions", "type": "JSON" },
            { "label": "表单显示组件属性", "field": "formViewOptions", "type": "JSON" },
        ]
    },
    // {
    //     "header":"高级设置",
    //     "children":[
    //         // {
    //         //     "label":"字段组件唯一名称", //未使用
    //         //     "field":"fieldItemName"
    //         // },
    //         // {
    //         //     "label":"列表项标识",
    //         //     "field":"listColumnKey"
    //         // },


    //         // {
    //         //     "label":"列表项接引路由",
    //         //     "field":"listColumnReference"
    //         // },
    //         // {
    //         //     "label":"列表项显示格式",
    //         //     "field":"listColumnFormat"
    //         // },

    //         // {
    //         //     "label":"复合列表项组合类型",
    //         //     "field":"listColumnMultiType",
    //         //     "type":"select",
    //         //     "options":[
    //         //         { "label":"switch", "value":"switch" },
    //         //         { "label":"avatars", "value":"avatars" },
    //         //         { "label":"videoview", "value":"videoview" },
    //         //         { "label":"Space", "value":"Space" },
    //         //         { "label":"plain", "value":"plain" },
    //         //         { "label":"image", "value":"image" },
    //         //         { "label":"empty", "value":"empty" },
    //         //         { "label":"hidden", "value":"hidden" },
    //         //         { "label":"group", "value":"group" },
    //         //         { "label":"input", "value":"input" },
    //         //         { "label":"search", "value":"search" },
    //         //         { "label":"inputType", "value":"inputType" },
    //         //         { "label":"password", "value":"password" },
    //         //         { "label":"number", "value":"number" },
    //         //         { "label":"radio", "value":"radio" },
    //         //         { "label":"select", "value":"select" },
    //         //         { "label":"checkbox", "value":"checkbox" },
    //         //         { "label":"map", "value":"map" },
    //         //         { "label":"pcd", "value":"pcd" },
    //         //         { "label":"captcha", "value":"captcha" },
    //         //         { "label":"tags", "value":"tags" },
    //         //         { "label":"download", "value":"download" },
    //         //         { "label":"json", "value":"json" },
    //         //         { "label":"date", "value":"date" },
    //         //         { "label":"week", "value":"week" },
    //         //         { "label":"month", "value":"month" },
    //         //         { "label":"range", "value":"range" },
    //         //         { "label":"direct-upload", "value":"direct-upload" },
    //         //         { "label":"time-range", "value":"time-range" },
    //         //         { "label":"table-select", "value":"table-select" },
    //         //         { "label":"modal-radio", "value":"modal-radio" },
    //         //         { "label":"modal-checkbox", "value":"modal-checkbox" },
    //         //         { "label":"upload-image", "value":"upload-image" },
    //         //         { "label":"upload-file", "value":"upload-file" },
    //         //         { "label":"checkbox-fetch", "value":"checkbox-fetch" },
    //         //         { "label":"select-fetch", "value":"select-fetch" },
    //         //         { "label":"select-fetch-val", "value":"select-fetch-val" },
    //         //         { "label":"select-field", "value":"select-field" },
    //         //         { "label":"text-area", "value":"text-area" },
    //         //         { "label":"rich-text", "value":"rich-text" },
    //         //         { "label":"one-mary", "value":"one-mary" },
    //         //         { "label":"number-range", "value":"number-range" },
    //         //         { "label":"pcdm", "value":"pcdm" },
    //         //         { "label":"pcdForSearch", "value":"pcdForSearch" },
    //         //         { "label":"toptips", "value":"toptips" },
    //         //         { "label":"imageBox", "value":"imageBox" },
    //         //         { "label":"path", "value":"path" },
    //         //         { "label":"upload_file_single", "value":"upload_file_single" },
    //         //     ] 
    //         // },
    //         // {
    //         //     "label":"复合列表项",
    //         //     "field":"listColumnMultiKeys",
    //         //     "type":"JSON"
    //         // },
    //     ]
    // },

    // { "label":"所属页面id", "field":"pageId" }
]
// 页面配置
export const MainPageConfig = [
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
            // { "label":"表单模态框默认宽度", "field":"formDefaultWidth","type":"number" },
        ]
    }
]
// 组件类型，暂不用
// export const ComponentTypeConfig = [
//     { "label":"组件标识名称", "field":"fieldItemName" },
//     { "label":"属性名称", "field":"propertyName" },
//     { "label":"属性值", "field":"propertyValue" },
//     { "label":"组件属性作用域", "field":"scope","type":"select","mode":"multiple","options":[
//         {"label":"page","value":"page"},
//         {"label":"filter","value":"filter"},
//         {"label":"table","value":"table"},
//         {"label":"edit","value":"edit"},
//         {"label":"add","value":"add"},
//         {"label":"view","value":"view"}
//     ] },
//     { "label":"所属字段组件ID", "field":"fieldId" },
// ]
// 过滤字段（搜索）
export const FiltersConfig = [
    { "label": "搜索框内提示", "field": "defaultSearchHint", "defaultValue": "请输入..." },
    { "label": "绑定字段名称", "field": "fieldName", "defaultValue": "field" },
    { "label": "搜索标题", "field": "fieldTitle", "defaultValue": "标题1" },
    {
        "header": "高级设置", "children": [
            {
                "label": "组件类型",
                "toolTips": true,
                "field": "fieldType", "type": "select",
                "options": [

                    // { "label": "头像", "value": "avatars" },
                    // { "label": "视频", "value": "videoview" },
                    // { "label": "分割", "value": "Space" },
                    // { "label": "文本", "value": "plain" },
                    // { "label": "图片", "value": "image" },
                    // { "label": "隐藏域", "value": "hidden" },
                    // { "label": "分割分组", "value": "group" },
                    { "label": "输入框", "value": "input" },
                    // { "label": "搜索框", "value": "search" },
                    // { "label": "输入框(单位)", "value": "inputType" },
                    // { "label": "密码框", "value": "password" },
                    { "label": "数字输入框", "value": "number" },
                    { "label": "单选框", "value": "radio" },
                    // { "label": "开关", "value": "switch" },
                    { "label": "下拉框", "value": "select" },
                    { "label": "复选框", "value": "checkbox" },
                    // { "label": "map", "value": "map" },
                    // { "label": "验证码", "value": "captcha" },
                    // { "label": "标签", "value": "tags" },
                    // { "label": "下载", "value": "download" },
                    // { "label": "展示json格式", "value": "json" },
                    { "label": "日期", "value": "date" },
                    // { "label": "week", "value": "week" },
                    { "label": "月份", "value": "month" },
                    { "label": "日期范围", "value": "range" },
                    { "label": "上传", "value": "direct-upload" },
                    { "label": "时分秒范围", "value": "time-range" },
                    // { "label": "表格选择", "value": "table-select" },
                    // { "label": "单选模态框", "value": "modal-radio" },
                    // { "label": "复选模态框", "value": "modal-checkbox" },
                    // { "label": "上传图片", "value": "upload-image" },
                    // { "label": "上传文件", "value": "upload-file" },
                    // { "label": "复选框(网络)", "value": "checkbox-fetch" },
                    // { "label": "单选框(网络)", "value": "select-fetch" },
                    // { "label": "select-fetch-val", "value": "select-fetch-val" },
                    // { "label": "select-field", "value": "select-field" },
                    // { "label": "文本域", "value": "text-area" },
                    // { "label": "富文本", "value": "rich-text" },
                    // { "label": "one-mary", "value": "one-mary" },
                    // { "label": "数字范围", "value": "number-range" },
                    // { "label": "省市区", "value": "pcd" },
                    // { "label": "pcdm", "value": "pcdm" },
                    // { "label": "pcdForSearch", "value": "pcdForSearch" },
                    // { "label": "toptips", "value": "toptips" },
                    // { "label": "上传图片", "value": "imageBox" },
                    // { "label": "path", "value": "path" },
                    // { "label": "upload_file_single", "value": "upload_file_single" },
                ], "defaultValue": "search",
            },
            {
                "label": "搜索字段布局名称", "field": "contentLayout", "type": "select",
                "defaultValue": "Grid",
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
            // { "label":"字段组件排序", "field":"searchFields","type":"JSON" },
        ]
    }
    // { "label":"所属页面ID", "field":"pageId" },
]
// 按钮配置
export const ActionsConfig = [
    { "label": "标题", "field": "title", "defaultValue": "新增" },
    {
        "header": "高级设置", "children": [
            {
                "label": "操作类型", "field": "type", "type": "select", "options": [
                    { "label": "path", "value": "path" },
                    { "label": "request", "value": "request" },
                    { "label": "delete", "value": "delete" },
                    { "label": "modal", "value": "modal" },
                    { "label": "import", "value": "import" },
                    { "label": "export", "value": "export" }
                ], "defaultValue": "path"
            },
            {
                "label": "操作路由路径", "field": "path",
                expect: {
                    field: 'type',
                    value: 'path'
                }
            },
            // {
            //     "label": "请求API", "field": "requestApi", "type": "select", "options": [
            //         { "label": "getApi", "value": "getApi" },
            //         { "label": "updateApi", "value": "updateApi" },
            //         { "label": "createApi", "value": "createApi" }
            //     ]
            // },
            {
                "label": "请求结果刷新API", "field": "requestRefreshApi",
                expect: {
                    field: 'type',
                    value: 'request'
                }
            },
            {
                "label": "请求方法", "field": "requestMethod", "type": "select", "options": [
                    { "label": "GET", "value": "GET" },
                    { "label": "POST", "value": "POST" },
                    { "label": "UPDATE", "value": "UPDATE" },
                    { "label": "DELETE", "value": "DELETE" }
                ],
                expect: {
                    field: 'type',
                    value: 'request'
                }
            },
            {
                "label": "请求数据", "field": "requestBody", "type": "JSON",
                expect: {
                    field: 'type',
                    value: 'request'
                }
            },
            { "label": "请求参数", "field": "requestOptions", "type": "JSON" },
            {
                "label": "模态框标题", "field": "modalTitle",
                expect: {
                    field: 'type',
                    value: 'modal'
                }
            },
            {
                "label": "模态框宽度", "field": "modalWidth",
                expect: {
                    field: 'type',
                    value: 'modal'
                }
            },
            {
                "label": "模态框外部布局", "field": "modalLayout",
                expect: {
                    field: 'type',
                    value: 'modal'
                }
            },
            {
                "label": "模态框配置", "field": "items", "type": "ActionModal", "items": [
                    { "label": "模态框内容布局", "field": "modalContentLayout", "placeholder": "Grid" },
                    { "label": "模态框创建Api", "field": "modalContentCreateApi" },
                    { "label": "模态框内部布局", "field": "modalItemsLayout", "placeholder": "Empty" },
                    { "label": "模态框组件", "field": "modalItemsComp", "placeholder": "Form" }
                ],
                expect: {
                    field: 'type',
                    value: 'modal'
                }
            }
        ]
    }
    // { "label":"所属页面id", "field":"pageId" },
]

// 操作栏配置
export const OperationsConfig = [
    { "label": "标题", "field": "title", "defaultValue": "编辑" },
    {
        "header": "高级设置", "children": [
            {
                "label": "操作类型", "field": "type", "type": "select", "options": [
                    { "label": "path", "value": "path" },
                    { "label": "request", "value": "request" },
                    { "label": "delete", "value": "delete" },
                    { "label": "modal", "value": "modal" }
                ], "defaultValue": "path"
            },
            {
                "label": "操作路由路径", "field": "path",
                expect: {
                    field: 'type',
                    value: 'path'
                }
            },
            // {
            //     "label": "请求API", "field": "requestApi", "type": "select", "options": [
            //         { "label": "getApi", "value": "getApi" },
            //         { "label": "updateApi", "value": "updateApi" },
            //         { "label": "createApi", "value": "createApi" }
            //     ], 
            //     // "expect": {
            //     //     "field": "type",
            //     //     "value": "request"
            //     // }
            // },
            {
                "label": "请求结果API", "field": "requestRefreshApi",
                expect: {
                    field: 'type',
                    value: 'request'
                }
            },
            {
                "label": "请求方法", "field": "requestMethod", "type": "select", "options": [
                    { "label": "GET", "value": "get" },
                    { "label": "POST", "value": "post" },
                    { "label": "UPDATE", "value": "update" },
                    { "label": "DELETE", "value": "delete" },
                    { "label": "DOWNLOAD", "value": "download" }
                ],
                expect: {
                    field: 'type',
                    value: 'request'
                }
            },
            {
                "label": "请求数据", "field": "requestBody", "type": "JSON",
                expect: {
                    field: 'type',
                    value: 'request'
                }
            },
            { "label": "请求参数", "field": "requestOptions", "type": "JSON" },

            {
                "label": "模态框标题", "field": "modalTitle",
                expect: {
                    field: 'type',
                    value: 'modal'
                }
            },
            {
                "label": "模态框宽度", "field": "modalWidth",
                expect: {
                    field: 'type',
                    value: 'modal'
                }
            },
            {
                "label": "模态框外部布局", "field": "modalLayout",
                expect: {
                    field: 'type',
                    value: 'modal'
                }
            },
            {
                "label": "模态框配置", "field": "items", "type": "Modal", "items": [
                    { "label": "模态框内容布局", "field": "modalContentLayout", "placeholder": "Grid", "defaultValue": "Grid" },
                    { "label": "模态框获取Api", "field": "modalContentGetApi" },
                    { "label": "模态框更新Api", "field": "modalContentUpdateApi" },
                    { "label": "模态框内部布局", "field": "modalItemsLayout", "placeholder": "Empty", "defaultValue": "Empty" },
                    { "label": "模态框组件", "field": "modalItemsComp", "placeholder": "Form", "defaultValue": "Form" }
                ],
                expect: {
                    field: 'type',
                    value: 'modal'
                }
            },
            { "label": "是否显示在列表中", "field": "outside", "type": "switch" },
            {
                "label": "过滤字段", "field": "expectField",
                "toolTips": {
                    "type": "toolTip",
                    "tipsValue": (
                        <p>例子:
                            <br />过滤字段为status, status是后台返回字段, 当status值为"0"时, 则显示此操作按钮
                            <br />&nbsp;expect: {'{'}
                            <br />&nbsp;&nbsp;&nbsp;&nbsp;field:&nbsp;"status"
                            <br />&nbsp;&nbsp;&nbsp;&nbsp;value:&nbsp;"0"
                            <br />&nbsp;{'}'}
                        </p>
                    )
                },
            },
            {
                "label": "过滤值", "field": "expectValue",
                "toolTips": {
                    "type": "toolTip",
                    "tipsValue": (
                        <p>例子:
                            <br />过滤值为"0", status是后台返回字段, 当status值为"0"时, 则显示此操作按钮
                            <br />&nbsp;expect: {'{'}
                            <br />&nbsp;&nbsp;&nbsp;&nbsp;field:&nbsp;"status"
                            <br />&nbsp;&nbsp;&nbsp;&nbsp;value:&nbsp;"0"
                            <br />&nbsp;{'}'}
                        </p>
                    )
                }
            }
        ]
    }
    // { "label":"所属页面ID", "field":"pageId" },
]
