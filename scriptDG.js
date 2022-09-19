
//define the variables
let startButton = document.getElementById('startGameButton');
let player1Name = document.getElementById('player1input');
let player2Name = document.getElementById('player2input');
let rollingDice = document.getElementById('diceImg');
let section1 = document.getElementById('player1section');
let section2 = document.getElementById('player2section');
let player1CurrentScore = 0;
let player2CurrentScore = 0;
let diceValuesPlayer1 = 0;
let diceValuesPlayer2 = 0;
let saveDiceValuesPlayer1 = document.getElementById('saveDiceValueP1');
let saveDiceValuesPlayer2 = document.getElementById('saveDiceValueP2');
let dice = document.getElementById('diceZoneTable');
let valeurDe = 0;
let addValueDice = 0;
let valuDice1 = 0;
let values = 0;
let tempValue = 0;
let lancerDe = document.getElementById('diceGameButton');

let diceList = [
    './pictures/dice1.png',
    './pictures/dice2.png',
    './pictures/dice3.png',
    './pictures/dice4.png',
    './pictures/dice5.png',
    './pictures/dice6.png'
]
function departButton(){
    if (player1Name.value === "" || player2Name.value === ""){
        startButton.setAttribute =('disabled');
        startGameButton.style.border = "2px solid #f44646";
        document.getElementById('resetGameButton').innerText = 'You must write the player\'s names';
        player1Name.focus();
    }
    else {
        startButton.removeAttribute = ('disabled');
        startGameButton.style.border = "2px solid #ffffff";
        document.getElementById('resetGameButton').innerText = '';
        resetAll();
    }
}
startButton.addEventListener('click',departButton);

disabledPlayer();

function resetAll(){
    player1CurrentScore= 0;
    document.getElementById('CurrentScorePlayer1').innerText = player1CurrentScore;
    player2CurrentScore = 0;
    document.getElementById('CurrentScorePlayer2').innerText = player2CurrentScore;
    diceValuesPlayer1 = 0
    document.getElementById('diceValuesPlayer1').innerText = diceValuesPlayer1;
    diceValuesPlayer2 = 0;
    document.getElementById('diceValuesPlayer2').innerText = diceValuesPlayer2;
    document.getElementById('diceImg').setAttribute('src', './pictures/dice6.png');
}

function rollDice(){
    let counter = 0;
    let i = setInterval (function(){
    valeurDe = Math.floor(Math.random() * 6 + 1);
    //document.getElementById('diceValuesPlayer1').innerText = valeurDe;
    counter++;
    if (counter === 7){
    clearInterval(i);
    console.log(valeurDe);
    }
},300);
}

lancerDe =addEventListener('click', rollDice);
console.log(valeurDe);


// fonction qui desactive le player1 ou le player2 en fonction de celui qui est choisi... pas la bonne approche

function disabledPlayer(){
    if (player1Name.value !== ""){
        player2Name.setAttribute =('disabled','');
    }else{
        player2Name.removeAttribute =('disabled','');   //il faut revoir tout ça
    }
    if (player2Name.value !== ""){
        player1Name.setAttribute =('disabled','');
    }else{
        player1Name.removeAttribute =('disabled','');
    }
}