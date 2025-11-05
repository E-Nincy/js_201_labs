# Extend Your Project

- Make your own recipe for a website that uses at least one more type of element and then implement the JavaScript to handle that type of element.

- Extend the image displaying functionality of your site generator. If there are more than one image, make it so the image changes every time you click on it. Cycling through the available images.

  The image should cycle every few seconds on it's own, but the timer should be reset if the user clicks on it.

  Don't worry about making the transition nice until you've implemented the basic functionality.

- Write a function that takes in two arguments:

  - a section object
  - a container

  That will:

  - check if the section has an `images` property
  - randomly select an image if so
  - create an `img` element
  - append the element to the container

  Then factor this function into your project.

- The JSON site recipes that have form objects in them, have a required field that hasn't been used.

  Research the `required` attribute for form elements.

  Make it so that during form submit, some validation happens. Make sure that if a field doesn't have a value and is required, for the form submission to fail and to prompt the user that they need to fill out certain fields.
