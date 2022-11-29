// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;
let size;
let cspeed = 1

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
}

function draw(){
  background(160, 192, 255);
  count = (count + cspeed) % cycle;

  ellipse(width / 2, height / 2, size);
  size = 150 + count
  if(keyIsDown(UP_ARROW)){(cspeed = 4)}
  else{cspeed = 2}
  if(size > width){
    size = 250 - count
    cspeed = 1
  };

}
