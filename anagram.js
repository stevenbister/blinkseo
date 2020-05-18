// ? Write a function that takes two strings as parameters, and returns true if they are anagrams.
// I want to sort each string alphabetically so that I can check if they match
// I then want to compare both of these strings and return true or false

const originalWord = 'happy';
const anagramOfOriginalWord = 'ppahy';
const notAnagramOfOriginalWord = 'sad';

const checkIfStringIsAnagram = (original, anagram) => {
  // Step 1.
  // Split the string into an array, sort it, then put it back together
  const sortString = str => str.split('').sort().join('');

  // Step 2.
  // Compare both strings
  if (sortString(original) === sortString(anagram)) {
    return true;
  }
  return false;
}

console.log(checkIfStringIsAnagram(originalWord, anagramOfOriginalWord));
