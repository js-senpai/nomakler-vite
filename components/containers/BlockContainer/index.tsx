
import  './BlockContainer.sass'
import {BlockContainerProps} from "./BlockContainer.props";
export default function BlockContainer ({children,className = '',...props}:BlockContainerProps):JSX.Element  {
    return (
        <div {...props} className={`block-container ${className}`}>
            {children}
        </div>
    )
}
