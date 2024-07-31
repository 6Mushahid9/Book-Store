import React from 'react'
import { useState } from "react"
import Spinner from '../components/Spinner'
import { useNavigate, useParams } from 'react-router-dom'
import BackButton from '../components/backButton'
import axios from 'axios'
import { useSnackbar } from 'notistack'

const DeleteBook = () => {
  const [loading ,setLoading] = useState(false)
  const navigate = useNavigate()
  const {id} = useParams()
  const {enqueueSnackbar} = useSnackbar()

  const handleDeleteBook = ()=>{
    setLoading(true)
    axios.delete(`http://localhost:5000/book/${id}`)
    .then(() =>{
      setLoading(false)
      enqueueSnackbar("Book Deleted Successfully", {variant: "success"})
      navigate("/")
    })
    .catch((error)=>{
      console.log(error)
      setLoading(false)
      enqueueSnackbar("Book was not deleted", {variant: "error"})
    })
  }
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className="text-3xl text-gray-300 my-10">Delete Book</h1>
      {loading? <Spinner/> : ""}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className='text-2xl text-gray-300'>Are You Sure you want to delete this Book?</h3>
        <button className='p-4 bg-red-400 text-white m-8 w-full hover:bg-red-500 rounded-xl' onClick={handleDeleteBook}>YES !!</button>
      </div>
    </div>
  )
}

export default DeleteBook