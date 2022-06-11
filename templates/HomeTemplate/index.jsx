import Avatar from 'components/Avatar'
import ProjectCard from 'components/ProjectCard'
import SectionIntro from 'components/SectionIntro'
import { SectionIntroProps } from 'components/SectionIntro/constants'
import TechCard from 'components/TechCard'
import { v4 as uuidv4 } from 'uuid'
import {
  ABOUT_IDENTIFIER,
  CONTACT_IDENTIFIER,
  PROJECTS_IDENTIFIER,
  projectsList,
  techStack,
} from './constants'

const HomeTempate = () => {
  return (
    <>
      <HeroSection />
      <Section01 />
      <Section02 />
      <Section03 />
    </>
  )
}

const HeroSection = () => (
  <header className="md:mt-5 pb-2 mt-0 mb-5">
    <div className="container mx-auto">
      <div className="row flex-col-reverse md:flex-row">
        <div className="col-12 md:col-6">
          <div
            className="w-full h-full flex justify-center flex-col"
            id={ABOUT_IDENTIFIER}
          >
            <div>
              <SectionIntro
                renderAs={`h1`}
                subtitle={`About Me`}
                variant={SectionIntroProps.variant.lg}
                title={`Hello there, I'm Jim Ree. 
                Frontend web developer.`}
                text={`I have always loved data and development and had this as a hobby for many years now and this is my future and i love it. Now I am taking a 2-years study in front-end development at the Noroff School of technology and digital media.`}
              />
              <Avatar
                src={`/images/avatar.jpg`}
                alt={`Jim ree`}
                text={`Reply time: within 1-2 working days`}
              />
            </div>
          </div>
        </div>
        <div className="col-12 md:col-6">
          <div className="mb-2-5 md:mb-0 bg-gradient-to-tl from-[#EAB308] to-[#F87171] rounded-none h-120 md:140 lg:h-160 w-full relative">
            <img
              className="max-h-[250px] md:max-h-[570px] h-full w-full object-[40%,20%] object-cover md:object-center mix-blend-overlay grayscale"
              src="/images/hero.jpg"
              alt="Jim ree"
            />
          </div>
        </div>
      </div>
    </div>
  </header>
)

const Section01 = () => (
  <section className="my-5 py-2">
    <div className="container mx-auto">
      <div className="row">
        <div className="md:col-10 col-12">
          <SectionIntro
            renderAs={`h2`}
            subtitle={`Tech Stack`}
            variant={SectionIntroProps.variant.md}
            title={`Tools and Technologies I use 🧰`}
            text={`Being curious and a problem solver by nature always drives me to learn new technologies by building projects in my spare time, thereby I gained knowledge on how to wisely chose the right stack for my projects and absolutely has helped grow as a developer. 
              Here is some of the tools and technologies I have experience with and have used in my projects.`}
          />
        </div>
      </div>
      <ul className="row g-1 mt-1">
        {techStack.map((tech) => (
          <li key={uuidv4()} className="col-12 sm:col-6 md:col-4 lg:col-3">
            <TechCard text={tech.text} icon={tech.icon} />
          </li>
        ))}
      </ul>
    </div>
  </section>
)

const Section02 = () => (
  <section className="my-5 py-2">
    <div className="container mx-auto" id={PROJECTS_IDENTIFIER}>
      <div className="row">
        <div className="md:col-10 col-12">
          <SectionIntro
            renderAs={`h3`}
            variant={SectionIntroProps.variant.md}
            subtitle={`Projects`}
            title={`Projects I have worked on 📁`}
          />
        </div>
      </div>
      <ul className="row g-1 mt-1">
        {projectsList.map((project) => (
          <li key={uuidv4()} className="col-12 md:col-6 xl:col-4">
            <ProjectCard
              text={project.text}
              title={project.title}
              imgSrc={project.imgSrc}
              demoLink={project.demoLink}
              repoLink={project.repoLink}
            />
          </li>
        ))}
      </ul>
    </div>
  </section>
)

const Section03 = () => (
  <section className="my-5 py-2">
    <div className="container mx-auto" id={CONTACT_IDENTIFIER}>
      <div className="row">
        <div className="md:col-10 col-12">
          <SectionIntro
            renderAs={`h4`}
            variant={SectionIntroProps.variant.md}
            subtitle={`Contact`}
            title={`Say Hello 😄`}
          />
        </div>
      </div>
      <div className="row g-1 mt-2">
        <div className="col-12 sm:col-6">
          <div>
            <SectionIntro
              renderAs={`span`}
              variant={SectionIntroProps.variant.md}
              subtitle={`Email 📧`}
            />
            <a
              className="mb-0-75 text-gray-900 font-main font-bold lg:text-2xl text-xl"
              href="mailto:jim@jrdesign.no"
            >
              Jim@jimree.no
            </a>
          </div>
        </div>
        <div className="col-12 sm:col-6">
          <div>
            <SectionIntro
              renderAs={`span`}
              variant={SectionIntroProps.variant.md}
              subtitle={`Phone 📞`}
            />
            <a
              className="mb-0-75 text-gray-900 font-main font-bold lg:text-2xl text-xl"
              href="tel:+47 919 21 730"
            >
              +47 919 21 730
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default HomeTempate
