const express = require('express');
const connectDB = require('./config/database');
const User = require('./models/user');


const app = express(); 

// Middleware to parse JSON body
app.use(express.json()); 

// Signup API - POST /signup - create a new user
app.post('/signup',async(req,res)=>{

  // undefined because we have not added middleware to parse JSON body
  // parse json body means convert json string into js object
  // console.log(req.body)

  // It's a JS object representing user data
  // const userObj = {
  //   firstName: 'Khushi',
  //   lastName: 'Kumari',
  //   emailId: 'khushi@kumari.com',
  //   password: 'khushi123',
  // }
  // Creating a new instance of the User Model
  const user = new User(req.body);
  
  try{
    await user.save();
    res.send('User signed up successfully');
  }
  catch(err){
    res.status(400).send('Error in signing up user');
  }

})

// Get User API - GET /user - get user by emailId
app.get('/user',async(req,res)=>{
  const userEmail = req.body.emailId;

  console.log('EmailId received :',userEmail);
  
  try{
    const user = await User.find({emailId:userEmail});
    if(user.length === 0){
      return res.status(404).send('User not found');
    }
    else{
      res.send(user);
    }
  }
  catch(err){
    res.status(400).send('Error in fetching user data');
  }

})

// Feed API - GET /feed - get all the users from the database
app.get('/feed',async(req,res)=>{
try{
    const user = await User.find({});
    if(user.length === 0){
      return res.status(404).send('User not found');
    }
    else{
      res.send(user);
    }
  }
  catch(err){
    res.status(400).send('Error in fetching user data');
  }
});

// findOne() is used with duplicate email documents in the database, MongoDB will return the first matching document it finds based on the collection's internal document ordering.
app.get('/userduplicate',async(req,res)=>{
  const userEmail = req.body.emailId;

  console.log('EmailId received :',userEmail);
  
  try{
    const user = await User.findOne({emailId:userEmail});
    if(user.length === 0){
      return res.status(404).send('User not found');
    }
    else{
      res.send(user);
    }
  }
  catch(err){
    res.status(400).send('Error in fetching user data');
  }

})

app.delete('/deleteUser',async(req,res)=>{
  const userId = req.body.userId;
  try{
    // const deletedUser = await User.findByIdAndDelete({_id:userId});
    const deletedUser = await User.findByIdAndDelete(userId);
    res.send('User deleted successfully');
  }
  catch(err){
    res.status(400).send('Error in deleting user');
  }
});

// Any data not present in User model schema will not be added to the database
// Update user API - PATCH /updateUser - update user by userId
// runValidators:true -> to run the validators defined in the schema while updating
app.patch('/updateUser',async(req,res)=>{
  const userId = req.body.userId;
  const data = req.body;
  
  try{
    const deletedUser = await User.findByIdAndUpdate({_id:userId},data, {returnDocument:'after', runValidators:true});
    console.log(deletedUser);
    res.send('User updated successfully');
  }
  catch(err){
    res.status(400).send('Error in updating user');
  }
});



// Connect to the database before starting the server
// Call connectDB function and connect to the database before starting appliaication server
connectDB()
    .then(()=>{
        console.log('Database connected successfully');
        app.listen(3000, () => {
          console.log('Server is running on port 3000');
        });

    })
    .catch(()=>{
        console.log('Database connection failed');
    })



