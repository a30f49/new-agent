import React,{useState,useEffect} from 'react'

export default function Array(props){
    const {
        defaultValue
    }=props
    
    const [nowValue,setNowValue] = useState([])
    
    if(defaultValue){
        if(defaultValue.options){
            setNowValue(JSON.parse(defaultValue).options)
        }
    }

    function Add(label,value){
        // setNowValue([])
        let newValue = nowValue
        let AddValue = {
            "label":label,
            "value":value
        }
        newValue.push(AddValue)
        setNowValue(newValue)
        console.log(AddValue)
        console.log(nowValue)
    }

    useEffect(()=>{
        setTimeout(()=>{
            let value = {
                options:nowValue
            }
            document.addEventListener("change",value)
        },0)
    },nowValue)
    

    return <div>
        {nowValue.length>1?nowValue.map((item,i)=>
        <div>{item.value+i}</div>
        ):<></>}
        <div onClick={()=>Add("label","value")}>+</div>
    </div>
}