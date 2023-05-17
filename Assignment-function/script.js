// Function Assignment 

// 1. Write a logic to reverse string of yourname

// John Doe  --->  // eoD nhoJ

function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("John Doe"));



// 2.Write a logic to print all prime number from 2 to 50

function isPrime(n) {
    if (n <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  for (let num = 2; num <= 50; num++) {
    if (isPrime(num)) {
      console.log(num);
    }
  }
  