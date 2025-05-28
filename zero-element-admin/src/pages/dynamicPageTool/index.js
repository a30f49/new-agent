import React, { useState, useEffect } from 'react';
import ZEle from 'zero-element';
// import useBreadcrumb from '@/framework/useBreadcrumb';
import {
  fieldsConfig,
  MainPageConfig,
  ComponentTypeConfig,
  FiltersConfig,
  OperationsConfig,
  ActionsConfig
} from './pageConfig';
import { useDidMount, useWillUnmount, useForceUpdate } from 'zero-element/lib/utils/hooks/lifeCycle';
import { get as getEndpoint } from 'zero-element/lib/utils/request/endpoint';
import { query } from 'zero-element/lib/utils/request';
import {
  PageSvg,
  ActionSvg,
  OperationSvg,
  FIlterSvg,
  FieldSvg,
  FieldProperitieSvg
} from './svg/index'
import { message, Spin } from 'antd'
import qs from 'qs';

export let TheConfig = {

}
export default function Default() {
  // useBreadcrumb([
  //   { title: '首页', path: '/' },
  //   { title: '系统管理', path: '/sys' },
  //   { title: '测试动态页面加载' },
  // ]);

  const [pageConfig, setPageConfig] = useState('')
  const [spining, setSpining] = useState(true)
  const [pageId, setPageId] = useState(0)
  const [tips, setTips] = useState("获取数据中")
  let pageEndpoint = "/api/pageconfig/lowMainPage/lowMainPages/config"

  // let pageEndpoint = "/api/mainpage"
  let id;
  const getParams = () => {
    var array = window.location.href.split("?");
    if ((parseInt(array.length) - parseInt(1)) > 0) {
      var array1 = array[1].split("&");
      if (array1.length > 0) {
        //  console.log(array1)
        for (var i in array1) {
          // console.log(array1[i])
          if (array1[i].indexOf("id=") !== -1) {
            // console.log(array1[i].split("id=")[1])
            id = array1[i].split("id=")[1]
          }
        }
      }
    }
  }
  getParams()

  useDidMount(_ => {
    initPageConfig()
  });


  function initPageConfig() {
    // const apiUrl = `https://api.mock.smallsaas.cn/data`;
    let endpoint = getEndpoint()
    const routeParamString = window.location.href.split('?')[1]
    id = Object.keys(qs.parse(routeParamString))[0]
    const pageUrl = `${endpoint}${pageEndpoint}?${routeParamString}`;
    query(pageUrl, {/* id:id */ })
      .then(resp => {
        const respData = resp.data
        if (respData && respData.code === 200) {
          const pageConfigData = respData.data;
          // console.log('pageConfigData == ', pageConfigData)
          setTips("加载完成")
          setSpining(false)
          setPageConfig(pageConfigData)
        } else {
          message.error('获取页面配置信息失败')
          setSpining(false)
        }
      }).catch(err => {
        message.error('获取页面配置信息失败')
      })
  }

  function onRefresh(value) {
    if (value) {
      setSpining(true)
      setPageConfig('')
      initPageConfig()
    }
  }

  if (pageConfig) {
    TheConfig = pageConfig
    const config = {
      layout: pageConfig.layout.table,
      title: pageConfig.pageName.table,
      config: {
        style: {
          "minWidth": pageConfig.minWidth || ''
        }
      },
      items: [

        // {
        //   component:"EditList",
        //   config:{
        //     api:"/api/pageconfig/lowFieldProperties/lowFieldPropertieses",//lc_field_properties
        //     ModelConfig:ComponentTypeConfig,
        //     title:"propertyName",
        //     field:"fieldItemName",
        //     name:"组件属性",
        //     svg:<FieldProperitieSvg/>
        //   }
        // },
        {
          component: "EditList",
          config: {
            api: "/api/pageconfig/lowFields/lowFieldses",//lc_fields
            ModelConfig: fieldsConfig,
            title: "fieldLabel",
            name: "字段",
            PageId: id,
            showAdd: true,
            svg: <FieldSvg />,
            cb: onRefresh,
            query:{
              pageNum:1,
              pageSize:100
            }
          }
        },
        {
          component: "EditList",
          config: {
            api: "/api/pageconfig/lowOperations/lowOperationses",//lc_operations
            ModelConfig: OperationsConfig,
            title: "title",
            name: "操作",
            PageId: id,
            showAdd: true,
            svg: <OperationSvg />,
            cb: onRefresh
          }
        },
        {
          component: "EditList",
          config: {
            api: "/api/pageconfig/lowActions/lowActionses",//lc_actions
            ModelConfig: ActionsConfig,
            title: "title",
            name: "按钮",
            PageId: id,
            showAdd: true,
            svg: <ActionSvg />,
            cb: onRefresh
          }
        },
        {
          component: "EditList",
          config: {
            api: "/api/pageconfig/lowFilters/lowFilterses",//lc_filters
            ModelConfig: FiltersConfig,
            title: "fieldTitle",
            name: "过滤",
            PageId: id,
            showAdd: true,
            svg: <FIlterSvg />,
            cb: onRefresh
          }
        },
        {
          component: "EditList",
          config: {
            api: `/api/pageconfig/lowMainPage/lowMainPages`,//lc_main_pages
            ModelConfig: MainPageConfig,
            title: "pageTitle",
            name: "页面配置",
            projectId: id,
            showAdd: false,
            showDelete: false,
            NoModal: true,
            svg: <PageSvg />,
            cb: onRefresh
          }
        },
        {
          component: pageConfig.searchType || 'Search',
          config: {
            type: pageConfig.searchButtonType || "default",
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
    return <ZEle namespace={`${pageConfig.pageName.name || "default"}_page`} config={config} />;
  } else {
    return <Spin spinning={spining} tip={tips}></Spin>
  }
}

