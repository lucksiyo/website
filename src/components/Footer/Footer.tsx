import { motion } from 'motion/react';
import './Footer.css'

const Footer = () => {

  
  return (
    <footer id='footer' className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-screen p-4 md:px-12 lg:px-16 xl:px-32 2xl:px-48 text-center overflow-hidden">
      <div className='absolute bottom-0 left-0 right-0 flex flex-col gap'>
        <motion.p
          className="font-['Rubik'] text-(--primary) text-[6vw] uppercase"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Prod. 2026 by
        </motion.p>
        <motion.h6 
          className="font-['Rubik'] text-[20vw] font-medium leading-[14vw]"
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
