const express = require('express');

const app = express();

// This will only handle GET call to /user
app.get('/user/:userId/:name/:password', (req, res) => {
  console.log(req.params)
  // '/user?userId=123&name=John'
  // console.log(req.query)
  res.send({firstName: 'Hritik', lastName: 'Kumar'});
});

// This will handle all the POST calls to /user
app.post('/user', (req, res) => {
  console.log('Save the data to the database');
  res.send("Data successfully saved to the database");
});

app.delete('/user', (req, res) => {
  console.log('Delete the user from the database');
  res.send("User successfully deleted from the database");
});

// This will match all the HTTP methods API calls to /test
app.use('/test', (req, res) => {
  res.send('This is the test route');
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

* HTTP Methods:
- The code above uses the `app.use()` method, which is a general-purpose method for handling all HTTP methods (GET, POST, PUT, DELETE, etc.) for the specified path.
- If you want to handle specific HTTP methods, you can use methods like `app.get()`, `app.post()`, `app.put()`, and `app.delete()`.

* Advanced Routing Techniques:
- '?': This symbol can be used in route paths to indicate that the preceding character or group is optional. For example, '/user/:id?' would match both '/user' and '/user/123'.
- '*': This symbol can be used as a wildcard to match any sequence of characters. For example, '/files/*' would match '/files/documents/report.pdf' and '/files/images/photo.jpg'.
- Regular Expressions: You can use regular expressions in route paths to create more complex matching patterns. For example, '/user/:id(\\d+)' would match only numeric user IDs.
- '+': This symbol indicates that the preceding character or group must appear one or more times. For example, '/item/:name+' would match '/item/book' and '/item/book/pen'.

* req.query
- The `req.query` object contains key-value pairs of query parameters sent in the URL. For example, in the URL `/search?term=nodejs&sort=asc`, `req.query` would be `{ term: 'nodejs', sort: 'asc' }`.

* req.params
- The `req.params` object contains route parameters defined in the URL path. For example, in the route `/user/:userId`, if a request is made to `/user/123`, `req.params` would be `{ userId: '123' }`.

* Additional Information:
- Express.js is a popular web framework for Node.js that simplifies the process of building web applications and APIs.

- The `app.use()` method is used to define middleware functions that handle requests to specific paths.
- The `app.listen()` method starts the server and listens for incoming requests on the specified port (3000 in this case).
*/


// nodemon - a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
