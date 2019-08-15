var screen = 1;
var canTouch = hasTouch();
var canvas;
var width, height;
var ctx;
var x1 = 0;
var aspectRatio = 0.5625;


var countdown = -1;

var selection;
var answers;
var currentSelection;
var currentAnswer;
var choice;

var gameActive = false;

var crackedAnimation = -1;
var lastCrackX1;
var lastCrackY1;
var lastCrackX2;
var lastCrackY2;
var lastCrackX3;
var lastCrackY3;
var lastCrackX4;
var lastCrackY4;
var breakSound;

var timerEnd;
var numberOfSeconds = 10;
var streak = -1;
var gameOver = false;
var gameLost = false;
var timeLeft;

var retryOverlay = false;

var bestStreakColours = new Array;
var bestStreakShip = new Array;
var bestStreakPitch = new Array;
var bestStreakFractions = new Array;
var beatStreak = false;

var selectionOrientation = -1;
var shipSideSelection = -1;

var pitchA;
var pitchB;
var pitchC;
var timeoutA;
var timeoutB;
var timeoutC;
var colourPosition;

var multiple;
var fractionsType;

/***** SOUND TEST ****/

var AudioContext;
var audioContext;
		
var audioElementBreak;
var audioElementPianoA;
var audioElementPianoC;
var audioElementPianoE;

var trackBreak;
var trackPianoA;
var trackPianoC;
var trackPianoE;

/***** SOUND TEST ****/



window.onload = function() {
	setup();
}

window.onresize = function() {
	resize();
}

function setup() {

	resize();
		
	configureInputControls("game");
	initialLoad();
}

function resize() {
	height = window.innerHeight;
	width = height*aspectRatio;

	document.getElementById("game").width = width;
	document.getElementById("game").height = height;
}

function initializeColoursGame() {
	selection = new Array();
	answers = new Array();
	choice = -1;
	selection = ["RED","YELLOW","GREEN","BLUE","PINK","BLACK","PURPLE"];
	answers = ["red","yellow","green","blue","pink","black","purple"];
	retryOverlay = false;
	timeLeft = -1;
	streak = 0;	
	crackedAnimation = 0;
	lastCrackX1 = new Array;
	lastCrackY1 = new Array;
	lastCrackX2 = new Array;
	lastCrackY2 = new Array;
	lastCrackX3 = new Array;
	lastCrackY3 = new Array;
	lastCrackX4 = new Array;
	lastCrackY4 = new Array;
	currentSelection = "";
	beatStreak = false;
	//breakSound = new Audio("sounds/break.mp3");
	loadSounds();
}

function initializeShipGame() {
	selection = new Array();
	answers = new Array();
	choice = -1;
	selection = ["BOW","STERN","PORT","STARBOARD"];
	answers = ["N","S","W","E"];
	retryOverlay = false;
	timeLeft = -1;
	streak = 0;	
	crackedAnimation = 0;
	lastCrackX1 = new Array;
	lastCrackY1 = new Array;
	lastCrackX2 = new Array;
	lastCrackY2 = new Array;
	lastCrackX3 = new Array;
	lastCrackY3 = new Array;
	lastCrackX4 = new Array;
	lastCrackY4 = new Array;
	currentSelection = "";
	beatStreak = false;
	shipSideSelection = -1;
	selectionOrientation = -1;
	//breakSound = new Audio("sounds/break.mp3");
	loadSounds();
}

function initializePitchGame() {
	selection = new Array();
	answers = new Array();
	choice = -1;
	selection = ["HIGH:MEDIUM:LOW","HIGH:LOW:MEDIUM","MEDIUM:HIGH:LOW","MEDIUM:LOW:HIGH","LOW:HIGH:MEDIUM","LOW:MEDIUM:HIGH"];
	answers = ["HIGH:MEDIUM:LOW","HIGH:LOW:MEDIUM","MEDIUM:HIGH:LOW","MEDIUM:LOW:HIGH","LOW:HIGH:MEDIUM","LOW:MEDIUM:HIGH"];
	retryOverlay = false;
	timeLeft = -1;
	streak = 0;	
	crackedAnimation = 0;
	lastCrackX1 = new Array;
	lastCrackY1 = new Array;
	lastCrackX2 = new Array;
	lastCrackY2 = new Array;
	lastCrackX3 = new Array;
	lastCrackY3 = new Array;
	lastCrackX4 = new Array;
	lastCrackY4 = new Array;
	currentSelection = "";
	currentAnswer = "";
	beatStreak = false;
	//noteASound = new Audio("sounds/piano-a.mp3");
	//noteCSound = new Audio("sounds/piano-c.mp3");
	//noteESound = new Audio("sounds/piano-e.mp3");
	//breakSound = new Audio("sounds/break.mp3");
	loadSounds();
	//pitchA = noteASound;
	//pitchB = noteCSound;
	//pitchC = noteESound;
	colourPosition = -1;
}

function initializeFractionsGame() {
	selection = new Array();
	answers = new Array();
	choice = -1;
	//3/8 = x3 x5 x7 | 37.5% | piechart
	//selection = ["HIGH:MEDIUM:LOW","HIGH:LOW:MEDIUM","MEDIUM:HIGH:LOW","MEDIUM:LOW:HIGH","LOW:HIGH:MEDIUM","LOW:MEDIUM:HIGH"];
	//answers = ["HIGH:MEDIUM:LOW","HIGH:LOW:MEDIUM","MEDIUM:HIGH:LOW","MEDIUM:LOW:HIGH","LOW:HIGH:MEDIUM","LOW:MEDIUM:HIGH"];
	retryOverlay = false;
	timeLeft = -1;
	streak = 0;
	gameActive = false;
	crackedAnimation = 0;
	lastCrackX1 = new Array;
	lastCrackY1 = new Array;
	lastCrackX2 = new Array;
	lastCrackY2 = new Array;
	lastCrackX3 = new Array;
	lastCrackY3 = new Array;
	lastCrackX4 = new Array;
	lastCrackY4 = new Array;
	currentSelection = "";
	currentAnswer = "";
	beatStreak = false;
	loadSounds();
	colourPosition = -1;
}

function startColoursGame() {
	gameActive = true;
	gameOver = false;
	gameLost = false;
	startTheCountdown();
	var temp = random(selection.length);
	currentSelection = selection[temp];
	currentAnswer = answers[temp];
}

function startShipGame() {
	gameActive = true;
	gameOver = false;
	gameLost = false;
	startTheCountdown();
	var temp = random(selection.length);
	shipSideSelection = random(4)+1;
	currentSelection = selection[shipSideSelection-1];
	currentAnswer = answers[shipSideSelection-1];
	selectionOrientation = 1;
}

function startPitchGame() {
	gameActive = true;
	gameOver = false;
	gameLost = false;
	startTheCountdown();
	var temp = random(selection.length);
	currentSelection = selection[temp];
	currentAnswer = answers[temp];
	colourPosition = 1;
	playNotes();
}

function startFractionsGame() {
	gameActive = true;
	gameOver = false;
	gameLost = false;
	keepGoing = true;
	startTheCountdown();
	var val1 = random(8)+1;
	var val2;
	do {
		val2 = random(9)+1;
	} while (val2 <= val1);
	currentSelection = val1+":"+val2;
	currentAnswer = currentSelection;	
	var rand = random(3)+1;
	fractionsType = rand;
	getMultiple();
}

function getMultiple() {
	multiple = random(4)+1;
	if (multiple == 1) {
		multiple = 3;
	}
	else if (multiple == 2) {
		multiple = 5;
	}
	else if (multiple == 3) {
		multiple = 7;
	}
	else if (multiple == 4) {
		multiple = 9;
	}
}

function playNotes(e) {

	/*
	clearTimeout(timeoutA);
	clearTimeout(timeoutB);
	clearTimeout(timeoutC);
	pitchA.pause();
	pitchA.currentTime = 0;
	pitchB.pause();
	pitchB.currentTime = 0;
	pitchC.pause();
	pitchC.currentTime = 0;
	*/
	
	/*
	audioElementPianoA.currentTime = 0;
	audioElementPianoC.currentTime = 0;
	audioElementPianoE.currentTime = 0;
	*/
	
	if (currentSelection.split(":")[0] == "LOW") {
		//timeoutA = window.setTimeout( function() { pitchA.play(); colourPosition = 1;} , 0);
		//timeoutA = window.setTimeout( function() { 	audioElementPianoA.play(); colourPosition = 1;} , 0);
		timeoutA = window.setTimeout( function() { 	noteASound.play(); colourPosition = 1;} , 0);
	}
	else if (currentSelection.split(":")[0] == "MEDIUM") {
		//timeoutA = window.setTimeout( function() { pitchB.play(); colourPosition = 1;} , 0);
		//timeoutA = window.setTimeout( function() { 	audioElementPianoC.play(); colourPosition = 1;} , 0);
		timeoutA = window.setTimeout( function() { 	noteBSound.play(); colourPosition = 1;} , 0);
	}
	else if (currentSelection.split(":")[0] == "HIGH") {
		//timeoutA = window.setTimeout( function() { pitchC.play(); colourPosition = 1;} , 0);
		//timeoutA = window.setTimeout( function() { 	audioElementPianoE.play(); colourPosition = 1;} , 0);
		timeoutA = window.setTimeout( function() { 	noteCSound.play(); colourPosition = 1;} , 0);
	}
	
	if (currentSelection.split(":")[1] == "LOW") {
		//timeoutB = window.setTimeout( function() { pitchA.play(); colourPosition = 2;} ,250);
		//timeoutB = window.setTimeout( function() { audioElementPianoA.play(); colourPosition = 2;} ,250);
		timeoutB = window.setTimeout( function() { noteASound.play(); colourPosition = 2;} ,250);
	}
	else if (currentSelection.split(":")[1] == "MEDIUM") {
		//timeoutB = window.setTimeout( function() { pitchB.play(); colourPosition = 2;} ,250);
		//timeoutB = window.setTimeout( function() { audioElementPianoC.play(); colourPosition = 2;} ,250);
		timeoutB = window.setTimeout( function() { noteBSound.play(); colourPosition = 2;} ,250);
	}
	else if (currentSelection.split(":")[1] == "HIGH") {
		//timeoutB = window.setTimeout( function() { pitchC.play(); colourPosition = 2;} ,250);
		//timeoutB = window.setTimeout( function() { audioElementPianoE.play(); colourPosition = 2;} ,250);
		timeoutB = window.setTimeout( function() { noteCSound.play(); colourPosition = 2;} ,250);
	}

	if (currentSelection.split(":")[2] == "LOW") {
		//timeoutC = window.setTimeout( function() { pitchA.play(); colourPosition = 3; } ,500);
		//timeoutC = window.setTimeout( function() { audioElementPianoA.play(); colourPosition = 3;} ,500);
		timeoutC = window.setTimeout( function() { noteASound.play(); colourPosition = 3;} ,500);
	}
	else if (currentSelection.split(":")[2] == "MEDIUM") {
		//timeoutC = window.setTimeout( function() { pitchB.play(); colourPosition = 3; } ,500);
		//timeoutC = window.setTimeout( function() { audioElementPianoC.play(); colourPosition = 3;} ,500);
		timeoutC = window.setTimeout( function() { noteBSound.play(); colourPosition = 3;} ,500);
	}
	else if (currentSelection.split(":")[2] == "HIGH") {
		//timeoutC = window.setTimeout( function() { pitchC.play(); colourPosition = 3; } ,500);
		//timeoutC = window.setTimeout( function() { audioElementPianoE.play(); colourPosition = 3;} ,500);
		timeoutC = window.setTimeout( function() { noteCSound.play(); colourPosition = 3;} ,500);
	}
	
	window.setTimeout( function() { colourPosition = -1; } , 750);
	
}


function nextColour() {
	
	var keepGoing = false;
	
	if (checkAnswer() == true) {
		keepGoing = true;
	}
	
	if (keepGoing == true) {	
		var lastSelection = currentSelection;
		var lastAnswer = currentAnswer;
		do {
			var temp = random(selection.length);
			currentSelection = selection[temp];
			var rand = random(3)+3;
			var temp2 = random(rand);
			if (temp2 == 2) {
				temp2 = random(answers.length);
				currentAnswer = answers[temp2];	
			}
			else {
				currentAnswer = answers[temp];
			}
		} while (lastSelection == currentSelection && lastAnswer == currentAnswer);
		colourRed = 10;
		colourPosition = 1;
	}
	else {
		crackTheScreen();
	}
}

function crackTheScreen() {
		console.log("GAME OVER");
		//https://freesound.org/people/spookymodem/sounds/202093/
		breakSound.play();
		//audioElementBreak.play();
		window.setTimeout(triggerRetryOverlay,3000);
		gameLost = true;
		crackedAnimation = 0;
		lastCrackX1 = new Array;
		lastCrackY1 = new Array;
		lastCrackX2 = new Array;
		lastCrackY2 = new Array;
		lastCrackX3 = new Array;
		lastCrackY3 = new Array;
		lastCrackX4 = new Array;
		lastCrackY4 = new Array;
		if (choice == false) {
			lastCrackX1[0] = width;
			lastCrackX2[0] = width;
			lastCrackX3[0] = width;
			lastCrackX4[0] = width;
		}
		else {
			lastCrackX1[0] = 0;
			lastCrackX2[0] = 0;
			lastCrackX3[0] = 0;
			lastCrackX4[0] = 0;
		}
		lastCrackY1[0] = height;
		lastCrackY2[0] = height;
		lastCrackY3[0] = height;
		lastCrackY4[0] = height;
}

function nextShip() {
	
	var keepGoing = false;
	
	if (checkAnswer() == true) {
		keepGoing = true;
	}
	
	if (keepGoing == true) {	
		var lastSelection = currentSelection;
		do {
			var temp = random(selection.length);
			currentSelection = selection[temp];
			selectionOrientation = random(4)+1;
			//selectionOrientation = 4;
			var rand = random(4)+3;
			var temp2 = random(rand);
			//var temp2 = 4;
			if (temp2 <= 2) {
				temp2 = random(4)+1;
				shipSideSelection = temp2;
				console.log("RISK");
			}
			else {
				console.log("TRUTH");
				shipSideSelection = temp+1;
				if (selectionOrientation == 2) {
					if (shipSideSelection == 1) {
						shipSideSelection = 2;
					}
					else if (shipSideSelection == 2) {
						shipSideSelection = 1;
					}
					else if (shipSideSelection == 3) {
						shipSideSelection = 4;
					}
					else if (shipSideSelection == 4) {
						shipSideSelection = 3;
					}
				}
				else if (selectionOrientation == 3) {
					if (shipSideSelection == 1) {
						shipSideSelection = 4;
					}
					else if (shipSideSelection == 2) {
						shipSideSelection = 3;
					}
					else if (shipSideSelection == 3) {
						shipSideSelection = 1;
					}
					else if (shipSideSelection == 4) {
						shipSideSelection = 2;
					}
				}
				else if (selectionOrientation == 4) {
					if (shipSideSelection == 1) {
						shipSideSelection = 3;
					}
					else if (shipSideSelection == 2) {
						shipSideSelection = 4;
					}
					else if (shipSideSelection == 3) {
						shipSideSelection = 2;
					}
					else if (shipSideSelection == 4) {
						shipSideSelection = 1;
					}
				}
			}
		} while (lastSelection == currentSelection);
	}
	else {
		crackTheScreen();
	}
}

function nextPitch() {
	
	var keepGoing = false;
	
	if (checkAnswer() == true) {
		keepGoing = true;
	}
	
	if (keepGoing == true) {	
		var lastSelection = currentSelection;
		var lastAnswer = currentAnswer;
		do {
			var temp = random(selection.length);
			currentSelection = selection[temp];
			var rand = random(4)+3;
			var temp2 = random(rand);
			//var temp2 = 4;
			if (temp2 <= 2) {
				temp2 = random(answers.length);
				currentAnswer = answers[temp2];
				console.log("RISK");
			}
			else {
				console.log("TRUTH");
				currentAnswer = answers[temp];
			}
		} while (lastSelection == currentSelection && lastAnswer == currentAnswer);
		playNotes();
	}
	else {
		crackTheScreen();
	}
}

function nextFractions() {

	var keepGoing = false;
	
	if (checkAnswer() == true) {
		keepGoing = true;
	}
	
	if (keepGoing == true) {	
		lastSelection = currentSelection;
		lastAnswer = currentAnswer;
		do {
			var val1 = random(8)+1;
			var val2;
			do {
				val2 = random(9)+1;
			} while (val2 <= val1);
			currentSelection = val1+":"+val2;
		
		
			var rand = random(3)+3;
			var temp2 = random(rand);
			if (temp2 == 2) {
				temp2 = random(8)+1;
				var temp3;
				do {
					temp3 = random(9)+1;
				} while (temp3 <= temp2);
				currentAnswer = temp2+":"+temp3;
				console.log("RISK");
			}
			else {
				currentAnswer = currentSelection;
				console.log("LEGIT");
			}
		} while (lastSelection == currentSelection && lastAnswer == currentAnswer);
		
		var rand = random(3)+1;
		fractionsType = rand;
		getMultiple();	
	}
	else {
		crackTheScreen();
	}


}
