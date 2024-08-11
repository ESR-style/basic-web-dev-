var randomNumber1=Math.floor(Math.random()*6)+1;

var randomDiceImage = "Dice"+randomNumber1+".png";

var randomeDiceSource = "images/"+randomDiceImage;

var image1=document.getElementsByClassName("img1")[0];
image1.setAttribute("src",randomeDiceSource);

var randomNumber2=Math.floor(Math.random()*6)+1;

var randomDiceImage2 = "Dice"+randomNumber2+".png";

var randomeDiceSource2 = "images/"+randomDiceImage2;

var image2=document.querySelectorAll("img")[1].setAttribute("src",randomeDiceSource2);

if(randomNumber2>randomNumber1)
{
    document.querySelector("h1").innerHTML="PLayer 2 Wins";
}
else if(randomNumber1===randomNumber2)
{
    document.querySelector("h1").innerHTML="Its a tie";
}
else{
    document.querySelector("h1").innerHTML="Player 1 Wins";
}



