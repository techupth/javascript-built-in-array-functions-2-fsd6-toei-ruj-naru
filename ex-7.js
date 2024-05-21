function isPalindrome(string) {
  // Start coding here

  const reverseString = string.split("").reverse().join("");

  if (string === reverseString) {
    return true;
  } else {
    return false;
  }
}

//Example case
console.log(isPalindrome("reviver"));
console.log(isPalindrome("บวบ"));
console.log(isPalindrome("deliver"));
console.log(isPalindrome("eye"));
console.log(isPalindrome("cat"));
console.log(isPalindrome("LOL"));
