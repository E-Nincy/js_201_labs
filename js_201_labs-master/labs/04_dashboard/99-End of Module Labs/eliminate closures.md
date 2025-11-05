# Eliminate Closures

The `fillWeatherSection` function reaches out of itself to color the whole HTML document.

The design of this function is to take in an HTML element and modify it, and then return it, but currently it is also reaching out of itself and setting the style of the body of the document.

Find a way to refactor the code so that the coloring is done from `main.js`.
