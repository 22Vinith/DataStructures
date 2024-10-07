// Strings in JavaScript
// In JavaScript, a string is a sequence of characters used to represent text. Strings are enclosed within single quotes ('), double quotes ("), or template literals/backticks ( ). Strings in JavaScript are immutable, meaning once a string is created, it cannot be changed, but you can create a new string based on modifications.

// Key Characteristics:
// Immutable: Strings cannot be changed after they are created.
// Sequence of Characters: A string is essentially an array-like structure of characters.
// Indexed: Each character in a string has an index, starting from 0.

// Syntax:
// let stringName = "This is a string";  // Using double quotes
// let anotherString = 'This is another string';  // Using single quotes
// let templateString = `This is a template literal string`;  // Using backticks (template literals)

// Simple Example:
// Creating strings
let greeting = "Hello, World!";
let name = 'John Doe';

// Accessing characters
console.log(greeting[0]); // Output: H
console.log(greeting[7]); // Output: W

// String concatenation
let fullGreeting = greeting + " Welcome, " + name + "!";
console.log(fullGreeting); // Output: Hello, World! Welcome, John Doe!

// Template literals (string interpolation)
let age = 25;
let message = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(message); // Output: Hello, my name is John Doe and I am 25 years old.

// Common String Methods:
// length: Returns the length of the string.
// toUpperCase(): Converts the string to uppercase.
// toLowerCase(): Converts the string to lowercase.
// charAt(): Returns the character at a specified index.
// indexOf(): Returns the index of the first occurrence of a specified value.
// substring(): Extracts characters between two indices.
// replace(): Replaces a specified value with another value in the string.
// split(): Splits the string into an array based on a specified separator



// 1. length
// Returns the length (number of characters) in the string.


let str1 = "Hello";
console.log(str1.length);  // Output: 5
// 2. charAt()
// Returns the character at a specified index in a string.


let str2 = "Hello";
console.log(str2.charAt(1));  // Output: "e"
// 3. toUpperCase()
// Converts all characters in a string to uppercase.


let str3 = "hello";
console.log(str3.toUpperCase());  // Output: "HELLO"
// 4. toLowerCase()
// Converts all characters in a string to lowercase.


let str4 = "HELLO";
console.log(str4.toLowerCase());  // Output: "hello"
// 5. includes()
// Determines whether a string contains a specified substring. Returns true or false.


let str5 = "Hello, world!";
console.log(str5.includes("world"));  // Output: true
// 6. indexOf()
// Returns the index of the first occurrence of a specified value. Returns -1 if the value is not found.


let str6 = "Hello, world!";
console.log(str6.indexOf("world"));  // Output: 7
// 7. slice()
// Extracts a portion of a string and returns it as a new string without modifying the original.


let str7 = "Hello, world!";
console.log(str7.slice(0, 5));  // Output: "Hello"
// 8. substring()
// Similar to slice(), but doesn't accept negative indices. Returns a portion of the string between two indices.


let str8 = "Hello, world!";
console.log(str8.substring(0, 5));  // Output: "Hello"
// 9. replace()
// Replaces the first occurrence of a specified value with another value.


let str9 = "Hello, world!";
let newStra = str9.replace("world", "Earth");
console.log(newStr);  // Output: "Hello, Earth!"
// 10. replaceAll()
// Replaces all occurrences of a specified value with another value.


let str0 = "Hello, world! Hello, world!";
let newStr = str0.replaceAll("world", "Earth");
console.log(newStr);  // Output: "Hello, Earth! Hello, Earth!"
// 11. trim()
// Removes whitespace from both ends of a string.


let str66 = "  Hello, world!  ";
console.log(str66.trim());  // Output: "Hello, world!"
// 12. split()
// Splits a string into an array of substrings based on a specified delimiter.


let str44 = "apple,banana,orange";
let fruits = str44.split(",");
console.log(fruits);  // Output: ["apple", "banana", "orange"]
// 13. concat()
// Concatenates two or more strings and returns a new string.


let str11 = "Hello";
let str22 = "World";
let result = str11.concat(", ", str22, "!");
console.log(result);  // Output: "Hello, World!"
// 14. repeat()
// Repeats the string a specified number of times.


let strr = "Hello";
console.log(strr.repeat(3));  // Output: "HelloHelloHello"
// 15. startsWith()
// Checks if the string starts with a specified substring. Returns true or false.


let strv = "Hello, world!";
console.log(strv.startsWith("Hello"));  // Output: true
// 16. endsWith()
// Checks if the string ends with a specified substring. Returns true or false.


let strrr = "Hello, world!";
console.log(strrr.endsWith("world!"));  // Output: true
// 17. padStart()
// Pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. Pads from the start.


let strb = "5";
console.log(strb.padStart(3, "0"));  // Output: "005"
// 18. padEnd()
// Pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. Pads from the end.


let strs = "5";
console.log(strs.padEnd(3, "0"));  // Output: "500"