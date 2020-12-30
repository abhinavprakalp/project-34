class Box {
    constructor(x,y){
        var ops = {
        friction : 1,
        restitution : 1,
        density : 1
        }
     this.body = Bodies.rectangle(x,y,50,50,ops);
     World.add(world,this.body);
     this.width=50;
     this.height=50;
    }
    display(){
     var pos = this.body.position;
     var angle = this.body.angle;
     push();
     translate(pos.x,pos.y);
     rotate(angle);
     fill("yellow");
     rectMode(CENTER);
     rect(0,0,this.width,this.height)
     pop();
    }

}