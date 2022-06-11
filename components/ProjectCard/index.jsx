import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProjectCard = ({ title, text, repoLink, demoLink, imgSrc }) => {
  return (
    <div className="mx-auto items-center flex w-full h-full border border-gray-400/60 flex-col justify-center rounded-2xl shadow-lg rounded shadow-black/20 overflow-hidden relative">
      <img
        className="aspect-video w-full h-[410px] object-center object-fill"
        src={imgSrc}
      />
      <div className="flex px-1-5 pb-1-25 h-full absolute bottom-0 left-0 w-full bg-gradient-to-b from-transparent to-gray-900">
        <div className="mt-auto w-full">
          <h1 className="text-xl font-medium text-white">{title}</h1>
          <h1 className="text-base text-white">{text}</h1>
          <div className="flex flex-wrap">
            {!!repoLink && (
              <Button
                link={repoLink}
                text={`Github Repo`}
                icon={['fab', 'github']}
                className="cursor-pointer mt-1 text-white bg-[#24292F] hover:bg-[#1e2427] focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-1 py-0-5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mb-0-25 w-full"
              />
            )}
            {!!demoLink && (
              <Button
                link={demoLink}
                text={`Live Demo`}
                icon={['fas', 'external-link-alt']}
                className="cursor-pointer mt-0-25 text-white bg-[#db1b28] hover:bg-[#be1823] focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-1 py-0-5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mb-0-25 w-full"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const Button = ({ link, text, icon, ...rest }) => (
  <a target={'_blank'} href={link} {...rest}>
    <FontAwesomeIcon icon={icon} className="text-xl mr-1 -ml-0-50" />
    {text}
  </a>
)

export default ProjectCard
