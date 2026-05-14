import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import useSound from 'use-sound'
import { FaGithub, FaItchIo, FaInstagram, FaTwitch, FaYoutube } from "react-icons/fa"
import { FaBluesky } from "react-icons/fa6";
import { MdAccessTimeFilled, MdArrowOutward, MdLocationOn } from 'react-icons/md';
import hoverSFX from '../../assets/sounds/sfx_hover.wav'
import activeSFX from '../../assets/sounds/sfx_active.wav'
import './Footer.css'

const Footer = () => {
  const [ hoverSound ] = useSound(hoverSFX)
  const [ activeSound ] = useSound(activeSFX)

  // get current date/time
  const [currentDate, setCurrentDate] = useState(new Date())
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])
  
  return (
    <footer id='footer' className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] px-8 lg:px-16 overflow-hidden">
      <hr className="mb-2" />
      
      <div className='flex flex-col sm:flex-row justify-between items-center font-[600] text-sm text-(--accent)'>
        <div className='flex items-center'>
          <p>[&nbsp;</p>
          <MdLocationOn />
          <p>&nbsp;Southern California, USA ]</p>
        </div>
        
        <div className='flex items-center uppercase'>
          <p>[&nbsp;</p>
          <MdAccessTimeFilled />
          <p>&nbsp;</p>
          {currentDate.toLocaleDateString('en-US', {
            timeZone: 'America/Los_Angeles',
            weekday: 'short'
          })}
          <p>&nbsp;</p>
          {currentDate.toLocaleTimeString('en-US', {
            timeZone: 'America/Los_Angeles', 
            hour: '2-digit', 
            minute: '2-digit',
            second: '2-digit',
            hour12: true             
          })}
          <p>&nbsp;]</p>
        </div>
      </div>

      <div className='my-4 lg:my-8 px-8 md:px-16 lg:px-24 flex flex-col sm:grid sm:grid-cols-2 gap-4'>
        <div className='flex flex-col items-center sm:items-start'>
            <a 
              className='flex items-center gap-1 hover:text-(--accent) hover:font-[700]'
              href="https://nekoweb.org/follow/lucksiyo.xyz"
              target='_blank'
              rel='noopenner noreferrer'
              onMouseEnter={() => hoverSound()}
              onMouseDown={() => activeSound()}
            >
                <p>Follow on Nekoweb</p>
                <MdArrowOutward />
            </a>
            <a 
              className='flex items-center gap-1 hover:text-(--accent) hover:font-[700]'
              href='https://github.com/lucksiyo/website'
              target='_blank'
              rel='noopener noreferrer'
              onMouseEnter={() => hoverSound()}
              onMouseDown={() => activeSound()}
            >
              <p>Credits</p>
              <MdArrowOutward />
            </a>
        </div>
        <div className='flex flex-col items-center sm:items-end'>
          <a 
            className="flex items-center gap-1 hover:text-(--accent) hover:font-[700]"
            href="https://github.com/lucksiyo"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => hoverSound()}
            onMouseDown={() => activeSound()}
          >
              <FaGithub />
              <p>GitHub</p>
          </a>    
          <a 
            className="flex items-center gap-1 hover:text-(--accent) hover:font-[700]"
            href="https://lucksiyo.itch.io/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => hoverSound()}
            onMouseDown={() => activeSound()}
          >
              <FaItchIo />
              <p>Itch.io</p>
          </a> 
          <a 
            className="flex items-center gap-1 hover:text-(--accent) hover:font-[700]"
            href="https://bsky.app/profile/lucksiyo.xyz"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => hoverSound()}
            onMouseDown={() => activeSound()}
          >
              <FaBluesky />
              <p>Bluesky</p>
          </a>
          <a 
            className="flex items-center gap-1 hover:text-(--accent) hover:font-[700]"
            href="https://www.instagram.com/lucksiyo"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => hoverSound()}
            onMouseDown={() => activeSound()}
          >
              <FaInstagram />
              <p>Instagram</p>
          </a>       
          <a 
            className="flex items-center gap-1 hover:text-(--accent) hover:font-[700]"
            href="https://www.twitch.tv/lucksiyo"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => hoverSound()}
            onMouseDown={() => activeSound()}
          >
              <FaTwitch />
              <p>Twitch</p>
          </a>
          <a 
            className="flex items-center gap-1 hover:text-(--accent) hover:font-[700]"
            href="https://www.youtube.com/@lucksiyo"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => hoverSound()}
            onMouseDown={() => activeSound()}
          >
              <FaYoutube />
              <p>YouTube</p>
          </a>
        </div>
      </div>
      
      <div className='absolute bottom-0 left-0 right-0 flex flex-col'>
        <motion.p 
          className='font-["Rubik"] font-[500] text-center text-(--primary) text-[6vw]'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          2026 by
        </motion.p>
        <motion.h6 
          className="footer-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          lucksiyo!
        </motion.h6>
      </div>
      
    </footer>
  );
};

export default Footer;
