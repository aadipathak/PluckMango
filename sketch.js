
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var mango2;
var mango3;
var mango4;
var stone1;
var world,boy;
var rope;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new Mango(1100,100,30);
	mango2 = new Mango(1000,150,30);
	mango3 = new Mango(1200,180,30);
	mango4 = new Mango(900,210,30);

	stone1 = new Stone(200,400,40);

	rope = new Rope(stone1.body,{x:200,y:400});
    

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);

  detectCollision(stone1,mango1);
  detectCollision(stone1,mango2);
  detectCollision(stone1,mango3);
  detectCollision(stone1,mango4);

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  stone1.display();
  rope.display();
  groundObject.display();
}

function mouseDragged(){
Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
rope.fly()
}
function detectCollision(mangoes,stones){
if(stones.body.position.x - mangoes.body.position.x < mangoes.diameter + stones.diameter
&& mangoes.body.position.x - stones.body.position.x < mangoes.diameter + stones.diameter
&& mangoes.body.position.y - stones.body.position.y < mangoes.diameter + stones.diameter){
	Matter.Body.setStatic(mangoes.body,false);
}
}