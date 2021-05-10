var canvas, backgroundImage;

var gameState = 0;
var animalCount;
var allAnimals;
var distance = 0;
var database;

var form, animal, game;

var animal1, animal2, animal3, animal4, animals;


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(animalCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
