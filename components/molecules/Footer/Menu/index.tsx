import { MenuProps } from "./Menu.props";
import "./Menu.sass";
import Link from "../../../atoms/Link/Link";

export default ({
  menu = [],
  className = "",
  ...props
}: MenuProps): JSX.Element => {
  return (
    <ul {...props} className={`menu ${className}`}>
      {menu.length
        ? menu.map(({ id, url, text }) => (
            <li className="menu__item" key={id}>
              <Link href={url}>{text}</Link>
            </li>
          ))
        : null}
    </ul>
  );
};
