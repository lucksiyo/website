import { useEffect, useState } from 'react'
import { easeOut, motion } from 'motion/react'
import useSound from 'use-sound'
import { MdAccessTimeFilled } from "react-icons/md"
import { MdLocationOn } from "react-icons/md"
import hoverSFX from '../../assets/sounds/sfx_hover.wav'
import activeSFX from '../../assets/sounds/sfx_active.wav'
import splashOptions from '../../assets/splash_text.json'
import './Home.css'

const rng = Math.floor(Math.random() * splashOptions.length)
const randomText = splashOptions[rng]

const Home = () => {
  const [ hoverSound ] = useSound(hoverSFX)
  const [ activeSound ] = useSound(activeSFX)

  const [splashText] = useState(randomText)

  // get current date/time
    const [currentDate, setCurrentDate] = useState(new Date())
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentDate(new Date())
      }, 1000)
  
      return () => clearInterval(timer)
    }, [])

  return (
    <motion.div
      id='home' 
      className='h-screen flex items-center'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      
      <div className='w-full px-16 sm:px-24 md:px-32 lg:px-16 xl:px-20 flex flex-col lg:grid lg:grid-cols-2 justify-between items-center gap-8 lg:gap-0'>
        
        <div className='relative'>
          <motion.p 
            className="font-['Rubik'] font-[500] text-[14vw] lg:text-[7vw] leading-4 text-(--secondary)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3, ease: easeOut }}
          >
            hi, i'm
          </motion.p>
          <div className='relative'>
            <motion.h1 
              className="font-['Rubik'] font-[500] text-[18vw] lg:text-[11vw] text-(--primary)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3, ease: easeOut }}
            >
              lucksiyo!
            </motion.h1>
            <motion.p 
              className='
                splash-text hidden lg:inline absolute right-0
                translate-x-1/2 -translate-y-10 xl:-translate-y-16
                rotate-345 z-10 
                flex justify-center items-center 
                text-(--accent)
              '
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.3, ease: easeOut }}
            >
              {splashText}
            </motion.p>
          </div>
        </div>

        <div className='pl-0 lg:pl-40 xl:pl-56 2xl:pl-64 w-full flex flex-col gap-1'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3, ease: easeOut }}
          >
            <h2 className="font-['Rubik'] font-[500] text-[1.5rem] uppercase">Menu</h2>
            <hr className="mt-1 mb-2 border-t-4" />
          </motion.div>
          
          <motion.a 
            className='subpage-link'
            href='/projects'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.3, ease: easeOut }}
            onMouseEnter={() => hoverSound()}
            onMouseDown={() => activeSound()}
          >
            <p>Projects</p>
            <p>1.</p>
          </motion.a>
          <motion.a 
            className='subpage-link'
            href='/about'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.3, ease: easeOut }}
            onMouseEnter={() => hoverSound()}
            onMouseDown={() => activeSound()}
          >
            <p>About</p>
            <p>2.</p>
          </motion.a>
        </div>

      </div>

      {/* location / datetime */}
      <div className='w-full px-4 py-2 absolute top-0 left-0 right-0 flex flex-col sm:flex-row justify-between items-center font-[600] text-sm text-(--accent)'>
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
    </motion.div>  
  );
};

export default Home;
