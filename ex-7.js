function isPalindrome(string) {
  // Start coding here
  //palindrome: การเขียนย้อนกลับแล้วมีค่าเท่าเดิม
  console.log(string);
  // console.log(string.reverse());
  //.reverse ต้องเป็น array
  console.log(string.split(""));
  console.log(string.split("").reverse().join(""));
  return string === string.split("").reverse().join("");
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
