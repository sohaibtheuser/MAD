const str1 = "SOHAIB";
const char = str1.charAt(7);
console.log(char); 

// 2 charCodeAt()
const str2 = "python";
const unicode = str2.charCodeAt(7);
console.log(unicode); 

// 3 concat()
const str3 = "React";
const str4 = "Js";
const concatenated = str3.concat(", ", str4);
console.log(concatenated); 

// 4 constructor
const str5 = "Pakistan";
const constructor = str5.constructor;
console.log(constructor); 

// 5 endsWith()
const str6 = "Hello, World!";
const endsWithWorld = str6.endsWith("World!");
console.log(endsWithWorld); 

// 6 fromCharCode()
const unicodeValues = [72, 101, 108, 108, 111];
const str7 = String.fromCharCode(...unicodeValues);
console.log(str7); 

// 7 includes()
const str8 = "Sohaib Hassan";
const containsHello = str8.includes("Hello");
console.log(containsHello); 

// 8 indexOf()
const str9 = "Python is a language";
const index = str9.indexOf("is");
console.log(index); 

// 9 lastIndexOf()
const str10 = "Compiler and Interpreter";
const lastIndex = str10.lastIndexOf("Native");
console.log(lastIndex); 

// 10 length
const str11 = "A brown fox jumps over a lazy dog";
const length = str11.length;
console.log(length); 

// 11 localeCompare()
const str12 = "Svelte";
const str13 = "JS";
const comparison = str12.localeCompare(str13);
console.log(comparison); 

// 12 match()
const str14 = "Coding is awesome";
const matches = str14.match(/o/g);
console.log(matches); 

// prototype
// You typically don't use this directly on strings, but it's used for extending objects.

// 13 repeat()
const str15 = "Mobile";
const repeated = str15.repeat(3);
console.log(repeated); 

// 14 replace()
const str16 = "Mobile Application";
const replaced = str16.replace("Mobile", "React");
console.log(replaced); 

// 15 replaceAll()
const str17 = "Clud Computing";
const replacedAll = str17.replaceAll("Computing", "Technology");
console.log(replacedAll); 

// 16 search()
const str18 = "My Name is Sohaib Hassan";
const searchResult = str18.search("Hassan");
console.log(searchResult); 

// 17 slice()
const str19 = "Programming";
const sliced = str19.slice(10, 17);
console.log(sliced); 

// 18 split()
const str20 = "Hello, World!";
const parts = str20.split(" ");
console.log(parts); 

// 19 startsWith()
const str21 = "Coding is Awesome";
const startsWithHello = str21.startsWith("Coding");
console.log(startsWithHello); 

// 20 substr()
const str22 = "Next.js";
const subString = str22.substr(0, 5);
console.log(subString); 

// 21 substring()
const str23 = "Hello, World!";
const subString2 = str23.substring(7, 12);
console.log(subString2); 

// 22 toLocaleLowerCase()
const str24 = "Hacking";
const lowerCase = str24.toLocaleLowerCase();
console.log(lowerCase); 

// 23 toLocaleUpperCase()
const str25 = "deep learning";
const upperCase = str25.toLocaleUpperCase();
console.log(upperCase); 

// 24 toLowerCase()
const str26 = "Full Stack Application Developer";
const lowerCase2 = str26.toLowerCase();
console.log(lowerCase2); 

// 25 toString()
const str27 = "PHP";
const strToString = str27.toString();
console.log(strToString); 

// 26 toUpperCase()
const str28 = "Hello, World!";
const upperCase2 = str28.toUpperCase();
console.log(upperCase2); 

// 27 trim()
const str29 = "   Development is hard   ";
const trimmed = str29.trim();
console.log(trimmed); 

// 28 trimEnd()
const str30 = "   Hello, World!   ";
const trimmedEnd = str30.trimEnd();
console.log(trimmedEnd); 

// 29 trimStart()
const str31 = "   Coding , Programming   ";
const trimmedStart = str31.trimStart();
console.log(trimmedStart); 

// 30 valueOf()
const str32 = new String("My goal is Full Stack ");
const primitiveValue = str32.valueOf();
console.log(primitiveValue); 
