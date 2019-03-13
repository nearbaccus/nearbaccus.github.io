//filter


function myFunction() {
  var dessertCheck = document.getElementById("dessert");
  var dinnerCheck = document.getElementById("dinner");


checks = [dessertCheck, dinnerCheck];

  var desserts = document.getElementsByClassName("de");
  var dinner = document.getElementsByClassName("di");

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

  if(dinnerCheck.checked == false && dessertCheck.checked == false){
    for (i=0; i < desserts.length; i++){desserts[i].style.display="block";}
    for (i=0; i < dinner.length; i++){dinner[i].style.display="block";}
  }


}
