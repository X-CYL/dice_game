
//define the variables
let startButton = document.getElementById('startGameButton'); //récupère le bouton de depart du jeu
let player1Name = document.getElementById('player1input'); //récupère le nom du premier joueur
let player2Name = document.getElementById('player2input'); //récupère le nom du deuxieme jpueur
let player1Player = true;  
let player2Player = false; 
let rollingDice = document.getElementById('diceImg');     // la photo du dé
let section1 = document.getElementById('player1section'); // récupère section du joueur 1
let section2 = document.getElementById('player2section'); // récupère section du joueur 2
let p1Name = document.getElementById('p1');
let p2Name = document.getElementById('p2');
let errorStartText = 'You must write the player\'s names'   // stocke le message d' erreur si les players ne sont pas renseignés
let player1CurrentScore = 0;  //stocke la valeur totale du joueur 1
let player2CurrentScore = 0;  //stocke la valeur totale du joueur 2
let diceValuesPlayer1 = 0; // stocke la valeur temporaire du joueur 1
let diceValuesPlayer2 = 0; // stocke la valeur temporaire du joueur 2
let saveDiceValuesPlayer1 = document.getElementById('saveDiceValueP1');
let saveDiceValuesPlayer2 = document.getElementById('saveDiceValueP2');
let dice = document.getElementById('diceZoneTable'); //stcke l emplacement de a zone de lancé de dé
let valeurDe = 0; // valeur du dé après lancement
let valeurTemp = 0;  //valeur totale temporaire du lancé de dé
let addValueDice = 0; // stocke la valeur additionnée de la valeur totale joueur et valeur temporaire
let cszP1 = document.getElementById('pl1Player');
let cszP2 = document.getElementById('pl2Player');
let tempValue = 0; //non utilisé
let lancerDe = document.getElementById('diceGameButton'); //stocke le bouton de lancé de dé
console.log('la valeur de la variable valeurTemp en TETE est de  : ' + valeurTemp);


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
            //player1Player.style.color = "#FF00FF"; //ajout
            resetAll();
            //playerSelect();
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
        document.getElementById('diceValuesPlayer1').innerHTML = diceValuesPlayer1;
        diceValuesPlayer2 = 0;
        document.getElementById('diceValuesPlayer2').innerText= diceValuesPlayer2;
        valeurTemp = 0;
        p1Name.style.color = "rgb(255,83,150)";
        cszP1.style.color = "rgb(255,83,150)";
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
        console.log('dans la fonction la valeur de valeur Dé est de : ' + valeurDe);
        clearInterval(i);
        affectValue(); // affecte la valeur du dé avec une latence pour échapper au passage du 1 qui re initialise valeurTemp
        }
        
    function affectValue(){
        setTimeout(ifOne, 500)
        }
},400)
}        
let isOne = 0
function ifOne(){ // récuprère la dernière valeur de valeurDe 
    isOne = valeurDe;
    valeurTemp += valeurDe
    console.log('la valeur de isOne est de :' + isOne);
    if(isOne === 1){
        if(player1Player === true){
            valeurTemp = 0;
            player1Player = false;
            player2Player = true;
            p2Name.style.color = "rgb(255,83,150)";
            p1Name.style.color = "black";
            cszP2.style.color = "rgb(255,83,150)";
            cszP1.style.color = "black";
            document.getElementById('diceValuesPlayer1').innerText = 0;
        }
        else if(player2Player === true){
            valeurTemp = 0;
            player1Player = true;
            player2Player = false;
            p1Name.style.color = "rgb(255,83,150)";
            p2Name.style.color = "black";
            cszP1.style.color = "rgb(255,83,150)";
            cszP2.style.color = "black";
            document.getElementById('diceValuesPlayer2').innerText = 0;
        }
        else {
            "there a function failure";
        }
    }
    else{
        if(player1Player === true){
            document.getElementById('diceValuesPlayer1').innerHTML = valeurTemp;
        }
        else if(player2Player === true){
            document.getElementById('diceValuesPlayer2').innerHTML = valeurTemp;
        }
    valeurTemp;
    //console.log('la valeur de la variable valeurTemp en globale est de  : ' + valeurTemp);
    }
}
function addScore(){
    if(player1Player === true){
        player1CurrentScore += valeurTemp;
        document.getElementById('CurrentScorePlayer1').innerText = player1CurrentScore;
    }
    else if(player2Player === true){
        player2CurrentScore += valeurTemp;
        document.getElementById('CurrentScorePlayer2').innerText = player2CurrentScore;
    }
}
saveDiceValuesPlayer1.addEventListener('click',addScore);


