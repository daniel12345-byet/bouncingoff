var rect1,rect2;

function setup() {
  createCanvas(800,400);
  rect1= createSprite(100, 100, 50, 50);
  rect1.shapeColor="green"
  rect2= createSprite(100, 300, 50, 50);
  rect2.shapeColor="red";
  rect1.velocityY=3;
  rect2.velocityY=-3;
}

function draw() {
  if (rect1.x - rect2.x < rect2.width/2 + rect1.width/2
    && rect2.x - rect1.x < rect2.width/2 + rect1.width/2
  ) {
  rect1.velocityX= -rect1.velocityX
  rect2.velocityX= - rect2.velocityX
}
if(rect1.y - rect2.y < rect2.height/2 + rect1.height/2
  && rect2.y - rect1.y < rect2.height/2 + rect1.height/2){
    rect1.velocityY= -rect1.velocityY
    rect2.velocityY= - rect2.velocityY
  }
  
  background(0);  
  drawSprites();
}