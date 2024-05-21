import { Clipboard, SoundMaxFill } from '../assets'
import ButtonIcon from './ButtonIcon'

const ButtonsFooter = () => {
  const handleAudio = () => {
    console.log('Audio clicked')
    }

    const handleCopyClipBoard = () => {
        console.log('Copy to clipboard clicked')
    }

    return (
    <div className='flex items-center gap-2'>
        {/* Audio */}
        <ButtonIcon
        img={SoundMaxFill}
        alt='Sound Svg'
        onClick={handleAudio}/>

        {/* Clipboad */}
        <ButtonIcon
        img={Clipboard}
        alt='Clipboard'
        onClick={handleCopyClipBoard}
        />

    </div>
  )
}

export default ButtonsFooter