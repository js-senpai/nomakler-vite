export interface FilterButtonProps {
   list: FilterButtonType[],
   chooseData: Function
   currentData: FilterButtonType
}

interface FilterButtonType {
    id: string | number
    key: string
    value: string | number
}
