import { SortAlfa } from "../assets";
import ButtonsFooter from "./ButtonsFooter";
import HeaderCard from "./HeaderCard";

const InputCard = ({
  langActive,
  setLangActive,
  targetLang,
  setTargetLang,
  className,
}) => {
  return (
    <div
      className={`${className} rounded-3xl h-[350px] p-7 flex flex-col gap-5 border border-graySecondary`}
    >
      <HeaderCard
        langActive={langActive}
        setLangActive={setLangActive}
        targetLang={targetLang}
        setTargetLang={setTargetLang}
      />
      <form className="h-full flex flex-col gap-3">
        <div className="relative h-full">
          <textarea
            placeholder="Translate here"
            className="w-full bg-transparent border-none focus:outline-none resize-none text-white font-bold h-full"
          ></textarea>

          <span className="font-medium text-lightSecondary text-xs absolute right-5 -botton-5">
            0/500
          </span>
        </div>

        <div className="flex justify-between items-center mt-3">
          <ButtonsFooter />
          <button
            type="submit"
            className={`bg-bluePrimary px-5 py-2 rounded-lg flex items-center gap-2 text-sm font-bold`}
          >
            <img src={SortAlfa} alt="sortalfa" />
            Translate
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputCard;
