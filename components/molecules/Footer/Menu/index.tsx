
import {MenuProps} from "./Menu.props";
import styles from './Menu.module.sass'
import {Link} from "../../../../renderer/Link";
import React from "react";
const Menu = ({menu = [],className = '',...props}:MenuProps):JSX.Element => {
    return (
        <ul {...props} className={`${styles.menu} ${className}`}>
            {
                menu.length ?
                    menu.map(({id,url,text}) => (
                        <li className={`${styles.menu__item}`} key={id}>
                            <Link href={url}>{text}</Link>
                        </li>
                    ))
                : null
            }
        </ul>
    )
}
export default Menu
