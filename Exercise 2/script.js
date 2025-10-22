const friend = "Brutus";
const shiftValue = 3;//given code


const alphabet = "abcdefghijklmnopqrstuvwxyz";
const index = alphabet.indexOf(firstLetter.toLowerCase());
//"step 1- Store the Latin alphabet in a variable with all letters in lowercase"

const firstLetter = friend[0]; //answer to Q1: number is 0 because in JS, the first item of a string is counted as 0 since JS uses zero based indexing
const index = alphabet.indexOf(firstLetter.toLowerCase());// step 2; Find the index of the first letter of Ceaser's friend. Store it in a variable.


const newIndex = index + shiftValue;
const encryptedFirstLetter = alphabet[];
//Step 3: Use the Caesar Cipher technique to shift the first letter of Caesar's friend by the given shift value, which is 3 positions. Find and store the encrypted letter in a variable.>>>>>QA2-The modolus operator, %, helps wrap around the alphabet. This ensures we get a valid index in the alphabet scope.

const alphabetLength = alphabet.length//step 4:Determine the length of the alphabet.

const alphabetLength = alphabet.length;
const newIndex = (index + shiftValue) % alphabetLength;
const encryptedFirstLetter = alphabet[newIndex];//step 5: Use the Caesar Cipher technique to shift the first letter of Caesar's friend by the given shift value, ensuring the shift wraps around the alphabet if it exceeds.

const encryptedMessage = "EUXWXV";
const teaserMessage = encryptedMessage.slice(0, 3);//step 6: Caesar remembers that Brutus is particularly fond of challenges. Before sending the encrypted message, Caesar decides to send only a part of it as a teaser. Extract the first 3 characters from the encrypted message using the slice method. (Assume that the encrypted message is "EUXWXV".)
