function checkPrime() {
    var numberInput = document.getElementById('numberInput').value;
    var resultElement = document.getElementById('result');
    
    // Convert input value to integer
    var number = parseInt(numberInput);

    if (isNaN(number)) {
      resultElement.textContent = "Please enter a valid number.";
      return;
    }

    // Check if the number is less than 2
    if (number < 2) {
      resultElement.textContent = "Prime numbers start from 2.";
      return;
    }

    // Check for prime
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        resultElement.textContent = number + " is not a prime number.";
        return;
      }
    }

    resultElement.textContent = number + " is a prime number.";
  }