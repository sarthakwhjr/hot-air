var balloon
var position

function preload() {
  backgroundImg = loadImage("pro-C35 images/bg.png");
  ballonimg =loadAnimation("pro-C35 images/bg1.png","pro-C35 images/bg2.png");

}
function setup() {
  createCanvas(800,400);
   balloon=createSprite(400, 200, 50, 50);

mydatabase=firebase.database()
var dataref=mydatabase.ref("balloon/pos")
dataref.on("value",readOp,showError)

}

function draw() {
  background(backgroundImg);  
 
  drawSprites();
  if(keyDown(LEFT_ARROW)){
    changePosition(-10,0);
}
else if(keyDown(RIGHT_ARROW)){
    changePosition(10,0);
}
else if(keyDown(UP_ARROW)){
    changePosition(0,-10);
}
else if(keyDown(DOWN_ARROW)){
    changePosition(0,+10);
}
}

function changePosition(a,b){
  mydatabase.ref("balloon/pos").set({
  x:position.x+a,
  y:position.y+b
  
  
  })
}

function readOp(data){
  position=data.val()
  balloon.x=position.x
  balloon.y=position.y
  
  
  }
  
function showError()
{
console.log("there is an error");

}