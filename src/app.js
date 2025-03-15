const express=require("express");
const connectDB=require("./config/database")
const User=require("./models/user")
const app=express()

// this middleware is used to parse the incoming request with JSON payloads 
// It is used for all the routes

// When a client (e.g., a frontend app) sends data to your Express server using POST or PUT, the data is usually in JSON format. However, Express does not automatically understand JSON. express.json() helps Express convert the incoming JSON data into a JavaScript object so you can easily use it in your code.
app.use(express.json())

app.post("/signup",async(req,res)=>{

    
    // console.log(req.body)

    // const userObj={
    //     firstName:"Khushi",
    //     lastName:"Kumari",
    //     emailId:"khushi@kumari.gmail.com",
    //     password:"khushi@123"
    // }

    try{
        // Creating a new instance of the user model
        // const user = new User(userObj);
        const user = new User(req.body);
        await user.save();
        res.send("User added successfully");
    }catch(err){
        res.status(400).send("Error in adding user:",err.message);
    }

})

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



// Write a basic difference between JSON & Javascript object?
// JSON is a string format used to store and exchange data.
// JavaScript object is a real object used in JavaScript code

// const jsonData = '{"name": "John", "age": 30}';
// const obj = JSON.parse(jsonData); // Converts JSON string to object

// const obj = { name: "John", age: 30 };
// const jsonData = JSON.stringify(obj); // Converts object to JSON string

// Usage
// JSON-> Used for data exchange (e.g., API responses)	
// JS Object-> Used for programming logic in JavaScript