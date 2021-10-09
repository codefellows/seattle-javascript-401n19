'use strict';

const Node = require('./node.js');

class LinkedList {
    constructor() {
        this.head = null;
    }

    // append to the end
    append(value) {
        let node = new Node(value);

        // what if the list is empty?
        if(!this.head) {
            this.head = node;
            return this;
        }

        // If there are nodes
        let currentNode = this.head;
        while(currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = node;
        return this;
    }
}

module.exports = LinkedList;