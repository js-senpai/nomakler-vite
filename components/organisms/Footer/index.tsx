// Import components
import {FooterProps} from "./Footer.props";
// Import components
import styles from './Footer.module.sass'
import DefaultContainer from "../../containers/DefaultContainer";

import Logo from "../../atoms/Logo";
import Menu from "../../molecules/Footer/Menu";
import Copyright from "../../molecules/Footer/Copyright";
import Socials from "../../molecules/Footer/Socials";
const Footer = ({footer:{
    logo = '/images/atoms/Logo/LogoDark.svg',
    socials = [],
    menu = [],
    infoMenu = [],
},...props}:FooterProps):JSX.Element => {
    return (
        <footer {...props} className={`${styles.footer}`}>
            <DefaultContainer className={`${styles.footer__container}`}>
                <div className={`${styles.footer__item}`}>
                    <div className={`${styles.footer__logo}`}>
                        <Logo src={logo} />
                    </div>
                    <div className={`${styles.footer__socials}`}>
                        {
                            socials.length ? <Socials  socials={socials} />: null
                        }
                    </div>
                </div>
                <div className={`${styles.footer__item}`}>
                    {
                        menu.length ? <Menu menu={menu} />: null
                    }
                </div>
                <div className={`${styles.footer__item} ${styles.footer__itemLast}`}>
                    {
                        infoMenu.length ? <Menu menu={infoMenu} />: null
                    }
                    <div className={`${styles.footer__copyright}`}>
                        <Copyright />
                    </div>
                </div>
            </DefaultContainer>
        </footer>
    )
}
export default Footer
