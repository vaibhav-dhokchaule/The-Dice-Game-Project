//for first Dice

var randomNumber1 = Math.floor(Math.random() * 6) + 1;  // random number bet 1 To 6

var randomDiceImage = "dice" + randomNumber1 + ".png";  //images dice1.png To dice6.png

var randomImageSource = "images/" + randomDiceImage;  // images/dice1.png TO images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

//for Second Dice same logic
/*
var randomNumber2 = Math.floor(Math.random() * 6) + 1;  // random number bet 1 To 6

var randomDiceImage = "dice" + randomNumber2 + ".png";  //images dice1.png To dice6.png

var randomImageSource = "images/" + randomDiceImage;  // images/dice1.png TO images/dice6.png

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource);

*/
// This is one another way for second Dice . here i can compress above two line in one line code.

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);



if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "player 1 wins!💐🥇";      // if player1 wins.
}
else if(randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "player 2 wins!💐🥇";      //  else if player2 wins. 
}
else {
    document.querySelector("h1").innerHTML = "Draw!👏 Play Again..";       // else draw when both have got same.
}
