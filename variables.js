// this is a variable, we start it at 0 
var counter = 0; 
// display the variable in the 
// element "number" 
$("#number").text(counter);
// when this function is called it runs 
// everything inside the curly brackets 
function count() { 
// firstly one is added to the variable 
// ‘counter' 
counter = counter + 1;
// set the h1 element (with id “number”) 
// with the value of ‘counter' 
$("#number").text(counter); 
} 