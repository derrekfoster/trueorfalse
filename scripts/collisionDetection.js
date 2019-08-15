function cdCheck(x,y) {
	if (screen == 1) {
		initialScreenCD(x,y);
	}
	else if (screen == 2) {
		mainMenuScreenCD(x,y);
	}
	else if (screen == 3) {
		coloursOptionsScreenCD(x,y);
	}
	else if (screen == 4) {
		coloursScreenCD(x,y);
	}
	else if (screen == 5) {
		shipOptionsScreenCD(x,y);
	}
	else if (screen == 6) {
		shipScreenCD(x,y);
	}
	else if (screen == 7) {
		pitchOptionsScreenCD(x,y);
	}
	else if (screen == 8) {
		pitchScreenCD(x,y);
	}
	else if (screen == 9) {
		fractionsOptionsScreenCD(x,y);
	}
	else if (screen == 10) {
		fractionsScreenCD(x,y);
	}
	else if (screen == -1) {
		soundTestCD(x,y);
	}
}

function initialScreenCD(x,y) {
	if (x >= width/8*6 && y <= height/10) {
		toggleFullScreen();
	}
	else if (x >= width/8 && x <= width/8*7 && y >= height/10*8.25 && y <= height/10*9) {
		window.open('https://www.twitter.com/derrekfoster/','_blank');
	}
	else {
		screen = 2;
		drawMainMenuScreen();
	}
}

function mainMenuScreenCD(x,y) {
	if (x >= width/8*6 && y <= height/10) {
		toggleFullScreen();
	}
	else if (x <= width/8*6 && y <= height/10) {
		screen = 1;
		drawInitialScreen();
	}
	else if (x <= width/2 && y >= height/10 && y <+ height/10*3) {
		screen = 3;
		loadGame("colours");
		drawColoursOptionsScreen();
	}
	else if (x >= width/2 && y >= height/10 && y <= height/10*3) {
		screen = 5;
		loadGame("ship");
		drawShipOptionsScreen();
	}
	else if (x <= width/2 && y >= height/10*3 && y <= height/10*6) {
		screen = 7;
		loadGame("pitch");
		drawPitchOptionsScreen();
	}
	else if (x >= width/2 && y >= height/10*3 && y <= height/10*6) {
		screen = 9;
		loadGame("fractions");
		drawFractionsOptionsScreen();
	}
	/*
	else if (y >= height/18*6) {
		screen = -1;
		drawSoundTest();
	}
	*/
}

function coloursOptionsScreenCD(x,y) {
	if (x >= width/8*6 && y <= height/10) {
		toggleFullScreen();
	}
	else if (x <= width/8*6 && y <= height/10) {
		screen = 1;
		drawInitialScreen();
	}
	else if (x <= width/8*4 && y >= height/10 && y <= height/10*2) {
		screen = 2;
		drawMainMenuScreen();
	}
	else if(x >= width/16 && x <= width/16+width/8*4.5 && y >= height/10*6 && y <= height/10*7) {
		if (numberOfSeconds == 10) {
			numberOfSeconds = 30;
		}
		else if (numberOfSeconds == 30) {
			numberOfSeconds = 60;
		}
		else if (numberOfSeconds == 60) {
			numberOfSeconds = 10;
		}
	}
	else if (x >= width/2-width/8*1.5 && x <= width/2-width/8*1.5+width/8*3 && y >= height/10*8 && y <= height/10*8+height/10) {
		screen = 4;
		initializeColoursGame();
		countdown = 5;
		retryOverlay = false;
		window.setTimeout(triggerCountdown,1000);
		drawColoursScreen();
	}
	
}

function shipOptionsScreenCD(x,y) {
	if (x >= width/8*6 && y <= height/10) {
		toggleFullScreen();
	}
	else if (x <= width/8*6 && y <= height/10) {
		screen = 1;
		drawInitialScreen();
	}
	else if (x <= width/8*5.25 && y >= height/10 && y <= height/10*2) {
		screen = 2;
		drawMainMenuScreen();
	}
	else if(x >= width/16 && x <= width/16+width/8*4.5 && y >= height/10*6 && y <= height/10*7) {
		if (numberOfSeconds == 10) {
			numberOfSeconds = 30;
		}
		else if (numberOfSeconds == 30) {
			numberOfSeconds = 60;
		}
		else if (numberOfSeconds == 60) {
			numberOfSeconds = 10;
		}
	}
	else if (x >= width/2-width/8*1.5 && x <= width/2-width/8*1.5+width/8*3 && y >= height/10*8 && y <= height/10*8+height/10) {
		screen = 6;
		initializeShipGame();
		countdown = 5;
		retryOverlay = false;
		window.setTimeout(triggerCountdown,1000);
		drawShipScreen();
	}
	
}

function pitchOptionsScreenCD(x,y) {
	if (x >= width/8*6 && y <= height/10) {
		toggleFullScreen();
	}
	else if (x <= width/8*6 && y <= height/10) {
		screen = 1;
		drawInitialScreen();
	}
	else if (x <= width/8*4 && y >= height/10 && y <= height/10*2) {
		screen = 2;
		drawMainMenuScreen();
	}
	else if(x >= width/16 && x <= width/16+width/8*4.5 && y >= height/10*6 && y <= height/10*7) {
		if (numberOfSeconds == 10) {
			numberOfSeconds = 30;
		}
		else if (numberOfSeconds == 30) {
			numberOfSeconds = 60;
		}
		else if (numberOfSeconds == 60) {
			numberOfSeconds = 10;
		}
	}
	else if (x >= width/2-width/8*1.5 && x <= width/2-width/8*1.5+width/8*3 && y >= height/10*8 && y <= height/10*8+height/10) {
		screen = 8;
		initializePitchGame();
		countdown = 5;
		retryOverlay = false;
		window.setTimeout(triggerCountdown,1000);
		drawPitchScreen();
	}
	
}

function fractionsOptionsScreenCD(x,y) {
	if (x >= width/8*6 && y <= height/10) {
		toggleFullScreen();
	}
	else if (x <= width/8*6 && y <= height/10) {
		screen = 1;
		drawInitialScreen();
	}
	else if (x <= width/8*4 && y >= height/10 && y <= height/10*2) {
		screen = 2;
		drawMainMenuScreen();
	}
	else if(x >= width/16 && x <= width/16+width/8*4.5 && y >= height/10*6 && y <= height/10*7) {
		if (numberOfSeconds == 10) {
			numberOfSeconds = 30;
		}
		else if (numberOfSeconds == 30) {
			numberOfSeconds = 60;
		}
		else if (numberOfSeconds == 60) {
			numberOfSeconds = 10;
		}
	}
	else if (x >= width/2-width/8*1.5 && x <= width/2-width/8*1.5+width/8*3 && y >= height/10*8 && y <= height/10*8+height/10) {
		screen = 10;
		initializeFractionsGame();
		countdown = 5;
		retryOverlay = false;
		window.setTimeout(triggerCountdown,1000);
		drawFractionsScreen();
	}
	
}


function coloursScreenCD(x,y) {
	if (x >= width/8*6 && y <= height/10) {
		toggleFullScreen();
	}
	else if (y >= height/10*8) {
		if (gameActive == true && gameLost == false && gameOver == false) {
			if (x < width/2) {
				choice = true;
			}
			else {
				choice = false;
			}
			nextColour();
		}
	}
	else if (retryOverlay == true) {
		if (x >= width/8*2 && x <= width/8*6 && y >= height/10*3.5 && y <= height/10*4.5) {
			screen = 4;
			initializeColoursGame();
			countdown = 5;
			retryOverlay = false;
			window.setTimeout(triggerCountdown,1000);
			drawColoursScreen();
		}
		else if (x >= width/8*2 && x <= width/8*6 && y >= height/10*5 && y <= height/10*6) {
			screen = 3;
			loadGame("colours");
			drawColoursOptionsScreen();
		}
		else if (x >= width/8*2 && x <= width/8*6 && y >= height/10*6.5 && y <= height/10*7.5) {
			screen = 2;
			drawMainMenuScreen();
		}	
	}
}

function shipScreenCD(x,y) {
	if (x >= width/8*6 && y <= height/10) {
		toggleFullScreen();
	}
	else if (y >= height/10*8) {
		if (gameActive == true && gameLost == false && gameOver == false) {
			if (x < width/2) {
				choice = true;
			}
			else {
				choice = false;
			}
			nextShip();
		}
	}
	else if (retryOverlay == true) {
		if (x >= width/8*2 && x <= width/8*6 && y >= height/10*3.5 && y <= height/10*4.5) {
			screen = 6;
			initializeShipGame();
			countdown = 5;
			retryOverlay = false;
			window.setTimeout(triggerCountdown,1000);
			drawShipScreen();
		}
		else if (x >= width/8*2 && x <= width/8*6 && y >= height/10*5 && y <= height/10*6) {
			screen = 5;
			loadGame("ship");
			drawShipOptionsScreen();
		}
		else if (x >= width/8*2 && x <= width/8*6 && y >= height/10*6.5 && y <= height/10*7.5) {
			screen = 2;
			drawMainMenuScreen();
		}	
	}
}

function pitchScreenCD(x,y) {
	if (x >= width/8*6 && y <= height/10) {
		toggleFullScreen();
	}
	else if (y >= height/10 && y <= height/10*8 && retryOverlay == false) {
		playNotes();
	}
	else if (y >= height/10*8) {
		if (gameActive == true && gameLost == false && gameOver == false) {
			if (x < width/2) {
				choice = true;
			}
			else {
				choice = false;
			}
			nextPitch();
		}
	}
	else if (retryOverlay == true) {
		if (x >= width/8*2 && x <= width/8*6 && y >= height/10*3.5 && y <= height/10*4.5) {
			screen = 8;
			initializePitchGame();
			countdown = 5;
			retryOverlay = false;
			window.setTimeout(triggerCountdown,1000);
			drawPitchScreen();
		}
		else if (x >= width/8*2 && x <= width/8*6 && y >= height/10*5 && y <= height/10*6) {
			screen = 7;
			loadGame("pitch");
			drawPitchOptionsScreen();
		}
		else if (x >= width/8*2 && x <= width/8*6 && y >= height/10*6.5 && y <= height/10*7.5) {
			screen = 2;
			drawMainMenuScreen();
		}	
	}
}

function soundTestCD(x,y) {
	if (x >= width/8*6 && y <= height/10) {
		toggleFullScreen();
	}
	else if (x <= width/8*6 && y <= height/10) {
		screen = 1;
		drawInitialScreen();
	}
	else if (x <= width/2 && y >= height/10 && y <= height/10*2) {
		noteASound = new Audio("sounds/piano-a.mp3");
		noteCSound = new Audio("sounds/piano-c.mp3");
		noteESound = new Audio("sounds/piano-e.mp3");
		breakSound = new Audio("sounds/break.mp3");	
		noteASound.volume = 1;
	}
	else if (x <= width/2 && y >= height/10*2 && y <= height/10*3) {
		noteASound.currentTime = 0;
		noteASound.play();
	}
	else if (x >= width/2 && y >= height/10*2 && y <= height/10*3) {
		noteCSound.currentTime = 0;
		noteCSound.play();
	}
	else if (x <= width/2 && y >= height/10*3 && y <= height/10*4) {
		noteESound.currentTime = 0;
		noteESound.play();
	}
	else if (x >= width/2 && y >= height/10*3 && y <= height/10*4) {
		breakSound.currentTime = 0;
		breakSound.play();
	}

	else if (x <= width/2 && y >= height/10*4 && y <= height/10*5) {
		noteASound = new Howl({	src: ['sounds/piano-a.mp3'] });
		noteBSound = new Howl({	src: ['sounds/piano-c.mp3'] });
		noteCSound = new Howl({	src: ['sounds/piano-e.mp3'] });
		breakSound = new Howl({	src: ['sounds/break.mp3'] });
		/*
		noteASound = new Audio("sounds/all-in-one.mp3");
		noteASound.loop = true;
		noteASound.volume = 0;
		*/
	}
	else if (x <= width/2 && y >= height/10*5 && y <= height/10*6) {
		noteASound.play();
		/*
		noteASound.currentTime = 1.5;
		noteASound.volume = 1;
		noteASound.play();
		window.setTimeout( function() {noteASound.volume = 0;}, 1000);
		*/
	}
	else if (x >= width/2 && y >= height/10*5 && y <= height/10*6) {
		noteBSound.play();
		/*
		noteASound.currentTime = 2.5;
		noteASound.volume = 1;
		noteASound.play();
		window.setTimeout( function() {noteASound.volume = 0;}, 1000);
		*/
	}
	else if (x <= width/2 && y >= height/10*6 && y <= height/10*7) {
		noteCSound.play();
		/*
		noteASound.currentTime = 3.6;
		noteASound.volume = 1;
		noteASound.play();
		window.setTimeout( function() {noteASound.volume = 0;}, 1000);
		*/
	}
	else if (x >= width/2 && y >= height/10*6 && y <= height/10*7) {
		breakSound.play();
		/*
		noteASound.currentTime = 0;
		noteASound.volume = 1;
		noteASound.play();
		window.setTimeout( function() {noteASound.volume = 0;}, 1500);
		*/
	}

	else if (x <= width/2 && y >= height/10*7 && y <= height/10*8) {
		
		loadSounds();
		
	}
	else if (x <= width/2 && y >= height/10*8 && y <= height/10*9) {
		audioElementPianoA.currentTime = 0;
		audioElementPianoA.play();
	}
	else if (x >= width/2 && y >= height/10*8 && y <= height/10*9) {
		audioElementPianoC.currentTime = 0;
		audioElementPianoC.play();
	}
	else if (x <= width/2 && y >= height/10*9) {
		audioElementPianoE.currentTime = 0;
		audioElementPianoE.play();
	}
	else if (x >= width/2 && y >= height/10*9) {
		audioElementBreak.currentTime = 0;
		audioElementBreak.play();
	}
	
}

function fractionsScreenCD(x,y) {
	if (x >= width/8*6 && y <= height/10) {
		toggleFullScreen();
	}
	else if (y >= height/10*8) {
		if (gameActive == true && gameLost == false && gameOver == false) {
			if (x < width/2) {
				choice = true;
			}
			else {
				choice = false;
			}
			nextFractions();
		}
	}
	else if (retryOverlay == true) {
		if (x >= width/8*2 && x <= width/8*6 && y >= height/10*3.5 && y <= height/10*4.5) {
			screen = 10;
			initializeFractionsGame();
			countdown = 5;
			retryOverlay = false;
			window.setTimeout(triggerCountdown,1000);
			drawFractionsScreen();
		}
		else if (x >= width/8*2 && x <= width/8*6 && y >= height/10*5 && y <= height/10*6) {
			screen = 9;
			loadGame("fractions");
			drawFractionsOptionsScreen();
		}
		else if (x >= width/8*2 && x <= width/8*6 && y >= height/10*6.5 && y <= height/10*7.5) {
			screen = 2;
			drawMainMenuScreen();
		}	
	}
}
