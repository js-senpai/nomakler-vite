import InputWithIcon from "../../../../atoms/Input/InputWithIcon";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SearchButtonProps } from "./SearchButton.props";
import "./SearchButton.sass";

export default ({
  text = "",
  onSend,
  onText,
  className,
}: SearchButtonProps): JSX.Element => {
  return (
    <InputWithIcon
      position="right"
      text={text}
      onSend={onSend}
      onText={onText}
      className={`button-search ${className}`}
    >
      <FontAwesomeIcon icon={faSearch} />
    </InputWithIcon>
  );
};
