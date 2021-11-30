import {  useState } from "preact/hooks";
import {ButtonWithListProps} from "./ButtonWithList.props";
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import styles from './ButtonWithList.module.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const ButtonWithList = ({ text = '',className = '',children, ...props }:ButtonWithListProps) => {
        const [showContainer,toggleContainer] = useState(false)
        return (
            <button
                type="button"
                className={`${styles.buttonWithList} ${showContainer ? styles.active : ''} ${className}`}
                onClick={() => toggleContainer(!showContainer)}
            >
                <div className={`${styles.buttonWithList__text}`}>{text}</div>
                <FontAwesomeIcon className={styles.buttonWithList__icon} icon={faSortDown} />
                <div
                    className={`${styles.buttonWithList__container} ${showContainer ? styles.show : ''}`}
                >
                    {children}
                </div>
            </button>
        )
    }
export default ButtonWithList
