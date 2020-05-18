// ? Write a function that takes an array, and finds the second highest value
// I want Sort the array into ascending order
// Then I'll be able to pick the second to last item

const numbers = [1, 2, 3, 40, 4, 5, 10];

const findSecondHighestValue = arr => {
  // Step 1.
  // Need to include a compare function with .sort() so that we are comparing numbers instead of strings
  // Ref. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  const compareNumbers = (a, b) => a - b;

  // Step 2.
  const sortedAscendingArr = arr.sort(compareNumbers);

  // Step 3.
  const secondLastNumber = sortedAscendingArr.slice(-2, -1);
  // Step 4.
  // Pass the array index to output the value rather than the array
  return secondLastNumber[0];
};

// Can refactor into a cheeky one liner, although not as immediately readable
const findSecondHighestValueOneLine = arr => arr.sort((a, b) => a - b).slice(-2, -1)[0];

console.log(findSecondHighestValue(numbers));
console.log(findSecondHighestValueOneLine(numbers));
