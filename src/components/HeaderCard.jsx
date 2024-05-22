import { languages } from "../helpers/languages";

const HeaderCard = ({
  langActive,
  setLangActive,
  targetLang,
  setTargetLang,
  isResultTranslate = false,
}) => {
  const handleDetectLanguage = () => {
    console.log("Detecting language");
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
