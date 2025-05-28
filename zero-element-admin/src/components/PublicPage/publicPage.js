import React, { useState, useEffect } from 'react';
import ZEle from 'zero-element';
import { message, Spin } from 'antd'
import { query } from 'zero-element/lib/utils/request';
import { LS } from 'zero-element/lib/utils/storage';
// import useBreadcrumb from '@/framework/useBreadcrumb';
import useQuery from '../hooks/useQuery'  
import { pageUrl } from './config';

export default (props) => {

  const queryData = useQuery()
  const { id : pageId } = queryData
  console.log('pageId=', pageId)

  if(pageId === undefined || pageId === null || pageId === '') {
    return <Spin spinning={false} >
      <div>请在浏览器地址栏上指定页面ID: query?id=1</div>
    </Spin>
  }

  // const title = getPageTitle(pageId)
  LS.set('currentPageId', pageId)

  // useBreadcrumb([
  //   { title: '首页', path: '/' },
  //   { title: '在线开发', path: '/nocode' },
  // ]);

  const [pageConfig, setPageConfig] = useState('')
  const [spining, setSpining] = useState(true)
  const [namespace, setNamespace] = useState('dynamicPage')

  useEffect(_ => {
    if (pageId) {
      // setPageConfig('')
      setSpining(true)
      initPageConfig()
    }
  }, [pageId]);

  function initPageConfig() {

    //用于设置namespace
    setNamespace(`dynamicPage_${pageId}`)

    const pageConfigUrl = `${pageUrl}?id=${pageId}`

    query(pageConfigUrl, {})
      .then(resp => {
        setSpining(false)
        const response = resp.data
        if (response && response.code === 200) {
          const configData = response.data;
          setPageConfig(configData)

        } else {
          message.error('获取页面配置信息失败')
        }
      }).catch(err => {
        setSpining(false)
        message.error('获取页面配置信息失败')
      })
  }

  function handlePage() {

    const config = {
      layout: pageConfig.layout.table,
      title: pageConfig.pageName.table,
      items: [
        {
          component: 'Search',
          config: {
            fields: pageConfig.searchFields,
          },
        },
        {
          component: 'Table',
          config: {
            API: {
              listAPI: pageConfig.listAPI,
              deleteAPI: pageConfig.deleteAPI,
            },
            actions: pageConfig.tableActions,
            fields: pageConfig.tableFields,
            operation: pageConfig.tableOperation,
          },
        },
      ],
    }

    return <ZEle namespace={namespace} config={config} />
  }

  return <Spin spinning={spining} >
    {pageConfig && handlePage()}
  </Spin>

};
