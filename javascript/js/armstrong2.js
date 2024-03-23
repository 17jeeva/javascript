function checkArmstrong() {
    const numberInput = document.getElementById('numberInput').value;

    // Function to calculate the power of a number
    function power(base, exponent) {
      let result = 1;
      for (let i = 0; i < exponent; i++) {
        result *= base;
      }
      return result;
    }

    // Function to check if a number is Armstrong
    function isArmstrong(number) {
      const numString = number.toString();
      const numDigits = numString.length;
      let sum = 0;

      for (let i = 0; i < numDigits; i++) {
        const digit = parseInt(numString[i]);
        sum += power(digit, numDigits);
      }

      return sum === number;
    }

    const outputElement = document.getElementById('output');
    const inputNumber = parseInt(numberInput);

    if (!isNaN(inputNumber)) {
      if (isArmstrong(inputNumber)) {
        outputElement.textContent = `${inputNumber} is an Armstrong number!`;
      } else {
        outputElement.textContent = `${inputNumber} is not an Armstrong number.`;
      }
    } else {
      outputElement.textContent = 'Please enter a valid number.';
    }
  }