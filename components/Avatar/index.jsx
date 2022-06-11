const Avatar = ({ src, alt, text }) => {
  return (
    <div className="flex overflow-hidden max-w-full items-center relative mt-2">
      <div className="relative">
        <div className="inline-block h-2-85 w-2-85 mr-1-75 rounded-full text-white shadow-solid overflow-hidden">
          <img src={src} alt={alt} />
        </div>
        <span className="h-1 w-1 bg-green-400 mx-1-25 border-gray-100 border-2 rounded-full right-0 top-0 absolute"></span>
      </div>
      <p className="py-1-5 text-md">{text}</p>
    </div>
  )
}

export default Avatar
