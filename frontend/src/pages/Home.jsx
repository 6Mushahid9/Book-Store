import { useEffect, useState } from "react"
import axios from "axios"
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'
import {MdOutlineAddBox} from "react-icons/md"
import BooksTable from '../components/BooksTable'
import BooksCard from '../components/BooksCard'


const Home = () => {
  const [books, setBooks]= useState([])
  const [loading, setLoading]= useState(false)
  const [showType, setShowType] = useState("card")
  useEffect(()=>{
    setLoading(true)
    axios.get("http://localhost:5000/book")
    .then((response)=>{
      setBooks(response.data.data)
      setLoading(false)
    })
    .catch((error)=>{
      console.log(error)
      setLoading(false)
    })
  },[])


  return (
    <div className='p-4'>
      <div className="flex justify-center items-center gap-x-4">
        <button className="bg-sky-300 hover:bg-sky-400 hover:text-white px-4 py-1 rounded-lg font-bold" onClick={()=> setShowType("card")}>Card</button>
        <button className="bg-sky-300 hover:bg-sky-400 hover:text-white px-4 py-1 rounded-lg font-bold" onClick={()=> setShowType("table")}>Table</button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className='text-3xl my-8 text-gray-200'>Book List</h1>
        <Link to="/book/create">
          <MdOutlineAddBox className='text-sky-300 text-4xl'/>
        </Link>
      </div>
      {loading ?
      <Spinner/> : showType === "card" ? 
      (<BooksCard books={books}/>) : (<BooksTable books={books}/>) 
      } 
    </div>
  )
}

export default Home