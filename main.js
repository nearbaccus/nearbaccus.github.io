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
