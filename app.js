// toglogchiin eeljiig hadgalah var 1-eer toglogchiig 0,  2-aar toglogchiig 1 gey
var activePlayer=1;

// toglogchiin stugluulsan onoog hadgalah var
var scores=[0,0];

// toglogchiiin eeljindee stugluulah onoog hadgalah var
var roundScore=0;

// shoonii ali talaaraa buusniig hadgalah var,1-6 utgiig ene  var-d sanamsargigeer olgono
var dice=Math.floor(Math.random()*6)+1;
// window.document.querySelector("#score-0").textContent=dice
// window.document.querySelector("#score-1").textContent=dice
document.querySelector(".dice").style.display= "none";
window.document.querySelector("#score-1").textContent=0
window.document.querySelector("#score-0").textContent=0
window.document.querySelector("#current-0").textContent=0
window.document.querySelector("#current-1").textContent=0