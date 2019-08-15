function drawInitialScreen() {

	ctx.clearRect(0, 0, width, height);
	
	constantMenu();
	
	ctx.fillStyle = "white";
	ctx.strokeStyle = "white";
	ctx.font = width/6+"px ImpactRegular";
	ctx.fillText("TRUE", width/25, height/10*2.5);
	ctx.fillText("or", width/2.5, height/10*2.5);
	ctx.strokeText("FALSE", width/8*4.5, height/10*2.5);
	
	image = new Image();
	image.src = 'twitterLogo.png';
	
	ctx.drawImage(image, width/8, height/10*8.4 ,width/8, width/8);
	ctx.font = width/8+"px ImpactRegular";
	ctx.fillText("derrekfoster", width/8*2, height/10*9);
	ctx.font = width/20+"px ImpactRegular";
	ctx.fillText("v0.5 2019", width/8*6, height/10*9.75);
	window.requestAnimationFrame(drawInitialScreen);
	
}

function constantMenu() {
	ctx.beginPath();
	ctx.lineWidth = height/128;
	ctx.strokeStyle = "white";
	ctx.rect( ctx.lineWidth/2, ctx.lineWidth/2, width-ctx.lineWidth, height-ctx.lineWidth); 
	ctx.stroke();
	
	ctx.beginPath();
	ctx.lineWidth = height/128;
	ctx.strokeStyle = "white";
	ctx.rect(width/8*6-ctx.lineWidth/2, ctx.lineWidth/2, width/8*2, height/10);
	ctx.stroke();

	ctx.beginPath();
	ctx.strokeStyle = "white";
	ctx.rect(width/8*6.25, height/10/2/2, width/8*1.4, height/10/1.75);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.fillStyle = "black";
	ctx.fillRect(width/8*6.1, height/10/2/1.1, width/8*1.7, height/10/5);
	ctx.stroke();

	ctx.beginPath();
	ctx.fillStyle = "black";
	ctx.fillRect(width/8*6.5, height/10/2/2.5, width/9, height/15);
	ctx.stroke();
	
	if (screen != 1) {
		ctx.fillStyle = "white";
		ctx.strokeStyle = "white";
		ctx.font = width/10+"px ImpactRegular";
		ctx.fillText("TRUE", width/25, height/10/1.3);
		ctx.fillText("or", width/8*2, height/10/1.3);
		ctx.fillText("FALSE", width/8*2.8, height/10/1.3);
	}
	
	
}

function drawMainMenuScreen() {
	ctx.clearRect(0,0, width, height);
	
	constantMenu();

	ctx.strokeStyle = "white";
	ctx.beginPath();
	ctx.rect( ctx.lineWidth/2, ctx.lineWidth/2, width/8*5.9, height/10 );		
	ctx.stroke();

	
	ctx.beginPath();
	ctx.rect( ctx.lineWidth/2, height/10+ctx.lineWidth, width/2-ctx.lineWidth, height/10*2 );
	ctx.stroke();
	
	ctx.font = "bold "+width/10+"px ImpactRegular";
	ctx.fillStyle = "white";
	ctx.fillText("C", width/10/2+(width/18*0), height/10*2.25);
	ctx.fillStyle = "yellow";
	ctx.fillText("O", width/10/2+(width/18*1), height/10*2.25);
	ctx.fillStyle = "pink";
	ctx.fillText("L", width/10/2+(width/18*2), height/10*2.25);
	ctx.fillStyle = "green";
	ctx.fillText("O", width/10/2+(width/18*3), height/10*2.25);
	ctx.fillStyle = "blue";
	ctx.fillText("U", width/10/2+(width/18*4), height/10*2.25);
	ctx.fillStyle = "red";
	ctx.fillText("R", width/10/2+(width/18*5), height/10*2.25);
	ctx.fillStyle = "purple";
	ctx.fillText("S", width/10/2+(width/18*6), height/10*2.25);

	ctx.beginPath();
	ctx.rect( width/2+ctx.lineWidth/2, height/10+ctx.lineWidth, width/2-ctx.lineWidth, height/10*2 );
	ctx.stroke();
	
	ctx.font = width/12+"px ImpactRegular";
	ctx.fillStyle = "white";
	ctx.fillText("        SHIP", width/2+(width/25), height/10*2);
	ctx.fillText(" DIRECTIONS", width/2+(width/25), height/10*2.5);

	ctx.beginPath();
	ctx.rect( ctx.lineWidth/2, height/10+ctx.lineWidth+height/10*2, width/2-ctx.lineWidth, height/10*2 );
	ctx.fillText("  AUDIO", width/10, height/10*4);
	ctx.fillText("PITCHES", width/10, height/10*4.5); 
	ctx.stroke();

	ctx.beginPath();
	ctx.rect( width/2+ctx.lineWidth/2, height/10+ctx.lineWidth+height/10*2, width/2-ctx.lineWidth, height/10*2 );
	ctx.stroke();
	
	ctx.font = width/12+"px ImpactRegular";
	ctx.fillStyle = "white";
	ctx.fillText("  FRACTIONS", width/2+(width/25), height/10*4.25);
	
	window.requestAnimationFrame(drawMainMenuScreen);
}

function drawColoursOptionsScreen() {
	ctx.clearRect(0,0, width, height);
	constantMenu();

	ctx.beginPath();
	ctx.rect( ctx.lineWidth/2, ctx.lineWidth/2, width/8*5.9, height/10 );
	ctx.stroke();
	
	ctx.beginPath();
	ctx.rect( ctx.lineWidth/2, height/10+ctx.lineWidth, width/2, height/10 );
	ctx.stroke();
	
	
	ctx.font = "bold "+width/10+"px ImpactRegular";
	ctx.fillStyle = "white";
	ctx.fillText("C", width/10/2+(width/18*0), height/10*1.8);
	ctx.fillStyle = "yellow";
	ctx.fillText("O", width/10/2+(width/18*1), height/10*1.8);
	ctx.fillStyle = "pink";
	ctx.fillText("L", width/10/2+(width/18*2), height/10*1.8);
	ctx.fillStyle = "green";
	ctx.fillText("O", width/10/2+(width/18*3), height/10*1.8);
	ctx.fillStyle = "blue";
	ctx.fillText("U", width/10/2+(width/18*4), height/10*1.8);
	ctx.fillStyle = "red";
	ctx.fillText("R", width/10/2+(width/18*5), height/10*1.8);
	ctx.fillStyle = "purple";
	ctx.fillText("S", width/10/2+(width/18*6), height/10*1.8);
	
	
	ctx.fillStyle = "white";
	ctx.font = width/14+"px ImpactRegular";
	ctx.fillText("Colour of word matches word", width/15, height/10*2.75);
	
	ctx.beginPath();
	ctx.rect( width/16, height/10*6, width/8*4.5, height/10 );
	ctx.stroke();
	
	ctx.font = width/10+"px ImpactRegular";
	ctx.fillStyle = "white";
	ctx.fillText(numberOfSeconds+" Seconds", width/8.9, height/10*6.75);
	
	if (numberOfSeconds == 10) {
		if (bestStreakColours[0] != "") {
			ctx.fillStyle = "limegreen";
			ctx.fillText("BEST", width/8*6, height/10*6.5);
			ctx.fillText(" "+bestStreakColours[0]+"x", width/8*6, height/10*7);
		}
	}
	else if (numberOfSeconds == 30) {
		if (bestStreakColours[1] != "") {
			ctx.fillStyle = "limegreen";
			ctx.fillText("BEST", width/8*6, height/10*6.5);
			ctx.fillText(" "+bestStreakColours[1]+"x", width/8*6, height/10*7);
		}
	}
	else if (numberOfSeconds == 60) {
		if (bestStreakColours[2] != "") {
			ctx.fillStyle = "limegreen";
			ctx.fillText("BEST", width/8*6, height/10*6.5);
			ctx.fillText(" "+bestStreakColours[2]+"x", width/8*6, height/10*7);
		}
	}
	
	ctx.beginPath();
	ctx.rect( width/2-width/8*1.5, height/10*8, width/8*3, height/10 );
	ctx.stroke();
	
	ctx.font = width/10+"px ImpactRegular";
	ctx.fillStyle = "white";
	ctx.fillText("READY!", width/2-width/8*1.25, height/10*8.75);
	
	
	window.requestAnimationFrame(drawColoursOptionsScreen);
	
}

function drawShipOptionsScreen() {

	ctx.clearRect(0,0, width, height);
	constantMenu();

	ctx.beginPath();
	ctx.rect( ctx.lineWidth/2, ctx.lineWidth/2, width/8*5.9, height/10 );
	ctx.stroke();
	
	ctx.beginPath();
	ctx.rect( ctx.lineWidth/2, height/10+ctx.lineWidth, width/5*3.25, height/10 );
	ctx.stroke();
	
	
	ctx.font = width/12+"px ImpactRegular";
	ctx.fillStyle = "white";
	ctx.fillText("SHIP DIRECTIONS", width/10/2+(width/18*0), height/10*1.8);
	
	
	ctx.fillStyle = "white";
	ctx.font = width/14+"px ImpactRegular";
	ctx.fillText("Label matches with ship", width/15, height/10*2.75);
	ctx.fillText("direction", width/15, height/10*3.25);
	
	ctx.beginPath();
	ctx.rect( width/16, height/10*6, width/8*4.5, height/10 );
	ctx.stroke();
	
	ctx.font = width/10+"px ImpactRegular";
	ctx.fillStyle = "white";
	ctx.fillText(numberOfSeconds+" Seconds", width/8.9, height/10*6.75);
	
	if (numberOfSeconds == 10) {
		if (bestStreakShip[0] != "") {
			ctx.fillStyle = "limegreen";
			ctx.fillText("BEST", width/8*6, height/10*6.5);
			ctx.fillText(" "+bestStreakShip[0]+"x", width/8*6, height/10*7);
		}
	}
	else if (numberOfSeconds == 30) {
		if (bestStreakShip[1] != "") {
			ctx.fillStyle = "limegreen";
			ctx.fillText("BEST", width/8*6, height/10*6.5);
			ctx.fillText(" "+bestStreakShip[1]+"x", width/8*6, height/10*7);
		}
	}
	else if (numberOfSeconds == 60) {
		if (bestStreakShip[2] != "") {
			ctx.fillStyle = "limegreen";
			ctx.fillText("BEST", width/8*6, height/10*6.5);
			ctx.fillText(" "+bestStreakShip[2]+"x", width/8*6, height/10*7);
		}
	}
	
	ctx.beginPath();
	ctx.rect( width/2-width/8*1.5, height/10*8, width/8*3, height/10 );
	ctx.stroke();
	
	ctx.font = width/10+"px ImpactRegular";
	ctx.fillStyle = "white";
	ctx.fillText("READY!", width/2-width/8*1.25, height/10*8.75);
	
	
	window.requestAnimationFrame(drawShipOptionsScreen);
}

function drawPitchOptionsScreen() {

	ctx.clearRect(0,0, width, height);
	constantMenu();

	ctx.beginPath();
	ctx.rect( ctx.lineWidth/2, ctx.lineWidth/2, width/8*5.9, height/10 );
	ctx.stroke();
	
	ctx.beginPath();
	ctx.rect( ctx.lineWidth/2, height/10+ctx.lineWidth, width/5*3.25, height/10 );
	ctx.stroke();
	
	
	ctx.font = width/12+"px ImpactRegular";
	ctx.fillStyle = "white";
	ctx.fillText("AUDIO PITCHES", width/10/2+(width/18*0), height/10*1.8);
	
	
	ctx.fillStyle = "white";
	ctx.font = width/14+"px ImpactRegular";
	ctx.fillText("Visual pitch matches audio", width/15, height/10*2.75);
	ctx.fillText("played", width/15, height/10*3.25);
	
	ctx.beginPath();
	ctx.rect( width/16, height/10*6, width/8*4.5, height/10 );
	ctx.stroke();
	
	ctx.font = width/10+"px ImpactRegular";
	ctx.fillStyle = "white";
	ctx.fillText(numberOfSeconds+" Seconds", width/8.9, height/10*6.75);
	
	if (numberOfSeconds == 10) {
		if (bestStreakPitch[0] != "") {
			ctx.fillStyle = "limegreen";
			ctx.fillText("BEST", width/8*6, height/10*6.5);
			ctx.fillText(" "+bestStreakPitch[0]+"x", width/8*6, height/10*7);
		}
	}
	else if (numberOfSeconds == 30) {
		if (bestStreakPitch[1] != "") {
			ctx.fillStyle = "limegreen";
			ctx.fillText("BEST", width/8*6, height/10*6.5);
			ctx.fillText(" "+bestStreakPitch[1]+"x", width/8*6, height/10*7);
		}
	}
	else if (numberOfSeconds == 60) {
		if (bestStreakPitch[2] != "") {
			ctx.fillStyle = "limegreen";
			ctx.fillText("BEST", width/8*6, height/10*6.5);
			ctx.fillText(" "+bestStreakPitch[2]+"x", width/8*6, height/10*7);
		}
	}
	
	ctx.beginPath();
	ctx.rect( width/2-width/8*1.5, height/10*8, width/8*3, height/10 );
	ctx.stroke();
	
	ctx.font = width/10+"px ImpactRegular";
	ctx.fillStyle = "white";
	ctx.fillText("READY!", width/2-width/8*1.25, height/10*8.75);
	
	
	window.requestAnimationFrame(drawPitchOptionsScreen);
}

function drawFractionsOptionsScreen() {

	ctx.clearRect(0,0, width, height);
	constantMenu();

	ctx.beginPath();
	ctx.rect( ctx.lineWidth/2, ctx.lineWidth/2, width/8*5.9, height/10 );
	ctx.stroke();
	
	ctx.beginPath();
	ctx.rect( ctx.lineWidth/2, height/10+ctx.lineWidth, width/5*3.25, height/10 );
	ctx.stroke();
	
	
	ctx.font = width/12+"px ImpactRegular";
	ctx.fillStyle = "white";
	ctx.fillText("FRACTIONS", width/10/2+(width/18*0), height/10*1.8);
	
	
	ctx.fillStyle = "white";
	ctx.font = width/14+"px ImpactRegular";
	ctx.fillText("Fraction matches other", width/15, height/10*2.75);
	ctx.fillText("representation", width/15, height/10*3.25);
	
	ctx.beginPath();
	ctx.rect( width/16, height/10*6, width/8*4.5, height/10 );
	ctx.stroke();
	
	ctx.font = width/10+"px ImpactRegular";
	ctx.fillStyle = "white";
	ctx.fillText(numberOfSeconds+" Seconds", width/8.9, height/10*6.75);
	
	if (numberOfSeconds == 10) {
		if (bestStreakFractions[0] != "") {
			ctx.fillStyle = "limegreen";
			ctx.fillText("BEST", width/8*6, height/10*6.5);
			ctx.fillText(" "+bestStreakFractions[0]+"x", width/8*6, height/10*7);
		}
	}
	else if (numberOfSeconds == 30) {
		if (bestStreakFractions[1] != "") {
			ctx.fillStyle = "limegreen";
			ctx.fillText("BEST", width/8*6, height/10*6.5);
			ctx.fillText(" "+bestStreakFractions[1]+"x", width/8*6, height/10*7);
		}
	}
	else if (numberOfSeconds == 60) {
		if (bestStreakFractions[2] != "") {
			ctx.fillStyle = "limegreen";
			ctx.fillText("BEST", width/8*6, height/10*6.5);
			ctx.fillText(" "+bestStreakFractions[2]+"x", width/8*6, height/10*7);
		}
	}
	
	ctx.beginPath();
	ctx.rect( width/2-width/8*1.5, height/10*8, width/8*3, height/10 );
	ctx.stroke();
	
	ctx.font = width/10+"px ImpactRegular";
	ctx.fillStyle = "white";
	ctx.fillText("READY!", width/2-width/8*1.25, height/10*8.75);
	
	
	window.requestAnimationFrame(drawFractionsOptionsScreen);
}

function drawColoursScreen() {
	ctx.clearRect(0,0, width, height);
	
	inGameMenu();
	
	drawGameOver();
		
	//canvas
	ctx.fillStyle = "white";
	ctx.fillRect( 0, height/10, width, height/10*7 );

	drawCountdown();
		
	if (gameActive == true) {
	
		if (gameOver == false) {
			ctx.font = width/3+"px ImpactRegular";
			ctx.fillStyle = currentAnswer;
			var tempW = width/10;
			if (currentSelection.length == 6) {
				tempW = 0;
			}
			else if (currentSelection.length == 3) {
				tempW = width/8*2;
			}
			else if (currentSelection.length == 4) {
				tempW = width/8*1.5;
			}
			ctx.fillText(currentSelection, tempW, height/10*5);
		}

		drawTimer();
		drawStreak();
		
	}

	drawCrackedAnimation();

	drawRetryOverlay();
	
	window.requestAnimationFrame(drawColoursScreen);
}

function drawShipScreen() {
	ctx.clearRect(0,0, width, height);
	
	inGameMenu();
	
	drawGameOver();
		
	//canvas
	ctx.fillStyle = "white";
	ctx.fillRect( 0, height/10, width, height/10*7 );

	drawCountdown();
		
	if (gameActive == true) {
	
		if (gameOver == false) {
		
			
			ctx.fillStyle = "black";
			if (selectionOrientation == 1) {
				//top facing 
				ctx.lineWidth = height/150;
				ctx.strokeStyle = "black";
				ctx.beginPath();
				ctx.moveTo(width/8*3,height/10*7);
				ctx.lineTo(width/8*2.5,height/10*4);
				ctx.bezierCurveTo(width/8*2.5, height/10*4, width/8*2.5, height/10*2.5, width/8*4, height/10*2);
				ctx.bezierCurveTo(width/8*4, height/10*2, width/8*5.5, height/10*2.5, width/8*5.5, height/10*4);
				ctx.lineTo(width/8*5,height/10*7);
				ctx.lineTo(width/8*3,height/10*7);
				ctx.stroke();
			}
			else if (selectionOrientation == 2) {
				ctx.lineWidth = height/150;
				ctx.strokeStyle = "black";
				ctx.beginPath();
				ctx.moveTo(width/8*3,height/10*2);
				ctx.lineTo(width/8*2.5,height/10*5);
				ctx.bezierCurveTo(width/8*2.5, height/10*5, width/8*2.5, height/10*6.5, width/8*4, height/10*7);
				ctx.bezierCurveTo(width/8*4, height/10*7, width/8*5.5, height/10*6.5, width/8*5.5, height/10*5);
				ctx.lineTo(width/8*5,height/10*2);
				ctx.lineTo(width/8*3,height/10*2);
				ctx.stroke();			
			}
			else if (selectionOrientation == 3) {
				ctx.lineWidth = height/150;
				ctx.strokeStyle = "black";
				ctx.beginPath();
				ctx.moveTo(width/8*0.25,height/10*3.5);
				ctx.lineTo(width/8*4.5,height/10*3);
				ctx.bezierCurveTo(width/8*4.5, height/10*3, width/8*6.5, height/10*3, width/8*7.75, height/10*4.5);
				ctx.bezierCurveTo(width/8*7.75, height/10*4.5, width/8*6.5, height/10*6, width/8*4.5, height/10*6);
				ctx.lineTo(width/8*0.25,height/10*5.5);
				ctx.lineTo(width/8*0.25,height/10*3.5);
				ctx.stroke();			
			}
			else if (selectionOrientation == 4) {
				ctx.lineWidth = height/150;
				ctx.strokeStyle = "black";
				ctx.beginPath();
				ctx.moveTo(width/8*7.75,height/10*3.5);
				ctx.lineTo(width/8*3.5,height/10*3);
				ctx.bezierCurveTo(width/8*3.5, height/10*3, width/8*1.5, height/10*3, width/8*0.25, height/10*4.5);
				ctx.bezierCurveTo(width/8*0.25, height/10*4.5, width/8*1.5, height/10*6, width/8*3.5, height/10*6);
				ctx.lineTo(width/8*7.75,height/10*5.5);
				ctx.lineTo(width/8*7.75,height/10*3.5);
				ctx.stroke();			
			}


			
			if (selectionOrientation == 1 || selectionOrientation == 2) {
				if (shipSideSelection == 1) {
					if (currentSelection == "STARBOARD") {
						ctx.fillText("STARBOARD",width/8*1.75,height/10*1.8);
					}
					else if (currentSelection == "BOW") {
						ctx.fillText("BOW",width/8*3,height/10*1.8);
					}
					else if (currentSelection == "STERN") {
						ctx.fillText("STERN",width/8*2.75,height/10*1.8);
					}
					else {
						ctx.fillText(" PORT",width/8*2.75,height/10*1.8);
					}
				}
				//bottom
				else if (shipSideSelection == 2) {
					if (currentSelection == "STARBOARD") {
						ctx.fillText("STARBOARD",width/8*1.75,height/10*7.8);
					}
					else if (currentSelection == "BOW") {
						ctx.fillText("BOW",width/8*3,height/10*7.8);
					}
					else if (currentSelection == "STERN") {
						ctx.fillText("STERN",width/8*2.75,height/10*7.8);
					}
					else {
						ctx.fillText(" PORT",width/8*2.75,height/10*7.8);
					}
				}
				//left
				else if (shipSideSelection == 3) {
					if (currentSelection == "STARBOARD") {
						ctx.fillText(" STAR",0,height/10*4.5);
						ctx.fillText("BOARD",0,height/10*5.2);
					}
					else if (currentSelection == "BOW") {
						ctx.fillText(" BOW",0,height/10*4.5);
					}
					else if (currentSelection == "STERN") {
						ctx.fillText("STERN",0,height/10*4.5);
					}
					else {
						ctx.fillText(" PORT",0,height/10*4.5);	
					}
				}
				//right
				else {
					if (currentSelection == "STARBOARD") {
						ctx.fillText("  STAR",width/8*5.35,height/10*4.5);					
						ctx.fillText("BOARD",width/8*5.35,height/10*5.2);
					}
					else if (currentSelection == "BOW") {
						ctx.fillText("  BOW",width/8*5.35,height/10*4.5);
					}
					else if (currentSelection == "STERN") {
						ctx.fillText(" STERN",width/8*5.35,height/10*4.5);
					}
					else {
						ctx.fillText("  PORT",width/8*5.35,height/10*4.5);
					}
				}
			}
			else if (selectionOrientation == 3) {
				if (shipSideSelection == 1) {
					if (currentSelection == "STARBOARD") {
						ctx.fillText("STARBOARD",width/8*1.75,height/10*2.8);
					}
					else if (currentSelection == "BOW") {
						ctx.fillText("BOW",width/8*3.5,height/10*2.8);
					}
					else if (currentSelection == "STERN") {
						ctx.fillText("STERN",width/8*3.25,height/10*2.8);					
					}
					else if (currentSelection == "PORT") {
						ctx.fillText("PORT",width/8*3.25,height/10*2.8);
					}
				}
				else if (shipSideSelection == 2) {
					if (currentSelection == "STARBOARD") {
						ctx.fillText("STARBOARD",width/8*1.75,height/10*6.8);
					}
					else if (currentSelection == "BOW") {
						ctx.fillText("BOW",width/8*3.5,height/10*6.8);					
					}
					else if (currentSelection == "STERN") {
						ctx.fillText("STERN",width/8*3.25,height/10*6.8);
					}
					else if (currentSelection == "PORT") {
						ctx.fillText("PORT",width/8*3.25,height/10*6.8);
					}
				}
				else if (shipSideSelection == 3) {
					if (currentSelection == "STARBOARD") {
						ctx.fillText("STAR",width/8*0.5,height/10*4.5);	
						ctx.fillText("BOARD",width/8*0.5,height/10*5.2);
					}
					else if (currentSelection == "BOW") {
						ctx.fillText("BOW",width/8*0.5,height/10*4.75);						
					}
					else if (currentSelection == "STERN") {
						ctx.fillText("STERN",width/8*0.5,height/10*4.75);					
					}
					else if (currentSelection == "PORT") {
						ctx.fillText("PORT",width/8*0.5,height/10*4.75);	
					}
				}
				else if (shipSideSelection == 4) {
					if (currentSelection == "STARBOARD") {
						ctx.fillText("    STAR",width/8*4.2,height/10*4.5);
						ctx.fillText("BOARD",width/8*4.2,height/10*5.2);
					}
					else if (currentSelection == "BOW") {
						ctx.fillText("BOW",width/8*5.2,height/10*4.75);					
					}
					else if (currentSelection == "STERN") {
						ctx.fillText("STERN",width/8*5,height/10*4.75);					
					}
					else if (currentSelection == "PORT") {
						ctx.fillText("PORT",width/8*5,height/10*4.75);
					}
				}
			}
			else if (selectionOrientation == 4) {
				if (shipSideSelection == 1) {
					if (currentSelection == "STARBOARD") {
						ctx.fillText("STARBOARD",width/8*1.75,height/10*2.8);
					}
					else if (currentSelection == "BOW") {
						ctx.fillText("BOW",width/8*3,height/10*2.8);
					}
					else if (currentSelection == "STERN") {
						ctx.fillText("STERN",width/8*3,height/10*2.8);
					}
					else if (currentSelection == "PORT") {
						ctx.fillText("PORT",width/8*3,height/10*2.8);					
					}
				}
				else if (shipSideSelection == 2) {
					if (currentSelection == "STARBOARD") {
						ctx.fillText("STARBOARD",width/8*1.75,height/10*6.8);
					}
					else if (currentSelection == "BOW") {
						ctx.fillText("BOW",width/8*3,height/10*2.8);
					}
					else if (currentSelection == "STERN") {
						ctx.fillText("STERN",width/8*3,height/10*6.8);
					}
					else if (currentSelection == "PORT") {
						ctx.fillText("PORT",width/8*3,height/10*6.8);
					}
				}
				else if (shipSideSelection == 3) {
					if (currentSelection == "STARBOARD") {
						ctx.fillText("STAR",width/8*1.25,height/10*4.5);	
						ctx.fillText("BOARD",width/8*1.25,height/10*5.2);
					}
					else if (currentSelection == "BOW") {
						ctx.fillText("BOW",width/8*1,height/10*4.75);	
					}
					else if (currentSelection == "STERN") {
						ctx.fillText("STERN",width/8*0.75,height/10*4.75);	
					}
					else if (currentSelection == "PORT") {
						ctx.fillText("PORT",width/8*0.75,height/10*4.75);	
					}
				}
				else if (shipSideSelection == 4) {
					if (currentSelection == "STARBOARD") {
						ctx.fillText("    STAR",width/8*4.75,height/10*4.5);
						ctx.fillText("BOARD",width/8*4.75,height/10*5.2);
					}
					else if (currentSelection == "BOW") {
						ctx.fillText("BOW",width/8*5.5,height/10*4.75);
					}
					else if (currentSelection == "STERN") {
						ctx.fillText("STERN",width/8*5,height/10*4.75);
					}
					else if (currentSelection == "PORT") {
						ctx.fillText("PORT",width/8*5.5,height/10*4.75);
					}
				}
				
				
				
				
				
			}
			
			
		}

		drawTimer();
		drawStreak();
		
	}

	drawCrackedAnimation();

	drawRetryOverlay();
	
	window.requestAnimationFrame(drawShipScreen);
}

function drawPitchScreen() {
	ctx.clearRect(0,0, width, height);
	
	inGameMenu();
	
	drawGameOver();
		
	//canvas
	ctx.fillStyle = "white";
	ctx.fillRect( 0, height/10, width, height/10*7 );

	drawCountdown();
		
	if (gameActive == true) {
	
		if (gameOver == false) {
				
				drawNotes();
				
		}
		
		drawTimer();
		drawStreak();
		
	}

	drawCrackedAnimation();

	drawRetryOverlay();
	
	window.requestAnimationFrame(drawPitchScreen);
}


function inGameMenu() {
	ctx.beginPath();
	ctx.lineWidth = height/128;
	ctx.strokeStyle = "white";
	ctx.rect( ctx.lineWidth/2, ctx.lineWidth/2, width-ctx.lineWidth, height-ctx.lineWidth); 
	ctx.stroke();
	
	ctx.beginPath();
	ctx.lineWidth = height/128;
	ctx.rect(width/8*6-ctx.lineWidth/2, ctx.lineWidth/2, width/8*2, height/10);
	ctx.stroke();

	ctx.beginPath();
	ctx.rect(width/8*6.25, height/10/2/2, width/8*1.4, height/10/1.75);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.fillStyle = "black";
	ctx.fillRect(width/8*6.1, height/10/2/1.1, width/8*1.7, height/10/5);
	ctx.stroke();

	ctx.beginPath();
	ctx.fillStyle = "black";
	ctx.fillRect(width/8*6.5, height/10/2/2.5, width/9, height/15);
	ctx.stroke();
	
	ctx.strokeStyle = "white";
	ctx.beginPath();
	ctx.rect( ctx.lineWidth/2, ctx.lineWidth/2, width/8*5.9, height/10 );		
	ctx.stroke();
}

function crackScreen() {
	ctx.lineWidth = height/150;
	ctx.strokeStyle = "black";
	for (var i = 1; i < lastCrackX1.length; i++) {
		ctx.beginPath();	
		ctx.moveTo(lastCrackX1[i-1],lastCrackY1[i-1]);
		ctx.lineTo(lastCrackX1[i], lastCrackY1[i]);
		ctx.stroke();
	}
	if (crackedAnimation > 5) {
		for (var i = 1; i < lastCrackX4.length; i++) {
			ctx.beginPath();	
			ctx.moveTo(lastCrackX4[i-1],lastCrackY4[i-1]);
			ctx.lineTo(lastCrackX4[i], lastCrackY4[i]);
			ctx.stroke();
		}		
	}
	if (crackedAnimation > 8) {
		for (var i = 1; i < lastCrackX3.length; i++) {
			ctx.beginPath();	
			ctx.moveTo(lastCrackX3[i-1],lastCrackY3[i-1]);
			ctx.lineTo(lastCrackX3[i], lastCrackY3[i]);
			ctx.stroke();
		}		
	}
	if (crackedAnimation > 10) {
		for (var i = 1; i < lastCrackX2.length; i++) {
			ctx.beginPath();	
			ctx.moveTo(lastCrackX2[i-1],lastCrackY2[i-1]);
			ctx.lineTo(lastCrackX2[i], lastCrackY2[i]);
			ctx.stroke();
		}
	}
}

function drawGameOver() {
	if (gameOver == false) {
		ctx.beginPath();
		ctx.rect( 0, height-(height/10*2), width/2, height/10*2 );
		ctx.stroke();
		
		ctx.font = width/8+"px ImpactRegular";
		if (crackedAnimation >= 0 && lastCrackX1[0] == 0) {
			ctx.fillStyle = "red";
		}
		else {
			ctx.fillStyle = "white";
		}
		ctx.fillText("TRUE", width/8, height/10*9.2);

		ctx.beginPath();
		ctx.rect( width/2, height-(height/10*2), width/2, height/10*2 );
		ctx.stroke();

		if (crackedAnimation >= 0 && lastCrackX1[0] == width) {
			ctx.fillStyle = "red";
		}
		else {
			ctx.fillStyle = "white";
		}
		ctx.fillText("FALSE", width/8+width/2, height/10*9.2);
	}
}

function drawCountdown() {
	if (countdown > 0) {
		ctx.font = width/2+"px ImpactRegular";
		ctx.fillStyle = "black";
		ctx.fillText(countdown, width/8*3, height/10*5);
	}
}

function drawTimer() {
	if (gameLost == false && gameOver == false) {
		checkCountdown();
		ctx.fillStyle = "white";
	}
	else if (gameLost == true) {
		ctx.fillStyle = "red";
	}
	else if (gameOver == false) {
		ctx.fillStyle = "white";
	}
	ctx.font = width/8+"px ImpactRegular";
	if (timeLeft >= 0) {
		ctx.fillText( timeLeft , width/8*3.6, height/12);		
	}
}

function drawStreak() {
	ctx.font = width/8+"px ImpactRegular";
	if (streak == 0) {
		ctx.fillStyle = "black";
	}
	else if (gameLost == true) {
		ctx.fillStyle = "red";
	}
	else if (beatStreak == true) {
		ctx.fillStyle = "limegreen";
	}
	else {
		ctx.fillStyle = "white";
	}
	ctx.fillText( streak+"x", width/8/2, height/12);
}

function drawCrackedAnimation() {
	if (crackedAnimation > -1) {
		if (crackedAnimation < 20) {
			var randX = random(width/8);
			var randY = random(height/10);
			if (choice == false) {
				lastCrackX1[lastCrackX1.length] = lastCrackX1[lastCrackX1.length-1] - randX;
			}
			else {
				lastCrackX1[lastCrackX1.length] = lastCrackX1[lastCrackX1.length-1] + randX;
			}
			lastCrackY1[lastCrackY1.length] = lastCrackY1[lastCrackY1.length-1] - randY;
			crackedAnimation++;
			if (crackedAnimation == 5) {
				lastCrackX4[0] = lastCrackX1[lastCrackX1.length-1];
				lastCrackY4[0] = lastCrackY1[lastCrackY1.length-1];
			}
			if (crackedAnimation > 5) {
				randX = random(width/16);
				randY = random(height/20);
				if (choice == false) {
					lastCrackX4[lastCrackX4.length] = lastCrackX4[lastCrackX4.length-1] + randX;
				}
				else {
					lastCrackX4[lastCrackX4.length] = lastCrackX4[lastCrackX4.length-1] - randX;
				}
				lastCrackY4[lastCrackY4.length] = lastCrackY4[lastCrackY4.length-1] - randY;				
			}

			if (crackedAnimation == 8) {
				lastCrackX3[0] = lastCrackX1[lastCrackX1.length-1];
				lastCrackY3[0] = lastCrackY1[lastCrackY1.length-1];
			}
			if (crackedAnimation > 8) {
				randX = random(width/8);
				randY = random(height/20);
				if (choice == false) {
					lastCrackX3[lastCrackX3.length] = lastCrackX3[lastCrackX3.length-1] - randX;
				}
				else {
					lastCrackX3[lastCrackX3.length] = lastCrackX3[lastCrackX3.length-1] + randX;
				}
				lastCrackY3[lastCrackY3.length] = lastCrackY3[lastCrackY3.length-1] + randY;				
			}
			
			if (crackedAnimation == 10) {
				lastCrackX2[0] = lastCrackX1[lastCrackX1.length-1];
				lastCrackY2[0] = lastCrackY1[lastCrackY1.length-1];
			}
			if (crackedAnimation > 10) {
				randX = random(width/8);
				randY = random(height/10);
				if (choice == false) {
					lastCrackX2[lastCrackX2.length] = lastCrackX2[lastCrackX2.length-1] + randX;
				}
				else {
					lastCrackX2[lastCrackX2.length] = lastCrackX2[lastCrackX2.length-1] - randX;
				}
				lastCrackY2[lastCrackY2.length] = lastCrackY2[lastCrackY2.length-1] - randY;
			}
		}
		else if (crackedAnimation < 30) {
			var randX = random(width/8);
			var randY = random(height/10);
			if (choice == false) {
				lastCrackX2[lastCrackX2.length] = lastCrackX2[lastCrackX2.length-1] + randX;
			}
			else {
				lastCrackX2[lastCrackX2.length] = lastCrackX2[lastCrackX2.length-1] - randX;
			}
			lastCrackY2[lastCrackY2.length] = lastCrackY2[lastCrackY2.length-1] - randY;			
		}
		crackScreen();
	}
}

function drawRetryOverlay() {
	if (retryOverlay == true) {

		ctx.font = width/8+"px ImpactRegular";
	
		if (gameOver == true) {
			ctx.fillStyle = "limegreen";
			if (numberOfSeconds == 10 && beatStreak == true) {
				ctx.fillText("CONGRATULATIONS!", width/50, height/10*2);
				ctx.fillText("NEW HIGH SCORE!", width/8/2, height/10*3);
			}
			else if (numberOfSeconds == 10 && beatStreak == false) {
				var val;
				if (screen == 4) {
					val = bestStreakColours[0]-streak;
				}
				else if (screen == 6) {
					val = bestStreakShip[0]-streak;
				}
				else if (screen == 8) {
					val = bestStreakPitch[0]-streak;
				}
				else if (screen == 10) {
					val = bestStreakFractions[0]-streak;
				}
				if ( val == 0) {
					ctx.fillText(" GREAT EFFORT!", width/8, height/10*2);
					ctx.fillText("TIED YOUR BEST!", width/8, height/10*3);
				}
				else {
					ctx.fillText("GOOD TRY!", width/8*2, height/10*2);
					ctx.fillText("ONLY "+val+" FROM BEST!", width/75, height/10*3);
				}
			}
			else if (numberOfSeconds == 30 && beatStreak == true) {
				ctx.fillText("CONGRATULATIONS!", width/50, height/10*2);
				ctx.fillText("NEW HIGH SCORE!", width/8/2, height/10*3);
			}
			else if (numberOfSeconds == 30 && beatStreak == false) {
				var val;
				if (screen == 4) {
					val = bestStreakColours[1]-streak;
				}
				else if (screen == 6) {
					val = bestStreakShip[1]-streak;
				}
				else if (screen == 8) {
					val = bestStreakPitch[0]-streak;
				}
				else if (screen == 10) {
					val = bestStreakFractions[0]-streak;
				}
				if ( val == 0) {
					ctx.fillText(" GREAT EFFORT!", width/8, height/10*2);
					ctx.fillText("TIED YOUR BEST!", width/8, height/10*3);
				}
				else {
					ctx.fillText("GOOD TRY!", width/8*2, height/10*2);
					ctx.fillText("ONLY "+val+" FROM BEST!", width/75, height/10*3);
				}
			}
			else if (numberOfSeconds == 60 && beatStreak == true) {
				ctx.fillText("CONGRATULATIONS!", width/50, height/10*2);
				ctx.fillText("NEW HIGH SCORE!", width/8/2, height/10*3);
			}			
			else if (numberOfSeconds == 60 && beatStreak == false) {
				var val;
				if (screen == 4) {
					val = bestStreakColours[2]-streak;
				}
				else if (screen == 6) {
					val = bestStreakShip[2]-streak;
				}
				else if (screen == 8) {
					val = bestStreakPitch[0]-streak;
				}				
				if ( val == 0) {
					ctx.fillText(" GREAT EFFORT!", width/8, height/10*2);
					ctx.fillText("TIED YOUR BEST!", width/8, height/10*3);
				}
				else {
					ctx.fillText("GOOD TRY!", width/8*2, height/10*2);
					ctx.fillText("ONLY "+val+" FROM BEST!", width/75, height/10*3);
				}
			}
		}
	
		ctx.beginPath();
		ctx.strokeStyle = "black";
		ctx.fillStyle = "white";
		ctx.fillRect( width/8*2, height/10*3.5, width/8*4, height/10 );
		ctx.fillStyle = "black";
		ctx.rect( width/8*2, height/10*3.5, width/8*4, height/10 );
		ctx.fillText( "RETRY" , width/8*2.75, height/10*4.25);				
		ctx.stroke();			
		
		ctx.beginPath();
		ctx.strokeStyle = "black";
		ctx.fillStyle = "white";
		ctx.fillRect( width/8*2, height/10*5, width/8*4, height/10 );
		ctx.fillStyle = "black";
		ctx.rect( width/8*2, height/10*5, width/8*4, height/10 );
		ctx.fillText( "OPTIONS" , width/8*2.25, height/10*5.75);				
		ctx.stroke();			

		ctx.beginPath();
		ctx.strokeStyle = "black";
		ctx.fillStyle = "white";
		ctx.fillRect( width/8*2, height/10*6.5, width/8*4, height/10 );
		ctx.fillStyle = "black";
		ctx.rect( width/8*2, height/10*6.5, width/8*4, height/10 );
		ctx.fillText( "MENU" , width/8*2.85, height/10*7.25);				
		ctx.stroke();				
	}
}

function drawNotes() {

	ctx.fillStyle = 'black';
	
	if (currentAnswer.split(":")[0] == "HIGH") {
		if (colourPosition == 1) {
			ctx.fillStyle = 'red';
		}
		else {
			ctx.fillStyle = 'black';
		}
		ctx.beginPath();
		ctx.arc(width/8*1.25, height/10*2.5, width/7.5, 0, 2 * Math.PI, false);
		ctx.fill();
		ctx.stroke();
	}

	if (currentAnswer.split(":")[1] == "HIGH") {
		if (colourPosition == 2) {
			ctx.fillStyle = 'red';
		}
		else {
			ctx.fillStyle = 'black';
		}
		ctx.beginPath();
		ctx.arc(width/8*4, height/10*2.5, width/7.5, 0, 2 * Math.PI, false);
		ctx.fill();
		ctx.stroke();
	}
			
	if (currentAnswer.split(":")[2] == "HIGH") {
		if (colourPosition == 3) {
			ctx.fillStyle = 'red';
		}
		else {
			ctx.fillStyle = 'black';
		}
		ctx.beginPath();
		ctx.arc(width/8*6.75, height/10*2.5, width/7.5, 0, 2 * Math.PI, false);
		ctx.fill();
		ctx.stroke();
	}

	if (currentAnswer.split(":")[0] == "MEDIUM") {
		if (colourPosition == 1) {
			ctx.fillStyle = 'red';
		}
		else {
			ctx.fillStyle = 'black';
		}
		ctx.beginPath();
		ctx.arc(width/8*1.25, height/10*4.5, width/7.5, 0, 2 * Math.PI, false);
		ctx.fill();
		ctx.stroke();
	}
			
	if (currentAnswer.split(":")[1] == "MEDIUM") {
		if (colourPosition == 2) {
			ctx.fillStyle = 'red';
		}
		else {
			ctx.fillStyle = 'black';
		}
		ctx.beginPath();
		ctx.arc(width/8*4, height/10*4.5, width/7.5, 0, 2 * Math.PI, false);
		ctx.fill();
		ctx.stroke();
	}

	if (currentAnswer.split(":")[2] == "MEDIUM") {
		if (colourPosition == 3) {
			ctx.fillStyle = 'red';
		}
		else {
			ctx.fillStyle = 'black';
		}
		ctx.beginPath();
		ctx.arc(width/8*6.75, height/10*4.5, width/7.5, 0, 2 * Math.PI, false);
		ctx.fill();
		ctx.stroke();
	}
			
	if (currentAnswer.split(":")[0] == "LOW") {
		if (colourPosition == 1) {
			ctx.fillStyle = 'red';
		}
		else {
			ctx.fillStyle = 'black';
		}	
		ctx.beginPath();
		ctx.arc(width/8*1.25, height/10*6.5, width/7.5, 0, 2 * Math.PI, false);
		ctx.fill();
		ctx.stroke();
	}
			
	if (currentAnswer.split(":")[1] == "LOW") {
		if (colourPosition == 2) {
			ctx.fillStyle = 'red';
		}
		else {
			ctx.fillStyle = 'black';
		}	
		ctx.beginPath();
		ctx.arc(width/8*4, height/10*6.5, width/7.5, 0, 2 * Math.PI, false);
		ctx.fill();
		ctx.stroke();
	}
			
	if (currentAnswer.split(":")[2] == "LOW") {
		if (colourPosition == 3) {
			ctx.fillStyle = 'red';
		}
		else {
			ctx.fillStyle = 'black';
		}	
		ctx.beginPath();
		ctx.arc(width/8*6.75, height/10*6.5, width/7.5, 0, 2 * Math.PI, false);
		ctx.fill();
		ctx.stroke();
	}

}

function drawSoundTest() {
	ctx.clearRect(0,0, width, height);
	
	constantMenu();

	ctx.strokeStyle = "white";
	ctx.fillStyle = "white";

	ctx.beginPath();
	ctx.rect(0,height/10,width/2,height/10*1);
	ctx.fillText( "LOAD" , width/16, height/10*1.75);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.rect(0,height/10*2,width/2,height/10*1);
	ctx.fillText( "PURE A" , width/16, height/10*2.75);
	ctx.stroke();

	ctx.beginPath();
	ctx.rect(width/2,height/10*2,width/2,height/10*1);
	ctx.fillText( "PURE C" , width/16+width/2, height/10*2.75);
	ctx.stroke();

	ctx.beginPath();
	ctx.rect(0,height/10*3,width/2,height/10*1);
	ctx.fillText( "PURE E" , width/16, height/10*3.75);
	ctx.stroke();

	ctx.beginPath();
	ctx.rect(width/2,height/10*3,width/2,height/10*1);
	ctx.fillText( "BREAK" , width/16+width/2, height/10*3.75);
	ctx.stroke();

	ctx.beginPath();
	ctx.rect(0,height/10*4,width/2,height/10*1);
	ctx.fillText( "LOAD" , width/16, height/10*4.75);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.rect(0,height/10*5,width/2,height/10*1);
	ctx.fillText( "PURE A" , width/16, height/10*5.75);
	ctx.stroke();

	ctx.beginPath();
	ctx.rect(width/2,height/10*5,width/2,height/10*1);
	ctx.fillText( "PURE C" , width/16+width/2, height/10*5.75);
	ctx.stroke();

	ctx.beginPath();
	ctx.rect(0,height/10*6,width/2,height/10*1);
	ctx.fillText( "PURE E" , width/16, height/10*6.75);
	ctx.stroke();

	ctx.beginPath();
	ctx.rect(width/2,height/10*6,width/2,height/10*1);
	ctx.fillText( "BREAK" , width/16+width/2, height/10*6.75);
	ctx.stroke();

	ctx.beginPath();
	ctx.rect(0,height/10*7,width/2,height/10*1);
	ctx.fillText( "LOAD" , width/16, height/10*7.75);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.rect(0,height/10*8,width/2,height/10*1);
	ctx.fillText( "PURE A" , width/16, height/10*8.75);
	ctx.stroke();

	ctx.beginPath();
	ctx.rect(width/2,height/10*8,width/2,height/10*1);
	ctx.fillText( "PURE C" , width/16+width/2, height/10*8.75);
	ctx.stroke();

	ctx.beginPath();
	ctx.rect(0,height/10*9,width/2,height/10*1);
	ctx.fillText( "PURE E" , width/16, height/10*9.75);
	ctx.stroke();

	ctx.beginPath();
	ctx.rect(width/2,height/10*9,width/2,height/10*1);
	ctx.fillText( "BREAK" , width/16+width/2, height/10*9.75);
	ctx.stroke();
	
	window.requestAnimationFrame(drawSoundTest);
}

function drawFractionsScreen() {
	ctx.clearRect(0,0, width, height);
	
	inGameMenu();
	
	drawGameOver();
		
	//canvas
	ctx.fillStyle = "white";
	ctx.fillRect( 0, height/10, width, height/10*7 );

	drawCountdown();
		
	if (gameActive == true) {
	
		if (gameOver == false) {

			ctx.font = width/5+"px ImpactRegular";
			ctx.fillStyle = "black";
			ctx.beginPath();
			ctx.fillText( "=" , width/8*3, height/10*4.7);
			ctx.stroke();
			ctx.strokeStyle = "black";
			ctx.lineWidth = width/40;
			ctx.beginPath();	
			ctx.moveTo(width/32,height/10*4.25);
			ctx.lineTo(width/8*2.5, height/10*4.25);
			ctx.stroke();
			
			ctx.beginPath();
			ctx.fillText( currentSelection.split(":")[0] ,width/8, height/8*3);
			ctx.fillText( currentSelection.split(":")[1] ,width/8, height/8*4.5);
			ctx.stroke();

			var val1 = currentAnswer.split(":")[0];
			var val2 = currentAnswer.split(":")[1];
						
			//Percentage
			if (fractionsType == 1) {
				var display = Math.round( ((val1/val2)*100) * 10) /10;
				ctx.beginPath();
				ctx.fillText( display+"%", width/8*4.25, height/10*4.7);
				ctx.stroke();
			}
		
			//Fraction
			else if (fractionsType == 2) {
				ctx.beginPath();	
				ctx.moveTo(width/8*4.25,height/10*4.25);
				ctx.lineTo(width/8*7.75, height/10*4.25);
				ctx.stroke();
							
				ctx.beginPath();
				ctx.fillText( currentAnswer.split(":")[0]*multiple ,width/8*5, height/8*3);
				ctx.fillText( currentAnswer.split(":")[1]*multiple ,width/8*5, height/8*4.5);
				ctx.stroke();
			}
			
			//Pie Chart
			else if (fractionsType == 3) {
				ctx.strokeStyle = "black";
				ctx.fillStyle = "black";
				ctx.beginPath();
				ctx.arc(width/8*6, height/10*4.2, width/5, 0, 2 * Math.PI, false);
				ctx.fill();
				ctx.stroke();
			
				ctx.strokeStyle = "white";
				ctx.fillStyle = "white";
				
				ctx.beginPath();
				// Arc Parameters: x, y, radius, startingAngle (radians), endingAngle (radians), antiClockwise (boolean)
				ctx.arc(width/8*6, height/10*4.2, width/5, 0, Math.PI * 2 * (val1 / val2), false);
				ctx.lineTo(width/8*6, height/10*4.2);
				ctx.fill();
			}
			
		
		}

		drawTimer();
		drawStreak();
		
	}

	drawCrackedAnimation();

	drawRetryOverlay();
	
	window.requestAnimationFrame(drawFractionsScreen);
}
