const Engine=Matter.Engine
const World=Matter.World
const Bodies= Matter.Bodies
var engine,world,ball,blower,blowermouth,buttom;
function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  createSprite(400, 200, 50, 50);
ball=new Ball(width/2+80,height/2-80,80,80)
blower=new Blower(width/2-50,height/2+50,150,20)
blowermouth=new Blowermouth(width/2+70,height/2+20,100,90)
button= createButton("clicktoblow")
button.position(width/2,height-100)
button.mousePressed(blow)
}

function draw() {
  background(255,255,255);
  Engine.update(engine)  
  ball.show()
  blower.show()
  blowermouth.show()
}
function blow(){
Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:0.2})

}