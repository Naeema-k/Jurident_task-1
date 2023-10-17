var clickCount = 0;
var button = document.getElementById("myButton");

button.addEventListener("click", function() {
  clickCount++;
  document.getElementById("clickCount").innerHTML = clickCount;
});