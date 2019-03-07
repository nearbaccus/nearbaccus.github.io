//main.js
function makeGrey(a){
  a.style.backgroundColor= "#ccccff";
    a.syle.color = "black";
}

function makeBlack(a){
  a.style.backgroundColor= "black";
}

var lis = document.querySelectorAll("button");

for(i = 0; i < lis.length; i++){
  lis[i].addEventListener("mouseover", function (){
    this.style.backgroundColor = "#B573D0";
  });
  lis[i].addEventListener("mouseout", function (){
    this.style.backgroundColor = "#ccccff";
  });
}

function Recipe(title, ingredients){
  this.title = title;
  this.ingredients = ingredients;
}

var mintBrownies = new Recipe("Mint", "Ing");
var

Recipes = [mintBrownies];

if(document.getElementById("cheesyBreadSticks")){
document.getElementById("title").innerHTML = Recipes[0].title;
}
else if(document.getElementById("winterSalad")){
document.getElementById("winterSaladTitle").innerHTML = "here";
}
