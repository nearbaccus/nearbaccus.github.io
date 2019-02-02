// Constructor function for Person objects
function Recipe(name, bio, img) {
  this.name = name;
  this.bio = bio;
  this.img = img;
}

var bio = "Today is January second";

// Create a Person object
var mintBrownies = new Recipe("Mint Borwnies", bio);
var myMother = new Recipe("Jill",  bio);

Recipes = [mintBrownies, myMother];

for(i = 0; i < Recipes.length; i++){
var a = document.write(Recipes[i].name.bold());
document.write("<br>");
document.write(Recipes[i].bio);
document.write("<br>");
document.write("<br>");
}
if(mintBrownies.name == "Mint Borwnies"){
  document.write("yes");
}
