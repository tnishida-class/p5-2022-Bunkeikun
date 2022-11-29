// 最終課題を制作しよう
const windowWidth = 800
const windowHeight = 600
let size
let clickpower = 1
let credit = 0
let nextachievement = 1
let nextboostitem = 10
let achievementon = 0
let boostitemon = 0
let boostitemtxt = "学習効率アップ！\nここをクリックで\n取得"
let boostnum
let cookieseal = 0

function setup(){
  createCanvas(windowWidth, windowHeight);

}

function draw(){
  background(100);

  //クッキー
  push()
  fill(230,120,120)
  if(cookieseal == 1){
    fill(128)
  }
  ellipse(windowWidth / 2, windowHeight / 2, size)
  pop()
  if(mouseIsPressed){
    if(mouseX >= 250 && mouseX <= 550){
      if(mouseY >= 150 && mouseY <= 450){
        if(cookieseal == 0){
          size = 250
        }
      }
    }
  }
  else{size = 300}
  //初期画面
  if(credit == 0){
    push()
    strokeWeight(3)
    textBoxja("入学！",320,250,50)
    textBoxja("↓ボタンで単位↓",20,420,30,0)
    pop()
  }

  //常時表示文字UI
  textBoxnum(credit / 40,20,480,40,11)
  textBoxja("単位",180,480,40)
  textBoxja("国人クリッカー",20,20,40)

  //ブーストアイテム表示
  if(credit / 40 == nextboostitem){
    boostitem(nextboostitem)
    cookieseal = 1
  }
  if(boostitemon == 1)
    textBoxbig(boostitemtxt, 540,10,30)

  //アチーブメント、とじるボタン表示
  if(credit / 40 == nextachievement){
    achievement(nextachievement)
  }
  if(achievementon == 1){
    textBoxeng("Achievement!!",550,370,30)
    textBoxbig(achievementexp,550,450,15)
    textBoxja(achievementtxt,550,420,20)
    rect(750,560,50,40)
    push()
    textSize(15)
    text("とじる",750,570,40)
    pop()
  }
}

//クリック関係(クッキー、アチーブメント閉じる、強化アイテム)
function mouseClicked(){
  //クッキー
  if(mouseX >= 250 && mouseX <= 550){
    if(mouseY >= 150 && mouseY <= 450){
      if(cookieseal == 0){
        credit += clickpower
      }
    }
  }
  //アチーブメントとじる
  if(mouseX >=750 && mouseX <= 800){
    if(mouseY >= 560 && mouseY <= 600){
      achievementon = 0
    }
  }
  //ブーストアイテムゲット
  if(mouseX >= 540 && mouseX <= 790){
    if(mouseY >= 10 && mouseY <= 160){
      if(boostitemon == 1){
        boostitemon = 0
        cookieseal = 0
        achievement(boostnum)
      }
    }
  }
}

//ブーストアイテムたち
function boostitem(t){
  boostitemon = 1
  if(t == 10){
    boostnum = "b1"
    nextboostitem = 30
  }
  if(t == 30){
    boostnum = "b2"
    nextboostitem = 70
  }
  if(t == 70){
    boostnum = "b3"
    nextboostitem = 150
  }
}

//アチーブメントたち
function achievement(t){
  achievementon = 1
if(t == 1){
  achievementtxt = "初年次セミナー"
  achievementexp = "内容は2割も頭に入っていない。"
  nextachievement = 2
}
if(t == 2){
  achievementtxt = "実質初めての単位"
  achievementexp = "単位とは自らの手で\n掴みとるものだ......"
  nextachievement = 3
}
if(t == 3){
  achievementtxt = "ドキドキドン一年生"
  achievementexp = "もうそんなガラじゃない。"
  nextachievement = 4
}
if(t == 4){
  achievementtxt = "燃え尽き症候群"
  achievementexp = "思えば受験に受かることだけが\n目的だった......。"
  nextachievement = 5
}
if(t == 5){
  achievementtxt = "言語だけでも"
  achievementexp = "まだ若いのに、お気の毒に..."
  nextachievement = 8
}
if(t == 8){
  achievementtxt = "8 X 16 = 128"
  achievementexp = "なお、太郎君は国人所属とする。\nまた、単位は落とさないものとする。\nさらに、授業以外のイベントはない\nものとする。"
  nextachievement = 10
}
if(t == 10){
  achievementtxt = "ならばボタンで！"
  achievementexp = "クッ●ークリッカーならショップが\nあったんだろうが、残念。\nこちとらプログラミング素人よ"
  nextachievement = 15
}
if(t == 15){
  achievementtxt = "そろそろ1クオーター？"
  achievementexp = "学部や人によってはまだかもね。\nハッ"
  nextachievement = 20
}
if(t == 20){
  achievementtxt = "サークルの新入り"
  achievementexp = "無理難題を押し付けてくる\nメイドインワ●オ「なじめ!」"
  nextachievement = 25
}
if(t == 25){
  achievementtxt = "若葉"
  achievementexp = "「免許取った？」"
  nextachievement = 40
}
if(t == 40){
  achievementtxt = "40 X 3 + 10 = 130"
  achievementexp = "少なくとも、\n計画ではそのはずだった......。"
  nextachievement = 50
}
if(t == 50){
  achievementtxt = "そろそろ1年？"
  achievementexp = "オイ大学生1/4終わったらしいぜ!!\nハッハッ...ハッ...オ゛オエッ!!"
  nextachievement = 60
}
if(t == 60){
  achievementtxt = "オンデマンド消化忘れ"
  achievementexp = "期限が切れた30分後くらいに\nいつも思い出す。\n「ア゜ッ!!」"
  nextachievement = 70
}
if(t == 70){
  achievementtxt = "国人特有のスカスカ時間割"
  achievementexp = "15単位ほど取ったと思ったら、\n半年過ぎていた。オソロシー!!"
  nextachievement = 90
}
if(t == 90){
  achievementtxt = "何でも屋、或いは器用貧乏"
  achievementexp = "「へー国際人間科学部。\nどんな学部なんですか？」"
  nextachievement = 110
}
if(t == 110){
  achievementtxt = "闇堕ち"
  achievementexp = "「単位をとり卒業する」!\nそれだけよ...!\n過程や.....! 方法なぞ....!\nどうでもよいのだァ――――ッ"
  nextachievement = 120
}
if(t == 120){
  achievementtxt = "卒業研究"
  achievementexp = "「まぶしいなァ\n太陽の光がまぶしいなァ\n俺は今から再履修しに行くんだ...\n再履修しに今ちょっと寄ったの」"
  nextachievement = 128
}
if(t == 128){
  achievementtxt = "そろそろ卒業？"
  achievementexp = "学生便覧をしっかり見ておくんだった..."
  nextachievement = 200
}
//ブーストアイテムアチブたち
if(t == "b1"){
  achievementtxt = "学習効率増加！"
  achievementexp = "だんだん勝手がわかってきた。\n1クリックで0.05単位。"
  clickpower = 2
}
if(t == "b2"){
  achievementtxt = "良い意味での「慣れ」"
  achievementexp = "気分はすっかり大学生。\n1クリックで0.1単位。"
  clickpower = 4
}
if(t == "b3"){
  achievementtxt = "悪い意味での「慣れ」"
  achievementexp = "45時間も家庭学習するヤツいるの？\n1クリックで0.25単位。"
  clickpower = 10
}
}

//テキストボックスたち
function textBoxnum(t, bx, by, tsize, ltrs){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 4
  push()
    fill(255)
    rect(bx, by, w + tsize * ltrs / 3 + p * 2, h + tsize / 2 + p * 2);
    fill(0);
    textSize(tsize)
    text(t, bx + p, by + h + tsize / 2 + p);
  pop()
}

function textBoxeng(t, bx, by, tsize){
    let w = textWidth(t);
    let h = textAscent() + textDescent();
    let p = 4
    let txt = t
    let ltrs = txt.length
    push()
      fill(255)
      rect(bx, by, w + tsize * ltrs / 3 + p * 2, h + tsize / 2 + p * 2);
      fill(0);
      textSize(tsize)
      text(t, bx + p, by + h + tsize / 2 + p);
    pop()
  }
  
  function textBoxja(t, bx, by, tsize){
    let w = textWidth(t);
    let h = textAscent() + textDescent();
    let p = 4
    let txt = t
    let ltrs = txt.length
    push()
      fill(255)
      rect(bx, by, w + tsize * ltrs * 3 / 4 + p * 2, h + tsize / 2 + p * 2);
      fill(0);
      textSize(tsize)
      text(t, bx + p, by + h + tsize / 2 + p);
    pop()
  }

  function textBoxbig(t, bx, by, tsize){
    let w = textWidth(t);
    let h = textAscent() + textDescent();
    let p = 4
    let txt = t
    let ltrs = txt.length
    push()
      fill(255)
      rect(bx, by, 250, 150);
      fill(0);
      textSize(tsize)
      text(t, bx + p, by + h + tsize / 2 + p);
    pop()
  }
  
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
