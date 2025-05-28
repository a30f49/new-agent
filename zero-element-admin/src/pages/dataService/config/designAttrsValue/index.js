import React from 'react';
import { Button } from 'antd';
import ZEle from 'zero-element';
import config from './config';
import global from 'zero-element/lib/config/global';

export default () => {

    const { goBack } = global;
    
    function handleGoBack () {
        goBack()
    }

    return (
        <div className="ZEleA-Layout-Content" style={{padding: '16px 0 0 0', marginBottom: '0'}}>
            <div style={{ 
                display:'flex', 
                flexDirection:'row', 
                justifyContent: 'space-between', 
                borderBottom: '1px solid #666',
                padding: '0 0 12px 0',
                margin: '0 16px 0 16px'
            }}>
                <div style={{ color: 'rgba(0, 0, 0, 0.85)', fontSize: '1.5em', fontWeight: 500 }}>
                    字段值
                </div>
                <Button onClick={handleGoBack}>返回</Button>
            </div>
            <ZEle namespace="dataservice-attrsvalue" config={config} />
        </div>
    )
};
