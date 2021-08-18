var PLAY=1;
var END=0;
var gameState=PLAY;
 
//declaring characters of the game
var bg,bgImg;
var rocket,rocketImg;
var planet1,planet2,planet1Img,planet2Img;
var obstacle1,obstacle2,obstacle1Img,obstacle2Img;
var star,starImg;
var gameOver,gameOverImg;
var sound1,sound2;

//declaring the groups
var planetsGroup;
var obstaclesGroup;
var starsGroup;

//declaring score
var score

//assingning images to the sprites
function preload(){
  bgImg=loadImage("images/starSpaceBack_.png");
  rocketImg=loadImage("images/Rocket_Img.png");
  planet1Img=loadImage("images/planet1.png");
  planet2Img=loadImage("images/planet2.png");
  obstacle1Img=loadImage("images/meteor1.jpg");
  obstacle2Img=loadImage("images/meteor2.png");
  starImg=loadImage("images/starLightImg.png");
  gameOverImg=loadImage("images/gameOverText.png");
  sound1=loadSound("music/sound_1.mp3");
  sound2=loadSound("music/sound_2.mp3");
}

//setting the game up
function setup(){
 createCanvas(windowWidth,windowHeight);
background(255);

//declaring  characters of the game
bg=createSprite(width,height,70,70);
bg.addImage(bgImg);
bg.scale=2;
bg.velocityY=3;

rocket=createSprite(width/2,windowHeight-50,20,5);
rocket.addImage(rocketImg);
rocket.scale=0.1;

gameOver=createSprite(windowWidth/2,windowHeight/2);
gameOver.addImage(gameOverImg);
gameOver.scale=0.7;
gameOver.visible=false;

//declaring groups
obstaclesGroup=createGroup();
planetsGroup=createGroup();
starsGroup=createGroup();

//setting collider radius
rocket.setCollider("rectangle",0,0,rocket.width,rocket.height);
rocket.debug=true;

}

function draw(){
   background(0);
  
//displaying score
text("Score: " + score, windowWidth - 250, windowHeight - 350);
//game state play
 if(gameState===PLAY){
// creating infinite ground
if (bg.y > 700){
  bg.y = bg.width/2;
 }
 gameOver.visible = false;
 rocket.visible = true;
 sound1.play();
 text("Score: " + score, windowWidth - 250, windowHeight - 350);
  score = score + Math.round(frameCount / 180);


 //for moving the rocket left & right
    if (keyDown("LEFT_ARROW")) {
      rocket.x = rocket.x - 34;
    }
    if (keyDown("RIGHT_ARROW")) {
      rocket.x = rocket.x + 34;
    }
rocket.setCollider("rectangle",0,0,150);

  if (obstacleGroup.isTouching(rocket)) {
      gameState = END;
      obstacle.velocityY = 0;
      sound2.play();
    }

}

//game state end
  if (gameState === END) {
    gameOver.visible = true;
bgt.velocity=0;
rocket.velocity=0;
obstaclesGroup.setVelocityXEach=0;
planetsGroup.setVelocityXEach=0;

 // set lifetime of the game objects so that they are never destroyed
  obstaclesGroup.setLifetimeEach(-1);
    planetsGroup.setLifetimeEach(-1);

if(mousePressedOver(restart)){
reset();
}
  }
drawSprites()
  }

  //spawn obstacles
  function spawnObstacles(){
    if(frameCount % 10 === 0){
      var obstacle1 = createSprite(500,400,40,40);
    obstacle1.addImage(obstacle1Img);
    obstacle1.setCollider("circle", 0, 40, 415);
    obstacle1.x = Math.round(random(windowWidth));
    obstacle1.velocityY = +(10 + 5 * score / 1000)
    obstacle1.scale = 0.09;

    obstacle2=createSprite(299,200,30,30);
    obstacle2.addImage(obstacle2Img);
    obstacle.setCollider("circle",0,0,40,300);
    obstacle2 = Math.round(random(windowwidth));
    obstacle2.velocity = +(8 + 5 * score/1000);
    obstacle2.scale = 0.08

      //adding obstacles in obstaclesGroup
      obstaclesGroup.add(obstacle1,pbstacle2);
      obstacle1.depth = obstacle1.depth + 5;
   }


  }
 






 