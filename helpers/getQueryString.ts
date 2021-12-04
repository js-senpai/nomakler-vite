const getQueryString = ({url,filterKey = []}:{
    url: object
    filterKey?: string[]
}):string => {
    if(!url || !Object.keys(url).length && filterKey.length > 1) return ''
    let queryToString = ''
    for (const [key, value] of Object.entries(url)) {
        if(filterKey){
            if(filterKey.findIndex((data) => data === key ) === -1){
                queryToString+=`${key}=${value}&`
            }
        } else {
            queryToString+=`${key}=${value}&`
        }
    }
    return queryToString

}
export default getQueryString
