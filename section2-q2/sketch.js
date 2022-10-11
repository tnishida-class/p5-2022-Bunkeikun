// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if((i + j) % 2 == 1){
        fill(128)
        rect(size * i, size * j, size, size);// BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
        if(j < 3){
          fill(255,0,0)
          ellipse(size * i + 12.5, size * j + 12.5, 20)
        }
        if(j > 4){
          fill(0)
          ellipse(size * i + 12.5, size * j + 12.5, 20)
        }
    }
    
  }
}
}
