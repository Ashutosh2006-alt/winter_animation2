
var bg;
var man;
var mount;
var cloud;
var filterx;
var house;
var chimni;
var engine, world;
var forest1, forest2, forestImg;
var backforest1, backforest2, backforest1Img;
var backforest3, backforest4, backforest2Img;
var backforest5, backforest6, backforest3Img;

var speed = 0.3


function preload() {
  loopsound  = loadSound("sound/win.mp3");
  snowImg = loadImage("images/snow.png");
  mountImg = loadImage("images/mount.png");
  houseImg  = loadImage("images/house.png");
  cloudImg = loadImage("images/clouds.png");
  bg = loadImage("images/Background 5.png");
  forestImg = loadImage("images/forest.png");
  filterimg = loadImage("images/filter.png");
  backforest1Img = loadImage("images/backforest1.png");
  backforest2Img = loadImage("images/backforest2.png");
  backforest3Img = loadImage("images/backforest3.png");
  walkAnimation = loadAnimation("images/m1.png", "images/m2.png", "images/m3.png", "images/m4.png", "images/m5.png", "images/m6.png", "images/m7.png", "images/m8.png", "images/m9.png")
  chimnianimation = loadAnimation("images/g7.png","images/g8.png","images/g9.png","images/g1.png","images/g2.png","images/g3.png","images/g4.png","images/g5.png","images/g6.png");
}

function setup() {

  createCanvas(windowWidth, windowHeight);

  loopsound.loop();

  cloud = createSprite(width / 2, 280);
  cloud.addImage(cloudImg);
  cloud.scale = 2.1;

  mount = createSprite(width / 2, height / 2);
  mount.addImage(mountImg);
  mount.scale = 0.35;

  //this is the backforest3 animation .
  backforest5 = createSprite(width / 2, height - 240);
  backforest5.addImage(backforest3Img);
  backforest5.scale = 0.78;
  backforest5.velocityX = -speed+0.10;

  backforest6 = createSprite(width + width / 2, height - 240);
  backforest6.addImage(backforest3Img);
  backforest6.scale = 0.78;
  backforest6.velocityX = -speed+0.10;
  //this is the backforest2 animation .
  backforest3 = createSprite(width / 2, height - 230);
  backforest3.addImage(backforest2Img);
  backforest3.scale = 0.78;
  backforest3.velocityX = -speed-0.10;

  backforest4 = createSprite(width + width / 2, height - 230);
  backforest4.addImage(backforest2Img);
  backforest4.scale = 0.78;
  backforest4.velocityX = -speed-0.10;
  //this is the backforest1 animation .
  backforest1 = createSprite(width / 2, height - 220);
  backforest1.addImage(backforest1Img);
  backforest1.scale = 0.78;
  backforest1.velocityX = -speed-0.30;

  backforest2 = createSprite(width + width / 2, height - 220);
  backforest2.addImage(backforest1Img);
  backforest2.scale = 0.78;
  backforest2.velocityX = -speed-0.30;

  //this is the forest animation .
  forest1 = createSprite(width / 2, height - 140);
  forest1.addImage(forestImg);
  forest1.scale = 0.59;
  forest1.velocityX = -speed-0.60;

  forest2 = createSprite(width + width / 2, height - 140);
  forest2.addImage(forestImg);
  forest2.scale = 0.59;
  forest2.velocityX = -speed-0.60;

  chimni = createSprite(width / 2-30,height - 420);
  chimni.addAnimation("flowing",chimnianimation);
  chimni.scale = 1.3;
  chimni.frameDelay = 3;
  chimni.velocityX = -speed-0.60;

  house = createSprite(width / 2, height - 200);
  house.addImage(houseImg);
  house.scale = 0.45;
  house.velocityX = -speed-0.60;

  man = createSprite(width / 2, height - 90, 1, 1);
  man.addAnimation("walking", walkAnimation);
  man.frameDelay = 3;
  man.scale = 0.35;

  filterx = createSprite(width / 2,height/2);
  filterx.addImage(filterimg);
  filterx.scale = 1;
}

function draw() {
  background(bg);
  forest();
  drawSprites();
  snowSpawn1();
  snowSpawn2();
  snowSpawn3();
  snowSpawn4();
  snowSpawn5();
  snowSpawn6();
  snowSpawn7();
  snowSpawn8();
  snowSpawn9();
  snowSpawn10();
}

function forest() {
  if (forest1.x < -width / 2) {
    forest1.x = width + width / 2
  }
  if (forest2.x < -width / 2) {
    forest2.x = width + width / 2
  }
  if (backforest1.x < -width / 2) {
    backforest1.x = width + width / 2
  }
  if (backforest2.x < -width / 2) {
    backforest2.x = width + width / 2
  }
  if (backforest3.x < -width / 2) {
    backforest3.x = width + width / 2
  }
  if (backforest4.x < -width / 2) {
    backforest4.x = width + width / 2
  }
  if (backforest5.x < -width / 2) {
    backforest5.x = width + width / 2
  }
  if (backforest6.x < -width / 2) {
    backforest6.x = width + width / 2
  }
  if (house.x < -200) {
    house.x = width + 300
  }
  if (chimni.x < -200) {
    chimni.x = width + 300
  }
}
