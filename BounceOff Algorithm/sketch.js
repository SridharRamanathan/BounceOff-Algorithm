var fixedRectangle, movingRectangle

function setup() {
  createCanvas(800,400);
  fixedRectangle = createSprite(400, 200, 50, 50);
  movingRectangle = createSprite(400,100,50,50);

  fixedRectangle.shapeColor = "green";
  movingRectangle.shapeColor = "green";

  fixedRectangle.velocityY = -1;
  movingRectangle.velocityY = 1;

}

function draw() {
  background(0);  
  
  if(movingRectangle.x - fixedRectangle.x < fixedRectangle.width/2 + movingRectangle.width/2 &&
     fixedRectangle.x - movingRectangle.x < movingRectangle.width/2 + fixedRectangle.width/2) {
       movingRectangle.velocityX = movingRectangle.velocityX * (-1);
       fixedRectangle.velocityX = fixedRectangle.velocityX * (-1);
     }
    if(movingRectangle.y - fixedRectangle.y < fixedRectangle.height/2 + movingRectangle.height/2 &&
     fixedRectangle.y - movingRectangle.y < movingRectangle.height/2 + fixedRectangle.height/2) {
      movingRectangle.velocityY = movingRectangle.velocityY * -1;
      fixedRectangle.velocityY = fixedRectangle.velocityY * -1;  
  }
  
  
  createEdgeSprites();
  drawSprites();
}