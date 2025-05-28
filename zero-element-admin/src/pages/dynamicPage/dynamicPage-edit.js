import React, { useState } from 'react';
import ZEle from 'zero-element';
import qs from 'qs';
import { message, Spin } from 'antd'
import { useDidMount, useWillUnmount, useForceUpdate } from 'zero-element/lib/utils/hooks/lifeCycle';
import { query } from 'zero-element/lib/utils/request';
import { get as getEndpoint } from 'zero-element/lib/utils/request/endpoint';

import { pageUrl } from '@/pages/dynamicPage/config';

export default () => {
  
    const routeParam = qs.parse(window.location.search.replace('?', ''));

    const [pageConfig, setPageConfig] = useState('')
    const [spining, setSpining] = useState(true)
    // const [tips, setTips] = useState("获取数据中")

    useDidMount(_ => {
        initPageConfig()
    });

    function initPageConfig() {
        let endpoint = getEndpoint()
        let pageConfigUrl = pageUrl

        if(!pageUrl.startsWith('http')){
          pageConfigUrl = `${endpoint}${pageUrl}`
        }

        if(pageUrl.indexOf('?') != -1){
          //TODO, merge routeParam with this pageUrl param
        }else{
          pageConfigUrl = `${pageConfigUrl}?${routeParam}`
        }


        query(pageConfigUrl, {})
          .then(resp => {
            setSpining(false)
            const response = resp.data
            if (response && response.code === 200) {
                const configData = response.data;
                setPageConfig(configData)
                // setTips("加载完成")

            } else {
                message.error('获取页面配置信息失败')
                // setTips("加载完成")
            }
          }).catch(err => {
            setSpining(false)
            message.error('获取页面配置信息失败')
          })
    }

    if(pageConfig){
        const config = {
            layout: pageConfig.layout.form,
            title: pageConfig.pageName.edit,
            items: [
              {
                component: 'Form',
                config: {
                  API: {
                    getAPI: pageConfig.getAPI,
                    updateAPI: pageConfig.updateAPI,
                  },
                  layout: 'Grid',
                  layoutConfig: {
                    value: Array(pageConfig.columns).fill(~~(24 / pageConfig.columns)),
                  },
                  fields: pageConfig.updateFields || pageConfig.formFields,
                },
              },
            ],
          }

        return (
            <ZEle namespace="dynamicPage_edit" config={config} />
        )
    } else {
        return <Spin spinning={spining} ></Spin>
    }
};
