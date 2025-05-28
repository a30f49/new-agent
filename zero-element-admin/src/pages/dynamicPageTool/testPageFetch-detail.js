import React from 'react';
import ZEle from 'zero-element';
// import DetailsTemplate from '@/components/Details/DetailsTemplate';
import setting from './config/dynamicPageTool-detail.config.json';
    
export default () => 

{

  const config = {
      layout: setting.layout.form,
      title: setting.pageName.view,
      items: [
        {
          component: 'Form',
          config: {
            API: {
              getAPI: setting.getAPI,
            },
            layout: 'Grid',
            layoutConfig: {
              value: Array(setting.columns).fill(~~(24 / setting.columns)),
            },
            fields: setting.viewConfig || setting.formFields,
            otherProps: {
              footerButton: false
            }
          },
        },
      ],
    }

  return <ZEle namespace="dynamicPageTool_detail-view" config={config} />
}