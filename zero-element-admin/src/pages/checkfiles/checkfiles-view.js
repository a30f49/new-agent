import React, { useEffect, useState } from 'react';
import ZEle from 'zero-element';
import { LS } from 'zero-element/lib/utils/storage';
import { Config } from '../../devConfig';
const setting = require('./config/checkfiles-setting.json');

export default function () {
  const [pageSetting, setPageSetting] = useState(null); // 初始为null

  useEffect(() => {
    const currentPageId = LS.get('currentPageId');
    fetch(`${Config.endpoint}/forms?id=${currentPageId}`)
      .then(res => res.json())
      .then(data => {
        if (data && data.data && Object.keys(data.data).length > 0) {
          console.log('GET /forms 返回数据:', data.data);
          setPageSetting({ ...setting, ...data.data }); // 合并默认配置和接口数据
        } else {
          setPageSetting(setting);
        }
      })
      .catch(err => {
        console.error('GET /forms 请求出错:', err);
        setPageSetting(setting);
      });
  }, []);

  if (!pageSetting) {
    return null; // 或者返回 loading 组件
  }

  console.log('pageSetting', pageSetting);

  const config = {
    layout: pageSetting.layout?.form || setting.layout.form,
    title: pageSetting.pageName?.view || setting.pageName.view,
    items: [
      {
        component: 'Form',
        config: {
          API: {
            getAPI: pageSetting.getAPI || setting.getAPI,
          },
          layout: 'Grid',
          layoutConfig: {
            value: Array(pageSetting.columns || setting.columns).fill(~~(24 / (pageSetting.columns || setting.columns))),
          },
          fields: pageSetting.viewConfig || pageSetting.formFields || setting.viewConfig || setting.formFields,
          otherProps: {
            footerButton: false
          }
        },
      },
    ],
  }
  console.log('config', config);

  return <ZEle namespace="checkfiles-view" config={config} />
}