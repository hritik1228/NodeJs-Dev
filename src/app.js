const express = require('express');

const app = express();

// When a request is made to the server, send "Hello from the Node.js server!" as the response
// app.use((req,res)=>{
//     res.send('Hello from the Node.js server!');
// })

// route handler for all incoming requests
app.use('/test',(req,res)=>{
    res.send('This is the test route');
})

app.use('/hello',(req,res)=>{
    res.send('Hello Hello from the Node.js server!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


// nodemon - a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
