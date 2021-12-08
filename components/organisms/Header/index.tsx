import { useState} from 'preact/hooks';
import './Header.sass'
import {HeaderProps} from "./Header.props";
import ButtonBurger from "../../molecules/Header/Button/ButtonBurger";
import Logo  from "../../atoms/Logo";
import LanguageList from "../../molecules/Header/LanguageList";
import Menu from "../../molecules/Header/Menu";
import ButtonSign from "../../molecules/Header/Button/ButtonSign";
export default function Header ({ header: {menu = [],src = '/images/atoms/Logo/LogoLight.svg'},className = '',...props}:HeaderProps):JSX.Element  {
   const [showMenu,setMenu] = useState(false)
   return(
       <header {...props} className="header">
         <div className="container header__container">
             <ButtonBurger  active={showMenu} toggle={setMenu} />
             <div className="header__logo">
                 <Logo src={src}  />
             </div>
             <div className={`header__wrapper ${showMenu ? 'active': ''}`}>
                 {/*<div className="flex justify-end">*/}
                 {/*    <button className={styles.header__btnClose} onClick={() => toggleMenu()}>*/}
                 {/*        <FontAwesomeIcon icon={faTimes} />*/}
                 {/*    </button>*/}
                 {/*</div>*/}
                 {menu.length ?<Menu menu={menu} />: null}
             </div>
             <LanguageList />
             <ButtonSign className="header__button-auth" />
         </div>
       </header>
   )
}
