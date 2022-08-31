
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
let valeurDe = 0
let valueDice = 0;
let valuDice1 = 0;

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
    let output = document.querySelector("#diceZoneTable");
    let display = s => output.innerHTML;                
    diceList.forEach((name,i) => {
    setTimeout(() => {
    display(name);
    document.getElementById('diceImg').setAttribute('src',name);
    value = document.getElementById('diceValuesPlayer1').innerText = diceList.indexOf(name)+1;
    }, Math.random(i) * 1500);
  });
}
rollingDice.addEventListener('click', rollDice);



console.dir(player1CurrentScore);
console.dir(player2CurrentScore);
console.dir(diceValuesPlayer1);
console.dir(diceValuesPlayer2);


    
