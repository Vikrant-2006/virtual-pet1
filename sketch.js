//Create variables here
var dogImg1,dogImg2;
var happydog;
var database;
var foodStock;
var foodS;
var dog;
function preload()
{
  dogImg1 = loadImage("Dog.png");
  dogImg2 = loadImage("happydog.png");

}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
foodStock = database.ref('Food');
foodStock.on("value",readStock);

dog = createSprite(250,300,10,10);
dog.scale=0.5;
dog.addImage(dogImg1);
}


function draw() {  
background(46,139,87);
 
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
 dog.addImage(happydog);
}


drawSprites();
 text("Note:press UP_ARROW KEY tofeed the dog",190,60);
 
}


function readStock(data){
  foodS=data.val();

}

function writeStock(x){
  if(x<=0){
x=0;
  }else{
    x=x-1;
  }
  
database.ref('/').update({
Food:x

});
}

