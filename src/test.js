const { isValidEmail } = require(".")

console.log(isValidEmail("nurs")); // false
console.log(isValidEmail("nurs@example")); // false
console.log(isValidEmail("nurs@.example")); // false
console.log(isValidEmail("nurs@example.com")); // true
console.log(isValidEmail("nurs@example.co.uk")); // true
console.log(isValidEmail("nurs@sub.example.com")); // true
console.log(isValidEmail("nurs@123.123")); // true
console.log(isValidEmail("nurs@[123.123.123.123]")); // true
console.log(isValidEmail("nurs@example..com")); // false
console.log(isValidEmail("nurs@example.c")); // false