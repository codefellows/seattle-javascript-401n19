'use strict';

let Node = require('./node');

class BinaryTree {

  constructor(root = null) {
    this.root = root;
  };

  // val - Left - Right
  // Time - O(n) where n is the number of nodes
  // Space - O(h) where h is the height of the tree
  preOrder() {

    let results = [];
    // use _walk() 'underscore' to let other developers 
    //know that this function is recursive 
    let _walk = (node) => {
      // get value of node
      // recursively go into tree
      results.push(node.value);
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    };
    _walk(this.root);

    return results;
  }

  // Left - val - right
  // Time - O(n) where n is the number of nodes
  // Space - O(h) where h is the height of the tree
  inOrder() {
    let results = [];
    // use _walk() 'underscore' to let other developers 
    //know that this function is recursive 
    let _walk = (node) => {
      // get value of node
      // recursively go into tree
      if (node.left) _walk(node.left);
      results.push(node.value);
      if (node.right) _walk(node.right);
    };
    _walk(this.root);

    return results;
  };

  // Left - right - val
  // Time - O(n) where n is the number of nodes
  // Space - O(h) where h is the height of the tree
  postOrder() {
    let results = [];
    // use _walk() 'underscore' to let other developers 
    //know that this function is recursive 
    let _walk = (node) => {
      // get value of node
      // recursively go into tree
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
      results.push(node.value);
    };
    _walk(this.root);

    return results;
  };

  max() {
    if (this.root.value == null) {
      return;
    }
    // check if root exists
    // return false if no
    // what if the first node is 0? 

    let maxVal = this.root.value; // the tmp integer variable
    // Big O(h)
    // Big O(n)
    let _max = node => {
      if (node.value >= maxVal) { maxVal = node.value };
      if (node.left) { _max(node.left) }
      if (node.right) { _max(node.right) }
      // let max = curr.val if larger
      // if smaller, go left -> go right
    }
    _max(this.root);
    return maxVal;
  };

  bfs() {
    //if no root node, return
    if (!this.root) return;
    //create input and output queues/arrays
    let queue = [this.root];
    let output = [];
    //while length = true
    while (queue.length) {
      // let's examine the first node
      let node = queue.shift();
      console.log('node', node);
      // if there is a left, push that to input for later consumption
      if (node.left) {
        queue.push(node.left);
      }
      // if there is a right, push that to input for later consumption
      if (node.right) {
        queue.push(node.right);
      }
      // else/otherwise push value to ouput
      output.push(node.value);
    }
    return output;
  }

};

module.exports = BinaryTree;