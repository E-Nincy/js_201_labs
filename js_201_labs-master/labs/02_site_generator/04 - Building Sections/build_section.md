# Extending Your Project

1. In a new branch and PR on the module project, put a spin on the functions that build sections. Write it, or structure it in a different way. You don't need to keep that way if you prefer the way you currently have it set up, but do come up with a different way for this lab.

   One possible approach is to split up the arguments, so that you don't pass in a `section` object, but instead you pass in the text and the source image as individual values, not packaged up in an object, as it is done in the module project.

   Experiment! There is no single right way. Every approach has trade offs.

2. Write down two advantages and disadvantages of the approach taken in the demo project, and do the same for your own spin on things.

   **Module Project**
   Advantage 1: Simpler, passes full section object.
   Advantage 2: Flexible if JSON changes.
   Disadvantage 1: Each builder depends on JSON structure.
   Disadvantage 2: Less clear what data each function uses.

   **Your Project**
   Advantage 1: Functions are independent and reusable.
   Advantage 2: Arguments are explicit.
   Disadvantage 1: More verbose to call
   Disadvantage 2: If data format changes, calls must change too.

Paste a link to your project PR below:

> Paste it here
https://github.com/E-Nincy/project_site_generator/pull/1

Then carry on with the main branch as you follow along with the course. Once you get to the end of the module project, you can decide whether you like your approach enough to recover it.
