import {Link} from "react-router-dom"
import {BsArrowLeft} from "react-icons/bs"

const backButton = ({destination="/"}) => {
  return (
    <div className='flex'>
      <Link to={destination} className='bg-sky-300 text-gray-700 hover:text-white px-4 py-1 rounded-lg w-fit'>
        <BsArrowLeft className='text-2xl' />
      </Link>
    </div>
  )
}

export default backButton