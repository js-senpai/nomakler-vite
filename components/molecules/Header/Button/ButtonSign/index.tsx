import ButtonWithIcon from "../../../../atoms/Button/ButtonWithIcon";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default (props: any): JSX.Element => {
  return (
    <ButtonWithIcon {...props} text="Sign In/Login In">
      <FontAwesomeIcon icon={faUser} />
    </ButtonWithIcon>
  );
};
