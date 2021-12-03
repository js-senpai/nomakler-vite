import InputWithIcon from "../../../../atoms/Input/InputWithIcon";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {SearchButtonProps} from "./SearchButton.props";


const SearchButton = ({text = '',onSend,onText, className}:SearchButtonProps):JSX.Element => {
  return (
    <InputWithIcon text={text} onSend={onSend} onText={onText} className={className} >
        <FontAwesomeIcon icon={faSearch} />
    </InputWithIcon>
  )
}
export default SearchButton
