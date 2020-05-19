// ? Write a function that takes an array, and finds the second highest value
// I want Sort the array into ascending order
// Then I'll be able to pick the second to last item

const numbers = [1, 2, 3, 40, 4, 5, 10];
const emptyArr = [];
const undefinedVar = undefined;

const findSecondHighestValue = arr => {
  // Step 1.
  // Check if array exists and that it conatains more than one item,
  // to prevent returning an undefined value
  if (Array.isArray(arr) && arr.length > 1) {
    // Step 2.
    // Need to include a compare function with .sort() so that we are comparing numbers instead of strings
    // Ref. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    const compareNumbers = (a, b) => a - b;

    // Step 3.
    const sortedAscendingArr = arr.sort(compareNumbers);

    // Step 4.
    const secondLastNumber = sortedAscendingArr.slice(-2, -1);
    // Step 5.
    // Pass the array index to output the value rather than the array
    return secondLastNumber[0];
  }

  return 'The input needs to be an array with at least two values';
};

// Can refactor into a cheeky one liner, although not as immediately readable
// Is quite long now so split it over a few lines for readability
const findSecondHighestValueOneLine = arr =>
  Array.isArray(arr) && arr.length > 1
    ? arr.sort((a, b) => a - b).slice(-2, -1)[0]
    : 'The input needs to be an array with at least two values';

console.log(findSecondHighestValue(numbers));
console.log(findSecondHighestValue(emptyArr));
console.log(findSecondHighestValue(undefinedVar));
// console.log(findSecondHighestValueOneLine(numbers));
// console.log(findSecondHighestValueOneLine(emptyArr));
// console.log(findSecondHighestValueOneLine(undefinedVar));
