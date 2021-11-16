
const BST = require('../util/bst');
let values = [9, 4, 17, 3, 6, 22, 5, 7, 20];
let bst = new BST();

beforeAll(() => {
  values.map((val, i) => {
    return bst.add(val);
  });
});

describe('Binary Search Tree', () => {

  it('can insert and find a value', () => {
    expect(bst.contains(17)).toBeTruthy();
  });

  it('contains(n) will return false if !n', () => {
    expect(bst.contains(420)).toBeFalsy();
  });

});