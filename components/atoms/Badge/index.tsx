import './Badge.sass'
import {BadgeProps} from "./BadgeProps";
export default function Badge({children,className = '',...props}:BadgeProps):JSX.Element {
    return (
        <div {...props} className={`badge ${className}`}>{children}</div>
    )
}
