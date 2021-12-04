export interface FilterButtonProps {
   list: FilterButtonType[]
   chooseData: Function
   currentData: FilterButtonType
   className?: string
}

export interface FilterButtonType {
    id: string | number
    key: string
    value: string | number
}
