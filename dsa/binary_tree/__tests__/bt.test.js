'use strict';

const Node = require('../util/node');
const BT = require('../util/bt');

// create Nodes 1 - 9 and left/right relationships

//          1 -> Root
//         / \
//        2   3
//       /   / \
//      6   4   5
//       \
//        7
//       / \
//      8   9

// we want this to happen before each test
let tree = null;

beforeAll(() => {
  let one = new Node(1);
  let two = new Node(2);
  let three = new Node(3);
  let four = new Node(4);
  let five = new Node(5);
  let six = new Node(6);
  let seven = new Node(7);
  let eight = new Node(8);
  let nine = new Node(9);

  one.left = two;
  one.right = three;
  three.left = four;
  three.right = five;
  two.left = six;
  six.right = seven;
  seven.left = eight;
  seven.right = nine;

  // Create BT with root Node(1)
  tree = new BT(one);

});

let preRes = [1, 2, 6, 7, 8, 9, 3, 4, 5];
let inRes = [6, 8, 7, 9, 2, 1, 4, 3, 5];
let postRes = [8, 9, 7, 6, 2, 4, 5, 3, 1];

describe('Binary Tree Traversal', () => {

  it('preOrder properly traverses and returns result', () => {
    let preOrder = tree.preOrder();
    expect(preOrder).toEqual(preRes);
  });

  it('inOrder properly traverses and returns result', () => {
    let inOrder = tree.inOrder();
    expect(inOrder).toEqual(inRes);
  });

  it('postOrder properly traverses and returns result', () => {
    let postOrder = tree.postOrder();
    expect(postOrder).toEqual(postRes);
  });
});

describe('Binary Tree max()', () => {
  it('can find the max value in a tree and return that', () => {
    let btMax = tree.max();
    expect(btMax).toEqual(9);
  });
});