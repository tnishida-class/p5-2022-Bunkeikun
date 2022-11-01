// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love Keyakizaka 46",0,0,100,100,"black");
}

function balloon(t, bx, by, cx, cy, bc){
//bc は "black" か "white" で指定
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  if(bc == "black"){
    fill(0)
    rect(bx, by, w + p * 2, h + p * 2);
    beginShape();
    vertex(bx,by + h + p * 2)
    vertex(cx,cy)
    vertex(bx + 20, by + h + p * 2)
    endShape();
    fill(255);
    text(t, p, h + p);}

   
  if(bc == "white"){
    fill(255)
    rect(bx, by, w + p * 2, h + p * 2);
    beginShape();
    vertex(bx,by + h + p * 2)
    vertex(cx,cy)
    vertex(bx + 20, by + h + p * 2)
    endShape();
    fill(0);
    text(t, p, h + p);
  }
 

}

