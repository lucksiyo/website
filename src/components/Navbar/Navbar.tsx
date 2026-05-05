import { useEffect, useState } from "react";
import { AnimatePresence, easeInOut, motion, useMotionValueEvent, useScroll } from "motion/react";
import { MdAccessTimeFilled, MdClose, MdLocationOn, MdMenu } from "react-icons/md";

import './Navbar.css'

const Navbar = () => {
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
          <a href='/projects' className="hover:text-(--accent)">[ Web/App Dev ]</a>
          <a href='/about' className="hover:text-(--accent)">[ About ]</a>
        </div>

        <div className="flex items-center md:hidden">
          <button 
            onClick={() => setShowMobileNav(!showMobileNav)}
            className=""
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
            className="mobile-menu fixed p-4 pb-8 top-0 right-0 z-1000 flex flex-col items-end gap-2 border-1 font-[600]"
          >
            <button 
              onClick={() => setShowMobileNav(!showMobileNav)}
              className=""
            >
              <MdClose size={'1.5rem'} />
            </button>
            <a 
              href='/projects'
              className="hover:text-(--accent)"
            >
              [ Web/App Dev ]
            </a>
            <a
              href='/about'
              className="hover:text-(--accent)"
            >
              [ About ]
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
      
    </>
  );
};

export default Navbar;
