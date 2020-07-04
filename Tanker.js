class Tanker {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true
     }
     this.body=Bodies.rectangle(x,y,width, height);
     this.width = width;
     this.height = height;
     World.add(world,this.body);
    };

    display(){
      var pos = this.body.position;
      var angle = this.body.angle
      if (keyIsDown(UP_ARROW) && angle >= -0.90)
      { angle -= 0.02 
        Matter.Body.setAngle(cannon.body,angle) 
        console.log("in up arrow") 
    }
    if (keyIsDown(DOWN_ARROW) && angle <= 0.55){
       angle += 0.03 
       Matter.Body.setAngle(cannon.body,angle) 
       console.log("in down arrow") 
      }
      push();
      translate(pos.x,pos.y);
     rotate(angle);
     rectMode(CENTER); 
     // for mouth pipe of cannon 
     rect(0,0,this.width,this.height);
      pop(); 
     //big circle i.e. head of cannon 
     ellipse(220,270,75,75); 
     //neck of cannon 
     rect(215,310,80,30);
      rectMode(CENTER);
      //body of cannon big rect 
      rect(220,340,160,40); 
      //left leg of cannon 
      ellipse(160,375,40,40);
       //right leg of cannon
        ellipse(280,375,40,40);
      // Draw the tanker the way you like.
      // You could also use an image if you want a specific look

    };
}
