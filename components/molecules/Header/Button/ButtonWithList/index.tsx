import {  useState } from "preact/hooks";
import {ButtonWithListProps} from "./ButtonWithList.props";
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import styles from './ButtonWithList.module.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect,useRef } from "preact/hooks";
const ButtonWithList = ({ text = '',className = '',children,icon , ...props }:ButtonWithListProps) => {
        const [showContainer,toggleContainer] = useState(false)
        const btnRef = useRef();
        const handleClick = (e: { target: any; }) => {
            // @ts-ignore
            if (btnRef.current.contains(e.target)) {
                // inside click
                return;
            }
            toggleContainer(false)
        };
        // Close list when user click outside container
        useEffect(() => {
            document.addEventListener('click', handleClick, true);
            return () => {
                document.removeEventListener('click', handleClick, true);
            }
        },[])
        return (
                <button
                    {...props}
                    // @ts-ignore
                    ref={btnRef}
                    type="button"
                    className={`${styles.buttonWithList} ${showContainer ? styles.active : ''} ${className}`}
                    onClick={() => toggleContainer(!showContainer)}
                >
                    <div className={`${styles.buttonWithList__text}`}>{text}</div>
                    <FontAwesomeIcon className={styles.buttonWithList__icon} icon={icon || faSortDown} />
                    <div
                        className={`${styles.buttonWithList__container} ${showContainer ? styles.show : ''}`}
                    >
                        {children}
                    </div>
                </button>
            )
    }
export default ButtonWithList
