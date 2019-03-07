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

var mintBrownies = new Recipe("Mint Brownies", "  Ingredients: 3 T best quality extra virgin olive oil &middot; 1 T balsamic vinegar &middot; 1 t sugar &middot; Pour all ingredients into a mason jar; cover and shake vigorously.");
var whiteBread = new Recipe("White Bread", "ing");
var chocoChipCookies = new Recipe("Chocolate Chip Cookies", "ing");
var winterSalad = new Recipe("Balsamic Vinaigrette Salad", " Ingredients: 3 T best quality extra virgin olive oil &middot; 1 T balsamic vinegar &middot; 1 t sugar &middot; Pour all ingredients into a mason jar; cover and shake vigorously.");
var cheesyBread = new Recipe("Cheesy Bread Sticks", "ing");

var num = 3;

Recipes = [mintBrownies, whiteBread, chocoChipCookies, winterSalad, cheesyBread];

if(document.getElementById("mintBrownies")){
  num = 0;
document.getElementById("mbtitle").innerHTML = Recipes[num].title;
document.getElementById("ing").innerHTML = Recipes[num].ingredients;
}

if(document.getElementById("whiteBread")){
  num = 1;
document.getElementById("wbtitle").innerHTML = Recipes[num].title;
}

if(document.getElementById("chocoChipCookies")){
  num = 2;
document.getElementById("ccctitle").innerHTML = Recipes[num].title;
}

if(document.getElementById("winterSalad")){
  num = 3;
document.getElementById("wstitle").innerHTML = Recipes[num].title;
}

if(document.getElementById("cheesyBreadSticks")){
  num = 4;
document.getElementById("cbtitle").innerHTML = Recipes[4].title;
}
