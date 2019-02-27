// Get the button, and when the user clicks on it, execute myFunction
var num = 0;
document.getElementById("filterBtn").onclick = function() {dropMenu()};

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function dropMenu() {
  document.getElementById("dropdownd").classList.toggle("show");
}
