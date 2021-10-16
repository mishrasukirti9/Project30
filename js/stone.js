class Stone
{
  constructor(x, y, w,h) 
  {
    let options = {
     restitution:0.3,

    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    push();
    translate(pos.x,pos.y)
    rotate(this.body.angle)
    rectMode(CENTER);
    noStroke();
    fill(255);
    ellipse(0,0, this.w, this.h);
    pop();
  }
}
