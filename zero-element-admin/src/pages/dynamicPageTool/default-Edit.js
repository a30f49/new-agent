import React,{useState} from 'react';
import ZEle from 'zero-element';
import { TheConfig } from'./index'
import {message,Spin} from 'antd'


export default function DefaultEdit(){
    if(TheConfig){
    const pageConfig = {
        layout: TheConfig.layout.form,
        title: TheConfig.pageName.edit,
        items: [
          {
            component: 'Form',
            config: {
              API: {
                getAPI: TheConfig.getAPI,
                updateAPI: TheConfig.updateAPI,
              },
              layout: 'Grid',
              layoutConfig: {
                value: Array(TheConfig.columns).fill(~~(24 / TheConfig.columns)),
              },
              fields: TheConfig.updateFields || TheConfig.formFields,
            },
          },
        ],
    }
    return <ZEle namespace={`${TheConfig.pageName.name||"default"}_edit`} config={pageConfig} />;        
    }else{
        return <div>无页面配置信息！</div>
      }
}
