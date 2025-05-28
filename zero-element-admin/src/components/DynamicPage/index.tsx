import React, { useState, useMemo, useEffect } from 'react';
import _ from 'lodash';
import ZEle from 'zero-element';
import { message, Spin } from 'antd';
import { query } from 'zero-element/lib/utils/request';
import { get as getEndpoint } from 'zero-element/lib/utils/request/endpoint';
// import { LS } from 'zero-element/lib/utils/storage';
const PAGE_ADD:number = 1
const PAGE_EDIT:number = 2
const PAGE_VIEW:number = 3

interface DynamicPageProps {
  pageConfigNs: string
  pageConfigApi: string;        // 页面配置API （优先）
  pageConfigData: Object;       // 页面配置数据, 优先于 pageConfigApi
  __nsPageRouter?: number;      // 传递给 ZEle 的子页面类型 [PAGE_ADD, PAGE_EDIT, PAGE_VIEW]
}

export default function DynamicPage (props:DynamicPageProps) {

  const [pageConfig, setPageConfig] = useState<object>({});
  const [spinning, setSpinning] = useState<boolean>(false);
  const [namespace, setNamespace] = useState('dynamicPage')

  useEffect(() => {
    setNamespace(`dynamicPage_${props.pageConfigNs}`)

    if (props.pageConfigApi) {
      fetchPageConfigData(props.pageConfigApi);
    }else if (props.pageConfigData) {
      setPageConfig(props.pageConfigData);
      // LS.set('currentPageConfig', pageConfig)
    }
  }, [props.pageConfigApi || props.pageConfigData]);


  // useEffect(() => {
  //   if (props.pageConfigData) {
  //     setNamespace(`dynamicPage_${props.pageConfigNs}`)
  //     setPageConfig(props.pageConfigData);
  //   }
  // }, [props.pageConfigData]);


  const getRequestUrl = (pageConfigApi) => {
    const url:string = pageConfigApi.includes('http') ? pageConfigApi : (getEndpoint() + pageConfigApi);
    const query = window.location.search ? window.location.search.replace('?', '') : (window.location.href.includes('?')? window.location.href.substring(window.location.href.indexOf('?') + 1) : undefined);
    if (query) {
      const urlWithQuery = url + (url.includes('?') ? `&${query}` : `?${query}`);
      return urlWithQuery
    }

    return url;
  }

  async function fetchPageConfigData (pageConfigApi) {
    // below two lines for debug
    // setPageConfig(testData);
    // return;

    setSpinning(true);

    //start fetch page config data
    // const res = await query(getRequestUrl(pageConfigApi));
    const res = await query(getRequestUrl(pageConfigApi), {}, {
  headers: {
    Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJvcmdJZCI6IjEiLCJ1c2VySWQiOiIxIiwidGVuYW50T3JnSWQiOjEsImFjY291bnQiOiJhZG1pbiIsInVzZXJUeXBlIjoxLCJkZXZVc2VyVHlwZSI6MCwiYlVzZXJUeXBlIjoiU1lTVEVNIiwiYXBwaWQiOiJzbWFydHNCaWdTY3JlZW4iLCJwYXJ0eU9yZ2FuaXphdGlvbklkIjoxLCJpYXQiOjE3NDc4Nzk2NTIsImp0aSI6IjEiLCJzdWIiOiJhZG1pbiIsImV4cCI6MTc0ODQ4NDQ1Mn0.Vk2kqftatklp4qIVDysDVU-imm1_DSa_02--CVmhxlZ3jt5ud148v_YljG9NRy61RDtqJu8CWXGd41dpTY-uUQ'
  }
});
    if (_.get(res, 'data.code') !== 200) {
      message.error(_.get(res, 'data.message') || '获取页面配置信息失败');
    }
    setPageConfig(_.get(res, 'data.data.form') || _.get(res, 'data.data') || {});
    // LS.set('currentPageConfig', pageConfig)
    setSpinning(false);
  }

  const ZEleElement = useMemo(() => {
    const config = {
      layout: _.get(pageConfig, 'layout.table') || '',
      title: _.get(pageConfig, 'pageName.table') || '',
      items: [
        {
          component: 'Search',
          config: {
            fields: _.get(pageConfig, 'searchFields') || [],
          },
        },
        {
          component: 'Table',
          config: {
            API: {
              listAPI: _.get(pageConfig, 'listAPI') || '',
              deleteAPI: _.get(pageConfig, 'deleteAPI'),
            },
            actions: _.get(pageConfig, 'tableActions') || '',
            fields: _.get(pageConfig, 'tableFields') || [],
            operation: _.get(pageConfig, 'tableOperation') || '',
          },
        },
      ],
    }
    
    const configAdd = {
          layout: _.get(pageConfig, 'layout.form') || '',
          title: _.get(pageConfig, 'pageName.new') || '',
          items: [
            {
              component: 'Form',
              config: {
                API: {
                  createAPI: _.get(pageConfig, 'createAPI') || '',
                },
                layout: 'Grid',
                layoutConfig: {
                  value: Array(_.get(pageConfig, 'columns')).fill(~~(24 / _.get(pageConfig, 'columns'))),
                },
                fields: _.get(pageConfig, 'createFields') || _.get(pageConfig, 'formFields') || [],
              },
            },
          ],
        }
    const configEdit = {
      layout: _.get(pageConfig, 'layout.form') || '',
      title: _.get(pageConfig, 'pageName.edit') || '',
      items: [
        {
          component: 'Form',
          config: {
            API: {
              getAPI: _.get(pageConfig, 'getAPI') || '',
              updateAPI: _.get(pageConfig, 'updateAPI') || '',
            },
            layout: 'Grid',
            layoutConfig: {
              value: Array(_.get(pageConfig, 'columns')).fill(~~(24 / _.get(pageConfig, 'columns'))),
            },
            fields: _.get(pageConfig, 'updateFields') || _.get(pageConfig, 'formFields') || [],
          },
        },
      ],
    }
    
    const configView = {
      layout: _.get(pageConfig, 'layout.form') || '',
      title: _.get(pageConfig, 'pageName.view') || '',
      items: [
        {
          component: 'Form',
          config: {
            API: {
              getAPI: _.get(pageConfig, 'getAPI') || '',
            },
            layout: 'Grid',
            layoutConfig: {
              value: Array(_.get(pageConfig, 'columns')).fill(~~(24 / _.get(pageConfig, 'columns'))),
            },
            fields: _.get(pageConfig, 'viewConfig') || _.get(pageConfig, 'formFields') || [],
            otherProps: {
              footerButton: false
            }
          },
        },
      ],
    }


    const currentConfig = props.__nsPageRouter === PAGE_ADD ? configAdd : 
        (props.__nsPageRouter === PAGE_EDIT? configEdit : 
          (props.__nsPageRouter === PAGE_VIEW?configView:config) )

    return (
      <ZEle namespace={namespace} config={currentConfig} />
    )
  }, [pageConfig]);

  return (
    <Spin spinning={spinning}>
      {Object.keys(pageConfig).length > 0 && ZEleElement}
    </Spin>
  )
}
