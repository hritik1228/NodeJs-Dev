const express = require('express');
const requestsRouter = express.Router();
const { userAuth } = require('../middlewares/auth');

requestsRouter.post('/sendConnectionRequest', userAuth, async(req,res)=>{
  try{
    const fromUser = req.user;
    console.log("Sending a connection request");

    res.send(fromUser.firstName + ' sent the connection request!!' );
  }
  catch(err){
    res.status(400).send('ERROR:' + err.message);
  }
});


module.exports = requestsRouter;