const express=require("express");
const connectDB=require("./config/database")
const User=require("./models/user")
const app=express()

app.post("/signup",async(req,res)=>{

    const userObj={
        firstName:"Khushi",
        lastName:"Kumari",
        emailId:"khushi@kumari.gmail.com",
        password:"khushi@123"
    }

    try{
        // Creating a new instance of the user model
        const user = new User(userObj);
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

