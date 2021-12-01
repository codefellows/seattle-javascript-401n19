'use strict';

class Node {
  constructor(k = null, value) {
    this.value = value;
    this.children = new Array(k);
    this.size = k;
  }

  clone() {
    let value = this.value;
    return new Node(this.size, value);
  }
}

class KaryTree {
  constructor(k) {
    this.k = k;
    this.root = null;
  }

  /**
   * Clones a copy of Tree Nodes and produces a new Tree
   */
  static clone(kt) {
    let root_clone = new Node(kt.k, kt.root.value);
    let tree_clone = new KaryTree(kt.k);
    tree_clone.root = root_clone;

    let pairs = [];
    pairs.unshift([kt.root, root_clone]);

    while (pairs.length) {
      let [sourceNode, cloneNode] = pairs.pop();

      for (let childNodeIndex in sourceNode.children) {
        let sourceChildNode = sourceNode.children[childNodeIndex];
        if (sourceChildNode) {
          let cloneChildNode = sourceChildNode.clone();
          let pair = [sourceChildNode, cloneChildNode];
          pairs.unshift(pair);
          cloneNode.children[childNodeIndex] = cloneChildNode;
        }
      }
    }

    return tree_clone;
  }
}

/**
 * returns a new k-ary Tree with Node values replaced if values are fizzBuzzy
 * @param {KaryTree} kary 
 */
function fizzBuzzTree(kary) {

  const fizzBuzzTree = KaryTree.clone(kary);
  const queue = [];
  queue.unshift(fizzBuzzTree.root);

  let current = queue.pop();

  while (current) {
    if (current.value % 5 === 0 && current.value % 3 === 0) {
      current.value = 'FizzBuzz';
    } else if (current.value % 5 === 0) {
      current.value = 'Buzz';
    } else if (current.value % 3 === 0) {
      current.value = 'Fizz';
    } else {
      current.value = `${current.value}`;
    }

    for (let child of current.children) {
      queue.unshift(child);
    }

    current = queue.pop();
  }

  return fizzBuzzTree;
}

const testFizzBuzz = (string, test, assertion) => {

  const result = fizzBuzzTree(test);
  const expect = Boolean(JSON.stringify(result) === JSON.stringify(assertion));

  console.log(string, expect);
}

const testTree = new KaryTree(3);

testTree.root = new Node(testTree.k, 3);
testTree.root.children[0] = new Node(testTree.k, 5);
testTree.root.children[1] = new Node(testTree.k, 15);
testTree.root.children[2] = new Node(testTree.k, 7);

const assertedTree = new KaryTree(3);

assertedTree.root = new Node(assertedTree.k, 'Fizz');
assertedTree.root.children[0] = new Node(assertedTree.k, 'Buzz');
assertedTree.root.children[1] = new Node(assertedTree.k, 'FizzBuzz');
assertedTree.root.children[2] = new Node(assertedTree.k, '7');

testFizzBuzz('One Node with three children', testTree, assertedTree);