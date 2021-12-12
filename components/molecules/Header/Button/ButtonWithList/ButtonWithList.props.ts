import {ComponentChildren} from "preact";



export interface ButtonWithListProps {
    text: string
    icon?: IconProp
    children: ComponentChildren
    className?: string
}
