import "./Breadcrumb.sass";
import { BreadcrumbProps } from "./Breadcrumb.props";
import Link from "../../../atoms/Link/Link";
export default ({
  navigation = [],
  className = "",
}: BreadcrumbProps): JSX.Element => {
  return (
    <ul className={`breadcrumb ${className}`}>
      {navigation.length
        ? navigation.map(({ id, name, url }, index) => (
            <li key={id}>
              {index + 1 !== navigation.length ? (
                <>
                  <Link href={url}>{name}</Link>
                  <span>/</span>
                </>
              ) : (
                <span>{name}</span>
              )}
            </li>
          ))
        : null}
    </ul>
  );
};
