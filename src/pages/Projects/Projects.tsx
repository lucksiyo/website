import { GoArrowUpRight } from "react-icons/go";
import spacelabPreview from '../../assets/images/spacelab_preview.webp'
import tempoPreview from '../../assets/images/tempo_preview.webp'

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import './Projects.css'

const Projects = () => {
  return (
    <>
      <Navbar />
      <section id='projects' className="py-20 px-16 lg:px-32 xl:px-64 2xl:px-84">

        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-8 items-center">
            <img
              className="mb-2 border-3"
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
              <a 
                className="mt-2 py-1 flex justify-center items-center gap-2 text-center text-(--light) bg-(--dark) hover:bg-(--accent)"
                href='https://github.com/lucksiyo/tempo'
                target='_blank'
                rel='noopenner noreferrer'
              >
                View Project
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
              <a 
                className="mt-2 py-1 flex justify-center items-center gap-2 text-center text-(--light) bg-(--dark) hover:bg-(--accent)"
                href='https://spacelab.space/'
                target='_blank'
                rel='noopenner noreferrer'
              >
                View Project
                <GoArrowUpRight />
              </a>
            </div>
            <img
              className="mb-2 border-3"
              src={spacelabPreview}
              alt="Screenshot of The Spacelab Nonprofit website"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Projects;
