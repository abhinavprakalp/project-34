 class Rope {
     constructor(bodyA,pointB){
         var options = {
          bodyA:bodyA,
          pointB:pointB,
          length:200,
          stiffness:1
         }
         this.chain = Constraint.create(options);
         World.add(world,this.chain);
     }
     display(){
        var pa = this.chain.bodyA.position;
        var pb = this.chain.pointB;
        stroke("white");
        line (pa.x,pa.y,pb.x,pb.y);

     }
 }