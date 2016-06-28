
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