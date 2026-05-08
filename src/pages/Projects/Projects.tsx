import useSound from 'use-sound'
import { GoArrowUpRight } from "react-icons/go"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import spacelabPreview from '../../assets/images/spacelab_preview.webp'
import tempoPreview from '../../assets/images/tempo_preview.webp'
import hoverSFX from '../../assets/sounds/sfx_hover.wav'
import activeSFX from '../../assets/sounds/sfx_active.wav'
import './Projects.css'

const Projects = () => {
  const [ hoverSound ] = useSound(hoverSFX)
  const [ activeSound ] = useSound(activeSFX)

  return (
    <>
      <Navbar />
      <section
        id='projects' 
        className="py-20 px-16 lg:px-32 xl:px-64 2xl:px-84"
      >
        <div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-8 items-center">
              <img
                className="border-1"
                src={tempoPreview}
                alt="Tempo app logo"
              />
              <div>
                <h3 className="font-['Rubik'] font-[500] text-[1.25rem] uppercase">Tempo</h3>
                <hr className="my-1 border-t-4" />
                <p className='text-[0.875rem] italic'>
                  2025
                </p>
                <p>
                  A mobile app for health and menstrual cycle tracking that uses a local-only database.
                </p>
                <div className="my-2 flex flex-wrap gap-2 text-xs font-[600]">
                  <p className="text-blue-900 bg-blue-200/20 px-2 border-1">React Native + TypeScript</p>
                  <p className="text-purple-900 bg-purple-200/20 px-2 border-1">Realm</p>
                  <p className="text-yellow-900 bg-yellow-200/20 px-2 border-1">Expo</p>
                </div>
                <a 
                  className="mt-2 py-1 flex justify-center items-center gap-2 text-center text-(--light) bg-(--dark) hover:bg-(--primary)"
                  href='https://github.com/lucksiyo/tempo'
                  target='_blank'
                  rel='noopenner noreferrer'
                  onMouseEnter={() => hoverSound()}
                  onMouseDown={() => activeSound()}
                >
                  Source Code
                  <GoArrowUpRight />
                </a>          
              </div>
            </div>

            <hr />

            <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-4 md:gap-8 items-center">
              <div>
                <h3 className="font-['Rubik'] font-[500] text-[1.25rem] uppercase">The Spacelab Nonprofit</h3>
                <hr className="my-1 border-t-4" />
                <p className='text-[0.875rem] italic'>
                  2024-2025
                </p>
                <p>
                  A website for The Spacelab Nonprofit, sharing the organization's mission, vision, and core values.
                </p>
                <div className="my-2 flex flex-wrap gap-2 text-xs font-[600]">
                  <p className="text-cyan-900 bg-cyan-200/20 px-2 border-1">React + JavaScript</p>
                  <p className="text-fuchsia-900 bg-fuchsia-200/20 px-2 border-1">SCSS</p>
                </div>
                <a 
                  className="mt-2 py-1 flex justify-center items-center gap-2 text-center text-(--light) bg-(--dark) hover:bg-(--primary)"
                  href='https://spacelab.space/'
                  target='_blank'
                  rel='noopenner noreferrer'
                  onMouseEnter={() => hoverSound()}
                  onMouseDown={() => activeSound()}
                >
                  View Project
                  <GoArrowUpRight />
                </a>
              </div>
              <img
                className="border-1"
                src={spacelabPreview}
                alt="Screenshot of The Spacelab Nonprofit website"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Projects;
