import {ComponentChildren} from "preact";

export interface InputWithIconProps{
    text: string
    onSend: Function
    onText: Function
    position?: string
    className?: string
    children: ComponentChildren
}
