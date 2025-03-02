const express=require("express");

const app=express()

// What if no response is sent?
// If no response is sent from server, the browser will keep loading the page and will show loading spinner and in postman it will keep loading.
// To avoid this, we should always send a response from the server.

app.get("/about",(req,res)=>{
    console.log("Hello from the server")
})

// One route can also have multiple routes handler
// Currently it will shows the response from 1st handler only
// To show the response from 2nd handler, we need to send the response from 1st handler
app.get("/user",(req,res,next)=>{
    console.log("Handling the request 1")
    // If we are not sending the response from here then the browser will keep loading the page and will show loading spinner and in postman it will keep loading.
    // res.send("1st Response")
    // next() will call the next handler if we are not sending the response from here
    next()

    // Cannot set headers after they are sent to the client Explain?
    // If we are sending the response from here and then calling next() then it will throw an error as we cannot send the response again.
    // Javascript is single threaded and it will execute the code line by line.
},(req,res)=>{
    console.log("Handling the request 2")
    res.send("2nd Response")
})


// Explain the output of the below code?
// How? The code is written in the way that it will call the next handler in the chain.
// So, it will call the next handler in the chain and will send the response from the 4th handler.
app.get("/register",(req,res,next)=>{
    console.log("Handling the request 1")
    // res.send("1st Response")
    next()
},(req,res,next)=>{
    console.log("Handling the request 2")
    // res.send("2nd Response")
    next()
},(req,res,next)=>{
    console.log("Handling the request 3")
    // res.send("3rd Response")
    next()
},(req,res,next)=>{
    console.log("Handling the request 4")
    // res.send("4th Response")
    // next()
    // what if we call next() here?
    // If we call next() here then it will throw an error as there is no next handler in the chain.
})

// Route handler can also be written in an array
// This is the way to write the route handler in an array
// app.use("/route",[rH1,rH2,rH3],rH4,rH5,rH6,rH7)

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})