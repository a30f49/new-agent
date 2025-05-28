import React, { useEffect, useState } from 'react';
import ZEle from 'zero-element';
import { LS } from 'zero-element/lib/utils/storage';
import { Config } from '../../devConfig';
const setting = require('./config/checkfiles-setting.json');

export default function () {
  const [pageSetting, setPageSetting] = useState(null);

  useEffect(() => {
    const currentPageId = LS.get('currentPageId');
    fetch(`${Config.endpoint}/forms?id=${currentPageId}`)
      .then(res => res.json())
      .then(data => {
        if (data && data.data && Object.keys(data.data).length > 0) {
          setPageSetting({ ...setting, ...data.data });
        } else {
          setPageSetting(setting);
        }
      })
      .catch(() => {
        setPageSetting(setting);
      });
  }, []);

  if (!pageSetting) {
    return null; // 或者返回 loading 组件
  }

  const config = {
    layout: pageSetting.layout?.form || setting.layout.form,
    title: pageSetting.pageName?.edit || setting.pageName.edit,
    items: [
      {
        component: 'Form',
        config: {
          API: {
            getAPI: pageSetting.getAPI || setting.getAPI,
            updateAPI: pageSetting.updateAPI || setting.updateAPI,
          },
          layout: 'Grid',
          layoutConfig: {
            value: Array(pageSetting.columns || setting.columns).fill(~~(24 / (pageSetting.columns || setting.columns))),
          },
          fields: pageSetting.updateFields || pageSetting.formFields || setting.updateFields || setting.formFields,
        },
      },
    ],
  }

  return <ZEle namespace="checkfiles-edit" config={config} />
}