// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion
// This function returns the largest number in a given array.
function findMax(array){
    if(array.length === 1){
      return array[0] //base case: if length of array is 1 number then return the first number
    } else {
      if (array[0] >=array[array.length-1]){
        array.pop();//action: remove the last item in the array
        return findMax(array);
      }
    else {
      return findMax(array.slice(1)) //recursive: remove the first item in the array
    }
  }
}
// This function returns the factorial of a given number.
function factorial(n){
    //base case
    if (n === 0) {
      return 1;
    } else {
      //action + recursive
      return n * factorial(n -1);
    }
}
// This function returns the Nth number in the fibonacci sequence.
// https://en.wikipedia.org/wiki/Fibonacci_number
// For this function, the first two fibonacci numbers are 1 and 1
function fibonacci(i){
    if (i < 2) { // first two fibonacci numbers are 1 (index 0 and 1) so base case returns 1
      return i;
    }
    else { // from 2 onwards, the recursion applies
      return fibonacci(i -1) + fibonacci(i-2);
    }
}

function coinFlips(num){
    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // if 3 times,
    // ["HHH", "HTH", "THT", "TTH"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"
    let result = [];
    function getFlips(num, result, current){
      if (n===1){
        result.push(current+'H');
        result.push(current+'T');
      } else {
        getFlips(num - 1, result, current + 'H');
        getFlips(num - 1, result, current + 'T');
      }
    }
    //recursive - starts with empty string
    getFlips(n,result, '');
    return result;
}

function letterCombinations(){
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
}

module.exports = {
    findMax,
    factorial,
    fibonacci,
    coinFlips,
    letterCombinations
}
