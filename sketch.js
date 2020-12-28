
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
 monkey=createSprite(80,315,20,20) 
  monkey.addAnimation(monkey_running)
monkey.scale=0.1
 
  ground=createSprite(400,350,900,20)
  ground.velocityX=-4
  ground.x=ground.x/2
}


function draw() {
  background(255)
  if(ground.x<0){
     ground.x=ground.x/2
}
  if (keyDown("space")) {
    monkey.velocityy=-12
}
monkey.velocity=monkey.velocity+0.8
  
  monkey.collide(ground)




}
function food(){
  
 if(frameCount%80===0) 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}