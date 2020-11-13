
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var survivalTime=0
var ground,invisibeground,ground_moving
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
ground_moving=loadImage("download (13).jfif")
}



function setup() {
  createCanvas(400,400)
  
  ground=createSprite(200,200,400,400)
  ground.addImage(ground_moving)
  ground.velocityX=-5

  ground.scale=2.5

  invisibleground=createSprite(50,490,1400,290)
  invisibleground.visible=false


  
  monkey=createSprite(50,310,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1
  
  
//making groups  
FoodGroup=createGroup();
obstacleGroup=createGroup();

   monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
  monkey.debug = false;
  
 score=0;

}

 
function draw() {

  

   //make infinite ground
  if(ground.x<90){
    ground.x=ground.width/2
  }
  
  //jump monkey when space is pressed
  if(keyDown("space")){
    monkey.velocityY=-3
  }
  

  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
  }
  



  //gravity
  monkey.velocityY=monkey.velocityY+0.8
  
  //collision for debbuging
  monkey.collide(invisibleground) 
  
  //calling the fruits and obstacles function
  fruitsRand()
   ObstaclesRand()
   
  drawSprites();
  
  stroke("red")
  textSize(13);
  fill("black")
  text("Score :"+ score,340,25);
  
  stroke("black");
  textSize(17);
  fill("black");
  text("SURVIVAL TIME :"+ survivalTime,100,30);
   survivalTime=Math.ceil(frameCount/frameRate());
  
}

function fruitsRand(){
  if(frameCount% 80===0 ){
   var fruits=createSprite(400,200,10,10);
    fruits.y=Math.round(random(170,290))
    fruits.addImage(bananaImage);
    fruits.scale=0.09
    fruits.velocityX=-5
     fruits.depth=monkey.depth
    monkey.depth=monkey.depth+1
    fruits.lifetime=300
    FoodGroup.add(fruits)
    
   
  }
}

function ObstaclesRand(){
  if(frameCount%50===0){
    var obstacles=createSprite(200,330,1,1);
    obstacles.x=Math.round(random(400,390))
    obstacles.addImage(obstacleImage);
    obstacles.scale=0.09
    obstacles.velocityX=-9;
    obstacles.collide(invisibleground)
    obstacles.lifetime=300
    obstacleGroup.add(obstacles)
    
   
  }
}




