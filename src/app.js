const express=require("express");

const app=express()


// Another way to define route handler 
// Order of route handler is important
// If we change the order of route handler then output will be different

app.get("/api",(req,res,next)=>{
    console.log("Handler 1")
    // res.send("Route Handler 1")
    next()
})

app.get("/api",(req,res,next)=>{
    console.log("Handler 2")
    res.send("Route Handler 2")
})

// What happens when a request comes to the express?
// When a request comes to the express, it goes through the middleware stack.
// The middleware stack is a series of functions that are executed in the order they are defined.
// The request goes through each middleware function in the stack until it reaches the route handler that sends a response back to the client.

// Middlewares are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle.
// The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.
// Give an example of middleware
app.use((req,res,next)=>{
    console.log("Middleware 1")
    next()
})

// Handle auth middleware for all requests GET,POST,PUT,DELETE
app.use("/admins",(req,res,next)=>{
    
    
})

// What is use of middleware?
app.get("/admins/getAllData",(req,res,next)=>{
    // Logic of checking if the request is authorized
    // Logic of fetching all data of admins
    // if this authorization code is required in different routes then we have to write this code in every route
    // So, we can use middleware to avoid this

    const token=xyz;
    const isAuthorized=token==="xyz";
    if(isAuthorized){
        res.send("All data sent")
    }
    else{
        res.status(401).send("Unauthorized request")
    }
    // res.send("Route Handler 3")
})

app.get("/admins/deleteUser",(req,res,next)=>{
    // Logic of checking if the request is authorized
    // Logic of deleting a user
    console.log("Handler 4")
    res.send("Deleted a user")
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})