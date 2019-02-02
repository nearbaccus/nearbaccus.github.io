function enlargeTwo(large){
  large.style.fontSize = "35px";
  large.style.color = "Blue";

}



function smallerTwo(large){
  large.style.fontSize = "20px";
  large.style.color = "Black";

}



function makeGrey(x){

  x.style.backgroundColor= "Gray";

}



function makeBlack(x){

  x.style.backgroundColor= "black";

}



var slideIndex = 1;

showSlides(slideIndex);



function plusSlides(x){

  showSlides(slideIndex +=x);

}



function showSlides(x){

  var i;

  var slides = document.getElementsByClassName('slide');

  if (x> slides.length){

    slideIndex=1;

  }

  if(x<1){

    slideIndex=slides.length;

  }

  for (i=0; i<slides.length; i++){

    slides[i].style.display="none";

  }

  slides[slideIndex-1].style.display = "block";

}
