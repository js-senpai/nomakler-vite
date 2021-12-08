import {usePageContext} from "../../../../renderer/usePageContext";
import {PageContext} from "../../../../renderer/types";


export default function Link(props) {
    const pageContext:PageContext = usePageContext();
    const className = [props.className, pageContext.urlPathname === props.href && "is-active"]
        .filter(Boolean)
        .join(" ");
    return <a {...props} className={className} />;
}
