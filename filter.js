//filter


function myFunction() {
  var dessertCheck = document.getElementById("dessert");
  var dinnerCheck = document.getElementById("dinner");
  var lunchCheck = document.getElementById("lunch");
  var breakfastCheck = document.getElementById("bfCheck");

checks = [dessertCheck, dinnerCheck];

  var desserts = document.getElementsByClassName("de");
  var dinner = document.getElementsByClassName("di");
  var lunch = document.getElementsByClassName("lu");

if(breakfastCheck.checked==true){
  document.write
}

  if (dessertCheck.checked == true){
    for (i=0; i < desserts.length; i++){desserts[i].style.display="block";}
  } else {
      for (i=0; i < desserts.length; i++){desserts[i].style.display="none";}
  }

  if (dinnerCheck.checked == true){
      for (i=0; i < dinner.length; i++){dinner[i].style.display="block";}
  }
  else {
    for (i=0; i < dinner.length; i++){dinner[i].style.display="none";}
  }


  if (lunchCheck.checked == true){
      for (i=0; i < lunch.length; i++){lunch[i].style.display="block";}
  }
  else {
    for (i=0; i < lunch.length; i++){lunch[i].style.display="none";}
  }

  if(dinnerCheck.checked == false && dessertCheck.checked == false && lunchCheck.checked ==false){
    for (i=0; i < desserts.length; i++){desserts[i].style.display="block";}
    for (i=0; i < dinner.length; i++){dinner[i].style.display="block";}
      for (i=0; i < lunch.length; i++){lunch[i].style.display="block";}
  }


}

var dessertCheck = document.getElementById("dessert");
var dinnerCheck = document.getElementById("dinner");

  var desserts = document.getElementsByClassName("de");
    var desserts = document.getElementsByClassName("di");

function Category(categoryName, correspRecipes){
  this.categoryName = categoryName;
  this.correspRecipes = correspRecipes;
}

var dessertCat = new Category (dessertCheck, desserts);
var dinnerCat = new Category (dessertCheck, desserts);
Categories = [dessertCat, dinnerCat];

for (var i = 0; i < Categories.length; i++) {
if (Category[i].categoryName.checked == true){
  for (i=0; i < Category[i].correspRecipes.length; i++){Category[i].correspRecipes.style.display="block";}
} else {
    for (i=0; i < Category[i].correspRecipes.length; i++){Category[i].correspRecipes.style.display="none";}
}
}
