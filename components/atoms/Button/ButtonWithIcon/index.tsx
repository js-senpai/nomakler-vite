import {ButtonWithIconProps} from "./ButtonWithIcon.props";
import styles from './ButtonWithIcon.sass'

export default function ButtonWithIcon ({text = '', className = '',children, position = 'left', ...props }: ButtonWithIconProps)  {
        return (
            <button
                {...props}
                type="button"
                className={`button-with-icon ${className} ${position === 'left' ? 'left': 'right'}`}
            >
                <div className="button-with-icon__icon">{children}</div>
                <div className="button-with-icon__text">{text}</div>
            </button>
        )
    }
