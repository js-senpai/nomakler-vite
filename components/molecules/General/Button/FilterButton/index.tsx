import {useCallback, useMemo} from "preact/hooks";
import {FilterButtonProps} from "./FilterButton.props";
import ButtonWithList from "../../../Header/Button/ButtonWithList";
import styles from './FilterButton.module.sass'
const FilterButton = ({list = [],chooseData,currentData,className = ''}:FilterButtonProps) => {
    // Get filtered list
    const filteredList = useMemo(() => list.filter(({key}) => key !== currentData.key),[list,currentData] )
    const setValue = useCallback(chooseData,[list,currentData])
    return (
        <ButtonWithList className={`${styles.filterButton} ${className}`} text={currentData.key} >
            {
                filteredList.length ?
                    filteredList.map(({id,key,value}) => (
                        <div key={id} onClick={() => setValue({id,key,value})}>
                            {key}
                        </div>
                    ))
                    : null
            }
        </ButtonWithList>
    )
}
export default FilterButton
