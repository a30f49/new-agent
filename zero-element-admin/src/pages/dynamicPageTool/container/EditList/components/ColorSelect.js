import React,{useState,useEffect} from 'react'
import "./index.less"
import { ArrowBottomSvg, ArrowTopSvg } from './public/svg'
export default function ColorSelect(props){
    const {
        options,
        value,
        blockStyle={},//方块样式
        textStyle={},//文字样式
        onChange//改变事件
    }=props
    const [selectKey,setSelectKey] = useState(0)
    const [hidden,setHidden] = useState(true)
    const [defaultValue,setDefaultValue] = useState({"label":"黑色","value":"#000"})
    // 判断初始化传值选中
    useEffect(()=>{
        if(Array.isArray(options)&&options.length>1){
            options.map((item,i)=>{
                if(item.value === value){
                    setSelectKey(i)
                    setDefaultValue(item)
                }
            })
        }
    },value)
    // 改变时
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
    let BlockStyle = (item) => {
        return {
            background:item.value,
            ...blockStyle
        }
    }
    let SelectStyle = {
        background:defaultValue.value,
        ...blockStyle    
    }
    let TextStyle = {
        fontSize:"14px",
        fontWeight:"bolder",
        flex:1,
        ...textStyle
    }
    const handleShow = () =>[
        setHidden(!hidden)
    ]
    return (<>
    <div className="ColorSelect_content"  onClick={handleShow}>
        已选择：
        <span className="ColorSelect_block" style={SelectStyle}></span>
        <span className="ColorSelect_text" style={TextStyle}>{defaultValue.label}</span>
        <span className="ColorSelect_selectbox">{hidden?<ArrowTopSvg/>:<ArrowBottomSvg/>}</span>
    </div>
    {Array.isArray(options)&&options.length>1?options.map((item,i)=><div className="ColorSelect_content" style={{display:hidden?"none":"flex"}} key={i} onClick={()=>handleChange(item,i)}>
        <span className="ColorSelect_block" style={BlockStyle(item)}></span>
        <span className="ColorSelect_text" style={TextStyle}>{item.label}</span>
        <span className={selectKey===i?"ColorSelect_selectbox selected":"ColorSelect_selectbox"}></span>
    </div>):null}
    </>)
}