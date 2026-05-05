import { MdArrowOutward } from "react-icons/md";
import { FaGithub, FaItchIo, FaInstagram, FaTwitch, FaYoutube } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import MusicPlayer from "./MusicPlayer/MusicPlayer"
import SiteStats from "./SiteStats/SiteStats"
import Buttons from './Buttons/Buttons';

import button from '../../assets/images/buttons/button.jpg'

import './About.css'
import ExpBar from "./ExpBar/ExpBar";

const About = () => {
  return (
    <>
      <Navbar />
      <section id="about" className="py-20 px-16 lg:px-32 xl:px-64 2xl:px-84">

        <div className="flex flex-col-reverse md:grid md:grid-cols-3 gap-8 md:gap-8">
          {/* smol col */}
          <div className="md:col-span-1 flex flex-col gap-8">
            <div className="p-4 border-1">
              <h3 className="font-['Rubik'] font-[500] text-[1.25rem] uppercase">Site Stats</h3>
              <hr className="my-1 border-t-4" />              
              <SiteStats />
              <a 
                className="mt-2 py-1 flex justify-center text-center text-(--light) bg-(--dark) hover:bg-(--primary)"
                href="https://nekoweb.org/follow/lucksiyo.nekoweb.org"
                target='_blank'
                rel='noopenner noreferrer'
              >
                Follow on Nekoweb
              </a>
            </div>

            <div id='links' className="p-4 border-1">
              <h3 className="font-['Rubik'] font-[500] text-[1.25rem] uppercase">Links</h3>
              <hr className="my-1 border-t-4" />
              <div>
                
                <a 
                  className="social-link"
                  href="https://github.com/lucksiyo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center gap-2">
                    <FaGithub />
                    <p>GitHub</p>
                  </div>
                  <MdArrowOutward />
                </a>
                
                <hr className='my-1' />
                
                <a 
                  className="social-link"
                  href="https://lucksiyo.itch.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center gap-2">
                    <FaItchIo />
                    <p>Itch.io</p>
                  </div>
                  <MdArrowOutward />
                </a>
                
                <hr className='my-1' />
                
                <a 
                  className="social-link"
                  href="https://bsky.app/profile/lucksiyo.nya.je"
                  target="_blank"
                  rel="noopener noreferrer" 
                >
                  <div className="flex items-center gap-2">
                    <FaBluesky />
                    <p>Bluesky</p>
                  </div>
                  <MdArrowOutward />
                </a>
                
                <hr className='my-1' />
                
                <a 
                  className="social-link"
                  href="https://www.instagram.com/lucksiyo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center gap-2">
                    <FaInstagram />
                    <p>Instagram</p>
                  </div>
                  <MdArrowOutward />
                </a>       
                
                <hr className='my-1' />
                
                <a 
                  className="social-link"
                  href="https://www.twitch.tv/lucksiyo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center gap-2">
                    <FaTwitch />
                    <p>Twitch</p>
                  </div>
                  <MdArrowOutward />
                </a>
                
                <hr className='my-1' />
                
                <a 
                  className="social-link"
                  href="https://www.youtube.com/@lucksiyo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center gap-2">
                    <FaYoutube />
                    <p>YouTube</p>
                  </div>
                  <MdArrowOutward />
                </a>
                
              </div>
            </div>
          </div>
          
          {/* big col */}
          <div className="md:col-span-2 flex flex-col gap-8">
            <div className="p-4 border-1 flex flex-col">
              <h3 className="font-['Rubik'] font-[500] text-[1.25rem] uppercase">About</h3>
              <hr className="my-1 border-t-4" />
              <ExpBar />
              <p>
                Hey, I'm <span className="font-[600] text-(--primary)">lucksiyo!</span> and I'm a creative dev. My interests include
                open source, computer networks, cinematography, and tabletop/video
                games.
              </p>
              <a
                href="#links"
                className="md:hidden mt-2 py-1 flex justify-center text-center text-(--light) bg-(--dark) hover:bg-(--primary)"
              >
                Contact Me
              </a>
            </div>

            <div className="p-4 border-1">
              <h3 className="font-['Rubik'] font-[500] text-[1.25rem] uppercase">Last.fm</h3>
              <hr className="my-1 border-t-4" />
              <MusicPlayer username="flxjc" />
            </div>

            <div className="p-4 border-1">
              <h3 className="font-['Rubik'] font-[500] text-[1.25rem] uppercase">Buttons</h3>
              <hr className="my-1 border-t-4" />
              <div className="my-4 w-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
                <img className="site-button w-[88px] h-[31px]" src={button} />
                <textarea className="bg-white border-1" readOnly>
                  &lt;a href="https://lucksiyo.nekoweb.org/"&gt; &lt;img src="https://lucksiyo.nekoweb.org/resources/button.jpg" /&gt;&lt;/a&gt;
                </textarea>
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

export default About;
