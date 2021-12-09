import { useState } from "preact/hooks";
import "./Header.sass";
import { HeaderProps } from "./Header.props";
import ButtonBurger from "../../molecules/Header/Button/ButtonBurger";
import LanguageList from "../../molecules/Header/LanguageList";
import Menu from "../../molecules/Header/Menu";
import Logo from "../../atoms/Logo";
import ButtonSign from "../../molecules/Header/Button/ButtonSign";
export default ({
  header: { menu = [], src = "/images/atoms/Logo/LogoLight.svg" },
  className = "",
  ...props
}: HeaderProps): JSX.Element => {
  const [showMenu, setMenu] = useState(false);
  return (
    <header {...props} className={`header ${className}`}>
      <div className="container header__container">
        <ButtonBurger active={showMenu} toggle={setMenu} />
        <div className="header__logo">
          <Logo src={src} />
        </div>
        <div className={`header__wrapper ${showMenu ? "active" : ""}`}>
          {menu.length ? <Menu menu={menu} /> : null}
        </div>
        <LanguageList />
        <ButtonSign className="header__button-auth" />
      </div>
    </header>
  );
};
