import React,{useState} from 'react';
import ZEle from 'zero-element';
import { TheConfig } from'./index'
import {message,Spin} from 'antd'


export default function DefaultEdit(){
  
    if(TheConfig){
    const pageConfig = {
        layout: TheConfig.layout.form,
        title: TheConfig.pageName.new,
        items: [
          {
            component: 'Form',
            config: {
              API: {
                createAPI: TheConfig.createAPI,
              },
              layout: 'Grid',
              layoutConfig: {
                value: Array(TheConfig.columns).fill(~~(24 / TheConfig.columns)),
              },
              fields: TheConfig.createFields || TheConfig.formFields,
            },
          },
        ],
    }
    return <ZEle namespace={`${TheConfig.pageName.name||"default"}_add`} config={pageConfig} />;        
    }else{
        return <div>无页面配置信息！</div>
      }
}
