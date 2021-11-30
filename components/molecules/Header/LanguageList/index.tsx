
import styles from './LanguageList.module.sass'
import ButtonWithList from "../Button/ButtonWithList";

const LanguageList = ():JSX.Element =>{
    // Toggle language container
    const locales = ['ru','en']
    return (
        <ButtonWithList className={styles.languageList} text="ru" >
            {
                locales.length ? locales.map((lang,index) => (
                    <div key={index} className="langSwitcher__item">
                            {lang}
                    </div>
                )): null
            }
        </ButtonWithList>
    )
}

export default LanguageList
