import { Link } from 'react-router-dom'
import { PiBookOpenTextLight } from "react-icons/pi"
import { BiUserCircle } from "react-icons/bi"
import { BsInfoCircle } from "react-icons/bs"
import { AiOutlineEdit } from 'react-icons/ai'
import { MdOutlineDelete } from 'react-icons/md'
function SingleCard({book}) {
  return (
    <div key={book._id} className="border-2 border-gray-200 rounded-lg px-4 py-2 m-4 hover:shadow-xl w-min">
        <div className='flex items-center'>
                <h4 className='my-3 me-2 text-gray-200'>{book._id}</h4>
                <h2 className="px-4 py-1 bg-sky-400 rounded-lg text-gray-800 font-bold h-fit">{book.publishYear}</h2>
        </div>
                <div className="flex justify-start items-center gap-x-2">
                    <PiBookOpenTextLight className='text-red-300 text-2xl'/>
                    <h2 className="my-1 text-gray-200">{book.title}</h2>
                </div>
                <div className="flex justify-start items-center gap-x-2">
                    <BiUserCircle className='text-red-300 text-2xl'/>
                    <h2 className="my-1 text-gray-200">{book.author}</h2>
                </div>
                <div className='flex justify-evenly items-center gap-x-2 mt-4 p-4'>
                    <Link to={`/book/details/${book._id}`}>
                        <BsInfoCircle className='text-2xl text-green-300 hover:text-green-600'/>
                    </Link>
                    <Link to={`/book/edit/${book._id}`}>
                        <AiOutlineEdit className='text-2xl text-yellow-300 hover:text-yellow-600'/>
                    </Link>
                    <Link to={`/book/delete/${book._id}`}>
                        <MdOutlineDelete className='text-2xl text-red-500 hover:text-red-600'/> 
                    </Link>
                </div>
            </div>
  )
}

export default SingleCard