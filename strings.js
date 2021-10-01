// String Concatenation
const breakfast = "cereal";
const lunch = "salad";
const dinner = "pizza";

// 1) Use the + operator to add the previous meal variables into the
//    following string in their appropriate locations for later printout.
//
//    Note: This will involve separating the string into multiple strings
//          for concatenating together.
const mealStringConcatenated = "For breakfast, I ate " + breakfast + ". For dinner I had " + dinner + ", but for lunch I had " + lunch + ".";


// String Interpolation
const shirtColor = "blue";
const shortsColor = "white";
const hatColor = "purple";

// 2) Convert the following regular string into a back-tick ``
//    template literal string and use substitutions ${} to add the
//    previous clothes variables into string for later printout.
const clothesStringInterpolated = `In the morning, I threw on my ${shirtColor} shirt and my ${shortsColor} shorts, but I forgot my ${hatColor} hat on the rack.`;


// Retrieving String Characters
const sentence = "The quick brown fox jumped over the lazy dog.";

// 3) Use the indexing operator [] on the previous string to get
//    the 17th character "f" and the 42nd character "d" and store
//    them in their respective variables below for later printout.
//
//    Note: Remember, indexes start at 0, not 1.
const seventeenthChar = sentence[16]
const fortySecondChar = sentence[41]


// Getting a String's Length
const longWord = "supercalifragilisticexpialidocious";

// 4) Use the "length" property to retrieve the previous string's
//    number of characters and store it in the following variable
//    for later printout.
const longWordLength = longWord.length


// Getting a Substring out of a String
const wholeString = "The quick brown fox jumped over the lazy dog.";

// 5) Use the "substring" function on the previous string variable
//    to retrieve the word "over" out of the sentence and store it
//    in the following variable.
//
//    Note: Remember, indexes start at 0, not 1.
const overWord = wholeString.length - 1


// Splitting a string into multiple strings
const unsplitString = "The quick brown fox jumped over the lazy dog";

// 6) Use the "split" function on the previous string variable to
//    split it into multiple strings containing each individual word.
//    Then store the result in the following variable for later printout.
//
//    Note: What character separates each word?
const splitString = unsplitString.split(' ');


// Mutating character cases
const unmutatedWord = "Seattle";

// 7) Use the "toLowerCase" and "toUpperCase" functions on the previous
//    string to get lower-case and upper-case versions of the word, and
//    store them in the following variables for later printout.
const lowerCaseWord = unmutatedWord.toLowerCase();
const upperCaseWord = unmutatedWord.toUpperCase();


// Getting the index of substrings
const basicSentence = "The quick brown fox jumped over the lazy dog";

// 8) Use the "indexOf" function to retrieve the index of the word
//    "the" and store it in the following variable for later printout.
const theIndex = basicSentence.indexOf("the");


// Printouts
//
// Note: Do not modify the code below
console.log("String Concatenation:", mealStringConcatenated);
console.log("String Interpolation:", clothesStringInterpolated);
console.log("17th Sentence Character:", seventeenthChar);
console.log("42nd Sentence Character:", fortySecondChar);
console.log("Length of supercalifragilisticexpialidocious:", longWordLength);
console.log("Pulled \"over\" from whole string:", overWord);
console.log("Sentence split into words:", splitString);
console.log("Lower-case Word:", lowerCaseWord);
console.log("Upper-case Word:", upperCaseWord);
console.log("Index of \"the\":", theIndex);


