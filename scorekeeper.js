var playerOneButton = document.querySelector("#p1");
var playerTwoButton = document.getElementById("p2");
var resertButton = document.querySelector("#p3");
var h1PlayerOne = document.getElementsByTagName("span")[0]
var h1PlayerTwo = document.getElementsByTagName("span")[1]
var inputNumber = document.querySelector("input")
var winningScoreDisplay = document.querySelector("p span")
var playerOneScore = 0;
var playerTwoScore = 0;
var gameOver = false;
var winningScore = 5;


playerOneButton.addEventListener ("click", function () {
	if (!gameOver) {
		playerOneScore++;
		console.log(playerOneScore, winningScore);
		if (playerOneScore === winningScore) {
			gameOver = true;
			h1PlayerOne.classList.toggle("winner")
		}
		h1PlayerOne.textContent = playerOneScore;
	}
});

playerTwoButton.addEventListener("click", function () {
	if (!gameOver) {
		playerTwoScore++;
		if (playerTwoScore === winningScore) {
			gameOver = true;
			h1PlayerTwo.classList.toggle("winner")
		}	
		h1PlayerTwo.textContent = playerTwoScore;
	}
});

resertButton.addEventListener("click", function () {
	reset()
});

function reset () {
	playerTwoScore = 0;
	playerOneScore = 0;
	h1PlayerOne.textContent = "0";
	h1PlayerTwo.textContent = "0";
	h1PlayerOne.classList.remove("winner");
	h1PlayerTwo.classList.remove("winner");
	gameOver = false;
};

inputNumber.addEventListener("change", function () {
	winningScoreDisplay.textContent = inputNumber.value
	winningScore = Number(inputNumber.value);
	reset ();
})