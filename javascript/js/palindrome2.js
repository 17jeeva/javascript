function checkPalindrome(fullName) 
{

    // find the length of a string
    const len = fullName.length

   // console.log(len);
    // loop through half of the string
    
    for (let i = 0; i < len / 2; i++) 
    {
        //console.log(len/2)
        // check if first and last string are same// anu
        if (fullName[i] !== fullName[len - 1 - i])  
         {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

// take input
const fullName = prompt('Enter a string: ');

// call the function
const value = checkPalindrome(fullName);

console.log(value);