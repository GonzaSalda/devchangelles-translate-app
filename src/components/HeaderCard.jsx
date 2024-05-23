import { franc } from "franc";
import { HorizontalTop } from "../assets";
import { languages } from "../helpers/languages";
import ButtonIcon from "./ButtonIcon";

const HeaderCard = ({
  langActive,
  setLangActive,
  targetLang,
  setTargetLang,
  isResultTranslate = false,
  textInput= '',
}) => {

  const tradeLanguage = () => {
    setLangActive(targetLang);
    setTargetLang(langActive);
  }

  const handleDetectLanguage = () => {
    if(textInput.length < 1) return;
    const langCode = franc(textInput);
    const language = languages.find((lang) => lang.code === langCode);
    setLangActive(language.code);

  };

  return (
    <div className="flex items-center gap-6 border-b pb-4 border-lightSecondary">
      {isResultTranslate ? (
        // OUTPUT CARD
        <>
          {languages.slice(0, 3).map((language) => (
            <button
              className={`text-sm py-2 px-4 rounded-xl ${
                language.code === targetLang ? "bg-graySecondary" : ""
              }`}
              key={language.code}
              onClick={() => {
                setTargetLang(language.code);
              }}
            >
              {language.name}
            </button>
          ))}
          <div className="flex justify-end flex-1">
            <ButtonIcon
            img={HorizontalTop}
            alt="trade language"
            onClick={tradeLanguage}
            />
          </div>
        </>
      ) : (
        // INPUT CARD
        <>
          <button className="" onClick={handleDetectLanguage}>
            Detect Language
          </button>
          {languages.slice(0, 3).map((language) => (
            <button
              className={`text-sm py-2 px-4 rounded-xl ${
                language.code === langActive ? "bg-graySecondary" : ""
              }`}
              key={language.code}
              onClick={() => {
                setLangActive(language.code);
              }}
            >
              {language.name}
            </button>
          ))}
        </>
      )}
    </div>
  );
};

export default HeaderCard;
