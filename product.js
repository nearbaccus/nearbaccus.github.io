
function Product(id, link, imgsrc){
  this.id = id;
  this.link = link;
  this.imgsrc = imgsrc;
}

var sheetPan = new Product(document.getElementById("sheetPan"), "https://www.amazon.com/gp/product/B000G0KJG4/ref=oh_aui_search_asin_title?ie=UTF8&psc=1", "sheetPan.png");
var breadPan = new Product(document.getElementById("breadPan"), "https://www.williams-sonoma.com/products/williams-sonoma-potato-masher/?pkey=s%7Cpotato%20masher%7C6", "breadPan.png");
var muffinTin = new Product(document.getElementById("muffinTin"), "https://www.williams-sonoma.com/products/williams-sonoma-copper-goldtouch-nonstick-muffin-pan-12-well/?pkey=s%7Cgold%20touch%7C146", "muffinTin.png");

var Products = [sheetPan, breadPan, muffinTin];
var ProductList = document.getElementsByTagName('a');

for (var i = 0; i < Products.length; i++) {
  if(Products[i].id){
var img = document.createElement("img");
img.style.height = "16%";
img.style.width = "16%";
img.src = Products[i].imgsrc;
var src = Products[i].id;
src.appendChild(img);
}}

function productPage(){
window.open(Products[i].link, "_blank");
}


//https://stackoverflow.com/questions/1226714/how-to-get-the-browser-to-navigate-to-url-in-javascript
