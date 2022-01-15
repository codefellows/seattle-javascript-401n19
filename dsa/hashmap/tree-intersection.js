'use strict';

const Hashmap = require('./util/hashmap');
4
const tree1 = require('./util/tree1');
const tree2 = require('./util/tree2');

function tree_intersection(treeA, treeB) {
  let hm = new Hashmap(1024);
  let common_values = [];
  // first add the first tree to the hashmap
  _add_to_map(treeA.root, hm);
  // then run 2nd tree against first
  _find_common_values(treeB.root, hm, common_values);

  console.log(common_values);
  return common_values;
}

function _add_to_map(node, hm) {
  if (!node) return;
  hm.set(node.value.toString(), true);
  if (node.left) _add_to_map(node.left, hm);
  if (node.right) _add_to_map(node.right, hm);
}

function _find_common_values(node, hm, arr) {
  if (!node) return;
  let check = hm.get(node.value.toString()); // returns true or undefined
  if (check) { arr.push(node.value) }
  if (node.left) _find_common_values(node.left, hm, arr);
  if (node.right) _find_common_values(node.right, hm, arr);
}

// tree_intersection(tree1, tree2);



class Person {
  constructor(name) {
    this.name = name;
    this.height = null;
  }
  handlePerson() {
    console.log('Dis be da person');
  }

  tryPerson() {
    console.log('Trying from inside class');
    handlePerson();
  }
}

let zork = new Person('zork');
zork.handlePerson();
zork.tryPerson()