import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import 'dotenv/config'

// dotenv.config();

const  app = express();

//middleware
app.use(cors())
app.use(express.json());

//mongodb connection
await mongoose.connect(process.env.MONGODB_URI)
    .then(()=>console.log("mongodb connected"))
    .catch(err=> console.log('db connectin failed',err))


app.get('/',(req,res)=>{
    res.send("<h5>this is h5 line<h5/>")
})

app.get('/home',(req,res)=>{
    res.send("this is the reply of the /home req")
})

app.listen(3000,()=>{
    console.log("listening on port 3000")

    ##
})
