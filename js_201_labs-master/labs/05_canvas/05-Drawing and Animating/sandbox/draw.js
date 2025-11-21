// Comment: helper class for drawing on canvas
export class Draw {
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.width = canvas.width;
    this.height = canvas.height;
  }

  background(color){
    this.ctx.fillStyle = color;
    this.ctx.fillRect(0, 0, this.width, this.height);
  }

  circle(point, r, color){
    this.ctx.beginPath();
    this.ctx.arc(point.x, point.y, r, 0, Math.PI * 2);
    this.ctx.fillStyle = color;
    this.ctx.fill();
  }
}
