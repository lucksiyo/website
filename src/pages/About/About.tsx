import useSound from 'use-sound'
import { FaGithub, FaItchIo, FaInstagram, FaTwitch, FaYoutube } from "react-icons/fa"
import { FaBluesky } from "react-icons/fa6";
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import SiteStats from "./SiteStats/SiteStats"
import ExpBar from "./ExpBar/ExpBar";
import MusicPlayer from "./MusicPlayer/MusicPlayer"
import Buttons from './Buttons/Buttons'
import button from '../../assets/images/buttons/button.jpg'
import icon from '../../assets/images/icon.png'
import hoverSFX from '../../assets/sounds/sfx_hover.wav'
import activeSFX from '../../assets/sounds/sfx_active.wav'
import './About.css'
import { useState } from 'react';

const About = () => {
  const [ hoverSound ] = useSound(hoverSFX)
  const [ activeSound ] = useSound(activeSFX)

  const [ buttonHtml ] = useState(
    "<a href='https://lucksiyo.xyz/'> <img src='https://lucksiyo.xyz/resources/button_v1.jpg' /></a>"
  )

  const handleCopyButtonHtml = async () => {
    try {
      await window.navigator.clipboard.writeText(buttonHtml)
      alert ('Using this button? Send me yours too! :)')
    } catch (err) {
      console.error("Unable to copy to clipboard: ", err)
      alert("Unable to copy to clipboard :(")
    }
  }

  return (
    <>
      <Navbar />
      <section id="about" className="p-16 py-24 lg:px-32 xl:px-64 2xl:px-80 flex flex-col gap-8 md:gap-12">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col gap-4">
            <img 
              className="p-8 w-[160px] max-h-[160px] object-contain bg-white border-1 rounded-full"
              src={icon}
              alt="luxio plushie"
            />
            <ExpBar />
          </div>
          <div className="md:px-8 xl:px-16 flex flex-col gap-8">
            <p className='text-center'>
              Hey, I'm <span className="font-[600] text-(--primary)">lucksiyo!</span> and
              I'm a creative software dev. My interests include open source, computer
              networks, cinematography, and tabletop/video games.
            </p>
            <div className='flex flex-wrap justify-center gap-4'>
              <a 
                className="social-link"
                href="https://github.com/lucksiyo"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => hoverSound()}
                onMouseDown={() => activeSound()}
              >
                  <FaGithub size={'1.125rem'} />
                  <p>GitHub</p>
              </a>
                            
              <a 
                className="social-link"
                href="https://lucksiyo.itch.io/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => hoverSound()}
                onMouseDown={() => activeSound()}
              >
                  <FaItchIo size={'1.125rem'} />
                  <p>Itch.io</p>
              </a>
                            
              <a 
                className="social-link"
                href="https://bsky.app/profile/lucksiyo.xyz"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => hoverSound()}
                onMouseDown={() => activeSound()}
              >
                  <FaBluesky size={'1.125rem'} />
                  <p>Bluesky</p>
              </a>
                            
              <a 
                className="social-link"
                href="https://www.instagram.com/lucksiyo"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => hoverSound()}
                onMouseDown={() => activeSound()}
              >
                  <FaInstagram size={'1.125rem'} />
                  <p>Instagram</p>
              </a>       
                            
              <a 
                className="social-link"
                href="https://www.twitch.tv/lucksiyo"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => hoverSound()}
                onMouseDown={() => activeSound()}
              >
                  <FaTwitch size={'1.125rem'} />
                  <p>Twitch</p>
              </a>
                            
              <a 
                className="social-link"
                href="https://www.youtube.com/@lucksiyo"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => hoverSound()}
                onMouseDown={() => activeSound()}
              >
                  <FaYoutube size={'1.125rem'} />
                  <p>YouTube</p>
              </a>
            </div>
          </div>         
        </div>

        <hr />

        <div className='md:px-8 xl:px-16 flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          
          <div className='col-span-1 flex flex-col gap-8'>
            <div className="p-4 border-1">
              <h3 className="font-['Rubik'] font-[500] text-[1.25rem] uppercase">Site Stats</h3>
              <hr className="mt-1 mb-2 border-t-4" />              
              <SiteStats />
            </div>

            <div className="p-4 border-1">
              <h3 className="font-['Rubik'] font-[500] text-[1.25rem] uppercase">Last.fm</h3>
              <hr className="mt-1 mb-2 border-t-4" />
              <MusicPlayer username="flxjc" />
            </div>
          </div>

          <div className='md:col-span-1 lg:col-span-2'>
            <div className="p-4 border-1">
              <h3 className="font-['Rubik'] font-[500] text-[1.25rem] uppercase">Buttons</h3>
              <hr className="mt-1 mb-2 border-t-4" />
              <div className="my-4 w-full flex flex-col justify-center items-center gap-1">
                <img 
                  className="site-button w-[88px] h-[31px]" 
                  src={button}
                  alt='88x31 button for lucksiyo.xyz'
                  onMouseEnter={() => hoverSound()}
                  onMouseDown={() => activeSound()}
                  onClick={handleCopyButtonHtml}
                />
                <p className='text-(--accent) text-xs italic'>Click to copy HTML</p>
              </div>
              <Buttons />
            </div>
          </div>

        </div>
      </section>
      <Footer />
    </>
  );
};

export default About
