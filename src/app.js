const express = require('express');
const connectDB = require('./config/database');

const app = express(); 

// Connect to the database before starting the server
connectDB()
    .then(()=>{
        console.log('Database connected successfully');
        app.listen(3000, () => {
          console.log('Server is running on port 3000');
        });

    }).catch(()=>{
        console.log('Database connection failed');
    })



