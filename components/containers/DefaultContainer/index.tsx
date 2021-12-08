import {DefaultContainerProps} from "./DefaultContainer.props";
import './DefaultContainer.sass'

export default function DefaultContainer  ({children,className = ''}:DefaultContainerProps):JSX.Element  {
    return (
        <div className={`container main-container ${className}`}>{children}</div>
    )
}

