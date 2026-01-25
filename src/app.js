const express = require('express');
const connectDB = require('./config/database')
const cookieParser = require('cookie-parser');


const app = express(); 

// Middleware to parse JSON body
app.use(express.json());
app.use(cookieParser()); 

const authRouter = require('./routes/auth');
const profileRouter = require('./routes/profile');
const requestsRouter = require('./routes/requests');
const userRouter = require("./routes/user");

app.use('/', authRouter);
app.use('/', profileRouter);
app.use('/', requestsRouter);
app.use('/', userRouter);

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



