var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	body1Sprite=createSprite(width/2,650,200,20)
	body1Sprite.shapeColor=color(255,0,0)
	body2Sprite=createSprite(width/2-100,610,20,100)
	body2Sprite.shapeColor=color(255,0,0)
	body3Sprite=createSprite(width/2+100,610,20,100)
	body3Sprite.shapeColor=color(255,0,0)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	body1 = Bodies.rectangle (width/2 , 630 , 200 , 20, {isStatic:true});
	World.add(world, body1);
	body2 = Bodies.rectangle (width/2-100 , 610 , 20 , 100, {isStatic:true});
	World.add(world, body2);
	body3 = Bodies.rectangle (width/2+100 , 610 , 20 , 100, {isStatic:true});
	World.add(world, body3);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);
    
  }
}



