const express=require("express");

const app=express()

app.use("/profile",(request,response)=>{
    response.send("Your profile looks good & optimized!")
})

app.use("/test",(request,response)=>{
    response.send("Hello World from the test server!!")
})


app.use((request,response)=>{
    response.send("Hello World from the server!!")
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})