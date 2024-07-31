import React, { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios"
import BackButton from "../components/backButton"
import Spinner from '../components/Spinner'
import { useSnackbar } from 'notistack'

const EditBook = () => {
  const [title, setTitle]= useState("")
  const [author, setAuthor]= useState("")
  const [publishYear, setPublishYear]= useState("")
  const [loading, setLoading]= useState(false)
  const navigate = useNavigate()
  const {id} = useParams()
  const {enqueueSnackbar} = useSnackbar()

  useEffect(()=>{
    setLoading(true)
    axios.get(`http://localhost:5000/book/${id}`)
    .then((response)=>{
      setAuthor(response.data.author)
      setTitle(response.data.title)
      setPublishYear(response.data.publishYear)
      setLoading(false)
    })
    .catch((error)=>{
      console.log(error)
      setLoading(false)
    })
  },[])


  //this fnction will create a new book from given data, save it then return us back to home screen
  const handleEditBook=()=>{
    setLoading(true)
    const data ={
      title, author, publishYear
    }
    axios.put(`http://localhost:5000/book/${id}`, data)
    .then(()=>{
      setLoading(false)
      enqueueSnackbar("Book Edited Successfully", {variant: "success"})
      navigate("/")
    })
    .catch((error)=>{
      console.log(error)
      setLoading(false)
      enqueueSnackbar("Book was not edited", {variant: "error"})
    })
  }
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className="text-3xl my-4 text-gray-300">Edit Book</h1>
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
        <button className='p-2 bg-sky-300 m-8' onClick={handleEditBook}>
          Save
        </button>
      </div>
    </div>
  )
}

export default EditBook