var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50,200,50,50);
  wall = createSprite(1300,200,60,100);
car.velocityX = speed;
}

function draw() {
  background(0);  
  wall.shapeColor=color(255);

  if(wall.x-car.x<(car.width/wall.width)/2){
    car.velocityX=0;
    var deformation = 0.5 * weight * speed * speed/22509;
  }
    if(deformation>180){
      car.shapeColor=color(255,0,0);
      wall.shapeColor=color(255,0,0);
    }

    if(deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0);
      wall.shapeColor=color(230,230,0);
    }

   if(deformation<100){
      car.shapeColor=color(0,255,0)
      wall.shapeColor=color(0,255,0)
    }
    drawSprites();
    text("Speed - " + speed,200,50);
    fill("white");
    text("weight - "+weight,200,100);
    fill("purple")
    text("Deformation = 0.5 x weight x speed x speed/22500",200,150);
    fill("blue");
    text(deformation,200,170);
    fill("red")
    fill("green")
    text("green = good",200,200);
    fill("yellow");
  text("yellow = average",200,220);
  fill("red")
    text("red = LETHAL",200,240);
   




  }
