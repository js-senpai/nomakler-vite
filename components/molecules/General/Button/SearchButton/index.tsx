import InputWithIcon from "../../../../atoms/Input/InputWithIcon";
import {SearchButtonProps} from "./SearchButton.props";
import styles from './SearchButton.module.sass'

const SearchButton = ({text = '',onSend,onText, className}:SearchButtonProps):JSX.Element => {
  return (
    <InputWithIcon position="right" text={text} onSend={onSend} onText={onText} className={`${styles.searchButton} ${className}`} >
    </InputWithIcon>
  )
}
export default SearchButton
