
//define the variables
let startButton = document.getElementById('startGameButton');
let player1Name = document.getElementById('player1input');
let player2Name = document.getElementById('player2input');
let player1Player = document.getElementById('pl1Player');
let player2Player = document.getElementById('pl2Player');
let rollingDice = document.getElementById('diceImg');
let section1 = document.getElementById('player1section');
let section2 = document.getElementById('player2section');
let errorStartText = 'You must write the player\'s names'
let player1CurrentScore = 0;
let player2CurrentScore = 0;
let diceValuesPlayer1 = 0;
let diceValuesPlayer2 = 0;
let saveDiceValuesPlayer1 = document.getElementById('saveDiceValueP1');
let saveDiceValuesPlayer2 = document.getElementById('saveDiceValueP2');
let dice = document.getElementById('diceZoneTable');
let valeurDe = 0;
let valeurTemp = 0;
let addValueDice = 0;
let valuDice1 = 0;
let values = 0;
let tempValue = 0;
let lancerDe = document.getElementById('diceGameButton');

// create a list of links to dice pictures
let diceList = [
    './pictures/dice1.png',
    './pictures/dice2.png',
    './pictures/dice3.png',
    './pictures/dice4.png',
    './pictures/dice5.png',
    './pictures/dice6.png'
]

// init new game
    function departButton(){
        if (player1Name.value === "" || player2Name.value === ""){
            //startButton.setAttribute =('disabled');
            startButton.style.border = "2px solid #f44646";
            document.getElementById('resetGameButton').innerText = errorStartText;
            player1Name.focus();
        }
        else {
            //startButton.removeAttribute = ('disabled');
            startButton.style.border = "2px solid #ffffff";
            document.getElementById('resetGameButton').innerText = '';
            player1Player.style.color = "#FF00FF"; //ajout
            resetAll();
            playerSelect();
            lancerDe.addEventListener('click', rollDice);
        }
    }
startButton.addEventListener('click',departButton);




// reset all inputs and scores when init new game
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

// To rolling the dice when the game's playing
function rollDice(){
    let counter = 0;
    let i = setInterval (function(){
    valeurDe = Math.floor(Math.random() * 6 + 1);
        if(valeurDe === 1){
            document.getElementById('diceImg').setAttribute('src', diceList[0])
        }
        else if(valeurDe === 2){
            document.getElementById('diceImg').setAttribute('src', diceList[1])
        }
        else if(valeurDe === 3){
            document.getElementById('diceImg').setAttribute('src', diceList[2])
        }
        else if(valeurDe === 4){
            document.getElementById('diceImg').setAttribute('src', diceList[3])
        }
        else if(valeurDe === 5){
            document.getElementById('diceImg').setAttribute('src', diceList[4])
        }
        else {
            document.getElementById('diceImg').setAttribute('src', diceList[5])
        }
    counter++;
    if (counter === 7){
        valeurTemp = valeurTemp + valeurDe;
        console.log('dans la fonction la valeur de valeur Temp est de : ' + valeurTemp);
        clearInterval(i);
        document.getElementById('diceValuesPlayer1').innerHTML = valeurTemp;
    }
    
},300);
}
//lancerDe.addEventListener('click', rollDice); colle dans start game pour autoriser lorsque les noms de players sont entrés.


// to add dice value to cureent score , in construction !!!!
function addDiceValueToCurrentScore(val1, val2){
    totalDice = val1 + val2;
}


// fonction qui desactive le player1 ou le player2 en fonction de celui qui est choisi... pas la bonne approche

/*function disabledPlayer(){
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
}*/
    function playerSelect(){
    if(player1Player.style.color = "#FFOOFF"){  
        player2Player.style.color = "#FFFFFF"; 
    }
    else{
        player2Player.style.color = "#FF00FF"; 
        player1Player.style.color = "#FFFFFF";
    }
}
console.log('la valeur de valeur temp est de : '+ valeurTemp);
console.log('la valeur de valeur de est de : ' + valeurDe);

