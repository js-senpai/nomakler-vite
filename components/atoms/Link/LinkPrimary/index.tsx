import "./LinkPrimary.sass";
import Link from "../Link";
import { LinkPrimaryProps } from "./LinkPrimary.props";

export default ({
  url = "/",
  className = "",
  children,
  ...props
}: LinkPrimaryProps): JSX.Element => {
  return (
    <Link {...props} className={`link-primary ${className}`} href={url}>
      {children}
    </Link>
  );
};
