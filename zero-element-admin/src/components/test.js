export const testData = {
	"pageName": {
		"new": "新增",
		"view": "swagger",
		"edit": "编辑",
		"name": "swagger",
		"table": "标题"
	},
	"listAPI": "/api/doswagger/checkfiles",
	"createAPI": "/api/doswagger/checkfiles",
	"getAPI": "/api/doswagger/checkfiles/[id]",
	"updateAPI": "/api/doswagger/checkfiles/[id]",
	"deleteAPI": "/api/doswagger/checkfiles/(id)",
	"columns": 1,
	"type":"default",
	"createFields": [
		{
			"field": "tag",
			"label": "标签",
			"type": "input"
		},
		{
			"field": "swagger",
			"label": "文件",
			"type": "input"
		},
		{
			"field": "checksum",
			"label": "checksum",
			"type": "input"
		},
		{
			"field": "status",
			"label": "状态",
			"type": "input"
		}
	],
	"updateFields": [
		{
			"field": "tag",
			"label": "标签",
			"type": "input"
		},
		{
			"field": "swagger",
			"label": "文件",
			"type": "input"
		},
		{
			"field": "checksum",
			"label": "checksum",
			"type": "input"
		},
		{
			"field": "status",
			"label": "状态",
			"type": "input"
		}
	],
	"map": {},
	"layout": {
		"form": "TitleContent",
		"table": "Content"
	},
	"tableActions": [
    {
      "title": "添加",
      "type": "path",
      "options": {
        "style": "primary",
        "path": "checkfiles/checkfiles-add"
      }
    }
  ],
	"tableOperation": [
		{
      "title": "编辑",
      "type": "path",
      "options": {
        "style": "path",
        "path": "checkfiles/checkfiles-edit",
        "outside": true
      }
    },
		{
      "title": "查看",
      "type": "path",
      "options": {
        "style": "path",
        "path": "checkfiles/checkfiles-view",
        "outside": true
      }
    },
		{
			"options": {
				"method": "get",
				"data": {
					"data": "data"
				},
				"outside": true,
				"API": "/api/doswagger/putstorage?swagger=(swagger)"
			},
			"title": "入库",
			"type": "request"
		},
		{
			"options": {
				"method": "get",
				"data": {
					"data": "data"
				},
				"outside": true,
				"API": "/api/doswagger/putstorage?swagger=(swagger)&force=true"
			},
			"title": "强制入库",
			"type": "request"
		},
		{
			"options": {
				"method": "get",
				"data": {},
				"outside": true,
				"API": "/api/doswagger/execConfig?swagger=(swagger)"
			},
			"title": "执行",
			"type": "request"
		},
		{
			"options": {
				"path": "static.smallsaas.cn/swagger/index.html",
				"blank": true,
				"outside": true
			},
			"title": "打开",
			"type": "path"
		}
	],
	"searchFields": [
    {
      "label": "标签",
      "field": "tag",
      "type": "search",
      "props": {
        "placeholder": ""
      }
    }
  ],
	"tableFields": [
		{
			"field": "tag",
			"label": "标签",
			"align": "left"
		},
		{
			"field": "swagger",
			"label": "文件",
			"align": "left"
		},
		{
			"field": "checksum",
			"label": "checksum",
			"align": "left"
		},
		{
			"field": "status",
			"valueType": "tag",
			"options": {
				"map": {
					"inactive": "无效",
					"active": "有效"
				},
				"colorMap": {
					"inactive": "#808080",
					"active": "#00CC99"
				}
			},
			"label": "状态",
			"align": "left"
		}
	],
	"viewConfig": [
		{
			"field": "tag",
			"label": "标签",
			"type": "plain"
		},
		{
			"field": "swagger",
			"label": "文件",
			"type": "plain"
		},
		{
			"field": "checksum",
			"label": "checksum",
			"type": "plain"
		},
		{
			"field": "status",
			"label": "状态",
			"type": "plain"
		}
	],
	"searchType": "MoreSearch",
	"searchButtonType": "text"
}