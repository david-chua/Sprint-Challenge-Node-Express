- [ ] Mention two parts of Express that you learned about this week.

It's a web application framework that sits on top of the Node.js web server module.

We can use express to build RESTful web services that work with JSON.

- [ ] Describe Middleware?

Middleware are functions that get executed in the order that they are introduced into the server code.

They are functions that have access to the request and response object and can perform things like executing code, make changes to the request and response object, and call another middleware.

- [ ] Describe a Resource?

In terms of RESTful web apis, a resource is a single URL which points to specific code based on the HTTP method used. 


- [ ] What can the API return to help clients know if a request was successful?

status response or error messages

- [ ] How can we partition our application into sub-applications?

using express.Router, and setting a file to use a specific route can partition the application into sub-applications. This makes the application more modular.
