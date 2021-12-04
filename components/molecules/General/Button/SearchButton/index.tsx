import InputWithIcon from "../../../../atoms/Input/InputWithIcon";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {SearchButtonProps} from "./SearchButton.props";
import styles from './SearchButton.module.sass'

const SearchButton = ({text = '',onSend,onText, className}:SearchButtonProps):JSX.Element => {
  return (
    <InputWithIcon position="right" text={text} onSend={onSend} onText={onText} className={`${styles.searchButton} ${className}`} >
        <FontAwesomeIcon icon={faSearch} />
    </InputWithIcon>
  )
}
export default SearchButton
