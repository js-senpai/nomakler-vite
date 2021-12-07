import {useCallback, useMemo} from "preact/hooks";
import {FilterButtonProps} from "./FilterButton.props";
import ButtonWithList from "../../../Header/Button/ButtonWithList";
import styles from './FilterButton.module.sass'
const FilterButton = ({list = [],chooseData,currentData,className = '',...props}:FilterButtonProps) => {
    const setValue = useCallback(chooseData,[currentData])
    return (
        <ButtonWithList {...props} className={`${styles.filterButton} ${className}`} text={currentData.key} >
            {
                list.length ?
                    list.map(({key,value}) => (
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
