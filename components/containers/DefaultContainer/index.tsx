import { DefaultContainerProps } from "./DefaultContainer.props";
import "./DefaultContainer.sass";

export default ({
  children,
  className = "",
}: DefaultContainerProps): JSX.Element => {
  return (
    <div className={`container main-container ${className}`}>{children}</div>
  );
};
