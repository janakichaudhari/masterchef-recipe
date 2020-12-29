//Create variables here
var dog,database,Happydog,Foods,foodStock;

function preload()
{
  //load images here
  img =loadImage("sprites/dogImg.png");
  img =loadImage("sprites/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  dog = new Dog(810,160,70,70);
  database = firebase.database();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

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
    })
  }
}


function draw() { 
  background(46,139,87); 

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }
  
  drawSprites();
  //add styles here
  textSize(35)
  fill("white")
  text("foodStoke", width-300, 50)
}



