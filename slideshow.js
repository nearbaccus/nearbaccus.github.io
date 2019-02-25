
var currentSlide = 1;
display(currentSlide);

function plusSlides(num) {
  display(currentSlide += num);
}


function display(num) {
  var slides = document.getElementsByClassName("recentRecipe");
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  if (num < 1) {
    currentSlide = slides.length
  }

  if (num > slides.length) {
    currentSlide = 1
  }

  slides[currentSlide-1].style.display = "block";
}
