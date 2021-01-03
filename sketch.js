
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
}



function setup() {
  
  monkey = createSprite(80,315,20,20)
  monkey.addAnimation("moving", monkey_running)
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10)
  ground.velocityX = -4;
  
  obstacleGroup = new Group();
  bananaGroup = new Group();
  
}


function draw() {
  background("white");
  
  if (ground.x < 0){
   ground.x = ground.width/2;
  }
  console.log(ground.x);
  
  monkey.velocityY = monkey.velocityY + 0.8
  if(keyDown("space")&& monkey.y >= 310) {
    monkey.velocityY = -16;
  }
  monkey.collide(ground);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time: "+ survivalTime, 100, 50)
  spawnObstacles();
  
  if(monkey.isTouching(obstacleGroup)){
    obstacleGroup.setVelocityXEach(0);
    bananaGroup.setVelocityXEach(0);
    bananaGroup.setLifetimeEach(-1);
    obstacleGroup.setLifetimeEach(-1);
  }
  
  spawnFood();
  
  drawSprites();  
}


function spawnObstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(450,310,10,40);
   obstacle.scale = 0.2;
   obstacle.addImage(obstaceImage);
   obstacle.velocityX = -6
   obstacle.lifetime = 110;
   obstacleGroup.add(obstacle);
 }
}

function spawnFood(){
  if (frameCount % 300 === 0){
   var banana = createSprite(450,200,10,40); 
   banana.scale = 0.1;
   banana.addImage(bananaImage);
   banana.y = Math.round(random(120,200));
   banana.velocityX = -6;
   banana.lifetime = 110;
   bananaGroup.add(banana);       
 }
}



