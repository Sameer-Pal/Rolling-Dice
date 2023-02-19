var rNo1=Math.floor(Math.random()*6)+1;  // random number genrated

var diceimages= "dice" +rNo1 +".png";   // attaching rand.No. to the images 1--6

var randimgsource = "images/" + diceimages;   // attaching dice images(random) in  the images folder having file 

document.querySelectorAll("img")[0].setAttribute("src",randimgsource);; //select images-1(0) & changng previous src link to the new rndom image source variable 

var rNo2= Math.floor(Math.random()*6)+1;
 
var images="dice" + rNo2 +".png";
 
var sources="images/" +images;
 
document.querySelectorAll("img")[1].setAttribute("src", sources);


if (rNo1>rNo2){
    document.querySelector("h1").innerHTML=" Player 1 🏆 "
}
else if (rNo1<rNo2)
{
    document.querySelector("h1").innerHTML=" Player 2 🏆"

}

else {
    document.querySelector("h1").innerHTML="  draw "

}