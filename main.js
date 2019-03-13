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

function Recipe(title, ingredients, num){
  this.title = title;
  this.ingredients = ingredients;
}




var mintBrownies = new Recipe("Mint Brownies", "Ingredients: 3 T best quality extra virgin olive oil &middot; 1 T balsamic vinegar &middot; 1 t sugar &middot; Pour all ingredients into a mason jar; cover and shake vigorously.");
var whiteBread = new Recipe("White Bread", "ing");
var chocoChipCookies = new Recipe("Chocolate Chip Cookies", "1 c salted butter (2 sticks), room temperature &middot;¾ c white sugar &middot;1 c brown sugar &middot;2 large eggs, room temperature &middot;1 t vanilla &middot;3 cups all-purpose flour &middot;¾ t salt &middot;¾ t baking soda &middot;2 1/2 cups Ghirardelli chocolate chips, (plus optional ½ c more)");
var winterSalad = new Recipe("Balsamic Vinaigrette Salad", " Ingredients: 3 T best quality extra virgin olive oil &middot; 1 T balsamic vinegar &middot; 1 t sugar &middot; Pour all ingredients into a mason jar; cover and shake vigorously.");
var cheesyBread = new Recipe("Cheesy Bread Sticks", "ing");
var sheetCake = new Recipe("White Texas Sheet Cake", "Cake: 1 cup butter &middot; 1 cup water &middot;2 cups white sugar &middot;2 eggs &middot; 1/2 c sour cream &middot; 1 teaspoon vanilla &middot;1/4 teaspoon almond extract &middot; 2 cups all-purpose flour &middot; 1/2 teaspoon salt &middot;1 teaspoon baking soda");

var num = 0;

var Recipes = [mintBrownies, whiteBread, chocoChipCookies, winterSalad, cheesyBread, sheetCake];

if(document.getElementById("mintBrownies")){
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
document.getElementById("cccing").innerHTML = Recipes[num].ingredients;
}

if(document.getElementById("winterSalad")){
  num = 3;
document.getElementById("wstitle").innerHTML = Recipes[num].title;
document.getElementById("wsing").innerHTML = Recipes[num].ingredients;
}

if(document.getElementById("cheesyBreadSticks")){
  num = 4;
document.getElementById("cbtitle").innerHTML = Recipes[num].title;
}

if(document.getElementById("sheetCake")){
  num = 5;
document.getElementById("sctitle").innerHTML = Recipes[num].title;
document.getElementById("scing").innerHTML = Recipes[num].ingredients;
}
