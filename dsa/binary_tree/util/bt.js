'use strict';

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
    // check if root exists
    // return false if no
    // what if the first node is 0? 

    let max = this.root.val; // the tmp integer variable

    let _max = node => {
      // let max = curr.val if larger
      // if smaller, go left -> go right
    }
    return max;
    //iterate recursively through your tree
    // update a max var IF current.val is >
    // call _max(curr.left)

    // call traversal on tree, iterate through the array and grab largest
    // could be more space efficient
    let results = bt.preOrder;
    // for loop through array updating max as you go

  }

};

module.exports = BinaryTree;