import {useCallback, useEffect, useRef, useState} from 'preact/hooks';
import styles from './Header.module.sass'
import {HeaderProps} from "./Header.props";
import ButtonBurger from "../../molecules/Header/Button/ButtonBurger";
import Logo from "../../atoms/Logo";
import LanguageList from "../../molecules/Header/LanguageList";
import Menu from "../../molecules/Header/Menu";
import ButtonSign from "../../molecules/Header/Button/ButtonSign";
const Header = ({ header: {menu = [],src = '/images/atoms/Logo/LogoLight.svg'},...props}:HeaderProps):JSX.Element => {
   const [showMenu,setMenu] = useState(false)
   return(
       <header className={styles.header}>
         <div className={`container ${styles.header__container}`}>
             <ButtonBurger  active={showMenu} toggle={setMenu} />
             <div className={`${styles.header__logo}`}>
                 <Logo src={src}  />
             </div>
             <div className={`${styles.header__wrapper} ${showMenu ? styles.active: ''}`}>
                 {menu.length ?<Menu menu={menu} />: null}
             </div>
             <LanguageList />
             <ButtonSign className={`${styles.header__btnAuth}`} />
         </div>
       </header>
   )
}
export default Header
