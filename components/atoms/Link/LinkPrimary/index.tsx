import  './LinkPrimary.sass'
import Link from "../Link";

export default function  LinkPrimary ({url = '/',className = '',...props}):JSX.Element {
    return (
        <Link {...props} className={`link-primary ${className}`}  href={url}>
            {props.children}
        </Link>
    )
}
