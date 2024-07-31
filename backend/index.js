import { PORT, mongoDBURL } from "./config.js"

import express from "express"
const app = express()

import mongoose from "mongoose"
import { Book } from "./models/bookModel.js"
import bookRoutes from "./routes/bookRoutes.js"

import cors from "cors"

// middleware for parsing request body
app.use(express.json())

// middleware for handling cors policy
// option 1: To alow all origins
app.use(cors())
// option 2: To alow custom origins (give more power)
// app.use(cors({
//     origin: `http://localhost:${PORT}`,
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"]
// }))

app.get("/", (req, res) =>{    // .get is a http method to get resource from server
    // console.log(req)
    return res.status(200).send("This is a random message that will show up on site")
}); 

// app.listen(PORT, () =>{
//     console.log(`App is running on port : ${PORT}`)
// })

mongoose.connect(mongoDBURL) //syntax to connect to DB

.then(()=>{
    console.log("DB connected successfully")
    //since i want to run my app only when its conncted to DB ⁂ write listen code here
    app.listen(PORT, () =>{
        console.log(`App is running on port : ${PORT}`)
    })
})
.catch((err)=>{
    console.log(err);;
})

app.use("/book", bookRoutes)
