import styles from './CatalogHeader.module.sass'
import SearchButton from "../../../molecules/General/Button/SearchButton";
import FilterButton from "../../../molecules/General/Button/FilterButton";
import {useMemo, useState} from "preact/hooks";
import ButtonPrimary from "../../../atoms/Button/ButtonPrimary";
import {CatalogHeaderProps} from "./CatalogHeader.props";
import getQueryString from "../../../../helpers/getQueryString";
import {PageContext} from "../../../../renderer/types";
import {usePageContext} from "../../../../renderer/usePageContext";
import { navigate } from "vite-plugin-ssr/client/router";
const CatalogHeader = ({statusList = [],typeList = [],className = ''}:CatalogHeaderProps):JSX.Element => {
    // @ts-ignore
    const pageContext:PageContext = usePageContext();
    // @ts-ignore
    const getQueries = useMemo(() => pageContext?.urlParsed?.search || {},[pageContext?.urlParsed?.search])
    /* Filters */
    // Search
    const [searchText,setSearch] = useState('')
    // Status
    const [status,setStatus] = useState(getQueries.status ? { key: 'Status', value: getQueries.status } : { key: 'Status',value: 'not_set'})
    // Type
    const [type,setType] = useState(getQueries.type ? { key: 'Type', value: getQueries.type } : { key: 'Type',value: 'not_set'})
    // Submit filters
    const submitFilters = () => {
        let url = `${pageContext.urlPathname}${Object.keys(getQueries).length?`?${getQueryString({url:getQueries,filterKey: ['status','type']})}`:'?'}`
        if(searchText){
            url += `q=${searchText}&`
        }
        if(type.value && type.value !== 'not_set'){
            url += `type=${type.value}&`
        }
        if(status.value && status.value !== 'not_set'){
            url += `status=${type.value}`
        }
        navigate(url, { keepScrollPosition: true })
    }
    return (
        <div className={`${styles.catalogHeader} ${className}`}>
            <SearchButton  onSend={() => {}} onText={setSearch} text={searchText}/>
            {statusList.length ? <FilterButton list={statusList} chooseData={setStatus} currentData={status} />: null}
            {typeList.length ? <FilterButton list={typeList} chooseData={setType} currentData={type} />: null}
            <ButtonPrimary onClick={() => submitFilters()}>Find</ButtonPrimary>
        </div>
    )
}

export default CatalogHeader
