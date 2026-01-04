const express = require('express');


const app = express(); 

// app.use('/', (err, req, res, next) => {
//   if(err){
//     // Log your error details here
//     res.status(500).send('Something went wrong!');
//   }
// });

app.get('/getUserData', (req, res) => {
  // Logic of DB Call and get user data
  console.log('Before the error')
  throw new Error('Database connection failed');
  console.log('After the error')
  res.send('User Data Sent Successfully');
  
});

// error handling middleware, err should be the first parameter (err, req, res, next)
app.use('/', (err, req, res, next) => {
  if(err){
    // Log your error details here
    res.status(500).send('Something went wrong!');
  }
  
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


/*

! What happens if we don't send a response in an Express route handler?
  If no response is sent in an Express route handler, the client making the request will hang indefinitely, waiting for a response that never arrives. This can lead to timeouts and a poor user experience. The server will log any console messages, but without a response being sent back to the client, the request remains open. To avoid this, always ensure that you send a response using methods like res.send(), res.json(), or res.end() within your route handlers. 

! There can be multiple middleware functions in a single route, but at least one must send a response to the client. As soon as a response is sent, the request-response cycle is completed, and no further middleware functions will be executed for that request.

! If i am not sending response in first middleware but in second middleware, will it work?
  No , it will not work. In Express, once a response is sent using methods like res.send(), res.json(), or res.end(), the request-response cycle is considered complete, and no further middleware functions will be executed for that request. Therefore, if the first middleware does not send a response and the second middleware attempts to send a response, it will not be executed because the request has already been completed by the first middleware. To ensure that the second middleware can send a response, the first middleware must either call next() to pass control to the next middleware or not send a response at all. 

! What happens if we call next() after sending a response?
  Calling next() after sending a response in Express can lead to unexpected behavior. Once a response is sent to the client, the request-response cycle is considered complete, and any subsequent middleware functions or route handlers will still be executed, but they won't be able to modify the response or send another response. This can result in errors or warnings in your application, as Express may attempt to process additional middleware that is no longer relevant to the completed request. It's generally best practice to avoid calling next() after sending a response to prevent such issues.

! What happens if we have next() before res.send() in the same middleware?
  If you call next() before res.send() in the same middleware, the control will be passed to the next middleware function in the stack before the response is sent. This means that the current middleware will not complete its execution, and the response will not be sent to the client from that middleware. Instead, the next middleware will execute, and if it also does not send a response, the request may hang indefinitely. To ensure that a response is sent correctly, you should call res.send() (or any other response method) before calling next(), or avoid calling next() altogether if you intend to send a response from that middleware.

! Chain of middlewares in a single route
  In Express.js, you can chain multiple middleware functions for a single route by passing them as arguments to the route handler. Each middleware function has access to the request and response objects, as well as the next() function, which is used to pass control to the next middleware in the chain. The order of execution follows the order in which the middleware functions are defined. If a middleware function sends a response (e.g., using res.send()), it will terminate the request-response cycle, and subsequent middleware functions will not be executed. If a middleware function does not send a response, it should call next() to pass control to the next middleware in the chain. This allows for modular and reusable code, as each middleware can handle specific tasks such as authentication, logging, or data processing before sending a final response to the client.
  
! what is middleware in express.js?
  Middleware in Express.js refers to functions that have access to the request object (req), the response object (res), and the next middleware function in the application's request-response cycle. Middleware functions can perform various tasks such as executing code, modifying the request and response objects, ending the request-response cycle, or calling the next middleware function in the stack. They are essential for handling tasks like logging, authentication, error handling, and parsing request bodies. Middleware can be applied globally to all routes or specifically to individual routes, allowing for flexible and modular application design.

  ! How express js works internally?
  Express.js works internally by utilizing a middleware stack to handle incoming HTTP requests. When a request is made to an Express application, it goes through a series of middleware functions that are executed in the order they are defined. Each middleware function has access to the request and response objects, as well as the next() function, which is used to pass control to the next middleware in the stack.  The core components of Express.js include:

  1. Routing: Express uses a routing system to define how the application responds to different HTTP methods and URL paths. Routes are defined using methods like app.get(), app.post(), etc.
  2. Middleware: Middleware functions are used to process requests and responses. They can perform tasks such as logging, authentication, parsing request bodies, and error handling.
  3. Request and Response Objects: Express provides enhanced request (req) and response (res) objects that offer additional methods and properties for handling HTTP requests and responses.

  GET/users => Middleware chains => Request Handler => Response to Client

  ! Why Do We Need Middleware?
  Middleware is essential in Express.js for several reasons:
  1. Code Reusability: Middleware functions can be reused across different routes, reducing code duplication and promoting modularity.
  2. Separation of Concerns: Middleware allows developers to separate different functionalities (e.g., authentication, logging, error handling) into distinct functions, making the codebase cleaner and easier to maintain.
  3. Request Processing: Middleware can process incoming requests before they reach the route handlers, allowing for tasks such as parsing request bodies, validating data, and handling authentication.
  4. Response Handling: Middleware can also modify responses before they are sent back to the client, enabling features like response compression or formatting.
  5. Error Handling: Middleware can be used to catch and handle errors that occur during request processing, providing a centralized way to manage errors in the application. 


*/

