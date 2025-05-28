import React from 'react';
// import DetailsTemplate from '@/components/Details/DetailsTemplate';
import ZEle from 'zero-element';
import {TheConfig} from './index'

export default function DefaultView(){

  //   return <DetailsTemplate
  //   namespace={`${TheConfig.pageName.name||"default"}_view`}
  //   setting={TheConfig}
  //   config={TheConfig.viewConfig}
  // />

  if(TheConfig){
    const pageConfig = {
      layout: TheConfig.layout.form,
      title: TheConfig.pageName.view,
      items: [
        {
          component: 'Form',
          config: {
            API: {
              getAPI: TheConfig.getAPI,
            },
            layout: 'Grid',
            layoutConfig: {
              value: Array(TheConfig.columns).fill(~~(24 / TheConfig.columns)),
            },
            fields: TheConfig.viewConfig || TheConfig.formFields,
            otherProps: {
              footerButton: false
            }
          },
        },
      ],
    }
    return <ZEle namespace={`${TheConfig.pageName.name||"default"}_edit`} config={pageConfig} />;        
    }else{
        return <div>无页面配置信息！</div>
      }
}