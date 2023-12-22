const express=require("express")
const dotenv=require("dotenv")

dotenv.config()
const PORT=process.env.PORT

const app=express()

app.get("/",(req,res)=>{
    res.send("Hello from server")
})

app.listen(PORT,()=>{
    console.log("Server listening at port: "+PORT)
})

