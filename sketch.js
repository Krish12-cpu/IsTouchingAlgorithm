var mrect
var frect
function setup() {
  createCanvas(800,400);
  mrect = createSprite(300,200)
  mrect.shapeColor = "blue"
  mrect.debug = true
  frect = createSprite(100,300,50,50)
  frect.shapeColor = "blue"
  frect.debug = true

}

function draw() {
  background("black");  
  mrect.x = mouseX
  mrect.y = mouseY
  if(mrect.x-frect.x<mrect.width/2+frect.width/2&&
    frect.x-mrect.x<mrect.width/2+frect.width/2&&
    mrect.y-frect.y<mrect.height/2+frect.height/2&&
    frect.y-mrect.y<mrect.height/2+frect.height/2){
      mrect.shapeColor="yellow"
      frect.shapeColor = "yellow"
    }
  else{
    mrect.shapeColor = "blue"
    frect.shapeColor = "blue"

  }
  drawSprites();
}