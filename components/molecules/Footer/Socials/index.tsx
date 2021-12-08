import {SocialsProps} from "./Socials.props";
import  './Socials.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Socials = ({socials = [],className = '',...props}:SocialsProps):JSX.Element => {
    const GetIcon = ({icon = ''}) => {
        const faIcon = icon.split(' ') || ['fab','instagram']
        // @ts-ignore
        return <FontAwesomeIcon icon={faIcon}/>
    }
    return (
        <ul {...props} className="socials">
            {
                socials.map(({id,icon, url}) => (
                    <li className="socials__item" key={id}>
                        <a href={url}>
                            <GetIcon icon={icon} />
                        </a>
                    </li>
                ))
            }
        </ul>
    )
}
export default Socials
