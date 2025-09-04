let gameSeq = [];
let userSeq = [];
let btns = ["red","green","yellow","purple"];
let started = false;
let level = 0;
let h4 = document.querySelector("h4");
let h2 = document.querySelector("h2");
let highScore = 0;
document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game is started");
        started = true;
        levelUp();
    }
});

function gameflash(btn)
{
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },200);
}

function userflash(btn)
{
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },200);
}

function checkAns(ind){
        
        if(gameSeq[ind] === userSeq[ind]){
            if(userSeq.length == gameSeq.length){
                setTimeout(levelUp(),1000);
            }
        }
        else{
          h4.innerHTML = `!Game Over. <b>your score is:${level - 1}</b> <br>press any key to start`;
          document.querySelector("body").style.backgroundColor = "red";
          setTimeout(function(){
                      document.querySelector("body").style.backgroundColor = "white";
          },150);
          highScore = Math.max(highScore,level);
          h2.innerHTML = `High Score:${highScore - 1}`;
          reset();
        }
}

function levelUp(){
    userSeq=[];
    level++;
    h4.innerText = `Level ${level}`;

    let randomInd = Math.floor(Math.random()* btns.length);
    let randomColor = btns[randomInd];
    let randbtn = document.querySelector(`.${randomColor}`);
    // console.log(randomInd);
    // console.log(randomColor);
    // console.log(randbtn);
    //random btn flash
    gameSeq.push(randomColor);
    console.log(gameSeq)
    gameflash(randbtn);

}
function btnPress(){
    let btn = this;
    userflash(btn);

    userColor = btn.getAttribute('id');
    userSeq.push(userColor);
    console.log(userColor);

    checkAns(userSeq.length -1);
}
let allBtns = document.querySelectorAll(".one");
for(btnAll of allBtns){
    btnAll.addEventListener("click" , btnPress);
}

function reset(){
    started = false;
    level = 0;
    userSeq =[];
    gameSeq = [];
    
}