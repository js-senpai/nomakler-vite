import "./InputWithIcon.sass";
import { useCallback } from "preact/hooks";
import { InputWithIconProps } from "./InputWithIcon.props";
export default ({
  text = "",
  onSend,
  onText,
  className = "",
  children,
  position = "left",
  ...props
}: InputWithIconProps): JSX.Element => {
  const setText = useCallback(onText, [text]);
  return (
    <div
      {...props}
      className={`input-with-icon ${className} ${
        position === "left" ? "left" : "right"
      }`}
    >
      <button onClick={() => onSend(text)} className="input-with-icon__icon">
        {children}
      </button>
      <input
        type="search"
        className="input-with-icon__text"
        value={text}
        placeholder="Search"
        /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
        // @ts-ignore
        onInput={(e) => setText(e.target.value)}
      />
    </div>
  );
};
