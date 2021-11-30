import {faBars,faTimes} from "@fortawesome/free-solid-svg-icons";
import styles from './ButtonBurger.module.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const ButtonBurger = ({ active = false,className = '', ...props }) => {
        return (
            <button
                type="button"
                className={`${styles.buttonBurger}`}
            >
                {
                    active ? <FontAwesomeIcon icon={faTimes} />: <FontAwesomeIcon icon={faBars} />
                }
            </button>
        )
    }
export default ButtonBurger
