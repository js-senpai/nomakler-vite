import styles from './CatalogHeader.module.sass'
import SearchButton from "../../../molecules/General/Button/SearchButton";
import FilterButton from "../../../molecules/General/Button/FilterButton";
import {useState} from "preact/hooks";
import ButtonPrimary from "../../../atoms/Button/ButtonPrimary";
import {CatalogHeaderProps} from "./CatalogHeader.props";
const CatalogHeader = ({statusList = [],typeList = [],className = ''}:CatalogHeaderProps):JSX.Element => {
    /* Filters */
    // Search
    const [searchText,setSearch] = useState('')
    // Status
    const [status,setStatus] = useState({id: 0, key: 'Status',value: 'status'})
    // Type
    const [type,setType] = useState({id: 0, key: 'Types',value: 'types'})
    return (
        <div className={`${styles.catalogHeader} ${className}`}>
            <SearchButton  onSend={() => {}} onText={setSearch} text={searchText}/>
            {statusList.length ? <FilterButton list={statusList} chooseData={setStatus} currentData={status} />: null}
            {typeList.length ? <FilterButton list={typeList} chooseData={setType} currentData={type} />: null}
            <ButtonPrimary>Find</ButtonPrimary>
        </div>
    )
}

export default CatalogHeader
