# Query Utilities

Create two utility functions that will take a non-nested JavaScript object, and convert it into a URI query string.

Likewise, make a function that will take a query string and turn it into an object.

After that:

- Make your function reject objects that are nested by raising an error.
- Research a way to extract the query string from the page URL. That is, the URL you'll often see in the browser is `127.0.0.1:6000` or something similar. Add a sample query string to that, `127.0.0.1:6000?hello=world&hola=mundo`, and find a way for your JavaScript to get a hold of that and log it as an object to the console.
