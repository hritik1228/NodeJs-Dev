const mongoose = require('mongoose');

const connectionRequestSchema = new mongoose.Schema({
    fromUserId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    toUserId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    status:{
        type:String,
        enum:{
            values:["ignore", "interested", "accepted", "rejected"],
            message:`{Value} is incorrect status type`
        },
        required:true,
    }
}, {timestamps:true})

const ConnectionReuquest = mongoose.model('ConnectionRequest',connectionRequestSchema);

module.exports = ConnectionReuquest;