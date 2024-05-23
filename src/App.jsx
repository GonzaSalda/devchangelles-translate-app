import { useState } from "react";
import { Logo } from "./assets";
import InputCard from "./components/InputCard";
import OutputCard from "./components/OutputCard";
import { translate } from "./services/action";
const App = () => {

  const [langActive, setLangActive] = useState('en')
  const [targetLang, setTargetLang] = useState('es')
  const [loading, setLoading] = useState(false)
  const [textToTranslate , setTextToTranslate] = useState('Hello, how are you?')
  const [translatedText, setTranslatedText] = useState('Bonjour, comment vas-tu?')


  const onTextAreaChange = e =>{
    const newText = e.target.value
      setTranslatedText(newText)
      if(newText.length > 500) {
        setTextToTranslate(newText.substr(0, 500))
      }else{
        setTextToTranslate(newText)
      }
  }

  const onSubmit = async e => {
    e.preventDefault()
    setLoading(true)

    const {responseData} = await translate(textToTranslate, `${langActive}|${targetLang}`)
    setLoading(false)

    setTranslatedText(responseData.translatedText)
  }

  return (
    <div className="h-screen text-white p-[72px] bg-custom-grandient bg-no-repeat bg-cover bg-center flex flex-col justify-center max-sm:p-7">
      <div className="container">
        <div className="grid place-items-center">
          <img src={Logo} alt="Logo" className="w-[200px] h-auto" />
        </div>


         {/* cards */}
        <div className="grid grid-cols-2 gap-[14px] max-lg:grid-cols-1">
          <InputCard
            langActive={langActive}
            setLangActive={setLangActive}
            targetLang={targetLang}
            setTargetLang={setTargetLang}
            className={'bg-grayTransparentPrimary'}
            textToTranslate={textToTranslate}
            //Form event
            onTextAreaChange={onTextAreaChange}
            onSubmit={onSubmit}
            loading={loading}
          />
          <OutputCard
            langActive={langActive}
            targetLang={targetLang}
            setTargetLang={setTargetLang}
            setLangActive={setLangActive}
            className={'bg-grayTransparentSecondary'}
            //Form events
            translatedText = {translatedText}
          />
        </div>
      </div>
     
    </div>
  );
};

export default App;
