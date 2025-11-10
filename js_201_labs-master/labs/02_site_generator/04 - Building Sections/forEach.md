# Practicing `.forEach()`

Include these exercises in a solutions sandbox for this section.

1. Write four variations of a function that will accept a name and print out a greeting with:

   - Standard syntax
   - Arrow syntax on one line using as few characters as possible
   - Arrow syntax on more than one line
   - With function expression syntax

2. Take this array:

   ```js
   [
     "Afghanistan (AFG)",
     "Algeria (ALG)",
     "Argentina (ARG)",
     "Armenia (ARM)",
     "Australasia (ANZ) [ANZ]",
     "Australia (AUS) [AUS] [Z]",
     "Austria (AUT)",
     "Azerbaijan (AZE)",
   ];
   ```

   Use `forEach` with an arrow function to remove all text after the country name.

   For example:

   ```text
   "Afghanistan (AFG)" => "Afghanistan"
   ```

   Use `console.log()` to output the three arguments `forEach()` handles at each iteration.

  ```js
   // === 1 ===
   function greet(name) {
     console.log("Hello, " + name + "!");
   }

   const greet2 = name => console.log(`Hello, ${name}!`);

   const greet3 = (name) => {
    const greeting = `Hello, ${name}!`;
    console.log(greeting);
   };

   const greet4 = function(name) {
    console.log("Hello, " + name + "!");
   };

   countries.forEach((item, index, array) => {
    const cleanName = item.split(" (")[0];

    console.log("value:", item);
    console.log("index:", index);
    console.log("array:", array);
    console.log("cleaned:", cleanName);
    console.log("------------");
   });
   ```