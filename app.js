// toglogchiin eeljiig hadgalah var 1-eer toglogchiig 0,  2-aar toglogchiig 1 gey

var activePlayer=1;

// toglogchiin stugluulsan onoog hadgalah var

var scores=[0,0];

// toglogchiiin eeljindee stugluulah onoog hadgalah var

var roundScore=0;

// shoonii ali talaaraa buusniig hadgalah var,1-6 utgiig ene  var-d sanamsargigeer olgono

var diceNumber=Math.floor(Math.random()*6)+1;
// window.document.querySelector("#score-0").textContent=dice
// window.document.querySelector("#score-1").textContent=dice

document.getElementById("score-1").textContent='0';

document.getElementById("score-0").textContent='0';

document.getElementById("current-1").textContent='0';

document.getElementById("current-0").textContent='0';

var diceDom= document.querySelector(".dice")

diceDom.style.display='none';

document.querySelector(".btn-roll").addEventListener("click", function(){

    diceDom.style.display='block';

    var diceNumber=Math.floor(Math.random()*6)+1;

    diceDom.src ="dice-"+ diceNumber +".png";

    
});

