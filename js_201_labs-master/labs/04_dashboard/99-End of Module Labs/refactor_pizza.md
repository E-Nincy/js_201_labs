# Refactor the Pizza Example

The pizza promise example does not _need_ any asynchronous processing, that is, there is no need for it to be promisified. That said, it is useful to model something like this to understand asynchronous processing in more detail. In this lab you'll be writing a version that uses async functions.

First, write a function that returns a promise after a short delay, these should represent a pizza that is being baked, and a pizza that is being delivered.

That is, a function that returns a promise that resolves to either a baked pizza or a burnt pizza, after a delay.

And a function that returns a promise that resolves to either a delivered pizza or a lost driver, after a delay.

Then chain these up so that it more closely models a real pizza restaurant.
