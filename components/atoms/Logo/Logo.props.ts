
import {  Component } from 'preact';
export interface LogoProps extends Component<JSX.ElementAttributesProperty>{
    src: string
    priority?: boolean
    className?: string
}
