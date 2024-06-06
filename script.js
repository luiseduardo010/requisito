const selectXBtn = document.createElement("selectXBtn");
const selectOBtn = document.createElement("selectOBtn");
const selectBox = document.querySelector(".select-box");
selectXBtn = selectBox.document.querySelector(".playerX");
selectOBtn = selectBox.document.querySelector(".playerO");
playBoard = document.querySelector(".play-board");
allBox = document.querySelectorAll("section span");
player = document.querySelector(".player");
resultBox = document.querySelector(".result-box");
wonText = resultBox.querySelector(".won-text");
replayBtn = resultBox.querySelector(".button");

window.onload = ()=> {
    for (let i = 0; i  < allBox.lengt; i++) {
        allBox[i].setAttribute("onclick","clickedBox(this)")
    };

    selectXBtn.onckick = ()=> {
        selectBox.classList.add("hide");
        playBoard.classList.add("show");
    }
    selectOBtn.onckick = ()=> {
        selectBox.classList.add("hide");
        playBoard.classList.add("show");
        player.setAttribute("class","player active players");
    }
}

let playerXIcon = "fas fa-times";
let playerOIcon = "fas fa-circle";
let playerSign = "X";
let runBot = true;

function clickedBox(element){
    if(player.classList.contains("player")){
        playerSign = "O";
        element.innerHTML = `<i class="${playerXIcon}"></
        i>`;
        player.classList.remove("active");
        element.setAttribute("id",playerSign);
    }else{
        playerSign = "X";
        element.innerHTML = `<i class="${playerOIcon}"></
        i>`;
        player.classList.add("active");
        element.setAttribute("id",playerSign);
    }
    selectWinner();
    element.style.pointerEvents = "none";
    let randomDelayTime = ((Math.random() * 1000) + 200).
    toFixed();
    setTimeout(()=>{
        bot(runBot);
    },randomDelayTime);
}

function bot(runBot){
        if(runBot){
        let array = [];
        playerSign = "O";
        for (let i = 0; i < allBox.length; i++) {
        if(allBox[i].childElementCount == 0){
                array.push(i);
            }
        }
        let randomBox = array[Math.floor(Math.random() * array.
        length)];
        if(array.length > 0){
            if(player.classList.contains("players")){
                playerSign = "X";
                allBox[randomBox].innerHTML = `<i class="${playerXIcon}"></
                i>`;
                player.classList.remove("active");
                allBox[randomBox].setAttribute("id",playerSign);
            }else{
                allBox[randomBox].innerHTML = `<i class="${playerOIcon}"></
                i>`;
                player.classList.remove("active");
                allBox[randomBox].setAttribute("id",playerSign);
            }
            selectWinner();
        }
        allBox[randomBox].style.pointerEvents = "none";
    }
}

function getClass(idname){
    return document.querySelector(".box"+ idname).id;
}

function checkClass(val1,val2,val3,sign){
    if(getClass(val1) == sign && getClass(val2) == sign && 
    getClass(val3) == sign){
        return true;
    }
}

function selectWinner(){
    if(checkClass(1,2,3,playerSign) || checkClass(4,5,6,
    playerSign) || checkClass(7,8,9,playerSign) || 
    checkClass(1,4,7,playerSign) || checkClass(2,5,8,
    playerSign) || checkClass(3,6,9,playerSign) || 
    checkClass(1,5,9,playerSign) || checkClass(3,5,7,
    playerSign) )
    {
        runBot = false;
        bot(runBot);
        setTimeout(()=>{
            playBoard.classList.remove("show");
            resultBox.classList.add("show");
        },700);
        wonText.innerHTML = `Jogador <p>${playerSign}</p> Ganhou!`;
    }else{

        if(getClass(1) != "" && getClass(2) != "" && 
        getClass(3) != "" && getClass(4) != "" && getClass
        (5) != "" && getClass(6) != "" && getClass(7) !=
        "" && getClass(8) != "" && getClass(9) != "" ){
            runBot = false;
            bot(runBot);
            setTimeout(()=>{
                playBoard.classList.remove("show");
                resultBox.classList.add("show");
            },700);
            wonText.textContent = `Jogo Empatou!`;
        }
    }
}

replayBtn.onckick = ()=>{
    window.location.reload();
}