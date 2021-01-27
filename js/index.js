

var ramdonNumber1 = Math.floor(Math.random() * 6)+1;

var ramdonImage = "dice" + ramdonNumber1 +".png";

var ramdonImageSource = "images/" + ramdonImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", ramdonImageSource );



var ramdonNumber2 = Math.floor(Math.random() * 6)+1;

var ramdonImage2 = "dice" + ramdonNumber2 +".png";

var ramdonImageSource2 = "images/" + ramdonImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", ramdonImageSource2 );

if (ramdonNumber1 > ramdonNumber2 ){
document.querySelector("h1").innerHTML = "Player 1 wins!";
}

else if (ramdonNumber1 < ramdonNumber2 ){
  document.querySelector("h1").innerHTML = "Player 2 wins!";
}

else (ramdonNumber1 == ramdonNumber2 ){
  document.querySelector("h1").innerHTML = "It is a Draw!";

}
