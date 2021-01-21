const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, stand1, stand2;
//bottom row
var block1, block2, block3, block4, block5, block6, block7;
//second row
var block8, block9, block10,block11, block12;
//third row
var block13, block14, block15;
//top block
var block16;

var block17, block18, block19, block20;

var polygon, polygonImage, slingshot;

function preload(){

}

function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(500,580,1000,40);
    stand1 = new Ground(450,450,250,15);
    stand2 = new Ground(800, 250, 170, 15);
    
    block1 = new Box(360,445, 30, 40);
    block2 = new Box(390,445, 30, 40);
    block3 = new Box(420,445, 30, 40);
    block4 = new Box(450,445, 30, 40);
    block5 = new Box(480,445, 30, 40);
    block6 = new Box(510,445, 30, 40);
    block7 = new Box(540,445, 30, 40);

    block8 = new Box(390,300, 30, 40);
    block9 = new Box(420,300, 30, 40);
    block10 = new Box(450,300, 30, 40);
    block11 = new Box(480,300, 30, 40);
    block12 = new Box(510,300, 30, 40);

    block13 = new Box(420,200, 30, 40);
    block14 = new Box(450,200, 30, 40);
    block15 = new Box(480,200, 30, 40);

    block16 = new Box(450,100,30,40);

    block17 = new Box(760, 245, 30,40);
    block18 = new Box(790,245,30,40);
    block19 = new Box(820,245,30,40);

    block20 = new Box(792,100, 30,40);

    polygon = Bodies.circle(50,400,20);
    Matter.Body.setDensity(polygon,1);
    World.add(world, polygon);
    polygonImage = loadImage("polygon.png");

    slingshot = new SlingShot(this.polygon, {x: 100, y: 400});
}


function draw(){
    Engine.update(engine);
    rectMode(CENTER);
    background(rgb(56,44,44));

    ground.display();
    stand1.display();
    stand2.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

    block17.display();
    block18.display();
    block19.display();
    block20.display();

    imageMode(CENTER);
    image(polygonImage, polygon.position.x, polygon.position.y, 40, 40);

    slingshot.display();

    drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX, y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}
