import { useEffect, useState } from "react"
import { AnimatePresence, easeInOut, motion, useMotionValueEvent, useScroll } from "motion/react"
import useSound from 'use-sound'
import { MdAccessTimeFilled, MdClose, MdLocationOn, MdMenu } from "react-icons/md"
import hoverSFX from '../../assets/sounds/sfx_hover.wav'
import activeSFX from '../../assets/sounds/sfx_active.wav'

import './Navbar.css'

const Navbar = () => {
  const [ hoverSound ] = useSound(hoverSFX)
  const [ activeSound ] = useSound(activeSFX)

  // hide/show with scroll direction
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  useMotionValueEvent(scrollY, 'change', (current) => {
    const previous = scrollY.getPrevious() ?? 0
    if (current > previous && current > 100) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  // get current date/time
  const [currentDate, setCurrentDate] = useState(new Date())
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])
  
  const [showMobileNav, setShowMobileNav] = useState(false)

  return (
    <>
      <motion.nav
        id="navbar"
        className="w-full fixed top-0 left-0 right-0 px-4 z-100 flex justify-between"
        animate={{ y: hidden ? -100 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ ease: easeInOut, duration: 0.5 }}
      >
        
        <div className="flex items-center gap-4">
          <a className="font-['Rubik'] font-[500] text-[2.25rem] hover:text-(--primary)" 
            href="/"
            onMouseEnter={() => hoverSound()}
            onMouseDown={() => activeSound()}
          >
            lucksiyo!
          </a>
          <div className='hidden lg:flex items-center font-[600] text-sm text-(--accent)'>
            <p>[&nbsp;</p>
            <MdLocationOn />
            <p>&nbsp;Southern California, USA ]</p>
          </div>
          <div className='hidden lg:flex items-center font-[600] text-sm text-(--accent) uppercase'>
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

        <div className="hidden md:flex items-center gap-4 font-[600]">
          <a 
            href='/projects' 
            className="hover:text-(--accent)"
            onMouseEnter={() => hoverSound()}
            onMouseDown={() => activeSound()}  
          >
            [ Projects ]
          </a>
          <a 
            href='/about' 
            className="hover:text-(--accent)"
            onMouseEnter={() => hoverSound()}
            onMouseDown={() => activeSound()}
          >
            [ About ]
          </a>
        </div>

        <div className="flex items-center md:hidden">
          <button 
            onClick={() => setShowMobileNav(!showMobileNav)}
            className="p-1 border-1 hover:bg-taupe-900/10"
            onMouseEnter={() => hoverSound()}
            onMouseDown={() => activeSound()}
          >
            <MdMenu size={'1.5rem'} />
          </button>
        </div>
      </motion.nav>

      {/* mobile */}
      <AnimatePresence>
        { showMobileNav && (
          <motion.nav
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            exit={{ x: 50, opacity: 0 }}
            transition={{ ease: easeInOut, duration: 0.3 }}
            className="mobile-menu fixed px-4 pt-2 pb-8 top-0 right-0 z-1000 flex flex-col items-end gap-4 border-1 font-[600]"
          >
            <button 
              onClick={() => setShowMobileNav(!showMobileNav)}
              className="p-1 border-1 hover:bg-taupe-900/10"
              onMouseEnter={() => hoverSound()}
              onMouseDown={() => activeSound()}
            >
              <MdClose size={'1.5rem'} />
            </button>
            <div className="px-8 flex flex-col items-end gap-2">
              <a 
                href='/projects'
                className="hover:text-(--accent)"
                onMouseEnter={() => hoverSound()}
                onMouseDown={() => activeSound()}
              >
                [ Projects ]
              </a>
              <a
                href='/about'
                className="hover:text-(--accent)"
                onMouseEnter={() => hoverSound()}
                onMouseDown={() => activeSound()}
              >
                [ About ]
              </a>
            </div>            
          </motion.nav>
        )}
      </AnimatePresence>
      
    </>
  );
};

export default Navbar;
