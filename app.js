// all new var

// game over var
var isGameOver;


var activePlayer=0;
var scores =[0,0];
var roundScore=0;

function initGame(){
isGameOver=false;

    // toglogchiin eeljiig hadgalah var 1-eer toglogchiig 0,  2-aar toglogchiig 1 gey

 activePlayer=0;

// toglogchiin stugluulsan onoog hadgalah var

 scores=[0,0];

// toglogchiiin eeljindee stugluulah onoog hadgalah var

 roundScore=0;

// shoonii ali talaaraa buusniig hadgalah var,1-6 utgiig ene  var-d sanamsargigeer olgono


// window.document.querySelector("#score-0").textContent=dice
// window.document.querySelector("#score-1").textContent=dice

document.getElementById("score-0").textContent='0';

document.getElementById("score-1").textContent='0';

document.getElementById("current-0").textContent='0';

document.getElementById("current-1").textContent='0';

diceDom.style.display='none';

document.getElementById('name-0').textContent="Player 1";
document.getElementById('name-1').textContent="Player 2";

document.querySelector(".player-0-panel").classList.remove("winner");
document.querySelector(".player-1-panel").classList.remove("winner");

document.querySelector(".player-0-panel").classList.remove("active");
document.querySelector(".player-1-panel").classList.remove("active");

document.querySelector(".player-0-panel").classList.add("active");
}

var diceNumber=Math.floor(Math.random()*6)+1;

var diceDom= document.querySelector(".dice");

// shoog shideh eventListener
document.querySelector(".btn-roll").addEventListener("click", function(){

    if(isGameOver !== true){
        // shoonii zurgiig gargah
    diceDom.style.display='block';

    // 1-6 dotorh sanamsargui toog gargah
    var diceNumber=Math.floor(Math.random()*6)+1;

    // diceNumber d hargalzah zurgiig uzuuleh
    diceDom.src ="dice-"+ diceNumber +".png";

    // buusan too 1ees yalgaatai ued activePlayer iin score iig nemegduulne
    if(diceNumber !==1){
        roundScore=roundScore+diceNumber

        document.getElementById("current-"+activePlayer).textContent=roundScore;
    }else{
        switchToNextPlayer();
    }
    }else{
        alert("Game is Over Click New Game")
    }
});

// event listener of hold button

document.querySelector(".btn-hold").addEventListener("click", function(){
    
 scores[activePlayer]=scores[activePlayer]+roundScore

 document.getElementById("score-"+ activePlayer).textContent=scores[activePlayer];

// toglogch hojson esehiig shalgah
 if(scores[activePlayer]>=100){
    isGameOver=true;

    document.getElementById("name-"+activePlayer).textContent="WINNER !!!";

    document.querySelector(".player-"+activePlayer+"-panel").classList.add("winner");
 }

 switchToNextPlayer();
});

//****************  toglogchiin eeljiig solih function ***************************
function switchToNextPlayer(){
    roundScore=0;

    document.getElementById("current-"+activePlayer).textContent=0;

    activePlayer===0 ? (activePlayer=1) : (activePlayer=0);

    document.querySelector(".player-0-panel").classList.toggle("active");

    document.querySelector(".player-1-panel").classList.toggle("active");

    diceDom.style.display="none";
}

// event listener of new btn
document.querySelector(".btn-new").addEventListener("click", initGame);




