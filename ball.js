class Ball {
    constructor(x,y){
        var ops = {
        friction : 1,
        restitution : 1,
        density : 1
        }
     this.body = Bodies.circle(x,y,50,ops);
     World.add(world,this.body);
     this.r=50;
    }
    display(){
     var pos = this.body.position;
     var angle = this.body.angle;
     push();
     translate(pos.x,pos.y);
     rotate(angle);
     fill("yellow");
     ellipseMode(RADIUS);
     ellipse(0,0,this.r,this.r)
     pop();
    }

}