

class Player{
    constructor(nom, valeurTemp, runningScore, diceValue, isSelect){
        this.nom = nom;
        this.valeurTemp = valeurTemp;
        this.runningScore = runningScore;
        this.diceValue = diceValue;
        this.isSelect = isSelect;
    }
    afficherNom(){
        return console.log(this.nom);
    }
    afficherSelect(){
        return console.log(this.isSelect)
    }
}
let player1 = new Player ('ludo',0,0,0,true);
let player2 = new Player ('sabine',0,0,0,false);


player1.afficherNom();
player2.afficherNom();
player2.afficherSelect();
function controle(){
if(player1.nom === 'ludo'){
    console.log('le prénom est bon')
    changeF();
    console.log(player2)
}
else if(player2.nom === 'sabin'){
    console.log('le prenom n est pas bon')
    changeT();
    console.log(player1);
}
}
controle();
function changeF(){
    player1.isSelect = true;
    player2.isSelect = false;
    console.log(player1);
}
function changeT(){
    player1.isSelect = false;
    player2.isSelect = true;
    console.log(player1);
}
if (player1.isSelect === true){
    console.log('le joueur ' + player1.nom +' est bien validé à true');
}
else{
    console.log('le joueur '+ player2.nom + ' est validé a false')
}