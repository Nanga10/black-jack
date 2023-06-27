let arrCards = [];
let sum = 0;
let card1 = 0;
let card2 = 0;
let newCard = 0;

const btnStart = document.getElementById("start-button");

const btnCard = document.getElementById("new-card-button");

let playEl = document.getElementById("play-round-element");
let sumEl = document.getElementById("sum-element");
let statusEl = document.getElementById("status-element");


function startGame(){
    card1 = Math.floor((Math.random() * 13) + 1);
    card2 = Math.floor((Math.random() * 13)+ 1);
    arrCards.push(card1, card2);
    playEl.textContent = "Cards:" + arrCards;
          
}

function sumArray (){
    for (let i = 0; i < arrCards.length; i++) {
        sum += arrCards[i];
        }
          return sumEl.textContent += sum;
}

function NewCard(){
        newCard = Math.floor((Math.random() * 13) + 1);
        console.log(newCard)
        if(newCard == 12 || newCard == 13){
            newCard = 10;
        } else if (newCard == 1){
            newCard = 11;
        }
        arrCards.push(newCard);
        playEl.textContent = "Cards:" + arrCards;
        sum += newCard;
        sumEl.textContent = "Sum:" + sum;

    }

function gameStatus(){
    if(sum == 21){
        statusEl.textContent = "BlackJack! You Win"
    } else if(sum < 20){
        statusEl.textContent = "Draw A New Card"
    }else{
        statusEl.textContent = "You Lose"
    }
}    

btnStart.addEventListener("click", function () { 
startGame();
sumArray();
gameStatus();
});

btnCard.addEventListener("click", function(){
NewCard();
gameStatus();
})