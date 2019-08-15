function hasTouch() {
    return (('ontouchstart' in window) ||       // html5 browsers
            (navigator.maxTouchPoints > 0) ||   // future IE
            (navigator.msMaxTouchPoints > 0));  // current IE10
}

function configureInputControls(id) {

	canvas = document.getElementById(id);
	ctx = canvas.getContext("2d");
	
	if (canTouch == false) {
		canvas.onmouseup = onMouseUpAction;
		canvas.onmousedown = onMouseDownAction;
	}
	else {
		canvas.addEventListener( 'touchstart', onTouchStartAction, false);
		canvas.addEventListener( 'touchend', onTouchEndAction, false);
	}
	
	window.addEventListener('keyup', onKeyboardUpAction, false);
	window.addEventListener('keydown', onKeyboardDownAction, false);

}

function onMouseDownAction(e) {
	isMouseDown = true;
	var rect = canvas.getBoundingClientRect();
	contactX = e.clientX - rect.left;
	contactY = e.clientY - rect.top;
	
	startInput(contactX,contactY);
}

function onMouseUpAction(e) {
	isMouseDown = false;
	var rect = canvas.getBoundingClientRect();
	releaseX = e.clientX - rect.left;
	releaseY = e.clientY - rect.top;
	
	endInput(releaseX,releaseY);
}

function onTouchStartAction(e) {
	isTouching = true;
	var	rect = canvas.getBoundingClientRect();
	contactX = e.touches[0].clientX - rect.left;
	contactY = e.touches[0].clientY - rect.top;
	
	startInput(contactX,contactY);
	
}

function onTouchEndAction(e) {
	isTouching = false;
	//releaseX = e.changedTouches[0].pageX - centeredX*2;
	releaseX = e.changedTouches[0].pageX;
	releaseY = e.changedTouches[0].pageY;
	
	endInput(releaseX,releaseY);
}

function onKeyboardDownAction(e) {
	//console.log("keydown = "+e.key);
}

function onKeyboardUpAction(e) {
	//console.log("keyup = "+e.key);
	keyboardChoice(e.key);
}

function startInput(x,y) {
	console.log("Input Start found at "+x+" "+y);
	cdCheck(x,y);
}

function endInput(x,y) {
	console.log("Input End found at "+x+" "+y);	
	//cdCheck(x,y);
}

function initialLoad() {
	window.requestAnimationFrame(drawInitialScreen);
	//drawInitialScreen();
}

function random(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

function toggleFullScreen() {
  var doc = window.document;
  var docEl = doc.documentElement;

  var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
  var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

  if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
    requestFullScreen.call(docEl);
	resize();
  }
  else {
    cancelFullScreen.call(doc);
  }
}

function triggerCountdown() {
	if (countdown > 1) {
		countdown--;
		window.setTimeout(triggerCountdown,1000);
	}
	else if (countdown == 1) {
		countdown--;
		if (screen == 4) {
			startColoursGame();
		}
		else if (screen == 6) {
			startShipGame();
		}
		else if (screen == 8) {
			startPitchGame();
		}
		else if (screen == 10) {
			startFractionsGame();
		}
	}
}

function checkAnswer() {
	if (screen == 4) {
		if (currentAnswer.toUpperCase() == currentSelection && choice == true) {
			streak++;
			return true;
		}
		else if (currentAnswer.toUpperCase() != currentSelection && choice == false) {
			streak++;
			return true;
		}
	}
	else if (screen == 6) {
		if (selectionOrientation == 1) {
			if (currentSelection == "BOW" && shipSideSelection == 1 && choice == true) {
				streak++;
				return true;
			}
			else if (currentSelection == "BOW" && shipSideSelection != 1 && choice == false) {
				streak++;
				return true;
			}
			else if (currentSelection == "STERN" && shipSideSelection == 2 && choice == true) {
				streak++;
				return true;
			}
			else if (currentSelection == "STERN" && shipSideSelection != 2 &&  choice == false) {
				streak++;
				return true;
			}
			else if (currentSelection == "PORT" && shipSideSelection == 3 &&  choice == true) {
				streak++;
				return true;
			}
			else if (currentSelection == "PORT" && shipSideSelection != 3 && choice == false) {
				streak++;
				return true;
			}
			else if (currentSelection == "STARBOARD"  && shipSideSelection == 4 &&  choice == true) {
				streak++;
				return true;
			}
			else if (currentSelection == "STARBOARD"  && shipSideSelection != 4 &&  choice == false) {
				streak++;
				return true;
			}
		}
		else if (selectionOrientation == 2) {
			if (currentSelection == "STERN" && shipSideSelection == 1 && choice == true) {
				streak++;
				return true;
			}
			else if (currentSelection == "STERN" && shipSideSelection != 1 && choice == false) {
				streak++;
				return true;
			}
			else if (currentSelection == "BOW" && shipSideSelection == 2 && choice == true) {
				streak++;
				return true;
			}
			else if (currentSelection == "BOW" && shipSideSelection != 2 &&  choice == false) {
				streak++;
				return true;
			}
			else if (currentSelection == "STARBOARD" && shipSideSelection == 3 &&  choice == true) {
				streak++;
				return true;
			}
			else if (currentSelection == "STARBOARD" && shipSideSelection != 3 && choice == false) {
				streak++;
				return true;
			}
			else if (currentSelection == "PORT"  && shipSideSelection == 4 &&  choice == true) {
				streak++;
				return true;
			}
			else if (currentSelection == "PORT"  && shipSideSelection != 4 &&  choice == false) {
				streak++;
				return true;
			}
		}
		else if (selectionOrientation == 3) {
			if (currentSelection == "STERN" && shipSideSelection == 3 && choice == true) {
				streak++;
				return true;
			}
			else if (currentSelection == "STERN" && shipSideSelection != 3 && choice == false) {
				streak++;
				return true;
			}
			else if (currentSelection == "BOW" && shipSideSelection == 4 && choice == true) {
				streak++;
				return true;
			}
			else if (currentSelection == "BOW" && shipSideSelection != 4 &&  choice == false) {
				streak++;
				return true;
			}
			else if (currentSelection == "STARBOARD" && shipSideSelection == 2 &&  choice == true) {
				streak++;
				return true;
			}
			else if (currentSelection == "STARBOARD" && shipSideSelection != 2 && choice == false) {
				streak++;
				return true;
			}
			else if (currentSelection == "PORT"  && shipSideSelection == 1 &&  choice == true) {
				streak++;
				return true;
			}
			else if (currentSelection == "PORT"  && shipSideSelection != 1 &&  choice == false) {
				streak++;
				return true;
			}
		}
		else if (selectionOrientation == 4) {
			if (currentSelection == "STERN" && shipSideSelection == 4 && choice == true) {
				streak++;
				return true;
			}
			else if (currentSelection == "STERN" && shipSideSelection != 4 && choice == false) {
				streak++;
				return true;
			}
			else if (currentSelection == "BOW" && shipSideSelection == 3 && choice == true) {
				streak++;
				return true;
			}
			else if (currentSelection == "BOW" && shipSideSelection != 3 &&  choice == false) {
				streak++;
				return true;
			}
			else if (currentSelection == "STARBOARD" && shipSideSelection == 1 &&  choice == true) {
				streak++;
				return true;
			}
			else if (currentSelection == "STARBOARD" && shipSideSelection != 1 && choice == false) {
				streak++;
				return true;
			}
			else if (currentSelection == "PORT"  && shipSideSelection == 2 &&  choice == true) {
				streak++;
				return true;
			}
			else if (currentSelection == "PORT"  && shipSideSelection != 2 &&  choice == false) {
				streak++;
				return true;
			}
		}
	}
	else if (screen == 8) {
		if (currentAnswer == currentSelection && choice == true) {
			streak++;
			return true;
		}
		else if (currentAnswer != currentSelection && choice == false) {
			streak++;
			return true;
		}		
	}
	else if (screen == 10) {
		if (currentAnswer == currentSelection && choice == true) {
			streak++;
			return true;
		}
		else if (currentAnswer != currentSelection && choice == false) {
			streak++;
			return true;
		}
		else {
			return false;
		}
	}
	else {
		return false;
	}
}

function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}

function startTheCountdown() {
	timerEnd = new Date().getTime();
	timerEnd += 1000 * numberOfSeconds;
}

function checkCountdown() {
	if (gameOver == false) {
		timeLeft = Math.floor( ( ( timerEnd - ( new Date().getTime() ) ) % (1000 * 60) ) / 1000 );
	}
	if (timeLeft > 0) {
		return timeLeft;
	}
	else {
		gameOver = true;
		checkStreak();
		window.setTimeout(triggerRetryOverlay,2000);
		return 0;
	}
}

function triggerRetryOverlay() {
	retryOverlay = true;
}

function checkStreak() {
	if (screen == 4) {
		if (numberOfSeconds == 10) {
			if (bestStreakColours[0] == null) {
				beatStreak = true;
				bestStreakColours[0] = streak;
				saveGame("colours");
			}
			else if (bestStreakColours[0] < streak) {
				beatStreak = true;
				bestStreakColours[0] = streak;
				saveGame("colours");
			}
		}
		else if (numberOfSeconds == 30) {
			if (bestStreakColours[1] == null) {
				beatStreak = true;
				bestStreakColours[1] = streak;
				saveGame("colours");
			}
			else if (bestStreakColours[1] < streak) {
				beatStreak = true;
				bestStreakColours[1] = streak;
				saveGame("colours");
			}
		}
		else if (numberOfSeconds == 60) {
			if (bestStreakColours[2] == null) {
				beatStreak = true;
				bestStreakColours[2] = streak;
				saveGame("colours");
			}
			else if (bestStreakColours[2] < streak) {
				beatStreak = true;
				bestStreakColours[2] = streak;
				saveGame("colours");
			}
		}
	}
	else if (screen == 6) {
		if (numberOfSeconds == 10) {
			if (bestStreakShip[0] == null) {
				beatStreak = true;
				bestStreakShip[0] = streak;
				saveGame("ship");
			}
			else if (bestStreakShip[0] < streak) {
				beatStreak = true;
				bestStreakShip[0] = streak;
				saveGame("ship");
			}
		}
		else if (numberOfSeconds == 30) {
			if (bestStreakShip[1] == null) {
				beatStreak = true;
				bestStreakShip[1] = streak;
				saveGame("ship");
			}
			else if (bestStreakShip[1] < streak) {
				beatStreak = true;
				bestStreakShip[1] = streak;
				saveGame("ship");
			}
		}
		else if (numberOfSeconds == 60) {
			if (bestStreakShip[2] == null) {
				beatStreak = true;
				bestStreakShip[2] = streak;
				saveGame("ship");
			}
			else if (bestStreakShip[2] < streak) {
				beatStreak = true;
				bestStreakShip[2] = streak;
				saveGame("ship");
			}
		}
	}
	else if (screen == 8) {
		if (numberOfSeconds == 10) {
			if (bestStreakPitch[0] == null) {
				beatStreak = true;
				bestStreakPitch[0] = streak;
				saveGame("pitch");
			}
			else if (bestStreakPitch[0] < streak) {
				beatStreak = true;
				bestStreakPitch[0] = streak;
				saveGame("pitch");
			}
		}
		else if (numberOfSeconds == 30) {
			if (bestStreakPitch[1] == null) {
				beatStreak = true;
				bestStreakPitch[1] = streak;
				saveGame("pitch");
			}
			else if (bestStreakPitch[1] < streak) {
				beatStreak = true;
				bestStreakPitch[1] = streak;
				saveGame("pitch");
			}
		}
		else if (numberOfSeconds == 60) {
			if (bestStreakPitch[2] == null) {
				beatStreak = true;
				bestStreakPitch[2] = streak;
				saveGame("pitch");
			}
			else if (bestStreakPitch[2] < streak) {
				beatStreak = true;
				bestStreakPitch[2] = streak;
				saveGame("pitch");
			}
		}
	}
	else if (screen == 10) {
		if (numberOfSeconds == 10) {
			if (bestStreakFractions[0] == null) {
				beatStreak = true;
				bestStreakFractions[0] = streak;
				saveGame("fractions");
			}
			else if (bestStreakFractions[0] < streak) {
				beatStreak = true;
				bestStreakFractions[0] = streak;
				saveGame("fractions");
			}
		}
		else if (numberOfSeconds == 30) {
			if (bestStreakFractions[1] == null) {
				beatStreak = true;
				bestStreakFractions[1] = streak;
				saveGame("fractions");
			}
			else if (bestStreakFractions[1] < streak) {
				beatStreak = true;
				bestStreakFractions[1] = streak;
				saveGame("fractions");
			}
		}
		else if (numberOfSeconds == 60) {
			if (bestStreakFractions[2] == null) {
				beatStreak = true;
				bestStreakFractions[2] = streak;
				saveGame("fractions");
			}
			else if (bestStreakFractions[2] < streak) {
				beatStreak = true;
				bestStreakFractions[2] = streak;
				saveGame("fractions");
			}
		}
	}
	
}

var load = function (key) {
	return window.localStorage ? window.localStorage[key] : null;
}

var save = function (key, value) {
	if (window.localStorage) {
		window.localStorage[key] = value;
	}
}

function saveGame(val) {

	if (val == "colours") {
		var v1 = bestStreakColours[0];
		var v2 = bestStreakColours[1];
		var v3 = bestStreakColours[2];
		var dataToBeSaved = "";
		if (v1 == null) {
			dataToBeSaved += ":";
		}
		else {
			dataToBeSaved += v1+":";
		}
		if (v2 == null) {
			dataToBeSaved += ":";
		}
		else {
			dataToBeSaved += v2+":";
		}
		if (v3 == null) {
			dataToBeSaved += ":";
		}
		else {
			dataToBeSaved += v3+":";
		}
		save("colours", dataToBeSaved);
	}
	else if (val == "ship") {
		var v1 = bestStreakShip[0];
		var v2 = bestStreakShip[1];
		var v3 = bestStreakShip[2];
		var dataToBeSaved = "";
		if (v1 == null) {
			dataToBeSaved += ":";
		}
		else {
			dataToBeSaved += v1+":";
		}
		if (v2 == null) {
			dataToBeSaved += ":";
		}
		else {
			dataToBeSaved += v2+":";
		}
		if (v3 == null) {
			dataToBeSaved += ":";
		}
		else {
			dataToBeSaved += v3+":";
		}
		save("ship", dataToBeSaved);
	}
	else if (val == "pitch") {
		var v1 = bestStreakPitch[0];
		var v2 = bestStreakPitch[1];
		var v3 = bestStreakPitch[2];
		var dataToBeSaved = "";
		if (v1 == null) {
			dataToBeSaved += ":";
		}
		else {
			dataToBeSaved += v1+":";
		}
		if (v2 == null) {
			dataToBeSaved += ":";
		}
		else {
			dataToBeSaved += v2+":";
		}
		if (v3 == null) {
			dataToBeSaved += ":";
		}
		else {
			dataToBeSaved += v3+":";
		}
		save("pitch", dataToBeSaved);
	}
	else if (val == "fractions") {
		var v1 = bestStreakFractions[0];
		var v2 = bestStreakFractions[1];
		var v3 = bestStreakFractions[2];
		var dataToBeSaved = "";
		if (v1 == null) {
			dataToBeSaved += ":";
		}
		else {
			dataToBeSaved += v1+":";
		}
		if (v2 == null) {
			dataToBeSaved += ":";
		}
		else {
			dataToBeSaved += v2+":";
		}
		if (v3 == null) {
			dataToBeSaved += ":";
		}
		else {
			dataToBeSaved += v3+":";
		}
		save("fractions", dataToBeSaved);
	}

}

function loadGame(val) {
	if (val == "colours") {
		var dataLoaded = load("colours");
		if (dataLoaded != null) {
			bestStreakColours[0] = dataLoaded.split(":")[0];
			bestStreakColours[1] = dataLoaded.split(":")[1];
			bestStreakColours[2] = dataLoaded.split(":")[2];
		}
		else {
			bestStreakColours[0] = "";
			bestStreakColours[1] = "";
			bestStreakColours[2] = "";
		}
	}
	else if (val == "ship") {
		var dataLoaded = load("ship");
		if (dataLoaded != null) {
			bestStreakShip[0] = dataLoaded.split(":")[0];
			bestStreakShip[1] = dataLoaded.split(":")[1];
			bestStreakShip[2] = dataLoaded.split(":")[2];
		}
		else {
			bestStreakShip[0] = "";
			bestStreakShip[1] = "";
			bestStreakShip[2] = "";
		}
	}
	else if (val == "pitch") {
		var dataLoaded = load("pitch");
		if (dataLoaded != null) {
			bestStreakPitch[0] = dataLoaded.split(":")[0];
			bestStreakPitch[1] = dataLoaded.split(":")[1];
			bestStreakPitch[2] = dataLoaded.split(":")[2];
		}
		else {
			bestStreakPitch[0] = "";
			bestStreakPitch[1] = "";
			bestStreakPitch[2] = "";
		}
	}
	else if (val == "fractions") {
		var dataLoaded = load("fractions");
		if (dataLoaded != null) {
			bestStreakFractions[0] = dataLoaded.split(":")[0];
			bestStreakFractions[1] = dataLoaded.split(":")[1];
			bestStreakFractions[2] = dataLoaded.split(":")[2];
		}
		else {
			bestStreakFractions[0] = "";
			bestStreakFractions[1] = "";
			bestStreakFractions[2] = "";
		}
	}

}

function loadSounds() {

	/*
	//for legacy browsers
	AudioContext = window.AudioContext || window.webkitAudioContext;
	audioContext = new AudioContext();
		
	// get the audio element
	//const audioElement = document.querySelector('audio');
	audioElementBreak = document.getElementById("breakSound");
	audioElementPianoA = document.getElementById("pianoASound");
	audioElementPianoC = document.getElementById("pianoCSound");
	audioElementPianoE = document.getElementById("pianoESound");

	// pass it into the audio context
	if (trackBreak == null) {
		trackBreak = audioContext.createMediaElementSource(audioElementBreak);
		trackBreak.connect(audioContext.destination);
	}
	if (trackPianoA == null) {
		trackPianoA = audioContext.createMediaElementSource(audioElementPianoA);
		trackPianoA.connect(audioContext.destination);
	}
	if (trackPianoC == null) {
		trackPianoC = audioContext.createMediaElementSource(audioElementPianoC);
		trackPianoC.connect(audioContext.destination);
	}
	if (trackPianoE == null) {
		trackPianoE = audioContext.createMediaElementSource(audioElementPianoE);
		trackPianoE.connect(audioContext.destination);
	}
	*/

	noteASound = new Howl({	src: ['sounds/piano-a.mp3'] });
	noteBSound = new Howl({	src: ['sounds/piano-c.mp3'] });
	noteCSound = new Howl({	src: ['sounds/piano-e.mp3'] });
	breakSound = new Howl({	src: ['sounds/break.mp3'] });
	
}

function keyboardChoice(k) {

	if (gameActive == true && gameLost == false && gameOver == false) {
	
		if (k == "ArrowLeft" || k.toUpperCase() == "A") {
			choice = true;
		}
		else if (k == "ArrowRight" || k.toUpperCase() == "D") {
			choice = false;
		}
				
		if (screen == 4) {
			nextColour();
		}
		else if (screen == 6) {
			nextShip();
		}
		else if (screen == 8) {
			nextPitch();
		}
		else if (screen == 10) {
			nextFractions();
		}
	}

}
