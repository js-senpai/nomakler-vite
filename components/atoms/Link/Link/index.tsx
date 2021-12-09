import { usePageContext } from "../../../../renderer/usePageContext";
import { PageContext } from "../../../../renderer/types";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default (props: any): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const pageContext: PageContext = usePageContext();
  const className = [
    props.className,
    pageContext.urlPathname === props.href && "is-active",
  ]
    .filter(Boolean)
    .join(" ");
  return <a {...props} className={className} />;
};
