import "./Badge.sass";
import { BadgeProps } from "./BadgeProps";
export default ({
  children,
  className = "",
  ...props
}: BadgeProps): JSX.Element => {
  return (
    <div {...props} className={`badge ${className}`}>
      {children}
    </div>
  );
};
