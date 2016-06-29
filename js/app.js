
$(document).ready(function() {
  
  var fbGame = function(num) {
    console.log(num);
    for (var i = 1; i <= num; i++) {   
      if (i % 15 === 0 ) {
        document.write('<p>FizzBuzz</p>');
      }
      else if (i % 3 === 0) {
        document.write('<p>Fizz</p>');
      }
      else if (i % 5 === 0 ) {
        document.write('<p>Buzz</p>');
      }
      else {
        document.write(i + '<br>');
      }
    }
  }      
  do {
    var input = prompt("Enter a number.");
    input = parseFloat(input);
  }
  while (isNaN(input) || input % 1 != 0) 

  fbGame(input);
})


//create text input for user to input a number
//create funtion that takes integer as argument then counts from 1 to argument value and substituting fizz, buzz, fizzbuzz accordingly
//convert value of user from string to number using +
//validate user input to ensure user submit a number using parseInt()
//no decimal value