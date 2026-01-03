const express = require('express');

const app = express();

// Wrapping route handlers in arrays
// app.use('/route',rH1, rH2, rH3, rH4);
// app.use('/route',[rH1, rH2, rH3, rH4]);
// app.use('/route', rH1, [rH2, rH3], rH4);

app.use('/user',(req,res, next)=>{
  // Route Handler
  // ! If no response is sent, the request will hang even if we have console logs here
  console.log('Handling the route user!!');
  // res.send('Response')
  next();
  // res.send('Response')
},(req,res, next)=>{
  console.log("Handling the route user 2!!")
  // res.send('2nd Response');
  next();  
},(req,res, next)=>{
  console.log("Handling the route user 3!!");
  // res.send('3rd Response');
  next();
},(req,res,next)=>{ 
  console.log("Handling the route user 4!!");
  res.send('4th Response');
  // next();
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

*/

