/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let a = str.toLowerCase().replace(/[^\w]/g,'');
    let b = str.toLowerCase().replace(/[^\w]/g,'').split('').reverse().join('');
    console.log(b,a);
  
    if(a === b){
      return true;
    }else {
      return false;
    }
    
  }
  
module.exports = isPalindrome;
