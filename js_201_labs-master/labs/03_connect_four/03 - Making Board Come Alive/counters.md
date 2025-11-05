# Counters Mini Project

Create a new sandbox project.

In it, use JavaScript to create a structure like this:

+---------------------------------------------------------+
|                                                         |
|            +------------------------------------------+ |
|            |                                          | |
|            |            +---------------------------+ | |
|            |            |                           | | |
|            |            |            +------------+ | | |
|            |            |            |            | | | |
| +---A----+ | +---B----+ | +---C----+ | +---D----+ | | | |
| | button | | | button | | | button | | | button | | | | |
| +--------+ | +--------+ | +--------+ | +--------+ | | | |
|            |            |            |            | | | |
|            |            |            +------------+ | | |
|            |            |                           | | |
|            |            +---------------------------+ | |
|            |                                          | |
|            +------------------------------------------+ |
|                                                         |
+---------------------------------------------------------+

A, B, C, and D are buttons. Each button is contained in an outer element. Each outer element can just be a basic `div` element, just use a CSS border to easily see the boxes, for example:

```css
{
    border: 5px solid black;
}
```

Remember to create everything in JavaScript, your HTML should only have one element that you can use as a root.

Create four counters (simple text element that shows a number) that are separate from this structure (above or below it) that count the number of button presses:

1. On button D
2. On button C and D
3. On button B and C and D
4. On all buttons

Use **event bubbling** to implement this.

Once you have this working, instead of a text counter, create small colored elements that grow in rows to represent the number of times the button is pressed.

If each button was pressed once, the counter would look something like this:

  A   B   C   D
|   |   |   |   |
| □ |   |   |   |
| □ | □ |   |   |
| □ | □ | □ |   |
| □ | □ | □ | □ |
