const express = require('express');
const requestsRouter = express.Router();
const { userAuth } = require('../middlewares/auth');

requestsRouter.post('/sendConnectionRequest', userAuth, async(req,res)=>{
  try{
    
  }
  catch(err){
    res.status(400).send('ERROR:' + err.message);
  }
});


module.exports = requestsRouter;