'use strict';

const quicksort = module.exports = function (items, left, right) {
  left = left || 0;
  right = right || items.length - 1;
  // console.log(items, left, right);
  // console.log(items.slice(left, right));

  if (items.length > 1) {
    let pivot = partition(items, left, right);
    console.log('Pivot', pivot, items[pivot]);
    if (left < (pivot - 1)) {
      quicksort(items, left, pivot);
    }

    if ((pivot + 1) < right) {
      quicksort(items, pivot, right);
    }

  }
  return items;
}

function swap(items, left, right) {
  //console.log('swaping', items[left], items[right]);
  let tmp = items[left];
  items[left] = items[right];
  items[right] = tmp;
}

function partition(items, left, right) {

  let pivot = Math.floor((left + right) / 2);

  if (left <= right) {
    left = _walkLeft(items, left, pivot);
    right = _walkRight(items, right, pivot);
    if (left <= right) {
      if (left < right) swap(items, left, right);
      return partition(items, left + 1, right - 1);
    }
  }
  return pivot;
}

function _walkLeft(items, left, pivot) {
  // console.log('walking left:', `items[left]${items[left]} < items[pivot]${items[pivot]}`, 'left', left, 'Pivot', pivot)
  if (items[left] < items[pivot])
    return _walkLeft(items, left + 1, pivot);
  // console.log('Ran left', left);
  return left;
}

function _walkRight(items, right, pivot) {
  // console.log('walking right:', `items[pivot]${items[pivot]} < items[right]${items[right]}`, 'right', right, 'Pivot', pivot)
  if (items[pivot] < items[right])
    return _walkRight(items, right - 1, pivot);
  // console.log('Ran right', right);
  return right;
}

const items2 = [23, 46, 87, d, 9, 19, 120, -2, 0, 10, -120, 34, 10, 9, 0]
// const items = [5, 3, 7, 6, 2, 9, 9, 3, 7];
// let sortedArray = quicksort(items, 0, items.length - 1);
let sortedArray2 = quicksort(items2);
console.log('2', sortedArray2);
// console.log('1', sortedArray);