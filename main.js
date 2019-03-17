
function makeGrey(a){
  a.style.backgroundColor= "#ccccff";
    a.syle.color = "black";
}

function makeBlack(a){
  a.style.backgroundColor= "black";
}

// var lis = document.querySelectorAll("button");
//
// for(i = 0; i < lis.length; i++){
//     lis[i].innerHTML = "Read More";
//   lis[i].addEventListener("mouseover", function (){
//     this.style.backgroundColor = "#B573D0";
//   });
//   lis[i].addEventListener("mouseout", function (){
//     this.style.backgroundColor = "#ccccff";
//   });
// }


function Recipe(allIng, directions, id, titleId, title, ingId, ingredients){
  this.allIng = allIng;
  this.directions = directions;
  this.title = title;
  this.ingId = ingId;
  this.titleId = titleId;
  this.ingredients = ingredients;
  this.id = id;
}

creIng = ["1 T butter","1 T olive oil","1 medium onion, thinly sliced","3 cloves garlic, smashed with the side of a knife and peeled","5 c canned whole tomatoes in juice (fire roasted is good too)","1 can low sodium chicken broth","2/3 heavy cream","2 t kosher salt","1/4 t freshly ground pepper","1/4 t crushed red pepper flakes","1/4 t celery seed","1/4 dried oregano (or 1/2 t fresh, finely chopped)","1 1/2 T sugar (more to taste)","Finely chopped chives for garnish"];
cinIng = ["Dough: 1 c milk","1 c water","1/4 c butter (cut into small pieces)","1 1/2 t salt","1/2 c white sugar","2 eggs","6 c all-purpose flour","2 t active dry yeast", "<br> Filling: <br>","1/3 c butter, softened","1 1/2 t ground cinnamon","3/4 c white sugar","<br> Frosting:<br>", "6 T melted butter","1 t vanilla extract","6 T milk","3 1/2 c instead","2 ounces cream cheese, softened"];
carIng = ["Ingredients: 1 c unsalted butter","12 oz bittersweet chocolate bars (Ghirardelli)","1 1/2 c sugar","4 large eggs","1 T vanilla extract","1 1/4 c all purpose flour","1/2 t table salt","14 oz caramel candies, unwrapped","1/3 c heavy whipping cream","1 c semisweet chocolate chips"];
sheIng = ["Cake:<br> 1 cup butter", "1 cup water","2 cups white sugar","2 eggs","1/2 c sour cream","1 teaspoon vanilla","1/4 teaspoon almond extract","2 cups all-purpose flour","1/2 teaspoon salt","1 teaspoon baking soda", "<br> Frosting: <br> 3/4 c butter, softened","2 ounces cream cheese, softened","1/4 cup butter (softened)","1 teaspoon vanilla","1/4 teaspoon almond extract","6 T milk","4 cups powdered sugar","Sprinkles","<br>Variation Chocolate Frosting:","1/2 c plus 1/3 c of salted butter, melted","4 Tcocoa powder, heaping","6 T skim milk","1 t vanilla","4 c powdered sugar"];
vinIng = ["3 T best quality extra virgin olive oil","1 T balsamic vinegar","1 t sugar","Pour all ingredients into a mason jar; cover and shake vigorously."];

creDir = ["Heat butter and olive oil in a large saucepan. Sautee the onion and garlic until the onion is translucent, about 5 minutes. Add the tomatoes, water, cream, salt, red pepper flakes, celery seed, oregano, and sugar. Bring to a boil, then lower the heat to a simmer and simmer for 45-60. Puree in blender on hot soup function until completely smooth. Season to taste, adding more cream or chicken broth as needed. "];
sheDir = ["Preheat oven to 375 degrees F. Grease a half sheet pan (18x13x1” pan)Put 1 cup butter and water in a large saucepan. Heat over medium heat until butter is melted. Let cool slightly and pour into a large mixing bowl. Add sugar and stir until combined. Add eggs, sour cream, and extracts. Mix thoroughly. It might look a little curdled - but that’s okay, just keep going! Add baking soda, salt, flour. Stir just until combined. Spread into prepared baking sheet.Bake for 18-20 minutes or until cake is golden brown. Let cool for 20-30 minutes.Using the whisk attachment, cream the butter, cream cheese, and extracts together in a large mixing bowl. Add the powdered sugar and continue to beat until light and fluffy.Top with sprinkles, if desired. <br> <br> Variation with chocolate icing: <br>Place butter into a 2 quart measuring cup and microwave until melted. Add cocoa powder, stir to combine. Next add the milk, vanilla, and powdered sugar. Stir together until no lumps remain, and pour over warm cake. Don’t cover the cake until the frosting has started to set up and can be covered with plastic wrap without sticking."];
cinDir = ["1. Put milk, water, and butter pieces in a microwave safe jar and heat for 1 minutes. Pour into bread machine pan, followed by beaten eggs (use same bowl), salt, and white sugar. Next layer flour, and then yeast.Alternately, you can make the cinnamon rolls in a mixer. Kneading 3 minutes the first time, followed by kneading again after 30 minutes, once more after 30 more minutes, and then let rise for the last 30 minutes. Proceed with the rest of the steps as usual.<br> 2. Grease the inside of the 2, 9” round cake pans with a thick layer of butter.<br>3. Split the dough into 2 pieces, and roll out into 2 thin rectangular pieces. Combine butter, sugar, and cinnamon. Slather each rolled out piece of dough and roll up. Using a serrated knife, or dental floss, cut each peace into 10 even slices and fit into 9” cake pan.<br>4. Let rise for 30-45 minutes, until dough is puffed.<br>5. Bake at 375 for 18 to 25 minutes.<br>6. Mix frosting ingredients and pour over warm rolls. Serve immediately."];
carDir = ["<br> 1. Preheat oven to 350<br> 2. Line a 9 x 13 pan with aluminum foil, leaving several inches hanging over the short ends of the pan. Grease the foil with cooking spray.<br> 3. Combine the butter and chocolate in a saucepan over low heat, stirring until melted and smooth.<br> 4. Transfer the mixture to a large bowl and add the sugar, eggs, and vanilla mixing until thick and glossy (about 1 minute with the mixer).<br> 5. Stir in the salt and flour.<br> 6. Transfer half the batter (2 ½ cups) to the baking pan and spread evenly.<br> 7. Bake for 20 minutes.<br> 8. Let cool for 20 minutes.<br> 9. While the brownies are cooling, stir the caramels and cream together in a saucepan over low heat until melted and smooth. Immediately spread the caramel mixture over the brownies.Pour the remaining brownie batter evenly over the caramel mixture and spread gently to cover (do not pour it in a clump, or it will be difficult to spread over the hot caramel without mixing the layers).<br> 10. Sprinkle the remaining chocolate chips on top.<br> 11. Bake for 20 minutes more.<br> 12. Cool the brownies completely in the pan."];
vinDir = ["<br>1. Serve over salad:<br>2. Mixed greens<br>3. Feta cheese, crumbled<br>4. Green apples, diced in 1/4” pieces<br>5. Roasted pecans<br>6. Craisins to taste, optional<br>Layer all ingredients, starting with mixed greens. Pour dressing over top right before serving."];

var cinnamonRolls = new Recipe(document.getElementById("w"),cinDir, document.getElementById("cinnamonRolls"), document.getElementById("crtitle"), "Cinnamon Rolls", document.getElementById("ing"), cinIng);
var creamyTomatoSoup = new Recipe(document.getElementById("w"),creDir, document.getElementById("creamyTomatoSoup"), document.getElementById("ctstitle"), "Creamy Tomato Soup", document.getElementById("ctsing"), creIng);
var caramelBrownies = new Recipe(document.getElementById("w"),carDir,document.getElementById("caramelBrownies"), document.getElementById("cbtitle"), "Caramel Filled Brownies", document.getElementById("cbing"), carIng);
var sheetCake = new Recipe(document.getElementById("w"),sheDir, document.getElementById("sheetCake"), document.getElementById("sctitle"), "White Texas Sheet Cake", document.getElementById("scing"), sheIng);
var saladVin = new Recipe(document.getElementById("w"),vinDir, document.getElementById("saladVin"), document.getElementById("svtitle"), "Balsamic Vinaigrette Sald", document.getElementById("sving"), vinIng);


var Recipes = [sheetCake, cinnamonRolls, creamyTomatoSoup, caramelBrownies, saladVin];

var fullIngId = document.getElementById("w");
var directions = document.getElementById("directions");

for(i = 0; i<Recipes.length; i++){
if(Recipes[i].id){
  curRec = Recipes[i];
curRec.titleId.innerHTML = curRec.title;
if(document.getElementById("main")){
for(j =0; j< 1; j++){
curRec.ingId.innerHTML = curRec.ingredients[j];
}
if(curRec.ingredients.length < 13){
for(j =1; j< curRec.ingredients.length; j++){
curRec.ingId.innerHTML +=  " &middot; " + curRec.ingredients[j];
}}
else{
  for(j =1; j< 14; j++){
  curRec.ingId.innerHTML +=  " &middot; " + curRec.ingredients[j] ;
  }
  curRec.ingId.innerHTML += "...";
}}
else if (document.getElementById("ind")){
  if (curRec.allIng) {
    for(j =0; j< curRec.ingredients.length; j++){
    curRec.allIng.innerHTML += curRec.ingredients[j] + "<br>";
    }
  }
  if(directions){
    directions.innerHTML = curRec.directions;
  }

}
}}
