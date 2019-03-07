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




function Recipe(name, ingredients){
  this.name = name;
  this.ingredients = ingredients;
}

var cheesyBread = new Recipe("Cheesy Bread Sticks", "hi2");
var sheetCake = new Recipe("Sheet Cake", "hi2");
var chocoChipCookies = new Recipe("Chocolate Chip Cookies", "hi3");
var mintBrownies = new Recipe("Mint Brownies", "Ingredients: 3 T best quality extra virgin olive oil &middot;balsamic vinegar &middot;sugarall ingredients into a mason jar; cover and shake vigorously.");


Recipes = [cheesyBread, sheetCake, chocoChipCookies, mintBrownies];

var currentRecipeIndex = 3;


if(document.getElementById("chocoChipCookies")){
  currentRecipeIndex = 2;
document.getElementById("title").innerHTML = Recipes[currentRecipeIndex].name;
}

if(document.getElementById("cheesyBreadSticks")){
  currentRecipeIndex = 2;
document.getElementById("title").innerHTML = Recipes[currentRecipeIndex].name;
}

if(document.getElementById("mintBrownies")){
  currentRecipeIndex = 3;
document.getElementById("title").innerHTML = Recipes[currentRecipeIndex].name;
document.getElementById("ing").innerHTML = Recipes[currentRecipeIndex].ingredients;
}
