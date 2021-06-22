class Launcher {
    constructor(body, anchor){
        var options = {
            bodyA: body,
            pointB: anchor,
            stiffness: 0.5,
            length: 10
        }
        
        this.pointB = anchor
        this.bodyA = body
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }

    attach(body)
    {

        this.launcher.bodyA = body;
    }

    fly(){
        this.launcher.bodyA = null;
    }

    display(){

        if(this.launcher.bodyA){
            var pointA = this.bodyA.position;
            var pointB = this.pointB;
            stroke(48,22,8);
            strokeWeight(4);
            
                line(pointA.x, pointA.y, pointB.x, pointB.y);
                
                
            

    }
 } 

}