function isPalindrome(string) {
  const reversedString = string.split("").reverse().join("");
  console.log(reversedString);
  return reversedString === string;
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
