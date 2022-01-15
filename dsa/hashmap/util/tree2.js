class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(node) {
    this.root = node || null;
  }
}

let one = new Node(10);
let two = new Node(12);
let three = new Node(3);
let four = new Node(14);
let five = new Node(5);
let six = new Node(16);
let seven = new Node(7);
let eight = new Node(18);
let nine = new Node(9);

one.left = two;
one.right = three;
three.left = four;
three.right = five;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;

/*
           10
         /   \
        12     3
       /     / \
      16     14   5
       \
        7
       / \
      18   9
*/

// Create BT with root Node(1)
let tree = new BinaryTree(one);

module.exports = tree;