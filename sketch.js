var shipImg,ship,seaImage,sea;
function preload() {
  
 shipImg=loadAnimation("ship1.png", "ship2.png") 
 seaImage=loadImage("sea.jpg") 

}
function setup() {
  createCanvas(600,300);

  
 
sea=createSprite(10,200,600,10);
sea.addImage("sea",seaImage)

sea.x=sea.width/2
sea.velocityX=-2;

ship=createSprite(70,180,20,20)
ship.addAnimation("ship",shipImg)
ship.scale=0.2
}
function draw() {
  
  background(seaImage)

if (sea.x <0) {
  sea.x = sea.width/2;
}
drawSprites() 
  
}  
  
  

  
  
  




 
