const express = require('express');

const app = express();

// When a request is made to the server, send "Hello from the Node.js server!" as the response
// app.use((req,res)=>{
//     res.send('Hello from the Node.js server!');
// })

// what does '/' mean here?
// Anything matches '/' will be handled by this route handler
// app.use('/', (req, res) => {
//     res.send('Welcome to the Home Page!');
// });

// route handler for all incoming requests
app.use('/test',(req,res)=>{
    res.send('This is the test route');
})

app.use('/hello',(req,res)=>{
    res.send('Hello Hello from the Node.js server!');
});

// Does the sequence of route handlers matter?
// Yes, the sequence matters. The first matching route handler will be executed.
app.use('/', (req, res) => {
    res.send('Welcome to the Home Page!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

/*
* Description of the code above:
This code sets up a basic web server using the Express framework in Node.js. It defines several route handlers to respond to different URL paths:
1. The server listens on port 3000.
2. When a request is made to the '/test' path, it responds with "This is the test route".
3. When a request is made to the '/hello' path, it responds with "Hello Hello from the Node.js server!".
4. For any other request (i.e., the root path '/'), it responds with "Welcome to the Home Page!".
5. The order of route handlers matters; the first matching handler will be executed.

* How orders of route handlers affect request handling:
- The sequence of route handlers is important because Express processes them in the order they are defined. 
- When a request is made, Express checks each route handler in sequence until it finds one that matches the request path.
- Once a matching route handler is found, it executes that handler and ignores any subsequent handlers.
- Therefore, more specific routes should be defined before more general ones to ensure they are matched correctly.

* Additional Information:
- Express.js is a popular web framework for Node.js that simplifies the process of building web applications and APIs.

- The `app.use()` method is used to define middleware functions that handle requests to specific paths.
- The `app.listen()` method starts the server and listens for incoming requests on the specified port (3000 in this case).
*/


// nodemon - a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
