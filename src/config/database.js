const mongoose=require("mongoose")

const connectDB=async()=>{
    await mongoose.connect("mongodb+srv://hritiklearntogrow:GvKSNIy9IqU5PR3J@node-learn.sgrhf.mongodb.net/devTinder")
}

module.exports=connectDB

// connectDB().then(()=>{   
//     console.log("Connected to Cluster")
//     // Once it is connected to database here we should idealy call app.listen 
// }).catch((err)=>{
//     console.log(err)
// })