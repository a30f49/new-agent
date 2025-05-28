import React,{useState,useRef,useImperativeHandle,forwardRef} from 'react'
import FormTool from './Form'
import { Tabs } from 'antd'
import _ from 'lodash'

const { TabPane } = Tabs;
export default forwardRef((props,ref)=>{
    const {
        formData,
        config,
        unUseDefaultValue
    }=props
    const InputRef = useRef()
    function getFormData(field){
        return _.get(formData,field)
    }
    function callback(key) {
        console.log(formData);
      }
    useImperativeHandle(ref,
        ()=>{
            return {
                data:InputRef.current.data
            }
        })
    return <>
        <Tabs defaultActiveKey="1" onChange={callback} type="editable-card">
        {typeof formData==="object"?formData.map((item,i)=><>
            <TabPane tab={"布局"+(i+1)} key={i}>
                <FormTool
                    formData={item}
                    key={i}
                    ref={InputRef}
                    config={config}
                    unUseDefaultValue={unUseDefaultValue}
                ></FormTool>
            </TabPane>
        </>
        ):null}
        </Tabs>
    </>
})