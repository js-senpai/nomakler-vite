import { useCallback, useState } from "preact/hooks";
import { ButtonWithListProps } from "./ButtonWithList.props";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import "./ButtonWithList.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "preact/hooks";
export default ({
  text = "",
  className = "",
  children,
  icon,
  ...props
}: ButtonWithListProps): JSX.Element => {
  const [showContainer, toggleContainer] = useState(false);
  const btnRef = useRef();
  const handleClick = (e: { target: any }) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (btnRef.current.contains(e.target)) {
      // inside click
      return;
    }
    toggleContainer(false);
  };
  // Close list when user click outside container
  useEffect(() => {
    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, []);
  const toggleList = useCallback(
    () => toggleContainer(!showContainer),
    [showContainer]
  );
  return (
    <div
      className={`button-with-list ${
        showContainer ? "active" : ""
      } ${className}`}
    >
      <button
        {...props}
        /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
        // @ts-ignore
        ref={btnRef}
        type="button"
        className={`button-with-list__btn`}
        onClick={() => toggleList()}
      >
        <div className="button-with-list__text">{text}</div>
        <FontAwesomeIcon
          className="button-with-list__icon"
          icon={icon || faSortDown}
        />
      </button>
      <div
        className={`button-with-list__container ${showContainer ? "show" : ""}`}
      >
        {children}
      </div>
    </div>
  );
};
