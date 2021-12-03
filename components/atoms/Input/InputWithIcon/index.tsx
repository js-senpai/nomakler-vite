import styles from "./InputWithIcon.module.sass";
import {  useCallback } from "preact/hooks";
import {InputWithIconProps} from "./InputWithIcon.props";
const InputWithIcon =  ({text = '',onSend,onText, className = '',children, position = 'left', ...props }: InputWithIconProps) => {
    const setText = useCallback(onText,[text])
    return (
        <div
            className={`${styles.inputWithIcon} ${className} ${position === 'left' ? styles.inputWithIcon__left: styles.inputWithIcon__right}`}
        >
            <button onClick={() => onSend(text)} className={styles.inputWithIcon__icon}>{children}</button>
            <input type="search" className={`${styles.inputWithIcon__text}`} value={text} placeholder="Search" onInput={(e) => setText(e.target.value)}  />
        </div>
    )
}
export default InputWithIcon
