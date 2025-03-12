const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
    },
    lastName:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    age:{
        type:Number,
    },
    gender:{
        type:String,    
    }
})

// User is the model name-> it should be in capital letter
// userSchema is the schema name

const User=mongoose.model("User",userSchema);

module.exports=User;