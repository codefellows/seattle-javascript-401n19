'use strict';

const Node = require('./node');
const BT = require('./bt');

/*
Create a Binary Search Tree class
This class should be an extension of the 
Binary Tree Class, with the following additional methods:

***Add***
    Arguments: value
    Return: nothing
    Adds a new node with that value in the correct location in the binary search tree.

****Contains***
    Argument: value
    Returns: boolean indicating whether or not the value is in the tree at least once.
*/

class BinarySearchTree extends BT {

  constructor() {
    super(); // becuase ES6 tells us too
    this.root = null; // reference BST root
  }

  // set node var to root
  // check if root is null, if yes then make a new node and return
  // create recursion method _add
  // check value < left 
  // if no node then create node
  // otherwise, if node.left is not null, recursively call _add(node.left)
  // check value >= right 
  // if no node then create
  // otherwise, if node.left is not null, recursively call _add(node.right)
  // otherwise return null
  // FINALLY! kick it all off by calling the function _add() w/ node -> _add(node)

  // Big O(n)
  add(value) {
    // type check for integer
    // O(1)
    if (typeof value !== 'number') {
      return null;
    }

    // O(1)
    const node = this.root;
    if (node === null) {
      this.root = new Node(value);
      return;
    }

    // Big O? O(log n) 
    let _add = (node) => {

      // Left is less

      if (value < node.value) {
        // If no left node, create a new node for it, with the current value
        if (node.left === null) {
          node.left = new Node(value);
          return;
        }
        else if (node.left !== null) {
          return _add(node.left);
        }
      }
      // Right is might
      else if (value >= node.value) {
        // If no right node, create a new node for it, with the current value
        if (node.right === null) {
          node.right = new Node(value);
          return;
        }
        else if (node.right !== null) {
          return _add(node.right);
        }
      }
      else {
        return null;
      }
    };
    _add(node);
  };

  // set current variable to root
  // this is a bST so we can compare current, left, and right to the value 
  // and return if equal
  // loop until current is null
  // return false if no value



  contains(value) {
    // BigO O(1)
    let current = this.root;

    // node is n
    // while there is n, Big O(n)
    while (current) {
      // Big O(1)
      if (current.value === value) { return true; }
      if (value < current.value) { current = current.left; }
      else { current = current.right; }
    }
    return false
    //recursive ? 
  }
};

module.exports = BinarySearchTree;