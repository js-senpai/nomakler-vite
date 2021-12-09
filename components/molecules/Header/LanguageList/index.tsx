import "./LanguageList.sass";
import ButtonWithList from "../Button/ButtonWithList";

export default (): JSX.Element => {
  // Toggle language container
  const locales = ["ru", "en"];
  return (
    <ButtonWithList className="language-list" text="ru">
      {locales.length
        ? locales.map((lang, index) => (
            <div key={index} className="language-list__item">
              {lang}
            </div>
          ))
        : null}
    </ButtonWithList>
  );
};
