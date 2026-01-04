const express = require('express');
const connectDB = require('./config/database');
const User = require('./models/user');


const app = express(); 

app.use(express.json()); // Middleware to parse JSON body

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



