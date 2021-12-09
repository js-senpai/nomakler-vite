import { ButtonWithIconProps } from "./ButtonWithIcon.props";
import "./ButtonWithIcon.sass";

export default ({
  text = "",
  className = "",
  children,
  position = "left",
  ...props
}: ButtonWithIconProps): JSX.Element => {
  return (
    <button
      {...props}
      type="button"
      className={`button-with-icon ${className} ${
        position === "left" ? "left" : "right"
      }`}
    >
      <div className="button-with-icon__icon">{children}</div>
      <div className="button-with-icon__text">{text}</div>
    </button>
  );
};
