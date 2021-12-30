'use strict';

const sort = require('./insertion-sort');

describe('insertion sort', () => {

  it('returns on an empty array', () => {
    let arr = [];
    expect(sort(arr)).toEqual([]);
  })
  it('sorts an array of 1', () => {
    let arr = [1];
    expect(sort(arr)).toEqual([1]);
  });

  it('sorts an array of 2', () => {
    let arr = [2, 1];
    expect(sort(arr)).toEqual([1, 2]);
  });

  it('sorts an array of 3', () => {
    let arr = [2, 3, 1];
    let expected = [1, 2, 3];
    expect(sort(arr)).toEqual(expected);
  });

  it('sorts an array of n', () => {
    let arr = [];
    for (let i = 1; i <= 10; i++) {
      arr.push(Math.floor(Math.random() * 10));
    }
    expect(sort(arr)).toEqual(arr.sort());
  });

  it('sorts this array', () => {
    let arr = [8, 2, 4, 7, 6];
    expect(sort(arr)).toEqual([2, 4, 6, 7, 8])
  })

});