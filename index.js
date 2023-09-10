

var randomNumber1=Math.ceil(Math.random()*6);
var string="images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",string);
var randomNumber2=Math.ceil(Math.random()*6);
var string="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",string);
if (randomNumber1>randomNumber2){
    document.querySelector("h2").innerHTML = "Player 1 wins!";
}
else if(randomNumber1<randomNumber2)
{
    
    document.querySelector("h2").innerHTML = "Player 2 Wins!";
}
else
{
    document.querySelector("h2").innerHTML = "Draw";
}
