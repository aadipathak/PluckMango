class Stone{
constructor (x,y,diameter){
var op = {
    isStatic : false,
    'restitution':0,
    'friction' :1,
    'density':1,
}
this.body = Bodies.circle(x,y,diameter,op);
this.diameter = diameter;
World.add(world,this.body);
this.image = loadImage("images/stone.png")


}
display(){
    push();
    translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
    image(this.image, 0, 0,  this.diameter,this.diameter);
    pop();
  }
}