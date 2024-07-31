import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BackButton from '../components/backButton'
import Spinner from "../components/Spinner"
import axios from "axios"


const ShowBook = () => {
  const [books, setBooks] = useState({})
  const [loading, setLoading] = useState(false)
  const {id} = useParams()

  useEffect(()=>{
    setLoading(true)
    axios.get(`http://localhost:5000/book/${id}`)
    .then((response)=>{
      setBooks(response.data)
      setLoading(false)
    })
    .catch((err)=>{
      console.log(err)
      setLoading(false)
    })
  },[])
  
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl text-gray-300 my-4'>Show Book</h1>
      {loading ? (
        <Spinner/>
      ):(
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className='text-xl mr-4 text-gray-300'>Id :</span>
            <span className='text-white text-xl'>{books._id}</span>
          </div>
          <div className="my-4">
            <span className='text-xl mr-4 text-gray-300'>Title :</span>
            <span className='text-white text-xl'>{books.title}</span>
          </div>
          <div className="my-4">
            <span className='text-xl mr-4 text-gray-300'>Author :</span>
            <span className='text-white text-xl'>{books.author}</span>
          </div>
          <div className="my-4">
            <span className='text-xl mr-4 text-gray-300'>Publish Year :</span>
            <span className='text-white text-xl'>{books.publishYear}</span>
          </div>
          <div className="my-4">
            <span className='text-xl mr-4 text-gray-300'>Create Time :</span>
            <span className='text-white text-xl'>{new Date(books.createdAt).toString()}</span>
          </div>
          <div className="my-4">
            <span className='text-xl mr-4 text-gray-300'>Update Time :</span>
            <span className='text-white text-xl'>{new Date(books.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default ShowBook