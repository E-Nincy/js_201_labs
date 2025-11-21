# Practicing and Understanding Async

Make sure you have done the labs on Promises before starting these labs.

1. Taking the random number generator that returns a promise (from a previous lab), use this in an asynchronous function to get 5 numbers and log their sum to the console.

    ```js
    // Copy your answer here
    async function getFiveRandoms() {
      let total = 0;
      for (let i = 0; i < 5; i++) {
        const num = await randomNumber();
        total += num;
      }
      console.log("Sum of 5 random numbers:", total);
    }
    ```

2. Do the same thing, but use `Promise.all()` in the asynchronous function to get each number asynchronously, instead of waiting for each promise to resolve before getting the new one.

    ```js
    // Copy your answer here
    async function getFiveParallel() {
      const promises = Array.from({ length: 5 }, randomNumber);
      const results = await Promise.all(promises);
      console.log("Sum (Promise.all):", results.reduce((a, b) => a + b, 0));
    }
    ```

3. In a new local sandbox project, write an async function that will fetch data from an API of your choice and present some of the results to the DOM.

4. Write an async function that will take a random number from the generator you have, and make it so that the function has a 50/50 chance to call one API or another and display their results.

5. Write an async function that returns when a button is pressed. Use this function in another function that will act as a counter, logging incrementing numbers every time the button is pressed.

6. Write an async function that returns a random number. Then use this async function in a _promise_ chain log three random numbers one after the other. This is like a previous exercise, except you are using an async function in a promise chain and not a promise returning function in an async function.
