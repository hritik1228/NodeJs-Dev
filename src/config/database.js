const mongoose = require('mongoose');

// Connecting to Clustered MongoDB Atlas Database
const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://hritik1228:Hritik12345@learnnode.ccm89o0.mongodb.net/devTinder-Learn')
};

// ! First connect to the database and then start the server
// connectDB()
//     .then(()=>{
//         console.log('Database connected successfully');
//     }).catch(()=>{
//         console.log('Database connection failed');
//     })


module.exports = connectDB;


