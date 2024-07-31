import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import BackButton from "../components/backButton"
import Spinner from '../components/Spinner'
import { useSnackbar } from 'notistack'

const CreateBook = () => {
  const [title, setTitle]= useState("")
  const [author, setAuthor]= useState("")
  const [publishYear, setPublishYear]= useState("")
  const [loading, setLoading]= useState(false)
  const navigate = useNavigate()
  const {enqueueSnackbar} = useSnackbar()

  // this fnction will create a new book from given data, save it then return us back to home screen
  const handleSaveBook=()=>{
    setLoading(true)
    const data ={
      title, author, publishYear
    }
    axios.post("http://localhost:5000/book", data)
    .then(()=>{
      setLoading(false)
      enqueueSnackbar("Book Created Successfully", {variant: "success"})
      navigate("/")
    })
    .catch((error)=>{
      console.log(error)
      setLoading(false)
      enqueueSnackbar("Book not Created", {variant: "error"})
    })
  }
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className="text-3xl text-gray-300 my-4">Create Book</h1>
      {loading? Spinner : ""}
      <div className="flex flex-col border-2 border-sky-400 roundedxl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <lable className="text-xl text-gray-300">Title</lable>
          <input type="text" value={title} className='border-2 border-gray-400 px-4 py-2 w-full' onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div className="my-4">
          <lable className="text-xl text-gray-300">Author</lable>
          <input type="text" value={author} className='border-2 border-gray-400 px-4 py-2 w-full' onChange={(e) => setAuthor(e.target.value)}/>
        </div>
        <div className="my-4">
          <lable className="text-xl text-gray-300">Publish Year</lable>
          <input type="number" value={publishYear} className='border-2 border-gray-400 px-4 py-2 w-full' onChange={(e) => setPublishYear(e.target.value)}/>
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveBook}>
          Save
        </button>
      </div>
    </div>
  )
}

export default CreateBook