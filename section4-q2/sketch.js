// テキスト「配列を使った描画」練習問題：円グラフ

function setup(){
  createCanvas(400, 400);
  background(200,200,255);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100); // 60以上100未満のランダムな数を代入
  }

  // 円グラフを描くには割合が必要なので合計を計算しておく
  let total = 0;
  for(let i = 0; i < scores.length; i++){ total += scores[i]; }

  // BLANK[1]
  let strad = -PI / 2
  let enrad = 0
  let rx, ry, nx, ny, px, py, percentage
  for(let i = 0; i < scores.length; i++){
    enrad = strad + (2 * Math.PI * scores[i]) / total
    if(i % 2 == 0){fill(255)}
    else{fill(200)}
    stroke(0);
    strokeWeight(1);
    arc(width / 2, height / 2, width / 2, width / 2, strad, enrad)
    rx = width / 2 + width / 4 * Math.cos(enrad)
    ry = height / 2 + width / 4 * Math.sin(enrad)
    line(width / 2, height / 2, rx, ry)
    strad = enrad
  }
  for(let i = 0; i < scores.length; i++){
    enrad = strad + (2 * Math.PI * scores[i]) / total
    fill(0)
    nx = width / 2 + width * 5 / 16 * Math.cos((strad + enrad) / 2)
    ny = height / 2 + width * 5 / 16 * Math.sin((strad + enrad) / 2)
    text(scores[i].toPrecision(3), nx - 10, ny + 10)
    strad = enrad
  }
  for(let i = 0; i < scores.length; i++){
    enrad = strad + (2 * Math.PI * scores[i]) / total
    fill(0)
    px = width / 2 + width * 5 / 16 * Math.cos((strad + enrad) / 2)
    py = height / 2 + width * 5 / 16 * Math.sin((strad + enrad) / 2)
    percentage = (scores[i] / total) * 100
    text(percentage.toPrecision(3), px - 10, py + 25)
    text("       %", px - 10, py + 25)
    strad = enrad
  }
}
//