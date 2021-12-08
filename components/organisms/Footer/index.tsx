// Import components
import {FooterProps} from "./Footer.props";
// Import components
import  './Footer.sass'
import Logo from "../../atoms/Logo";
import Menu from "../../molecules/Footer/Menu";
import Copyright from "../../molecules/Footer/Copyright";
import Socials from "../../molecules/Footer/Socials";
export default function Footer  ({footer:{
    logo = '/images/atoms/Logo/LogoDark.svg',
    socials = [],
    menu = [],
    infoMenu = [],
},className = '',...props}:FooterProps):JSX.Element  {
    return (
        <footer {...props} className={`footer ${className}`}>
            <div className="container footer__container">
                <div className="footer__item">
                    <div className="footer__logo">
                        <Logo src={logo} />
                    </div>
                    <div className="footer__socials">
                        {
                            socials.length ? <Socials  socials={socials} />: null
                        }
                    </div>
                </div>
                <div className="footer__item">
                    {
                        menu.length ? <Menu menu={menu} />: null
                    }
                </div>
                <div className="footer__item footer__item--last">
                    {
                        infoMenu.length ? <Menu menu={infoMenu} />: null
                    }
                    <div className="footer__copyright">
                        <Copyright />
                    </div>
                </div>
            </div>
        </footer>
    )
}
