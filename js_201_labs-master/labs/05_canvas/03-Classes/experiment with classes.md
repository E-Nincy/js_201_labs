# Experiment with Classes

In a new sandbox:

1. Create a `Person` class

    - It should be initialized with a first name, last name, and age.
    - Initialization should _fail_ if any of these are not provided.
    - Initialization should _fail_ if the age is not below 18

2. Create 100 people using the `users.json` file in the resources. The users there don't have an age, so create a random number for the age.

3. Make the random number generator you used to generate the age to sometimes give _invalid_ ages. Make the code handle these errors and keep going until it has 100 people in a list.

4. Make the `Person` class have a method called `introduceSelf()`, which will log a message to the console:

    > Hi, I am {first name} {last_name}, and I am {age}.
