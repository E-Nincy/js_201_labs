# Practice Using the Spread Operator

1. Take these arrays:

   ```js
   const temps_a = [25, 23, 12, 14, 15, 34, 32, 23];
   const temps_b = [32, 13, 16, 23, 25, 31, 23, 26];
   ```

   Use spreading to combine them into one array.

   ```js
   // Write your answer here
   const combinedTemps = [...temps_a, ...temps_b];
   ```

2. Take these objects:

   ```js
   const personal_details = { name: "Nomad", age: 100 };
   const usage_stats = { id: 1, clicks: 999, is_subscribed: true };
   ```

   Use spreading to combine them into one object.

   ```js
   // Write your answer here
   const combinedDetails = { ...personal_details, ...usage_stats };

   ```

3. Use spreading to write a function that takes an arbitrary number of string values and says hello to all of them:

   ```js
   sayHello(["Nomad", "Bob", "Jane"]);

   /* Expected output:
   
   Hello, Nomad!
   Hello, Bob!
   Hello, Jane!
   
   */
   ```

   ```js
   // Write your answer here
   function sayHello(...names) {
     names.forEach(name => console.log(`Hello, ${name}!`));
   }

   sayHello("Nomad", "Bob", "Jane");
   ```
