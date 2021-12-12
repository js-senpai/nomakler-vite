export interface FilterButtonProps {
   list: FilterButtonType[]
   chooseData: Function
   currentData: FilterButtonType
   className?: string
   icon?:  IconProp
}

export interface FilterButtonType {
    key: string
    value: string | number

}
