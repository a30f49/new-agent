/* eslint-disable no-restricted-globals */
import React, { useRef, useState } from 'react';
import { Button, Spin, Form } from 'antd';
import useBaseForm from 'zero-element/lib/helper/form/useBaseForm';
import { useDidMount, useForceUpdate, useWillUnmount } from 'zero-element/lib/utils/hooks/lifeCycle'
import useFormHandle from 'zero-element-antd/lib/container/Form/utils/useFormHandle';
import FormTools from '@/pages/dynamicPageTool/container/EditList/components/Form';
import { update, post } from 'zero-element/lib/utils/request';
import { get as getEndpoint } from 'zero-element/lib/utils/request/endpoint';
import { message, Drawer } from 'antd';

export default (props) => {
  
  const { 
    MODAL, config, 
    options, namespace, 
    extraData = {},
    hooks = {},
    onClose,
    forceInitForm,
    keepData=false
  } = props;
  const { API: { createAPI='', getAPI='', updateAPI='' }, fields } = config;
  const [loading, setLoading] = useState(undefined);

  const addRef = useRef()
  const forceUpdate = useForceUpdate();
  const [form] = Form.useForm();

  const {
    onFormatValue,
    handleFormatValue,
    onSaveOtherValue,
    onValuesChange,
    onExpect,
  } = useFormHandle(form, {
    namespace,
    config,
    forceInitForm,
    onGetOne: handleGetData,
  });
  
  const formProps = useBaseForm({
    namespace,
    modelPath: 'formData',
    extraData,
  }, config);

  
  const { data, model, handle } = formProps;

  const { onGetOne, onCreateForm, onUpdateForm, onClearForm } = handle;
  const [currentId, setCurrentId] = useState('');

  useDidMount(_ => {
    if (getAPI) {
      handleGetData()
    }
  });

  useWillUnmount(_ => {
    // if (!keepData) {
    if (!keepData || MODAL) {
      onClearForm();
    }
  });


  function IsType(item){
    let data;
    if(item.defaultValue){
      data = item.defaultValue
    }else{
      if(item.type){
        if(item.type==="number"||item.type==="switch"){
          data = 0
        }else{
          data = ""
        }
      }else{
        data = ""
      }
    }
    return data
  }
  
  // 增加数据
  function addMessage(){
    let theData;
    let endpoint = getEndpoint()
    const apiUrl = `${endpoint}${createAPI}`;
    let options = {
      method:"POST"
    }
    let initData={};
    fields.map((item,i)=>{
      if(item.children){
        item.children.map((cItem,ci)=>{
          initData[cItem.field] = IsType(cItem)
        })
      }else{
        // 判断值的提交
        initData[item.field] = IsType(item)
      }
    })
    theData = {
      ...initData,
      ...addRef.current.data
    }
    setLoading(true)
    // console.log(apiUrl," === apiUrl")
    // console.log(theData," === 提交后的DATA")

    post(apiUrl,theData,options)
      .then(resp => {
        const restData = resp.data
        if (restData && restData.code === 200) {
          // const Listdata = resp.data.records;
          // console.log(resp)
          message.success("添加成功")
          //刷新页面
          // onRefresh();
        } else {
          message.error('添加失败')
        }
      })
      .finally(_ => {
        setLoading(false)
      })
  }

  //获取详情数据
  function updageMessage(){

    setLoading(true)
    let theData;
    let endpoint = getEndpoint()
    const apiUrl = `${endpoint}${getAPI.replace('(id)', currentId)}`;

    let options = {
      method:"PUT"
    }

    let initData={};
    fields.map((item,i)=>{
      if(item.children){
        item.children.map((cItem,ci)=>{
          initData[cItem.field] = IsType(cItem)
        })
      }else{
        // 判断值的提交
        initData[item.field] = IsType(item)
      }
    })
    theData = {
      ...initData,
      ...addRef.current.data
    }
    // console.log('theData == ', theData)
    // return

    update(apiUrl, theData, options)
      .then(resp => {
        const restData = resp.data
        if (restData && restData.code === 200) {
          // const listdata = resp.data;
        } else {
          message.error('修改失败')
        }
      })
      .finally(_ => {
        setLoading(false)
        if(onClose){
          //关闭modal方法
          onClose()
        }
        forceUpdate();
      })
  }


  //获取api数据
  function handleGetData() {
    setLoading(true);
    onGetOne({}).then((response) => {
      const { code, data } = response || {};
      if (code === 200 && data) {
        let formData = data;
        // console.log('formData === ', formData)
        setCurrentId(formData.id)
      }
    })
      .finally(_ => {
        setLoading(false);
      })
  }

  function handleCancel() {
    if(onClose){
      //关闭modal方法
      onClose()
    }
    forceUpdate();
  }

    //保存按钮点击事件
    function renderFooter() {
  
      // const classes = MODAL ? 'ant-modal-footer' : 'ZEle-Form-footer';
      return <div className={'ant-modal-footer'}>
        <Button onClick={handleCancel}>取消</Button>
        <Button type="primary" htmlType="submit" onClick={updageMessage}>确定</Button>
      </div>
    }

  return <>
  <Spin spinning={loading}>
    <div style={{ margin: '20px'}}>
          <FormTools
              formData={data}
              config={fields}
              ref={addRef}
              unUseDefaultValue={true}
              >
          </FormTools>
          { renderFooter() }
      </div>
  </Spin>

  </>
}