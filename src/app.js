const express=require("express");

const app=express()

// This will only match the GET HTTP Method API calls to /home
app.get("/user",(request,response)=>{
    response.send({
        firstName:"Hritik",
        lastName:"Kumar"
    })
})

app.post("/user",(request,response)=>{
    // Logic to save/connect to the database
    response.send({
        message:"User Created Successfully"
    })
})

app.delete("/user",(request,response)=>{
    // Logic to delete from the database
    response.send({
        message:"User Deleted Successfully"
    })
})

app.patch("/user",(request,response)=>{
    // Update data to the database
    response.send({
        message:"User Updated Successfully"
    })
})

// This will match all the HTTP Methods API calls to /test
app.use("/test",(request,response)=>{
    response.send("Hello World from the test server!!")
})

// app.use((request,response)=>{
//     response.send("Hello World from the server!!")
// })

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})