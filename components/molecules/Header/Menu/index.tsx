
import {MenuProps} from "./Menu.props";
import styles from './Menu.module.sass'
import {Link} from "../../../atoms/Link/Link";
const Menu = ({menu = []}:MenuProps):JSX.Element => {

    return (
        <ul  className={`${styles.headerMenu}`}>
            {
                menu.length ? menu.map(({id, url,text})=>(
                    <li key={id} className={`${styles.headerMenu__item}`}>
                        <Link  href={url}>{text}</Link>
                    </li>
                )): null
            }
        </ul>
    )
}
export default Menu
