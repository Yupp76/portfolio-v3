import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TechCard = ({ text, icon }) => {
  return (
    <div className="w-full h-full border border-gray-400/60 border-b-4 border-b-amber-500 shadow-lg rounded shadow-black/20">
      <div className="flex justify-between px-2 py-1-75 items-center">
        <span className="font-comp font-semibold block leading-none">{text}</span>
        <FontAwesomeIcon icon={["fab", icon]} className="text-3xl"/>
      </div>
    </div>
  )
}

export default TechCard
