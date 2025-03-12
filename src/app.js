const express=require("express");
const connectDB=require("./config/database")

const app=express()

// First of all connect to database & then listen to the port/incoming request
// Once your database connection is successfully established then only do app.listen

connectDB().then(()=>{   
    console.log("Connected to Cluster")
    // Once it is connected to database here we should idealy call app.listen 
    app.listen(3000,()=>{
        console.log("Server is running on port 3000")
    })
}).catch((err)=>{
    console.log(err)
})

