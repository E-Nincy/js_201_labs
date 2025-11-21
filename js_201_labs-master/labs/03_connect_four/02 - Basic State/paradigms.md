# Thinking About Paradigms

Write a summary of what is meant by:

- Procedural programming
- Object oriented design
- Pure functions
- Declarative languages
- Immutable objects

Write your summary here:

## Procedural Programming
It’s basically writing code that tells the computer exactly what to do, step by step. You organize things into small functions or procedures, and the program runs them in order. It’s kind of like giving a detailed recipe — do this first, then that — and it’s all about the flow of instructions.

## Object-Oriented Design
This one is more about thinking in terms of objects instead of steps. Each object represents something with data and behavior — for example, a “Player” or a “Board” in a game. It makes the code easier to organize and reuse because each part kind of takes care of itself.

## Pure Functions
A pure function always gives the same result if you give it the same input, and it doesn’t mess with anything outside of it. It doesn’t change global variables or cause random side effects. It’s clean, predictable, and easy to test — which is why they’re used a lot in functional programming.

## Declarative Languages
In declarative languages, you focus on what you want instead of how to do it. You just describe the goal, and the system figures out the steps. For example, in SQL you say what data you want, not how to get it. It’s simpler because you’re not managing all the details.

## Immutable Objects
These are objects that, once created, can’t be changed. If you need to “change” something, you actually make a new copy with the modification. It’s safer because it prevents bugs where data accidentally changes somewhere else in the program.