var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect,fixedRect);

 
  drawSprites();
}
function bounceOff(b,t){
  if (t.x - b.x < b.width/2 + t.width/2
    && t.x - b.x < b.width/2 + t.width/2) {
  t.velocityX = t.velocityX * (-1);
  b.velocityX = b.velocityX * (-1);
}
if (t.y - b.y < b.height/2 + t.height/2
  && b.y - t.y < b.height/2 + t.height/2){
  t.velocityY = t.velocityY * (-1);
  b.velocityY = b.velocityY * (-1);
}
}