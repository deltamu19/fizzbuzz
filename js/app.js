
$(document).ready(function() {
  
  $('#input').submit(function() {
  
  var num = $('#input').val().parseInt();

  var fbGame = function(num) {
    for (var num = 1; num <= 100; num++) {
    if (num % 15 === 0 ) {
      return $('#answer').append('FizzBuzz');
    }
    else if (num % 3 === 0) {
      return $('#answer').append('Fizz');
    }
    else if (num % 5 === 0 ) {
      return $('#answer').append('Buzz');
    }
    else {
      return $('#answer').append(num);
    }
    }
  }
  })
})

//create text input for user to input a number
//create funtion that takes integer as argument then counts from 1 to argument value and substituting fizz, buzz, fizzbuzz accordingly
//convert value of user from string to number using +
//validate user input to ensure user submit a number using parseInt()
//no decimal value