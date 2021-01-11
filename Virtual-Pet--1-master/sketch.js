//Create variables here
var dog, happyDog, database, foodS, foodStock;

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");
}

function setup() {
  database=firebase.database
  createCanvas(500,500);
  dog=createSprite(250,250,10,10);
  dog = loadImage("images/dogImg.png");
  foodStock=database.ref("food");
  foodStock.on("value,readStock")
}


function draw() {  
background(46,139,87)
noStroke();
textSize(35)
fill("white")
text("milk bottles: " + foodStock, width-300, 50)
noStroke();
textSize(35)
fill("white")
text("Note:press up arrow to feed drago some milk " + foodStock, width-300, 80)
if(keyWentDown(UP_ARROW)){
writeStock(foodS)
dog.addImage(dogImg1)
}
  drawSprites();
  //add styles here

}

function readStock(data){
foodS=data.val();
}

function writeStock(x){
database.ref('/').update
}