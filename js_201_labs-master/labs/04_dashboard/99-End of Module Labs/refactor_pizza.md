# Refactor the Pizza Example

The pizza promise example does not _need_ any asynchronous processing, that is, there is no need for it to be promisified. That said, it is useful to model something like this to understand asynchronous processing in more detail. In this lab you'll be writing a version that uses async functions.

First, write a function that returns a promise after a short delay, these should represent a pizza that is being baked, and a pizza that is being delivered.

That is, a function that returns a promise that resolves to either a baked pizza or a burnt pizza, after a delay.

And a function that returns a promise that resolves to either a delivered pizza or a lost driver, after a delay.

Then chain these up so that it more closely models a real pizza restaurant.


```js
//Refactor the Pizza Example
// Practicing async/await and promise chaining

// Function that simulates baking a pizza
function bakePizza() {
  return new Promise((resolve, reject) => {
    console.log("The pizza is in the oven...");
    setTimeout(() => {
      const success = Math.random() > 0.2; // 80% chance to bake successfully
      if (success) {
        resolve("Pizza baked successfully!");
      } else {
        reject("Oh no! The pizza burned!");
      }
    }, 1500);
  });
}

// Function that simulates delivering a pizza
function deliverPizza() {
  return new Promise((resolve, reject) => {
    console.log("The delivery driver is on the way...");
    setTimeout(() => {
      const success = Math.random() > 0.2; // 80% chance of success
      if (success) {
        resolve("Pizza delivered to the customer!");
      } else {
        reject("The driver got lost on the way!");
      }
    }, 1500);
  });
}

// Async function that chains the two processes
async function orderPizza() {
  try {
    const baked = await bakePizza();
    console.log(baked);

    const delivered = await deliverPizza();
    console.log(delivered);

    console.log("Order complete — happy customer!");
  } catch (error) {
    console.error("Order failed:", error);
  }
}

// 4️⃣ Run it
orderPizza();
```
