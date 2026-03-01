class Player {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.s = speed ?? 3;
  }

  move() {
    if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) this.x += this.s;
    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) this.x -= this.s;
    if (keyIsDown(UP_ARROW) || keyIsDown(87)) this.y -= this.s;
    if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) this.y += this.s;
  }

  draw() {
    fill("blue");
    circle(this.x, this.y, 30);
  }
}
