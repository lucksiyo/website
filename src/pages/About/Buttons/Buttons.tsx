import useSound from 'use-sound'
import hoverSFX from '../../../assets/sounds/sfx_hover.wav'
import activeSFX from '../../../assets/sounds/sfx_active.wav'
import animalCrossing from '../../../assets/images/buttons/animal-crossing.gif'
import cssIsAwesome from '../../../assets/images/buttons/css-is-awesome.png'
import dreamInHTML from '../../../assets/images/buttons/dream-in-html.gif'
import flexbox from '../../../assets/images/buttons/flexbox.gif'
import gameBoyColor from '../../../assets/images/buttons/game-boy-color.gif'
import garlicBread from '../../../assets/images/buttons/garlic-bread.png'
import gotHTML5 from '../../../assets/images/buttons/got-html5.png'
import iLikeComputer from '../../../assets/images/buttons/i-like-computer.png'
import internetArchive from '../../../assets/images/buttons/internet-archive.gif'
import madeWithMac from '../../../assets/images/buttons/made-with-mac.gif'
import minecraft from '../../../assets/images/buttons/minecraft.gif'
import pictochat from '../../../assets/images/buttons/pictochat.gif'
import pokemon from '../../../assets/images/buttons/pokemon.gif'
import responsiveWebsite from '../../../assets/images/buttons/responsive-website.png'
import stardewValley from '../../../assets/images/buttons/stardew-valley.gif'
import testedOnFirefox from '../../../assets/images/buttons/tested-on-firefox.gif'
import viewWithCat from '../../../assets/images/buttons/view-with-cat.png'
import vscodium from '../../../assets/images/buttons/vscodium.gif'
import yourAdHere from '../../../assets/images/buttons/your-ad-here.gif'

import './Buttons.css'

const Buttons = () => {
  const [ hoverSound ] = useSound(hoverSFX)
  const [ activeSound ] = useSound(activeSFX)

  return (
    <div className="flex flex-wrap justify-center">
      <a 
        className='button-88x31' 
        href="https://nekoweb.org/" 
        target="_blank" 
        rel="noopener noreferrer"
        onMouseEnter={() => hoverSound()}
        onMouseDown={() => activeSound()}
      >
        <img alt="Nekoweb.org | Indie website hosting service" src="https://nekoweb.org/assets/buttons/button5.gif" />
      </a>
      <a 
        className='button-88x31' 
        href="https://capstasher.neocities.org/88x31collection-page1" 
        target="_blank" 
        rel="noopener noreferrer"
        onMouseEnter={() => hoverSound()}
        onMouseDown={() => activeSound()}
      >
        <img alt="Largest 88x31 Collection | A collection of 88x31 buttons" src="https://capstasher.neocities.org/the-largest-88x31-collection-2.png"/>
      </a>
      <img className='button-88x31' alt="Your ad here 88x31 button" src={yourAdHere} onMouseEnter={() => hoverSound()} />
      <img className='button-88x31' alt="I like computer" src={iLikeComputer} onMouseEnter={() => hoverSound()} />
      <img className='button-88x31' alt="I dream in HTML" src={dreamInHTML} onMouseEnter={() => hoverSound()} />
      <img className='button-88x31' alt="Got HTML5?" src={gotHTML5} onMouseEnter={() => hoverSound()} />
      <img className='button-88x31' alt="CSS is awesome" src={cssIsAwesome} onMouseEnter={() => hoverSound()} />
      <img className='button-88x31' alt="Flexbox" src={flexbox} onMouseEnter={() => hoverSound()} />
      <img className='button-88x31' alt="Responsive website" src={responsiveWebsite} onMouseEnter={() => hoverSound()} />
      <img className='button-88x31' alt="Made with VSCodium" src={vscodium} onMouseEnter={() => hoverSound()} />
      <img className='button-88x31' alt="Tested on Firefox" src={testedOnFirefox} onMouseEnter={() => hoverSound()} />
      <img className='button-88x31' alt="Made with Macintosh" src={madeWithMac} onMouseEnter={() => hoverSound()} />
      <img className='button-88x31' alt="Internet Archive" src={internetArchive} onMouseEnter={() => hoverSound()} />
      <img className='button-88x31' alt="Game Boy Color" src={gameBoyColor} onMouseEnter={() => hoverSound()} />
      <img className='button-88x31' alt="I miss using Pictochat" src={pictochat} onMouseEnter={() => hoverSound()} />
      <img className='button-88x31' alt="Pokémon" src={pokemon} onMouseEnter={() => hoverSound()} />
      <img className='button-88x31' alt="Animal Crossing" src={animalCrossing} onMouseEnter={() => hoverSound()} />
      <img className='button-88x31' alt="Minecraft" src={minecraft} onMouseEnter={() => hoverSound()} />
      <img className='button-88x31' alt="Stardew Valley" src={stardewValley} onMouseEnter={() => hoverSound()} />
      <img className='button-88x31' alt="Garlic bread wow my favorite" src={garlicBread} onMouseEnter={() => hoverSound()} />
      <img className='button-88x31' alt="Best viewed with a cat" src={viewWithCat} onMouseEnter={() => hoverSound()} />
    </div>
  );
};

export default Buttons;
