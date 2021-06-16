var runner,running
var nh76,road, invisibleRoad

function preload(){
  //pre-load images
  running=loadAnimation("Runner-1.png","Runner-2.png")
  road=loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  
  nh76=createSprite(200,200,400,400)
  nh76.addImage("loser",road)
  nh76.scale=1.2
  nh76.velocityY=4
  
  runner=createSprite(200,300,20,70)
  runner.addAnimation("loser",running)
  runner.scale = 0.075;

}

function draw() {
  console.log(runner.x)
  if(nh76.y > 400){
    nh76.y = height/2
  }
  background(0);
  drawSprites();
    runner.x = mouseX
  if(runner.x > 327)
  {
    runner.x = 327;
  }

  if(runner.x < 85)
  {
    runner.x = 85;
  }
  

  

}
