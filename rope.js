class Rope {
    constructor(body,point){
        var options = {
        bodyA: body,
        pointB: point,
        stiffness:0.04,
        length:1
        }
        this.bodyA = body;
        this.pointB = point;
        this.constraint = Constraint.create(options);
        World.add(world,this.constraint);

    }
    fly(){
        this.constraint.bodyA = null
    }
    
    launch(){
        this.constraint.bodyA = bodyA
    }
    
    display(){
        if(this.constraint.bodyA){

        
        strokeWeight(2);
        line(this.bodyA.position.x,this.bodyA.position.y,this.pointB.x,this.pointB.y);

        }
    }
}