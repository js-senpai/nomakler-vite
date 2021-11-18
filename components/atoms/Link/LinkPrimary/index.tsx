
import styles from './LinkPrimary.module.sass'
import {Link} from "../../../../renderer/Link";
import React from 'react';
const LinkPrimary = ({url = '/',className = '',...props}):JSX.Element => {
    return (
        <Link {...props} className={`${styles.linkPrimary} ${className}`}  href={url}>
            {props.children}
        </Link>
    )
}
export default LinkPrimary
