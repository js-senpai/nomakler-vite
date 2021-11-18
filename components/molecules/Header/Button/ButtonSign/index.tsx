import ButtonWithIcon from "../../../../atoms/Button/ButtonWithIcon";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
const ButtonSign = ({...props}):JSX.Element => {
    return(
        <ButtonWithIcon {...props} text="Sign In/Login In">
            <FontAwesomeIcon icon={faUser} />
        </ButtonWithIcon>
    )
}

export default ButtonSign
