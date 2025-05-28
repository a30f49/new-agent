import React from 'react'
export const ArrowTopSvg = (props) =>{
    const {
        width="16px",
        height="16px",
        color="#666"
    }=props

    return <svg t="1633947054514" className="icon Arrow_top" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1964" width={width} height={height}><path d="M767.448 622.856a29.984 29.984 0 0 1-21.288-8.824L511.992 379.912l-234.16 234.128c-11.76 11.76-30.808 11.76-42.568 0s-11.76-30.808 0-42.568l255.44-255.408a30.072 30.072 0 0 1 42.552 0l255.472 255.408a30.088 30.088 0 0 1-21.28 51.384z" fill={color} p-id="1965"></path></svg>
}

export const ArrowBottomSvg = (props) =>{
    const {
        width="16px",
        height="16px",
        color="#666"
    }=props

    return <svg t="1633946973811" className="icon Arrow_bottom" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1817" width={width} height={height}><path d="M507.8 727.728a30.016 30.016 0 0 1-21.288-8.824L231.104 463.496a30.088 30.088 0 0 1 0-42.568 30.088 30.088 0 0 1 42.568 0l234.128 234.128 234.16-234.128a30.088 30.088 0 0 1 42.568 0 30.088 30.088 0 0 1 0 42.568L529.08 718.904a30 30 0 0 1-21.28 8.824z" p-id="1818" fill={color}></path></svg>
}

export const TipsIconSvg=(props)=>{
    const{
        width="16px",
        height="16px",
        color="#333",
    }=props
    return <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={color} className="bi bi-question-circle" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
  </svg>
}