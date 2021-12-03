import styles from './CatalogHeader.module.sass'
import SearchButton from "../../../molecules/General/Button/SearchButton";
import FilterButton from "../../../molecules/General/Button/FilterButton";
import {useState} from "preact/hooks";
import ButtonWithIcon from "../../../atoms/Button/ButtonWithIcon";
import {faFilter} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ButtonPrimary from "../../../atoms/Button/ButtonPrimary";
const CatalogHeader = ({statusList = [],typeList = []}) => {
    /* Filters */
    // Search
    const [searchText,setSearch] = useState('')
    // Status
    const [status,setStatus] = useState({id: 0, key: 'Status',value: 'status'})
    // Type
    const [type,setType] = useState({id: 0, key: 'Types',value: 'types'})
    return (
        <div className={styles.catalogHeader}>
            <SearchButton  onSend={() => {}} onText={setSearch} text={searchText}/>
            <FilterButton list={statusList} chooseData={setStatus} currentData={status} />
            <FilterButton list={typeList} chooseData={setType} currentData={type} />
            <ButtonPrimary>Find</ButtonPrimary>
        </div>
    )
}

export default CatalogHeader
