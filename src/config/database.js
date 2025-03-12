const mongoose=require("mongoose")

const connectDB=async()=>{
    await mongoose.connect("mongodb+srv://hritiklearntogrow:GvKSNIy9IqU5PR3J@node-learn.sgrhf.mongodb.net/")
}


connectDB().then(()=>{   
    console.log("Connected to Cluster")
}).catch((err)=>{
    console.log(err)
})