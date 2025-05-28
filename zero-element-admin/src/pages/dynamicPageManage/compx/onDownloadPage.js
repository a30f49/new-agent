import { message as msg } from 'antd';
import { get as getEndpoint } from 'zero-element/lib/utils/request/endpoint';
import { query as queryMethod, update, post } from 'zero-element/lib/utils/request';
const endpoint = getEndpoint()


export default function onDownloadPage(props) {
  const {
    options,
    record
  } = props;
  const {
    API='',
    toConfigAPI='/toconfig',
    message = '操作成功',
    query = {
      id: 'id'
    }
  } = options;

  // console.log(data)
  
  function getPageConfig() {
    msg.info('正在处理数据')
    // const apiUrl = `https://api.mock.smallsaas.cn/data`;
    let endpoint = getEndpoint()
    const apiUrl = `${endpoint}${toConfigAPI}`; //转换地址
    const pageUrl = `${endpoint}${API}`;
    // const pageUrl = `${endpoint}${pageEndpoint}`;//页面api获取地址
    queryMethod(pageUrl, {/* id:id */ })
      .then(resp => {
        const restData = resp.data
        if (restData && restData.code === 200) {
          const Listdata = restData.data;

          let options = {
            method: "post"
          }
          post(apiUrl, Listdata, options)
            .then(resp => {
              // console.log(value,"VALUE")
              const restData = resp.data
              if (restData.code === 200) {
                const data = restData.data;
                // console.log(' 页面配置信息 = ', data)
                handleDownloadPage(data)
              } else {
                msg.error('获取页面配置信息失败')
              }
            })
            .catch(value => {

            })
        } else {
          msg.error('获取页面配置信息失败')
        }
      }).catch(err => {
        msg.error('获取页面配置信息失败 = ', err)
      })
  }

  function handleDownloadPage(data) {
    const cutString = data.createAPI
    const fileName = cutString.substring(cutString.lastIndexOf('/')+1, cutString.length)
    const apiUrl = `${getEndpoint()}/api/crud/lowMainPage/pageConfig/${fileName}`; //转换地址
    let options = {
      method: "post"
    }
    return post(endpoint+ apiUrl, data, options)
    .then(resp => {
      // console.log(value,"VALUE")
      const restData = resp.data
      if (restData.code === 200) {
        msg.info('数据处理完成')
        const data = restData.data;
        downloadFileAction(data)
        console.log(' 下载地址 = ', data)
      } else {
        msg.error('下载失败')
      }
    })
    .catch(value => {

    })
  }

  function downloadFileAction (content) {
    let path = `${getEndpoint()}/${content}`
    const w = window.open('about:blank');
    w.location.href = path
  }


  return getPageConfig(); 
}
