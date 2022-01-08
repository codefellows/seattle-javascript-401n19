'use strict'

const quicksort = require('./quick-sort');

describe.only('testing quicksort', () => {
  it('quicksort(list, isGreater) should sort from largest to smallest', () => {
    let nums = [4, 9, 2, 3, 1, 10];
    expect(quicksort(nums)).toEqual([10, 9, 4, 3, 2, 1])
  })

  it('quicksort(list, isSmaller) should sort from smallest to largest', () => {
    let nums = [4, 9, 2, 3, 1, 10];
    expect(quicksort(nums)).toEqual([1, 2, 3, 4, 9, 10])
  })

  let nums = [23, 3, 5, 1, 55, 38, 49, 200, 432, 1, 352];

  console.log(quicksort(nums));
});