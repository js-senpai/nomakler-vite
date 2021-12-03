
import {ButtonWithIconProps} from "./ButtonWithIcon.props";
import styles from './ButtonWithIcon.module.sass'

const ButtonWithIcon =  ({text = '', className = '',children, position = 'left', ...props }: ButtonWithIconProps) => {
        return (
            <button
                type="button"
                className={`${styles.buttonWithIcon} ${className} ${position === 'left' ? styles.buttonWithIcon__left: styles.buttonWithIcon__right}`}
            >
                <div className={styles.buttonWithIcon__icon}>{children}</div>
                <div className={`${styles.buttonWithIcon__text}`}>{text}</div>
            </button>
        )
    }
export default ButtonWithIcon
