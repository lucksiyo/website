import { useEffect, useState } from 'react';
import { MdOutlineArrowForward } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import { MdAccessTimeFilled } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import splashOptions from '../../assets/splash_text.json'

import './Home.css'

const rng = Math.floor(Math.random() * splashOptions.length)
const randomText = splashOptions[rng]

const Home = () => {
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
    <div id='home' className='h-screen flex items-center'>
      
      <div className='w-full px-16 flex flex-col lg:grid lg:grid-cols-2 justify-between items-center gap-8 lg:gap-0'>
        
        <div className='relative'>
          <p className="font-['Rubik'] font-[500] text-[14vw] lg:text-[7vw] leading-4 text-(--secondary)">hi, i'm</p>
          <div className='relative'>
            <h1 className="font-['Rubik'] font-[500] text-[18vw] lg:text-[11vw] text-(--primary)">lucksiyo!</h1>
            <p 
              className='
                splash-text hidden lg:inline absolute right-0
                translate-x-1/2 -translate-y-10 xl:-translate-y-16
                rotate-345 z-10 
                flex justify-center items-center 
                text-(--accent)'
            >
              {splashText}
            </p>
          </div>
        </div>

        <div className='w-full flex flex-col gap-2'>
          <a 
            className='subpage-link'
            href='#/projects'
          >
            <p>Web/App Dev</p>
            <MdOutlineArrowForward />
          </a>
          <a 
            className='subpage-link'
            href='#/about'
          >
            About
            <MdOutlineArrowForward />
          </a>
          <a 
            className='subpage-link'
            href='#/'
          >
            <p>More coming soon.</p>
            <MdOutlineClose />
          </a>
        </div>

      </div>

      {/* location / datetime */}
      <div className='w-full px-4 py-2 absolute top-0 left-0 right-0 flex flex-col sm:flex-row justify-between items-center text-sm text-(--accent)'>
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

      {/* bottom text */} 
      <div className='w-full px-4 py-2 absolute bottom-0 left-0 right-0 flex justify-center items-center text-sm text-(--accent)'>
        <p>[ Prod. 2026 by lucksiyo! ]</p>
      </div>
    </div>  
  );
};

export default Home;
