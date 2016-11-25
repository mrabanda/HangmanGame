var wordBank = ["PARIS", "LONDON", "SYDNEY", "JOHANNESBURG", "XIANGHAI", "HIROSHIMA", "LAUSANNE", "DUSSELDORF", "ALEXANDRIA"];

var thewrdarr = [];
var thewrd;
var usrinp;
var letges;

//COUNTER VARIABLES
var winnum = 0;
var gesrem = 10;


// GLOBAL FUNCTIONS

//// Choses Word Randomly From wrdBank Then Pushes '_' To An Array Based On Length Of Word Selected
var rndwrd = function() {
	thewrd = wordBank[Math.floor(Math.random () * wordBank.length)];
	for(var i = 0; i < thewrd.length; i++) {
		thewrdarr.push("_");
		document.getElementById("crntwrd").innerHTML = thewrdarr.join(" ");
	};
	return thewrd
};

//// When The Correct Letter Is Guessed This Function Pushes The Letter To The Array Created In rndwrd

rndwrd();

document.onkeyup = function(event) {

  // Captures the key press, converts it to uppercase, and saves it to a variable.
  usrinp = event.key.toUpperCase();

  // while((thewrdarr.indexOf("_") <= 0) && gesrem > 0) {
  	if(thewrd.indexOf(usrinp) >= 0) {
			for(var j = 0; j < thewrd.length; j++) {
				if(thewrd[j] === usrinp) {
					thewrdarr[j] = usrinp;
					document.getElementById("crntwrd").innerHTML = thewrdarr.join(" ");
				}
			}
		} else {
			gesrem--;
		};
		if((thewrdarr.indexOf("_") === -1)) {
			thewrdarr = [];
			gesrem = 10;
			winnum++;
			rndwrd();
		}
		if(gesrem === 0) {
			thewrdarr = [];
			gesrem = 10;
			rndwrd();
		};
		document.getElementById("gesrem").innerHTML = gesrem;
		document.getElementById("wins").innerHTML = winnum;






		// } else {
		// 	if((thewrdarr.indexOf("_") >= 0) && gesrem > 0) {
		// 		gesrem--;
		// 		document.getElementById("gesrem").innerHTML = gesrem;				
		// 	};
		// };
		// if((thewrdarr.indexOf("_") < 0)) {
		// 	gesrem = 10;
		// 	winnum++;
		// 	rndwrd();
		// };
		// if(gesrem = 0) {
		// 	gesrem = 10;
		// 	rndwrd();
		// };
  return usrinp;
  return gesrem;
  return winnum;


};
// };