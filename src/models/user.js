const mongoose=require("mongoose");

// Data Sanitization & Schema Validation

const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minlength:4,
        maxlength:50,
    },
    lastName:{
        type:String,
    },
    emailId:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        min:18,
    },
    gender:{
        type:String,   
        // It will only be called when the data is inserted on updation it won't be called
        // To validate the data on updation we need to use runValidators:true
        validate(value){
            if(!["male","female","others"].includes(value)){    
                throw new Error("Gender data is not valid");
            }
        }, 
    },
    photoUrl:{
        type:String,
    },
    about:{
        type:String,
        default:"This is a default about of the user",
    },
    skills:{
        type:[String],
    }
},{timestamps:true});

// User is the model name-> it should be in capital letter
// userSchema is the schema name

const User=mongoose.model("User",userSchema);

module.exports=User;