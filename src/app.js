const express=require("express");

const app=express()


// Orders of the routes matters a lot

app.use("/",(request,response)=>{
    response.send("Home page of the server!!")
})

app.use("/hello/hello",(request,response)=>{
    response.send("hello hello hello")
})

app.use("/hello",(request,response)=>{
    response.send("hello hello")
})

app.use("/profile",(request,response)=>{
    response.send("Your profile looks good & optimized!")
})

app.use("/test",(request,response)=>{
    response.send("Hello World from the test server!!")
})

// app.use((request,response)=>{
//     response.send("Hello World from the server!!")
// })

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})