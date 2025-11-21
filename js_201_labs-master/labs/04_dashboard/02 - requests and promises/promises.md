# Practice Promises

1. Create a function that creates a random number and returns a promise that resolves to the random number.

    ```js
    // Write the function here
    function randomNumber() {
      return new Promise((resolve) => {
        const num = Math.floor(Math.random() * 100);
        resolve(num);
      });
    }

    ```

2. Use this function to get two random numbers and add them together. Log the result to the console. Do _not_ use an `async` function to do this.

    ```js
    // Write your answer here
    randomNumber()
      .then((num1) => {
        return randomNumber().then((num2) => {
          console.log(`Sum of ${num1} + ${num2} =`, num1 + num2);
        });
    })
    .catch((err) => console.error(err));
    ```

3. Start a sandbox project locally, and make a request to any API using promises, then display a selection of the data in the DOM.

4. In the same sandbox project, use `Promise.all()` to make two requests, and then display a selection of the results from both.

5. Write a function that recieves a button element as an argument. The function should return a promise that resolves when the button is pressed. Once it resolves, it should log a message to the console.

6. Modify the function so that it doesn't resolve only once, but as many times as the button is pressed.
