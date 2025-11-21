import { Point } from './point.js'
import { Draw } from './draw.js'

const canvas = document.getElementById("canvas");
const draw = new Draw(canvas);
const p = new Point(draw.width / 2, draw.height / 2);

const r = 10;
let xChange = 2;
let yChange = 2;

draw.background("grey");
draw.circle(p, r, "white");

function animate(){
  draw.background("grey");

  p.x += xChange;
  p.y += yChange;

  if (p.x <= 0 || p.x >= draw.width) xChange *= -1;
  if (p.y <= 0 || p.y >= draw.height) yChange *= -1;

  draw.circle(p, r, "white");
}

setInterval(animate, 10);
