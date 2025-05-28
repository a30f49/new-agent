/* eslint-disable no-unused-vars */
import zeroAntd from './zero-antd-dep';

import { history } from 'umi';
import { getModel } from 'zero-element/lib/Model';

import { set as golbalSet } from 'zero-element/lib/config/global';
import { set as APIConfig } from 'zero-element/lib/config/APIConfig';

import { set as setEndpoint } from 'zero-element/lib/utils/request/endpoint';
import { saveToken, removeToken } from 'zero-element/lib/utils/request/token';

import { set as LayoutSet } from 'zero-element/lib/config/layout';
import { set as ContainerSet } from 'zero-element/lib/config/container';
import { set as LASet } from 'zero-element/lib/config/listAction';
import { set as FITSet } from 'zero-element/lib/config/formItemType';
import { set as AITSet } from 'zero-element/lib/config/actionItemType';
import { set as VTSet } from 'zero-element/lib/config/valueType';

// dynamicPage
import path from '@/pages/dynamicPageTool/compx/actionItemType/path';
// import onPath from '@/../zero-antd-dep/listAction/onPath';

//动态页面组件
import EditList from '@/pages/dynamicPageTool/container/EditList/index';
import AITSet_FromModal from '@/pages/dynamicPageTool/compx/actionItemType/FromModal';
import CSet_DynamicPageForm from '@/pages/dynamicPageManage/compx/DynamicPageForm';
import CSet_DynamicPageShowConfig from '@/pages/dynamicPageManage/compx/DynamicPageShowConfig';
import AITSet_DownloadPage from '@/pages/dynamicPageManage/compx/onDownloadPage'

import { message } from 'antd';

import './rewrite.less';

//配置 
import { Config } from './devConfig'
const globalModel = getModel('global');

APIConfig({
  'DEFAULT_current': 1,
  'DEFAULT_pageSize': 10,

  'REQUEST_FIELD_current': 'pageNum',
  'REQUEST_FIELD_pageSize': 'pageSize',
  'REQUEST_FIELD_field': 'orderBy',
  'REQUEST_FIELD_order': 'sort',
  'REQUEST_FIELD_ascend': 'ASC',
  'REQUEST_FIELD_descend': 'DESC',

  'RESPONSE_FIELD_current': 'current',
  'RESPONSE_FIELD_pageSize': 'size',
  'RESPONSE_FIELD_total': 'total',
  'RESPONSE_FIELD_records': 'records',
});
golbalSet({
  router: (path) => {
    history.push(path);
  },
  goBack: () => {
    history.goBack();
  },
  Unauthorized: (data) => {
    removeToken();
    history.push('/401');
  },
  getPerm() {
    return globalModel.getPerm();
  },
  RequestError: (props) => {
    const { data = {} } = props
    if (data.errors && data.errors.length) {
      data.errors.forEach(msg => {
        message.error(JSON.stringify(msg));
      })
    } else {
      message.error(data.message || '无法连接服务器');
    }
  }
});

/** 
 * @开发环境配置
 * @关于Config配置 配置来源 src/devConfig.js > endpoint 项
 * @优先级 src/devConfig.js 中 endpoint 高于 public/config.js 中 window.ZEle.endpoint
 * @说明 此地方不设置生产环境endpoint设置 默认为public/config.js 中的 window.ZEle.endpoint 值
*/

if (process.env.NODE_ENV === 'development') {
  //# $ cat /c/Windows/System32/drivers/etc/hosts
  // setEndpoint('http://cn1.utools.club:45688');
  setEndpoint(Config.endpoint);
  // setEndpoint('http://localhost:8080');
  saveToken({
    token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJvcmdJZCI6IjEiLCJ1c2VySWQiOiIxIiwidGVuYW50T3JnSWQiOjEsImFjY291bnQiOiJhZG1pbiIsInVzZXJUeXBlIjoxLCJkZXZVc2VyVHlwZSI6MCwiYlVzZXJUeXBlIjoiU1lTVEVNIiwiYXBwaWQiOiJzbWFydHNCaWdTY3JlZW4iLCJwYXJ0eU9yZ2FuaXphdGlvbklkIjoxLCJpYXQiOjE3NDc4Nzk2NTIsImp0aSI6IjEiLCJzdWIiOiJhZG1pbiIsImV4cCI6MTc0ODQ4NDQ1Mn0.Vk2kqftatklp4qIVDysDVU-imm1_DSa_02--CVmhxlZ3jt5ud148v_YljG9NRy61RDtqJu8CWXGd41dpTY-uUQ',
  });
}else {
  // setEndpoint('http://localhost:8080');
  // setEndpoint('http://192.168.3.210:9090');
}

//布局组件
LayoutSet({
});

//容器组件
ContainerSet({
  'EditList': EditList,
  'DynamicPageForm': CSet_DynamicPageForm,
  'DynamicPageShowConfig': CSet_DynamicPageShowConfig
});

//列表项组件
VTSet({
});

//列表操作组件
LASet({
  'onFromModal': AITSet_FromModal,
  'onDownloadPage': AITSet_DownloadPage
});

//
AITSet({
  path,
  'fromModal': AITSet_FromModal,
});

//表单组件
FITSet({
});

