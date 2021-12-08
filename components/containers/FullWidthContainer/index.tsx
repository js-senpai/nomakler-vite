import {FullWidthContainerProps} from "./FullWidthContainer.props";
import './FullWidthContainer.sass'


export default function FullWidthContainer ({children,className = ''}:FullWidthContainerProps):JSX.Element  {
    return (
        <div className={`full-width-container mx-auto ${className}`}>{children}</div>
    )
}
