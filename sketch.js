var hypnoticBall, database;
var position;
var game,player,form;
var gamestate = 0;
var playercount

function setup(){

  createCanvas(500,500);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
   
}

function draw(){
  background("white");
  
   
    drawSprites();
  
}

