import {FilterButtonType} from "../../../molecules/General/Button/FilterButton/FilterButton.props";

export interface CatalogHeaderProps {
    statusList: FilterButtonType[]
    typeList: FilterButtonType[]
    extendedList: FilterButtonType[]
    className?: string
}
