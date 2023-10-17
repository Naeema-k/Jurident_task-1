var clickCount = 0; // Declare a variable to store the click count
var button = document.getElementById("myButton"); // Get the button element with the ID "myButton"

// Add an event listener to the button for the "click" event
button.addEventListener("click", function() {
  clickCount++; //Increment the click count variable by 1
  document.getElementById("clickCount").innerHTML = clickCount; // Update the text of the element with the ID "clickCount" to display the new click count
});
