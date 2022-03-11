var randomNumber1=Math.floor(Math.random()*6) +1;
var randomNumber2=Math.floor(Math.random()*6) +1;
console.log(randomNumber1);
console.log(randomNumber2);

var randomDiceImage1="dice" + randomNumber1 + ".png";
var randomDiceImage2="dice" + randomNumber2 + ".png";

var randomImageSource1="images/" + randomDiceImage1;
var randomImageSource2="images/" + randomDiceImage2;

var image1= document.querySelectorAll("img")[0];
var image2= document.querySelectorAll("img")[1];
image1.setAttribute("src",randomImageSource1);
image2.setAttribute("src",randomImageSource2);

if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML="Player1 Wins!";
}
else if(randomNumber1 < randomNumber2)
{
    document.querySelector("h1").innerHTML="Player2 Wins!";


}
else{
    document.querySelector("h1").innerHTML="Draw!";

}