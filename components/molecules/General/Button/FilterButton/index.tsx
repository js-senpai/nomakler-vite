import {useCallback, useMemo} from "preact/hooks";
import {FilterButtonProps} from "./FilterButton.props";
import ButtonWithList from "../../../Header/Button/ButtonWithList";
import  './FilterButton.sass'
export default function FilterButton ({list = [],chooseData,currentData,className = '',...props}:FilterButtonProps)  {
    const setValue = useCallback(chooseData,[currentData])
    return (
        <ButtonWithList {...props} className={`button-filter ${className}`} text={currentData.key} >
            {
                list.length ?
                    list.map(({key,value}) => (
                        <div className="button-filter__item" key={key} onClick={() => setValue({key,value})}>
                            {key}
                        </div>
                    ))
                    : null
            }
        </ButtonWithList>
    )
}

