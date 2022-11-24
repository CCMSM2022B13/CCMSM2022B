function setup() {
  createCanvas(400, 400);
}
let xBol=200;
let yBol=200;
let diametro=50;
let velocidadeX=1;

let xRakE=0;
let yRakE=160;
let larguraE=15;
let alturaE=90;
   
let xRakD=385;
let yRakD=160;
let larguraD=15;
let alturaD=90;

function draw() {
  background(0);
  rect(xRakE,yRakE,larguraE,alturaE);
  rect(xRakD,yRakD,larguraD,alturaD);
  circle(xBol,yBol,diametro);
  xBol +=velocidadeX;
  if(xBol+diametro/2>=400){
    velocidadeX *=-1;
}
  if(xBol-diametro/2<=0){
    velocidadeX *=-1;
  }
}

  