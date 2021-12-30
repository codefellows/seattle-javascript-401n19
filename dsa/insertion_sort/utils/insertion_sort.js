'use strict';

//Big O(n^2) - Time
const insertionSort = (array) => {
  // set n to array.length
  let n = array.length;

  if (n === 0) return array;
  // Big O(n)
  for (let i = 0; i < n; i++) {
    let temp = array[i]; // Big O(1)
    let j = i - 1; // O(1)
    console.log('i', i, 'tmp', temp, 'j', j);
    // Big O(n)
    while (j >= 0 && temp < array[j]) {
      array[j + 1] = array[j]; // Big O(1)
      j--;
    }
    array[j + 1] = temp;
  }
  return array;
};

module.exports = insertionSort;