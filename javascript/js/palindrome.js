function checkPalindrome() {
    var numberInput = document.getElementById('numberInput').value;
    
    // Convert the number to a string to make it easier to reverse
    var numberString = numberInput.toString();
    
    // Reverse the string
    var reversedString = numberString.split('').reverse().join('');
    
    // Check if the reversed string is the same as the original string
    if (numberString === reversedString) {
      document.getElementById('result').innerHTML = numberInput + " is a palindrome!";
    } else {
      document.getElementById('result').innerHTML = numberInput + " is not a palindrome.";
    }
  }