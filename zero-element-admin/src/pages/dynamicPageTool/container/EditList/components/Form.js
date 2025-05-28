import React, { useState, useRef, useImperativeHandle, forwardRef, useEffect } from "react"
import { Input, Select, Switch, InputNumber, Checkbox, Collapse, Button, Tabs, message, Modal, Popover, Tooltip } from 'antd'
import { QuestionOutlined } from '@ant-design/icons';
import { useDidMount, useForceUpdate } from 'zero-element/lib/utils/hooks/lifeCycle'
import { query, post, update, remove } from 'zero-element/lib/utils/request';
import _, { method } from 'lodash'
import { get as getEndpoint } from 'zero-element/lib/utils/request/endpoint';
import TheJson from '@/../zero-antd-dep/formItemType/JSON'
import { history } from 'umi'
import Array from './Array/index'
import ColorSelect from "./ColorSelect";
import FontSelect from "./FontSelect";
import FetchSelect from "./fetchSelect";

import { TipsIconSvg } from './public/svg';

export default forwardRef((props, ref) => {

  const {
    formData,
    config,
    unUseDefaultValue = false //是否使用默认值
  } = props

  const CheckboxGroup = Checkbox.Group
  const { Panel } = Collapse;
  const [data, setData] = useState({type: 'path'})
  const [modalVisable, setModalVisable] = useState(false)
  const [actionModalData, setActionModalData] = useState([])
  const [theModalData, setTheModalData] = useState([])
  const forceUpdate = useForceUpdate();

  useDidMount(_ => {

    let modalId = getDefaultData("id")

    if (!modalId) {
      return
    }
    // console.log(modalId);
    let queryData = {
      modalId: modalId
    }
    let options = {
      method: "GET"
    }
    query(endpoint + actionModalUrl, queryData, options)
      .then(resp => {
        setActionModalData(resp.data.records)
      })
    query(endpoint + ModalUrl, queryData, options)
      .then(resp => {
        setModalData(resp.data.records)
      })
  })

  //回调参数
  useImperativeHandle(ref,
    () => {
      return {
        data
      }
    })

  useEffect(_ => {
    //
    if (formData) {
      setData(formData)
    }

  }, [formData])


  function getFormData(field) {
    return _.get(formData, field, "")

  }

  function getDefaultData(field, defaultValue, isAdd) {
    let defaultData;
    let dData = getFormData(field)
    if (dData) {
      defaultData = dData
    } else if (!unUseDefaultValue || isAdd) {
      defaultData = defaultValue
    }
    return defaultData
  }

  function getSwitchData(field, defaultValue) {
    let sData = getFormData(field)
    let value;
    if (sData === "1" || sData === 1 || sData === true) {
      value = true
    } else if (!unUseDefaultValue) {
      value = defaultValue
    } else {
      value = false
    }
    return value
  }

  function ChangeValue(field, e) {
    let newVData = data || {}
    newVData[field] = e.target.value
    setData(newVData)
    //forceUpdate()
  }

  function childChangeValue(field, e, defaultValue) {
    if (defaultValue) {
      setTheModalData(defaultValue)
    }
    let childData = theModalData || {};
    childData[field] = e.target.value
    setTheModalData(childData)
  }

  function ActionChangeValue(field, e, defaultValue) {
    if (defaultValue) {
      setActionModalData(defaultValue)
    }
    let childData = actionModalData || {};
    childData[field] = e.target.value
    setActionModalData(childData)
  }

  function defaultChange(field, e) {
    let newCData = data || {}
    newCData[field] = e
    setData(newCData)
    // forceUpdate()
  }

  function switchChange(field, e) {
    let newSData = data || {}
    newSData[field] = e ? 1 : 0
    setData(newSData)
    // forceUpdate()
  }

  function JsonChange(field, e) {
    let newJData = data || {}
    newJData[field] = JSON.stringify(e)
    setData(newJData)
    // forceUpdate()
  }

  function GetJsonValue(field) {
    let jData = getFormData(field)
    let json
    if (jData && jData.indexOf("{") !== -1) {

      json = JSON.parse(jData)
    } else {
      json = {}
    }
    return json
  }

  function handleSelect(field, e) {
    let newSeData = data || {}
    newSeData[field] = e.toString()
    setData(newSeData)
    forceUpdate()
  }

  function getSelectData(field, defaultValue) {
    let SelectData
    let theForm = getFormData(field)
    if (theForm) {
      let newData = theForm.toString()
      if (newData.indexOf('[') != -1) {
        let newValue = newData.replace(/\[/g, "")
        let thenValue = newValue.replace(/\]/g, "")
        let allValue = thenValue.replace(/\"/g, "")
        let json = allValue.split(',')
        SelectData = json
      } else {
        SelectData = theForm
      }
    } else if (!unUseDefaultValue) {
      SelectData = defaultValue
    }
    return SelectData
  }


  // 选择项
  const selectEndpoint = (item, i) => {
    return <>{item.mode === "multiple" ? (
      <CheckboxGroup
        defaultValue={getSelectData(item.field, item.defaultValue)}
        style={{ width: "100%" }}
        options={item.options}
        onChange={(e) => handleSelect(item.field, e)}
        key={`${i}_checkbox`}
      ></CheckboxGroup>
    )
      : (
        <Select
          defaultValue={data && data[item.field] ? data[item.field] : getSelectData(item.field, item.defaultValue)}
          value={data && data[item.field] ? data[item.field] : getSelectData(item.field, item.defaultValue)}
          style={{ width: "100%" }}
          options={item.options}
          placeholder='请选择'
          onChange={(e) => handleSelect(item.field, e)}
          key={`${i}_select`}
        />
      )}
    </>
  }

  //通过API获取数据下拉框
  function fetchSelectFunc(item, i) {
    // console.log(' item === ', item)
    const callback = (field, v) => {
      defaultChange(field, v[field])
    }
    return <FetchSelect cb={(v) => callback(item.field, v)} formData={formData} {...item} key={`${i}_fetchselect`} />
  }

  //json项
  const jsonEndpoint = (item, i) => {
    return <TheJson
      value={GetJsonValue(item.field)}
      onChange={(e) => JsonChange(item.field, e)}
      key={i}
    >
    </TheJson>
  }

  // switch项
  const switchEndpoint = (item, i) => {
    return <Switch defaultChecked={getSwitchData(item.field, item.defaultValue)}
      onChange={(e) => switchChange(item.field, e)}
      key={`${i}_switch`}
    />
  }

  // 默认input
  const inputEndpoint = (item, i) => {

    return <Input
      defaultValue={data && data[item.field] ? data[item.field] : getSelectData(item.field, item.defaultValue)}
      placeholder={item.placeholder || "请输入" + item.label}
      addonAfter={item.addonAfter}
      onChange={(e) => ChangeValue(item.field, e)}
      key={getDefaultData(item.field, item.defaultValue)}
      size="middle"
    />
  }

  const numberEndpoint = (item, i) => {
    return <InputNumber
      addonAfter={item.addonAfter}
      defaultValue={getDefaultData(item.field, item.defaultValue)}
      placeholder={item.placeholder || "请输入" + item.label}
      onChange={(e) => defaultChange(item.field, e)}
      key={i}
      size="middle"
    />
  }

  let endpoint = getEndpoint()
  let ModalUrl = "/api/crud/modalItemBasicO/modalItemBasicOs"
  let actionModalUrl = "/api/crud/modalItemBasic/modalItemBasics"
  const [modalData, setModalData] = useState()

  function getData(value, field) {
    return _.get(value, field, "")
  }

  function getItemDefault(item, field, defaultValue) {
    let defaultData;
    let dData = getData(item, field)
    // console.log(item,"ITEM")
    if (dData) {
      defaultData = dData
    } else if (!unUseDefaultValue) {
      defaultData = defaultValue
      setTheModalData(defaultValue)
      setActionModalData(defaultValue)
    }
    return defaultData
  }

  //修改
  function putModalData(url, modalId, defaultData, submitData) {
    let newdata = {
      ...defaultData,
      ...submitData,
      modalId: modalId
    }
    let options = {
      method: "PUT"
    }

    update(`${url}/${defaultData.id}`, newdata, options)
      .then(resp => {
        if (resp.code === 200) {
          message.success("更改成功")
        } else {
          message.success("更改失败")
        }
        history.go(0)
      })
  }

  //新增
  function addModalData(url, modalId, submitData) {
    setModalVisable(false)
    let newdata = {
      ...submitData,
      modalId: modalId
    }
    let options = {
      method: "POST"
    }
    post(url, newdata, options)
      .then(resp => {
        if (resp.code === 200) {
          message.success("增加成功")
        } else {
          message.success("增加失败")
        }
        history.go(0)
      })
  }

  function cancel() {
    setModalVisable(false)
  }

  //删除
  function deleteModal(url, id) {
    let newurl = url + "/" + id
    let options = {
      method: "delete"
    }
    remove(newurl, {}, options)
      .then(resp => {
        if (resp.code === 200) {
          message.success("删除成功")
        } else {
          message.error("删除失败")
        }
        history.go(0)
      })
  }

  function showModal(e, url) {
    if (typeof e === "string") {
      if (e.indexOf("layout") !== -1) {
        let id = e.replace(/layout/, "")
        console.log(id)
        deleteModal(url, id)
      }
    } else {
      setModalVisable(true)
    }
  }

  const { TabPane } = Tabs

  const ModalEndpoint = (item, i) => {
    return <>
      <Tabs style={{ "padding": "10px" }} type="editable-card" onEdit={(e) => showModal(e, endpoint + ModalUrl)}>{modalData ? modalData.map((mdata, m) => <TabPane tab={`布局${m + 1}`} key={`layout${mdata.id}`}>{item.items.map((newItem, It) => <>{newItem.label ? <div>{newItem.label}：</div> : null}
      <Input
        defaultValue={getItemDefault(mdata, newItem.field, newItem.defaultValue)}
        placeholder={newItem.placeholder || "请输入" + (newItem.label || "...")}
        addonAfter={newItem.addonAfter}
        onChange={(e) => childChangeValue(newItem.field, e, mdata)}
        key={getItemDefault(modalData, newItem.field, newItem.defaultValue)}
        size="middle"
      >
      </Input></>)}<Button style={{ float: "right", marginTop: "20px" }} type="primary" onClick={() => putModalData(endpoint + ModalUrl, getDefaultData("id"), mdata, theModalData)}>更改</Button></TabPane>) : <></>}</Tabs>
      {/* <Button onClick={()=>{showModal()}}>增加</Button> */}
      <Modal
        title={"新增配置"} visible={modalVisable} onCancel={cancel} onOk={() => addModalData(endpoint + ModalUrl, getDefaultData("id"), theModalData)}
      >
        {item.items.map((newItem, It) => <>{newItem.label ? <div>{newItem.label}：</div> : null}<Input
          defaultValue={getDefaultData(newItem.field, newItem.defaultValue, true)}
          placeholder={newItem.placeholder || "请输入" + (newItem.label || "...")}
          addonAfter={newItem.addonAfter}
          onChange={(e) => childChangeValue(newItem.field, e)}
          key={getDefaultData(newItem.field, newItem.defaultValue, true)}
          size="middle"
        >
        </Input></>)}
      </Modal>
    </>
  }

  const ActionModalEndpoint = (item, i) => {
    return <>
      <Tabs style={{ "padding": "10px" }} type="editable-card" onEdit={(e) => showModal(e, endpoint + actionModalUrl)}>{actionModalData ? actionModalData.map((mdata, m) => <TabPane tab={`布局${m + 1}`} key={`layout${mdata.id}`}>{item.items.map((newItem, It) => <>{newItem.label ? <div>{newItem.label}：</div> : null}<Input
        defaultValue={getItemDefault(mdata, newItem.field, newItem.defaultValue)}
        placeholder={newItem.placeholder || "请输入" + (newItem.label || "...")}
        addonAfter={newItem.addonAfter}
        onChange={(e) => ActionChangeValue(newItem.field, e, mdata)}
        key={getItemDefault(actionModalData, newItem.field, newItem.defaultValue)}
        size="middle"
      >
      </Input></>)}<Button style={{ float: "right", marginTop: "20px" }} type="primary" onClick={() => putModalData(endpoint + actionModalUrl, getDefaultData("id"), mdata, actionModalData)}>更改</Button></TabPane>) : <></>}</Tabs>
      {/* <Button onClick={()=>{showModal()}}>增加</Button> */}
      <Modal
        title={"新增配置"} visible={modalVisable} onCancel={cancel} onOk={() => addModalData(endpoint + actionModalUrl, getDefaultData("id"), actionModalData)}
      >
        {item.items.map((newItem, It) => <>{newItem.label ? <div>{newItem.label}：</div> : null}<Input
          defaultValue={getDefaultData(newItem.field, newItem.defaultValue, true)}
          placeholder={newItem.placeholder || "请输入" + (newItem.label || "...")}
          addonAfter={newItem.addonAfter}
          onChange={(e) => ActionChangeValue(newItem.field, e)}
          key={getDefaultData(newItem.field, newItem.defaultValue, true)}
          size="middle"
        >
        </Input></>)}
      </Modal>
    </>
  }

  function Thetest(e) {
    console.log(e, "Array")
  }

  const ArrayEndpoint = (item, i) => {
    return <><Array onChange={(e) => Thetest(e)}></Array></>
  }

  //跳转至表单实例页面
  function gotoComponentsExample(pathUrl) {
    if(pathUrl){
      let path = `${endpoint || window.location.origin}${pathUrl}`
      const w = window.open('about:blank');
      w.location.href = path
    }
  }

  //表单项提示
  function handleFormItemTips (data){
    if(data){
      if(data.type === 'link'){
        return <a href="#" onClick={() => gotoComponentsExample(data.path)} title={data.tipsValue} ><TipsIconSvg color={"#1890ff"} /></a>
      }
      if(data.type === 'one-mary'){
        // const jsonTemp = '[\n {\n "label": "标题",\n "field": "字段" \n} \n]'
        // const content = <div style={{ whiteSpace: 'pre-wrap'}} >{jsonTemp}</div>
        // return  (
        //   <Popover placement="right" title={'模板'} content={content} trigger="click">
        //     <a href="#" title={data.tipsValue} ><TipsIconSvg color={"#1890ff"} /></a>
        //   </Popover>
        // )
        function gotoOneMaryDocx() {
          let path = `https://github.com/kequandian/zero-element-admin/blob/main/resource/docs/%E5%A6%82%E4%BD%95%E9%85%8D%E7%BD%AE%E4%B8%80%E5%AF%B9%E5%A4%9A%E6%98%BE%E7%A4%BA.md`
          const w = window.open('about:blank');
          w.location.href = path
        }
        return <a href="#" onClick={() => gotoOneMaryDocx()} title={data.tipsValue} ><TipsIconSvg color={"#1890ff"} /></a>
      }
      if(data.type === 'toolTip'){
        return (
          <Tooltip placement="rightTop" title={data.tipsValue}>
              <a href="#" ><TipsIconSvg color={"#1890ff"} /></a>
          </Tooltip>
        )
      }
    }
    return <></>
  }
  
  //渲染表单项
  const AllFormType = (item, i) => {

    // expect 为是否显示组件判断
    const { expect = {} } = item;
    if (JSON.stringify(expect) !== '{}') {
      const { field, value } = expect;
      if (data[field] !== value) {
        return
      }
    }

    return (
      <div className="dynamic_column" key={`${i}`}>
        {
          item.label ? (
            <div key={i}>{item.label}： {handleFormItemTips(item.toolTips)}</div>
          ) : null
        }
        {
          item.type === "JSON" ? jsonEndpoint(item, i) :
            item.type === "select" ? selectEndpoint(item, i) :
              item.type === "switch" ? switchEndpoint(item, i) :
                item.type === "number" ? numberEndpoint(item, i) :
                  item.type === "Modal" ? ModalEndpoint(item, i) :
                    item.type === "fetchSelect" ? fetchSelectFunc(item, i) :
                      item.type === "ActionModal" ? ActionModalEndpoint(item, i) :
                        item.type === "Array" ? ArrayEndpoint(item, i) :
                          item.type === "color" ? (
                            <ColorSelect
                              options={item.options}
                              value={getDefaultData(item.field, item.defaultValue)}
                              onChange={(e) => ChangeValue(item.field, e)} />
                          ) : (
                            item.type === "text" ? (
                              <FontSelect
                                options={item.options}
                                value={getDefaultData(item.field, item.defaultValue)}
                                onChange={(e) => ChangeValue(item.field, e)} />
                            ) : (inputEndpoint(item, i))
                          )
        }
      </div>
    )
  }


  return <>
    {
      config && config.map((item, i) =>
        item.children ? <Collapse key={`${i}_collapse`}>
          <Panel header={item.header} >
            {item.children.map((child, a) => AllFormType(child, a))}
          </Panel>
        </Collapse> : AllFormType(item, i))
    }
  </>
})
