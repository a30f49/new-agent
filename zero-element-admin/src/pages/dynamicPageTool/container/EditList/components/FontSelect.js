import React,{useState,useEffect} from 'react'
import './index.less'
import { ArrowBottomSvg, ArrowTopSvg } from './public/svg'

export default function FontSelect(props){
    const {
        options,
        value,
        onChange
    }=props
    const [selectKey,setSelectKey] = useState(0)
    const [hidden,setHidden] = useState(true)
    const [defaultValue,setDefaultValue] = useState({"value":"10"})
    useEffect(()=>{
        if(Array.isArray(options)&&options.length>1){
            options.map((item,i)=>{
                if(item.value == value){
                    setSelectKey(i)
                    setDefaultValue(item)
                }
                console.log(item.value,value)
            })
        }
    },value)
    function handleChange(select,clicked){
        setSelectKey(clicked)
        setDefaultValue(select)
        setHidden(false)
        let change = {
            target:{
                value:select.value
            }
        }
        console.log(change,clicked)
        onChange(change)
    }
    let textStyle =(item)=> {
        return {
            fontSize:item.value+"px"
        }
    }
    let SelectStyle = {
        fontSize:defaultValue.value+"px"
    }
    const handleShow = () =>[
        setHidden(!hidden)
    ]
    return <>
        <div className="FontSelect_content" onClick={handleShow}>
            <span className="FontSelect_labelText">已选择：</span>
        <span className="FontSelect_text" style={SelectStyle}>{defaultValue.text||"文字展示"}</span>
            {/* <span className="FontSelect_value">{item.value+"px"}</span> */}
            <span className="FontSelect_selectbox">{hidden?<ArrowTopSvg/>:<ArrowBottomSvg/>}</span>
        </div>
        {Array.isArray(options)&&options.length>1?options.map((item,i)=><div className="FontSelect_content" style={{display:hidden?"none":"flex"}} key={i} onClick={()=>handleChange(item,i)}>
            <span className="FontSelect_text" style={textStyle(item)}>{item.text||"文字展示"}</span>
            {/* <span className="FontSelect_value">{item.value+"px"}</span> */}
            <span className={+selectKey===i?"FontSelect_selectbox selected":"FontSelect_selectbox"}></span>
        </div>
        ):null}
    </>
}
