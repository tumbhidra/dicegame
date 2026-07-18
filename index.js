console.log("JavaScript is running");
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
var header = document.querySelector("h1");
document.querySelector(".img1").src = randomDiceImage1;
document.querySelector(".img2").src = randomDiceImage2;

if (randomNumber1 > randomNumber2) {
    header.textContent = "🚩 Player 1 Wins!";
    
} else if (randomNumber1 < randomNumber2) {
    header.textContent = "Player 2 Wins! 🚩";
   
} else {
    header.textContent = "🤝 It's a Draw!";
}
