export default {
  'GET /api/config': {
    "status": 1,
    "data": {
      "pageName": {
        "table": "字段模板",
        "new": "新增字段模板",
        "edit": "更改字段模板",
        "name":"", //对应传过去的pageName，起缓存作用
      },
      "listAPI": "/api/crud/fieldModel/fieldModels",
      "createAPI": "/api/crud/fieldModel/fieldModels",
      "getAPI": "/api/crud/fieldModel/fieldModels/[id]",
      "updateAPI": "/api/crud/fieldModel/fieldModels/[id]",
      "deleteAPI": "/api/crud/fieldModel/fieldModels/(id)",
      "columns": 1,
      "createFields": [
          {
              "label":"模板名称",
              "rules":[
                  {
                      "type":"required"
                  }
              ],
              "props":{
                  "placeholder":"请输入模板名称"
              },
              "type":"input",
              "field":"templateName"
          },
          {
              "label":"模板标签",
              "props":{
                  "placeholder":"请输入模板标签"
              },
              "type":"input",
              "field":"templateLabel"
          },
          {
              "label":"默认值",
              "props":{
                  "placeholder":"请输入默认值"
              },
              "type":"input",
              "field":"defaultValue"
          },
          {
              "label":"是否非空",
              "rules":[
                  {
                      "type":"required"
                  }
              ],
              "type":"switch",
              "field":"isNotNull"
          },
          {
              "label":"是否唯一",
              "rules":[
                  {
                      "type":"required"
                  }
              ],
              "type":"switch",
              "field":"isUnique"
          },
          {
              "label":"推荐字段",
              "props":{
                  "placeholder":"请输入推荐字段"
              },
              "type":"input",
              "field":"defaultFieldName"
          },
          {
              "label":"可选字段",
              "props":{
                  "placeholder":"请输入可选字段"
              },
              "type":"input",
              "field":"optionalFieldName"
          },
          {
              "label":"字段类型",
              "rules":[
                  {
                      "type":"required"
                  }
              ],
              "props":{
                  "placeholder":"请输入字段类型"
              },
              "options":[
                  { "label":"tinyint", "value":"tinyint" },
                  {"label":"smallint","value":"smallint"},
                  { "label":"mediumint", "value":"mediumint" },
                  {"label":"int","value":"int"},
                  { "label":"long", "value":"long" },
                  { "label":"bigint", "value":"bigint" },
                  { "label":"float", "value":"float" },
                  { "label":"double", "value":"double" },
                  {"label":"decimal","value":"decimal"},
                  { "label":"year", "value":"year" },
                  { "label":"time", "value":"time" },
                  { "label":"date", "value":"date" },
                  { "label":"datetime", "value":"datetime" },
                  { "label":"timestamp", "value":"timestamp" },
                  { "label":"char", "value":"char" },
                  {"label":"varchar","value":"varchar"},
                  { "label":"tinytext", "value":"tinytext" },
                  { "label":"text", "value":"text" },
                  { "label":"mediumtext", "value":"mediumtext" },
                  { "label":"longtext", "value":"longtext" },
                  { "label":"enum", "value":"enum" },
                  { "label":"set", "value":"set" },
                  { "label":"bit", "value":"bit" },
                  { "label":"binary", "value":"binary" },
                  { "label":"varbinary", "value":"varbinary" },
                  { "label":"tinyblob", "value":"tinyblob" },
                  { "label":"blob", "value":"blob" },
                  { "label":"mediumblob", "value":"mediumblob" },
                  { "label":"longblob", "value":"longblob" }
              ],
              "span":"24",
              
              "type":"select",
              "field":"fieldType"
          },
          {
              "label":"字段大小",
              "props":{
                  "placeholder":"请输入字段大小"
              },
              "type":"input",
              "field":"fieldLength"
          },
          {
              "label":"小数大小",
              "props":{
                  "placeholder":"请输入字段小数大小"
              },
              "type":"input",
              "field":"fieldFloatLength"
          },
          {
              "label":"注释",
              "props":{
                  "placeholder":"请输入注释"
              },
              "autoSize":{
                  "minRows":4
              },
              "type":"text-area",
              "field":"comments"
          }
      ],
      "updateFields": [
          {
              "label":"模板名称",
              "rules":[
                  {
                      "type":"required"
                  }
              ],
              "props":{
                  "placeholder":"请输入模板名称"
              },
              "type":"input",
              "field":"templateName"
          },
          {
              "label":"模板标签",
              "props":{
                  "placeholder":"请输入模板标签"
              },
              "type":"input",
              "field":"templateLabel"
          },
          {
              "label":"默认值",
              "props":{
                  "placeholder":"请输入默认值"
              },
              "type":"input",
              "field":"defaultValue"
          },
          {
              "label":"是否非空",
              "rules":[
                  {
                      "type":"required"
                  }
              ],
              "type":"switch",
              "field":"isNotNull"
          },
          {
              "label":"是否唯一",
              "rules":[
                  {
                      "type":"required"
                  }
              ],
              "type":"switch",
              "field":"isUnique"
          },
          {
              "label":"推荐字段",
              "props":{
                  "placeholder":"请输入推荐字段"
              },
              "type":"input",
              "field":"defaultFieldName"
          },
          {
              "label":"可选字段",
              "props":{
                  "placeholder":"请输入可选字段"
              },
              "type":"input",
              "field":"optionalFieldName"
          },
          {
              "label":"字段类型",
              "rules":[
                  {
                      "type":"required"
                  }
              ],
              "props":{
                  "placeholder":"请输入字段类型"
              },
              "options":[
                  { "label":"tinyint", "value":"tinyint" },
                  {"label":"smallint","value":"smallint"},
                  { "label":"mediumint", "value":"mediumint" },
                  {"label":"int","value":"int"},
                  { "label":"bigint", "value":"bigint" },
                  { "label":"float", "value":"float" },
                  { "label":"double", "value":"double" },
                  {"label":"decimal","value":"decimal"},
                  { "label":"year", "value":"year" },
                  { "label":"time", "value":"time" },
                  { "label":"date", "value":"date" },
                  { "label":"datetime", "value":"datetime" },
                  { "label":"timestamp", "value":"timestamp" },
                  { "label":"char", "value":"char" },
                  {"label":"varchar","value":"varchar"},
                  { "label":"tinytext", "value":"tinytext" },
                  { "label":"text", "value":"text" },
                  { "label":"mediumtext", "value":"mediumtext" },
                  { "label":"longtext", "value":"longtext" },
                  { "label":"enum", "value":"enum" },
                  { "label":"set", "value":"set" },
                  { "label":"bit", "value":"bit" },
                  { "label":"binary", "value":"binary" },
                  { "label":"varbinary", "value":"varbinary" },
                  { "label":"tinyblob", "value":"tinyblob" },
                  { "label":"blob", "value":"blob" },
                  { "label":"mediumblob", "value":"mediumblob" },
                  { "label":"longblob", "value":"longblob" }
              ],
              "span":"24",
              
              "type":"select",
              "field":"fieldType"
          },
          {
              "label":"字段大小",
              "props":{
                  "placeholder":"请输入字段大小"
              },
              "type":"input",
              "field":"fieldLength"
          },
          {
              "label":"小数大小",
              "props":{
                  "placeholder":"请输入字段小数大小"
              },
              "type":"input",
              "field":"fieldFloatLength"
          },
          {
              "label":"注释",
              "props":{
                  "placeholder":"请输入注释"
              },
              "autoSize":{
                  "minRows":4
              },
              "type":"text-area",
              "field":"comments"
          }
      ],
      "map": {},
      "layout": {
        "table": "Content",
        "form": "TitleContent"
      },
      "tableActions": [
          {
              "title":"添加","type":"path",
              "options":{
                  "style":"primary",
                  "path":"/fieldTemplate/fieldTemplate-add"
              }
          }
      ],
      "tableOperation": [
          {
              "title":"详情","type":"path",
              "options":{
                  "outside":true,
                  "path":"/fieldTemplate/fieldTemplate-view"
              }
          },
          {
              "title":"编辑","type":"path",
              "options":{
                  "outside":true,
                  "path":"/fieldTemplate/fieldTemplate-edit"
              }
          },
          {
              "title":"删除","type":"delete"
          }
      ],
      "tableFields":[
          {"field":"templateName","label":"模板名称"},
          {"field":"templateLabel","label":"模板标签"},
          {"field":"defaultValue","label":"默认值"},
          {"field":"isNotNull","label":"是否非空","valueType":"tag","options":{
              "map":{
                  "0":"否",
                  "1":"是" 
              },
              "chy":{
                  "0":"close",
                  "1":"open"
                }
          },"theme":"status","type":"default"},
          {"field":"isUnique","label":"是否唯一","valueType":"tag","options":{
              "map":{
                  "0":"否",
                  "1":"是" 
              },
              "chy":{
                  "0":"close",
                  "1":"open"
                }
          },"theme":"status","type":"default"},
          {
              "label":"推荐字段",
              "field":"defaultFieldName"
          },
          {
              "label":"可选字段",
              "field":"optionalFieldName"
          },
          {"field":"fieldType","label":"字段类型","valueType":"tag","options":{
              "map":{
                  "tinyint":"小整数值(1字节)",
                  "smallint":"小整数值(2字节) ",
                  "mediumint":"中等整数值",
                  "int":"正常整数值",
                  "bigint":"大整数值" ,
                  "float":"单精度浮点型" ,
                  "double":"双精度浮点型" ,
                  "decimal":"定点数",
                  "year":"年" ,
                  "time":"时间" ,
                  "date":"日期" ,
                  "datetime":"日期时间" ,
                  "timestamp":"自动存储记录修改时间" ,
                  "char":"字符串" ,
                  "varchar":"长字符串",
                  "tinytext":"小文本" ,
                  "text":"文本" ,
                  "mediumtext":"中等文本" ,
                  "longtext":"长文本" ,
                  "enum":"枚举" ,
                  "set":"设置" ,
                  "bit":"字节" ,
                  "binary":"二进制存储" ,
                  "varbinary":"长二进制存储" ,
                  "tinyblob":"小blob" ,
                  "blob":"正常blob" ,
                  "mediumblob":"中blob" ,
                  "longblob":"长blob"
              }
              ,"chy":{
                  "tinyint":"blue",
                  "smallint":"blue ",
                  "mediumint":"blue",
                  "int":"blue",
                  "bigint":"blue" ,
                  "float":"cyan" ,
                  "double":"cyan" ,
                  "decimal":"cyan",
                  "year":"purple" ,
                  "time":"purple" ,
                  "date":"purple" ,
                  "datetime":"purple" ,
                  "timestamp":"purple" ,
                  "char":"orange" ,
                  "varchar":"orange",
                  "tinytext":"orange" ,
                  "text":"orange" ,
                  "mediumtext":"orange" ,
                  "longtext":"orange" ,
                  "enum":"gray" ,
                  "set":"gray" ,
                  "bit":"gray" ,
                  "binary":"gray" ,
                  "varbinary":"gray" ,
                  "tinyblob":"purple_dark" ,
                  "blob":"purple_dark" ,
                  "mediumblob":"purple_dark" ,
                  "longblob":"purple_dark"
                }
          },"theme":"option","type":"Dot"},
          {"field":"fieldLength","label":"字段大小"},
          {"field":"fieldFloatLength","label":"小数大小"}
      ],
      "searchFields": [
          {
              "label": "模板名称",
              "field": "templateName",
              "type": "search",
              "props": {
                "placeholder": "模板名称搜索"
              }
          },
          {
              "label": "模板id",
              "field": "templateId",
              "type": "search",
              "props": {
                "placeholder": "唯一标识,不可重复"
              }
          }
      ],
      "viewConfig": [{
        "title": "详情",
        "type": "plain",
        "fields": [
          {"field":"templateName","label":"模板名称"},
          {"field":"templateLabel","label":"模板标签"},
          {"field":"defaultValue","label":"默认值"},
          {"field":"isNotNull","label":"是否非空","options":{
              "map":{
                  "0":"否",
                  "1":"是" 
              },
              "chy":{
                  "0":"close",
                  "1":"open"
                }
          }},
          {"field":"isUnique","label":"是否唯一","options":{
              "map":{
                  "0":"否",
                  "1":"是" 
              },
              "chy":{
                  "0":"close",
                  "1":"open"
                }
          }},
          {"field":"fieldType","label":"字段类型","options":{
              "map":{
                  "tinyint":"小整数值(1字节)",
                  "smallint":"小整数值(2字节) ",
                  "mediumint":"中等整数值",
                  "int":"正常整数值",
                  "bigint":"大整数值" ,
                  "float":"单精度浮点型" ,
                  "double":"双精度浮点型" ,
                  "decimal":"定点数",
                  "year":"年" ,
                  "time":"时间" ,
                  "date":"日期" ,
                  "datetime":"日期时间" ,
                  "timestamp":"自动存储记录修改时间" ,
                  "char":"字符串" ,
                  "varchar":"长字符串",
                  "tinytext":"小文本" ,
                  "text":"文本" ,
                  "mediumtext":"中等文本" ,
                  "longtext":"长文本" ,
                  "enum":"枚举" ,
                  "set":"设置" ,
                  "bit":"字节" ,
                  "binary":"二进制存储" ,
                  "varbinary":"长二进制存储" ,
                  "tinyblob":"小blob" ,
                  "blob":"正常blob" ,
                  "mediumblob":"中blob" ,
                  "longblob":"长blob"
              }
          }},
          {"field":"fieldLength","label":"字段大小"},
          {"field":"fieldFloatLength","label":"小数大小"},
          {"field":"comments","label":"注释"}
        ]
      }]
    },  
    "message": "Success"
  }
}
