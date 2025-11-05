# Use `setInterval`

In a new sandbox, use [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval) instead of `setTimeout()` to refactor the initial code for the bouncing ball:

```js

import { Point } from './point.js'
import { Draw } from './draw.js'

const canvas = document.getElementById("canvas");
const draw = new Draw(canvas);
const p = new Point(draw.width / 2, draw.height / 2);
const r = 10
draw.background("grey");
draw.circle(p, r, "white");

function animate(){
   draw.background("grey");

   p.x += xChange;
   p.y += yChange;

   draw.circle(p, r, "white");
   setTimeout(animate, 10); // refactor to use setInterval
}

animate()

```
