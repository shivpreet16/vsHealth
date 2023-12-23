const express=require("express")
const dotenv=require("dotenv")
const {mongoConnect, sqlConnect} = require("./connect")

dotenv.config()
const PORT=process.env.PORT || 5000

const app=express()

app.get("/",(req,res)=>{
    res.send("Hello from server")
})

app.listen(PORT,()=>{
    console.log("Server listening at port: "+PORT)
})

mongoConnect()

const connection=sqlConnect()

// const userSchema= new mongoose.Schema({
//     name:{
//         type:String,
//         required:true
//     },
// })

// const user=mongoose.model('user',userSchema)

