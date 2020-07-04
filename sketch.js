// You could have multiple flags like: start, launch to indicate the state of the game.
const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
var engine, world; 
var ground, cannon, angle=0;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/

function setup() {
    var canvas = createCanvas(1000,400); 
    engine = Engine.create();
     world = engine.world;
     cannon = new Tanker(240,267,90,20);
     ground = new Ground(500,400,2000,10);
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.

}

function draw() {
    background(255); 
    Engine.update(engine);
     ground.display(); 
    cannon.display();
// Remember to update the Matter Engine and set the background.
}


function keyReleased() {
    
    // Call the shoot method for the cannon.
}