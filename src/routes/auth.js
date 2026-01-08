const express = require('express');
const User = require('../models/user');
const {validationSignUpData} = require('../utils/validation');
const bcrypt = require('bcrypt');
const authRouter = express.Router();

// Signup API - POST /signup - create a new user
authRouter.post('/signup',async(req,res)=>{

  // Creating a new instance of the User Model
  const user = new User(req.body);
  
  try{
    // Validation of data
    validationSignUpData(req);

    const {firstName, lastName, emailId, password} = req.body;

    // Encrypt the password
    const hashedPassword = await bcrypt.hash(password, 10); 
    const user = new User({
      firstName,
      lastName,
      emailId,
      password: hashedPassword
    });
    await user.save();
    res.send('User signed up successfully');
  }
  catch(err){
    res.status(400).send('ERROR:' + err.message);
  }

});

// Login API - POST /login - login an existing user
authRouter.post('/login',async(req,res)=>{
  try{
    const {emailId, password} = req.body;

    const user = await User.findOne({emailId:emailId});
    if(!user){
      throw new Error('Email Not Found');
    }

    const isPasswordValid =  user.validatePassword(password);
    
    if(isPasswordValid){

      // Creata a JWT Token 
      const token = await user.getJWT();
      // console.log(token);

      // Add the token to cookie and send the response back to the user
      res.cookie('token',token,{expires: new Date(Date.now() + 8 * 3600000)});
      res.send('User logged in successfully');
    }
    else{
      throw new Error('Password is incorrect');
    }
  }
  catch(err){
    res.status(400).send('ERROR:' + err.message);
  }
}); 

// Logout API - POST /logout - logout an existing user
authRouter.post('/logout',async(req,res)=>{
    try{
        res.cookie('token',null,{expires: new Date(Date.now())});
        // res.clearCookie('token');
        res.send('User logged out successfully');
    }
    catch(err){
        res.status(400).send('ERROR:' + err.message);
    }
});


module.exports = authRouter;