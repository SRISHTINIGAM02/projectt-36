var dog,sadDog,happyDog;
var feed,addFood,Food1;

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feed=createButton("FEED THE DOG");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood=createButton("ADD FOOD");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

  Food1 = new Food(30,90,40,20);
  Food1.addImage(Food);
}

function draw() {
  background(46,139,87);
  Food1.display();
  dog.display();
  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time
function feedDog(){
  dog.addImage(happyDog);

  if(Food1.getFoodStock()<=0){
    Food1.updateFoodStock(Food1.getFoodStock()+0);
  }else{ Food1.updateFoodStock(Food1.getFoodStock()-1);

  }
}

//function to add food in stock
function addFoods(){
  foodS++;
   database.ref('/').update({
     Food:foodS
   })
}