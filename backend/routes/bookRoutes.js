import express from "express"
import { Book } from "../models/bookModel.js"
const router= express.Router()

// Route for saving a book
// post method is use to create a new resource 
router.post('/', async (req, res) =>{
    try {
        if(
            !req.body.title || !req.body.author || !req.body.publishYear 
            // to check if all required fields r present or not 
        ){
            return res.status(400).send("SEnd all required fields")
        }

        // const found = Book.find({title: req.body.title})
        // if(found)   return res.status(300).send("Book already present")
        // ✨above code will c if book of same title is already present then dont save

        // till now we have applied requirment check
        // new v will create new object and save in DB
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        }
        const book = await Book.create(newBook)
        return res.status(200).send("Book saved !!")
    } catch (error) {
        console.log(error.message);
        // to see result in postman we need to send res
        res.status(500).send("Could not save BOOK")
    }
})

// Route to see all books
// here v will use get method
router.get("/", async(req,res)=>{
    try {
        const books = await Book.find({}) 
        // empty .find() will return all the objects
        return res.status(200).json({
            count: books.length,
            data: books
        })
    } catch (error) {
        console.log(error)
        res.status(400).send(error.message)
    }
})

// Route to find books of same name
router.get("/:id", async(req,res)=>{
    try {
        const {id} = req.params
        const book = await Book.findById(id) 
        // empty .find() will return all the objects
        if(!book)   return res.status(400).send("Book not found")
        else  return res.status(200).json(book)
    } catch (error) {
        console.log(error)
        res.status(400).send(error.message)
    }
})

// Route to update a book
// put method is used to update a resource
router.put("/:id", async(req,res)=>{
    try {
        if(!req.body.title || !req.body.author || !req.body.publishYear ){
            return res.status(305).send("All fields are required")
        }
        const {id} = req.params
        const book = await Book.findById(id)
        if(!book){
            return res.status(300).send("Book does not exist")
        }else{
            await Book.findByIdAndUpdate(id, req.body)
            return res.status(200).send("updation successfull")
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Could not update")
    }
})

// below code is used to find perticular entry of an object 
// const name = await Book.findById(id).select('author').exec();


// Route to delete a book
// we will use delete method
router.delete("/:id" , async(req,res)=>{
    try {
        const { id } = req.params 
        const book = await Book.findByIdAndDelete(id)
        if(!book)   return res.status(300).send("Book does not exist")
        res.status(200).send("Book deleted !")    
    } catch (error) {
        console.log(error)
        return res.status(500).send("Could not delete")
    }
})

export default router