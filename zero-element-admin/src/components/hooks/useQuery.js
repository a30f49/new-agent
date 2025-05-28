/**
 * 返回url的参数字典
 * @returns 
 */

export default function useQuery() {

    function useQuery(queryStringAfterQuestionMark) {
        if (queryStringAfterQuestionMark) {
            const res = {}
            if (queryStringAfterQuestionMark.indexOf('&') != -1) {
                // console.log('queryStringAfterQuestionMark ==', queryStringAfterQuestionMark)
                const dsArray = queryStringAfterQuestionMark.split('&')
                dsArray.map(item => {
                    const dsItemArray = item.split('=')
                    res[dsItemArray[0]] = dsItemArray[1]
                })
            } else {
                const dString = queryStringAfterQuestionMark.split('=')
                res[dString[0]] = dString[1]
            }
            return res
        } else {
            return {}
        }
    }

    // start main
    // const pageId = window.location.search.replace('?', '').split("=")[1];
    // const searching = (typeof props == 'object' ) ? (props.search || props.location.search) : props  //pure location string
    // const pathname = (typeof props === 'object') ?  (props.pathname || props.location.pathname) : undefined

    const searching = window.location.search || window.location.href;
    const res = (searching.indexOf('?') != -1) ? searching.split('?')[1] : searching
    return useQuery(res)
}
