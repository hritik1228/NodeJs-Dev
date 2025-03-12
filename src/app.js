const express=require("express");

const app=express()

// Error Handling


app.use("/getUserData",(req,res,next)=>{
    // Logic of DB call and get user data
    // Best way to write code is to use try catch block
    try{

    }
    catch(err){
    
    }

    throw Error("DB Connection Error")
    console.log("User called")
    res.send("User called")
})

// Error Handling 
// err should be the first argument why so?
// If we don't pass err as first argument then express will not consider it as error handler
// It will consider it as normal middleware
// err,req,res,next this argument should be passed in order. Order matters
// Write this at the end of all the routes
app.use("/",(err,req,res,next)=>{
    if(err){
        res.status(500).send("Something went wrong")
    }
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})