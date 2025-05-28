import React, { useRef, useState } from 'react';
import { MainPageConfig } from '@/pages/dynamicPageTool/pageConfig';
// import useBreadcrumb from '@/framework/useBreadcrumb';
import FormTools from '@/pages/dynamicPageTool/container/EditList/components/Form';
import ShowModal from '@/pages/dynamicPageTool/container/EditList/components/showModal';
import { query, post } from 'zero-element/lib/utils/request';
import { get as getEndpoint } from 'zero-element/lib/utils/request/endpoint';
import { message, Drawer } from 'antd';
import { setting } from './config/dynamicPageManage-setting.js'
import { history } from 'umi'
import { AddSvg } from '@/pages/dynamicPageTool/container/EditList/svg';
import { useDidMount } from 'zero-element/lib/utils/hooks/lifeCycle'

/**
 * 直接更改 /pages/sys/testPageFetch目录下的pageConfig即可，新增与编辑互通
 */

export default function DynamicPageEdit(props) {

  const { } = props

  // useBreadcrumb([
  //   { title: '首页', path: '/' },
  //   { title: '动态页面编辑' },
  // ]);

  const putRef = useRef()
  const api = setting.updateAPI
  const getApi = setting.getAPI
  const [defaultData, setDefaultData] = useState({})

  function getUrlFooter() {
    let newObj = {}
    let url = document.location.href
    let value = url.split("?")[1]
    value = value.replace(/&/g, "=")
    let replace = value.split("=")
    let attributeGroup = [];
    let valueGroup = []
    replace.map((item, i) => {
      if (i % 2 == 0 || i == 0) {
        attributeGroup.push(item)
      } else {
        valueGroup.push(item)
      }
    })
    attributeGroup.map((attr, g) => {
      newObj[attr] = valueGroup[g]
    })
    console.log(newObj)
    return newObj
  }

  const id = getUrlFooter().id

  function returnApi(theApi) {
    console.log(getApi, "getAPI")
    let newApi = theApi.replace(/\[id]/g, id)
    return newApi
  }

  useDidMount(_ => {
    let endpoint = getEndpoint()
    let ApiGet = endpoint + returnApi(getApi)
    let queryData = {}
    query(ApiGet, queryData)
      .then(resp => {
        if (resp && resp.code === 200) {
          const ListData = resp.data
          console.log(ListData, "LIST")
          setDefaultData(ListData)

        } else {
          message.error("获取页面配置信息失败")
        }
      })
  })

  function IsType(item) {
    let data;
    if (item.defaultValue) {
      data = item.defaultValue
    } else {
      if (item.type) {
        if (item.type === "number" || item.type === "switch") {
          data = 0
        } else {
          data = ""
        }
      } else {
        data = ""
      }
    }
    return data
  }

  // 增加数据
  function putMessage() {
    let theData;
    let endpoint = getEndpoint()
    const apiUrl = `${endpoint}${returnApi(api)}`;
    let options = {
      method: "PUT"
    }
    let initData = {};
    MainPageConfig.map((item, i) => {
      if (item.children) {
        item.children.map((cItem, ci) => {
          initData[cItem.field] = IsType(cItem)
        })
      } else {
        // 判断值的提交
        initData[item.field] = IsType(item)
      }
    })
    theData = {
      ...defaultData,
      ...putRef.current.data
    }
    console.log(theData, "提交后的DATA", initData, "初始化data", putRef.current.data, "PUTDATA")
    post(apiUrl, theData, options)
      .then(resp => {
        if (resp && resp.code === 200) {
          // const Listdata = resp.data.records;
          // console.log(resp)
          message.success("更改成功")
          history.goBack(1)
          // setData(Listdata)
        } else {
          message.error('更改失败')
        }
      })
  }

  const onClose = () => {
    history.goBack(1)
  };

  return <ShowModal title={"编辑页面"}
    // icon={<AddSvg/>}
    width="100%"
    height="100%"
    initShow={true}
    onSuccess={putMessage}
    onError={onClose}
  >
    <FormTools
      formData={defaultData}
      config={MainPageConfig}
      ref={putRef}
      unUseDefaultValue={true}
    ></FormTools>
  </ShowModal>

}