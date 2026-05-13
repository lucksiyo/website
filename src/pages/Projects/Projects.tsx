import useSound from 'use-sound'
import { FaCode } from 'react-icons/fa6'
import { FiGlobe } from 'react-icons/fi'
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
        className="p-16 py-24 lg:px-32 xl:px-64 2xl:px-80 flex flex-col gap-8 md:gap-16"
      >
        <div className="md:px-8 xl:px-16 flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-8 items-center">
          <img
            className="border-1"
            src={tempoPreview}
            alt="Tempo app logo"
          />
          <div>
            <h3 className="font-['Rubik'] font-[500] text-[1.25rem] uppercase">Tempo</h3>
            <hr className="mt-1 mb-2 border-t-4" />
            <p className='text-[0.875rem] italic'>
              2025
            </p>
            <p>
              A mobile app for health and menstrual cycle tracking that uses a local-only database.
            </p>
            <div className="mt-2 flex flex-wrap gap-2 text-xs font-[600]">
              <p className="text-blue-900 bg-blue-200/20 px-2 border-1">TypeScript</p>
              <p className="text-sky-900 bg-sky-200/20 px-2 border-1">React Native</p>
              <p className="text-purple-900 bg-purple-200/20 px-2 border-1">Realm</p>
              <p className="text-yellow-900 bg-yellow-200/20 px-2 border-1">Expo</p>
            </div>
            <div className='flex flex-col md:flex-row gap-4'>
              <a 
                className="project-link"
                href='https://github.com/lucksiyo/tempo'
                target='_blank'
                rel='noopenner noreferrer'
                onMouseEnter={() => hoverSound()}
                onMouseDown={() => activeSound()}
              >
                <FaCode size={'1.125rem'} />
                Source Code
              </a>
            </div>
             
          </div>
        </div>

        <hr />

        <div className="md:px-8 xl:px-16 flex flex-col-reverse md:grid md:grid-cols-2 gap-4 md:gap-8 items-center">
          <div>
            <h3 className="font-['Rubik'] font-[500] text-[1.25rem] uppercase">The Spacelab Nonprofit</h3>
            <hr className="mt-1 mb-2 border-t-4" />
            <p className='text-[0.875rem] italic'>
              2024-2025
            </p>
            <p>
              A website for The Spacelab Nonprofit, sharing the organization's mission, vision, and core values.
            </p>
            <div className="mt-2 flex flex-wrap gap-2 text-xs font-[600]">
              <p className="text-yellow-900 bg-yellow-200/20 px-2 border-1">JavaScript</p>
              <p className="text-sky-900 bg-sky-200/20 px-2 border-1">React</p>
              <p className="text-fuchsia-900 bg-fuchsia-200/20 px-2 border-1">SCSS</p>
            </div>
            <div className='flex flex-col lg:flex-row lg:gap-4'>
              <a 
                className="project-link"
                href='https://spacelab.space/'
                target='_blank'
                rel='noopenner noreferrer'
                onMouseEnter={() => hoverSound()}
                onMouseDown={() => activeSound()}
              >
                <FiGlobe size={'1.125rem'} />
                View Project
              </a>
              <a 
                className="project-link"
                href='https://github.com/spacelabdev/spacelab-react'
                target='_blank'
                rel='noopenner noreferrer'
                onMouseEnter={() => hoverSound()}
                onMouseDown={() => activeSound()}
              >
                <FaCode size={'1.125rem'} />
                Source Code
              </a>
            </div>
          </div>
          <img
            className="border-1"
            src={spacelabPreview}
            alt="Screenshot of The Spacelab Nonprofit website"
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Projects;
