import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineEdit} from "react-icons/ai"
import {BsInfoCircle} from "react-icons/bs"
import {MdOutlineDelete} from "react-icons/md"

const BooksTable = ({books}) => {
  return (
    <table className='w-full border-separate border-spacing-2'>
          <thead>
            <tr>
              <th className='border-2 border-slate-100 text-gray-300 py-2 rounded-md'>No.</th>
              <th className='border-2 border-slate-100 text-gray-300 py-2 rounded-md'>Title</th>
              <th className='border-2 border-slate-100 text-gray-300 py-2 rounded-md max-md:hidden'>Author</th>
              <th className='border-2 border-slate-100 text-gray-300 py-2 rounded-md max-md:hidden'>Publish Year</th>
              <th className='border-2 border-slate-100 text-gray-300 py-2 rounded-md'>Operations</th>
            </tr>
          </thead>
          <br />
          <tbody>
            {books.map((book,index)=>{
              return(
              <tr key={book._id} className='h-8'>
                <td className='border border-slate-300 rounded-md text-gray-300 text-center'>{index + 1}</td>
                <td className='border border-slate-300 rounded-md text-gray-300 text-center'>{book.title}</td>
                <td className='border border-slate-300 rounded-md text-gray-300 text-center max-md:hidden'>{book.author}</td>
                <td className='border border-slate-300 rounded-md text-gray-300 text-center max-md:hidden'>{book.publishYear}</td>
                <td className='border border-slate-300 rounded-md text-gray-300 text-center py-2'>
                  <div className="flex justify-center gap-x-4">
                    <Link to={`/book/details/${book._id}`}>
                      <BsInfoCircle className='text-2xl text-green-300'/>
                    </Link>
                    <Link to={`/book/edit/${book._id}`}>
                      <AiOutlineEdit className='text-2xl text-yellow-300'/>
                    </Link>
                    <Link to={`/book/delete/${book._id}`}>
                      <MdOutlineDelete className='text-2xl text-red-500'/>
                    </Link>
                  </div>
                </td>
              </tr>
              )
            })}
          </tbody>
        </table>
  )
}

export default BooksTable