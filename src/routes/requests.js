const express = require('express');
const requestsRouter = express.Router();
const { userAuth } = require('../middlewares/auth');
const ConnectionRequest = require('../models/connectionRequest');
const User = require('../models/user');

requestsRouter.post('/request/send/:status/:toUserId', userAuth, async(req,res)=>{
  try{
    const fromUserId = req.user._id;
    const toUserId = req.params.toUserId;
    const status = req.params.status;

    const allowedStatus = ["ignored","interested"];
    if(!allowedStatus.includes(status)){
      return res.status(400).json({message:"Invalid status type" + status});
    }

    // if the user exist in the db
    const toUser = await User.findById(toUserId);
    if(!toUser){
      return res.status(404).send({
        message:"User not found"
      })
    }

    // if there is an existing ConnectionRequest
    const existingConnectionRequest = await ConnectionRequest.findOne({
      $or:[
        {fromUserId, toUserId},
        {fromUserId:toUserId, toUserId:fromUserId},
      ]
    });

    if(existingConnectionRequest){
      return res.status(400).send({
        message:"Connection Request Already Exists!!"
      })
    }

    const connectionRequest = await ConnectionRequest({
      fromUserId,
      toUserId,
      status
    })

    const data = await connectionRequest.save();

    res.json({
      message: `Connection request sent to user ${toUserId} with status ${status}`,
      data
    })
  }
  catch(err){
    res.status(400).send('ERROR:' + err.message);
  }
});


module.exports = requestsRouter;