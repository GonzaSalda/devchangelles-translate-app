import { useState } from 'react';
import { Clipboard, SoundMaxFill } from '../assets';
import ButtonIcon from './ButtonIcon';

const ButtonsFooter = ({ text = '' }) => {
  
  const [showCopyAlert, setShowCopyAlert] = useState(false)

  const handleAudio = () => {
    if (text.length < 1) return;
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
  };

  const handleCopyClipBoard = async () => {
    if (text.length < 1) return;
    await navigator.clipboard.writeText(text)
    setShowCopyAlert(true)
    setTimeout(() => {
      setShowCopyAlert(false)
    }, 2000)
  };

  return (
    <div className='flex items-center gap-2'>
      {/* Audio */}
      <ButtonIcon
        img={SoundMaxFill}
        alt='Sound Svg'
        onClick={handleAudio}
      />

      {/* Clipboard */}
      <ButtonIcon
        img={Clipboard}
        alt='Clipboard'
        onClick={handleCopyClipBoard}
      />

      {/* Alert copy clipboard*/}
     {
      showCopyAlert && (
        <div className="fixed bottom-10 left1/2 bg-bluePrimary text-white px-4 py-2 rounded-md">
        Copied to clipboard!
      </div>
      )
     }
    </div>
  );
};

export default ButtonsFooter;
