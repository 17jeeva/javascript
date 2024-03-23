function armstrongnumber(){
    var number = document.getElementById('numInput').value;
    var originalNum = number;
    var numDigits = String(number).length;
    var sum = 0;
    while (number > 0) {
        var digit = number % 10;
        console.log(digit)
        sum += Math.pow(digit, numDigits);
        console.log(sum)
        number = Math.floor(number / 10);
        console.log(number)
      }

      if (sum == originalNum) {
        document.getElementById('result').innerHTML = originalNum + ' is an Armstrong number!';
      } else {
        document.getElementById('result').innerHTML = originalNum + ' is not an Armstrong number.';
      }
}
// Assignment Operator += -= *= /= %=
// Example : a = 20, a=a+5 a=a+=5
// function checkArmstrong() {
//     const numberInput = document.getElementById('numInput').value;

//     // Function to calculate the power of a number
//     function power(base, exponent) {
//       let result = 1;
//       for (let i = 0; i < exponent; i++) {
//         result *= base;
//       }
//       return result;
//     }

//     // Function to check if a number is Armstrong
//     function isArmstrong(number) {
//       const numString = number.toString();
//       const numDigits = numString.length;
//       let sum = 0;

//       for (let i = 0; i < numDigits; i++) {
//         const digit = parseInt(numString[i]);
//         sum += power(digit, numDigits);
//       }

//       return sum === number;
//     }

//     const outputElement = document.getElementById('output');
//     const inputNumber = parseInt(numInput);

//     if (!isNaN(inputNumber)) {
//       if (isArmstrong(inputNumber)) {
//         outputElement.textContent = `${inputNumber} is an Armstrong number!`;
//       } else {
//         outputElement.textContent = `${inputNumber} is not an Armstrong number.`;
//       }
//     } else {
//       outputElement.textContent = 'Please enter a valid number.';
//     }
//   }