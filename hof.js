/* 1. Reverse String.
The problem is to create a program that uses the setTimeout() function to reverse a given string after a delay
of 2 seconds. The program should use a variable “input” storing a string as input and then implement a delay of
2 seconds before reversing the string. The reversed string should then be printed as output.
*/

function Reverse(){
    let input = "Sudarshan";
    let output = " ";
    for(let i = input.length-1 ; i>=0 ; i--){
        output += input[i];
    }
    console.log(output);
}

const myTimeOut = setTimeout(Reverse , 2000);

/*
2. Random Number Generator with Delay and Progress Indication:
The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a
variable so can be modified. The program displays a message every second indicating the time remaining
until the random number is generated and then outputs the generated number.
*/

function ran(){
    let res = Math.random() * 100 ;
    console.log(res);
}

const rand = setInterval(ran , 1000);

/*
3. Build a feature for Store's Inventory.
Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript
program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should
use the map higher-order function to create a new object with the converted prices in Rupees.
*/

const prices = [2,5,6,8,9];
    let res = [0];
    let i = 0;
prices.map(function(element){
    res[i++] = element * 80;
})   
console.log(res);

/*
4. Filtering and Capitalizing: Books Published After 2010 with Author Names.
Write a program that takes a list of books, including their authors and publication years as input. The program
should then filter out all books that were published before 2010 and create a new array with the remaining
books, but with their author names capitalized.
*/

const books = [
    { name: "History", author: "Ramen", publicationyear: 2005 },
    { name: "Geography", author: "Shyam", publicationyear: 2014 },
    { name: "Science", author: "Arjun", publicationyear: 2015 },
    { name: "Mathematics", author: "Laxman", publicationyear: 2006 },
    { name: "Psychology", author: "Ramprasad", publicationyear: 2012 },
    { name: "Biology", author: "Avijit", publicationyear: 2007 },
  ];
  
  const filteredBooks = books
    .filter((el) => el.publicationyear > 2010)
    .map((book) => ({
      nam: book.name,
      author: book.author.toUpperCase(),
      publicationyear: book.publicationyear,
    }));
  
  console.log(filteredBooks);  

/*
5. URL validation.
Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://,
followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters.
Print a message indicating if the input matches the conditions or not.
*/

const urlRegex =
  /^(http|https):\/\/[\w\-+]+(\.[\w\-+]+)+([\w.,@?^=%&:/~+#]*[\w@?^=%&/~+#])?$/;

const url = "https://example.com";

if (url.match(urlRegex)) {
  console.log(`${url} is a valid URL`);
} else {
  console.log(`${url} is not a valid URL`);
}

/*
6. LinkedIn Profile URL Validator.
As a developer, you want to create a program that validates LinkedIn profile URLs to ensure that they are
formatted correctly and contain only valid characters. Valid LinkedIn profile URLs should start with https://
www.linkedin.com/in/ followed by a combination of one or more letters, digits, underscores, or hyphens, and
end with a letter or digit. The length of the profile ID should be between 5 and 30 characters.
The program should use a regular expression to match valid LinkedIn profile URLs, and should not match URLs
that do not follow this format or contain invalid characters. The program should provide clear output messages
indicating whether each input is a valid LinkedIn profile URL or not.
*/

const linkedinUrlRegex =
  /^https:\/\/www.linkedin.com\/in\/[a-z0-9_-]{5,30}[a-z0-9]$/i;

const url1 = "https://www.linkedin.com/in/sudarshan-mukhopadhyay";
const url2 = "https://www.linkedin.com/in/jane-doe/";
const url3 = "https://www.linkedin.com/in/john_doe-123";
const url4 = "https://www.linkedin.com/in/john.doe";
const url5 = "https://www.linkedin.com/in/johndoe";
const url6 = "https://www.linkedin.com/in/john_doe123_456";

if (url1.match(linkedinUrlRegex)) {
  console.log(`${url1} is a valid LinkedIn profile URL`);
} else {
  console.log(`${url1} is not a valid LinkedIn profile URL`);
}

if (url2.match(linkedinUrlRegex)) {
  console.log(`${url2} is a valid LinkedIn profile URL`);
} else {
  console.log(`${url2} is not a valid LinkedIn profile URL`);
}

if (url3.match(linkedinUrlRegex)) {
  console.log(`${url3} is a valid LinkedIn profile URL`);
} else {
  console.log(`${url3} is not a valid LinkedIn profile URL`);
}

if (url4.match(linkedinUrlRegex)) {
  console.log(`${url4} is a valid LinkedIn profile URL`);
} else {
  console.log(`${url4} is not a valid LinkedIn profile URL`);
}

if (url5.match(linkedinUrlRegex)) {
  console.log(`${url5} is a valid LinkedIn profile URL`);
} else {
  console.log(`${url5} is not a valid LinkedIn profile URL`);
}

if (url6.match(linkedinUrlRegex)) {
  console.log(`${url6} is a valid LinkedIn profile URL`);
} else {
  console.log(`${url6} is not a valid LinkedIn profile URL`);
}