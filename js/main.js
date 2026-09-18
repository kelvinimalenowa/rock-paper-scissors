let botScore=0,
playerScore=0;

document.getElementById("rock").onclick=playerThrowsRock;
document.getElementById("paper").onclick=playerThrowsPaper;
document.getElementById("scissors").onclick=playerThrowsScissors;

function playerThrowsRock(){
	const botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,"rock");
}
function playerThrowsScissors(){
	const botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,"scissors")
}
function playerThrowsPaper(){
	const botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,"paper")
}
function getRandomWeapon(){
	const randomNumber=Math.random();
	let botsWeapon="rock";
	if(randomNumber<.33){
		botsWeapon="scissors";
	}
	else if(randomNumber<.6666){
		botsWeapon="paper";
	}
		return botsWeapon;
}
function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon==playersWeapon){
		displayCompleteMessage("Tied.");
	}
	else if(
		(botsWeapon=="scissors" && playersWeapon=="paper") ||
		(botsWeapon=="paper" && playersWeapon=="rock") ||
		(botsWeapon=="rock" && playersWeapon=="scissors")
		){
		increaseBotScore();
	}
	else{
		increasePlayerScore();
	}
}
function increaseBotScore(){
	botScore+=1;
	document.getElementById("computerScore").innerText=botScore;
	displayCompleteMessage("You lost. Try again.");
}
function increasePlayerScore(){
	playerScore+=1;
	document.getElementById("humanScore").innerText=playerScore;
	displayCompleteMessage("WINNER!");
}
function displayCompleteMessage(msg){
	document.getElementById("status").innerText=msg;
}