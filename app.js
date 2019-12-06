// toglogchiin eeljiig hadgalah var 1-eer toglogchiig 0,  2-aar toglogchiig 1 gey

var activePlayer=0;

// toglogchiin stugluulsan onoog hadgalah var

var scores=[0,0];

// toglogchiiin eeljindee stugluulah onoog hadgalah var

var roundScore=0;

// shoonii ali talaaraa buusniig hadgalah var,1-6 utgiig ene  var-d sanamsargigeer olgono

var diceNumber=Math.floor(Math.random()*6)+1;
// window.document.querySelector("#score-0").textContent=dice
// window.document.querySelector("#score-1").textContent=dice



document.getElementById("score-0").textContent='0';

document.getElementById("score-1").textContent='0';

document.getElementById("current-0").textContent='0';

document.getElementById("current-1").textContent='0';

var diceDom= document.querySelector(".dice")

diceDom.style.display='none';

// shoog shideh eventListener
document.querySelector(".btn-roll").addEventListener("click", function(){

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
        roundScore=0;

        document.getElementById("current-"+activePlayer).textContent=0;

        activePlayer===0 ? (activePlayer=1) : (activePlayer=0);

        document.querySelector(".player-0-panel").classList.toggle("active");

        document.querySelector(".player-1-panel").classList.toggle("active");

        diceDom.style.display="none";
    }
});



