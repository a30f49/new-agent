import React, { useState, useMemo, useEffect } from 'react';
import { LS } from 'zero-element/lib/utils/storage';

import DynamicPage from '@/components/DynamicPage';
import useQuery from '../hooks/useQuery'  
const pageUrl = '/forms'

export default () => {

  const [namespace, setNamespace] = useState('dynamicPage')
  const [pageConfigUrl, setPageConfigUrl] = useState('')

  // get query params from url
  const pageId = useMemo(() => {
    const queryData = useQuery()
    const { id, pageId } = queryData
    return pageId || id
  }, [])
  // console.log('pageId', pageId)

  useEffect( () => {
    if (pageId) {
      setNamespace(`dynamicPage_${pageId}`)
      setPageConfigUrl(`${pageUrl}?id=${pageId}`)
      
      LS.set('currentPageId', pageId)
    }
  }, [pageId]);

  return <DynamicPage pageConfigNs={namespace} pageConfigApi={pageConfigUrl} pageConfigData={{}} />
};
