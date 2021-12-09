import { MenuProps } from "./Menu.props";
import "./Menu.sass";
import Link from "../../../atoms/Link/Link";
export default ({
  menu = [],
  className = "",
  ...props
}: MenuProps): JSX.Element => {
  return (
    <ul {...props} className={`header-menu ${className}`}>
      {menu.length
        ? menu.map(({ id, url, text }) => (
            <li key={id} className="header-menu__item">
              <Link href={url}>{text}</Link>
            </li>
          ))
        : null}
    </ul>
  );
};
