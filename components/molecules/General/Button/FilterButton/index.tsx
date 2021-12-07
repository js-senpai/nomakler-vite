import {useCallback, useMemo} from "preact/hooks";
import {FilterButtonProps} from "./FilterButton.props";
import ButtonWithList from "../../../Header/Button/ButtonWithList";
import styles from './FilterButton.module.sass'
const FilterButton = ({list = [],chooseData,currentData,className = '',...props}:FilterButtonProps) => {
    // Get filtered list
    const filteredList = useMemo(() => list.filter(({key}) => key !== currentData.key),[list,currentData] )
    const setValue = useCallback(chooseData,[list,currentData])
    return (
        <ButtonWithList {...props} className={`${styles.filterButton} ${className}`} text={currentData.key} >
            {
                filteredList.length ?
                    filteredList.map(({key,value}) => (
                        <div className={styles.filterButton__item} key={key} onClick={() => setValue({key,value})}>
                            {key}
                        </div>
                    ))
                    : null
            }
        </ButtonWithList>
    )
}
export default FilterButton
