const express = require('express');
const connectDB = require('./config/database');

const app = express(); 

// Connect to the database before starting the server
// Call connectDB function and connect to the database before starting appliaication server
connectDB()
    .then(()=>{
        console.log('Database connected successfully');
        app.listen(3000, () => {
          console.log('Server is running on port 3000');
        });

    }).catch(()=>{
        console.log('Database connection failed');
    })



