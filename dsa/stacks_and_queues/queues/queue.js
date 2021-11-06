'use strict';

const UnsupportedMethodError = require('../UnsupportedMethodError.js');
const Node = require('../node.js');

class Queue {

  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(item) {
    let queuedItem = new Node(item);

    if (this.rear) {
      this.rear.next = queuedItem;
    }

    this.rear = queuedItem;
    this.front = this.front || this.rear;
  }

  dequeue() {
    if (!this.front) {
      throw new UnsupportedMethodError("Unsupported method when collection is empty");
    }
    const temp = this.front;
    this.front = this.front.next;
    // this step is unnecessary in JavaScript due to how it handles garbage collection
    // but it matches the documentation which is why it was kept
    temp.next = null;
    return temp.value;
  }

  peek() {
    if (!this.front) {
      throw new UnsupportedMethodError("Unsupported method when collection is empty");
    }
    return this.front.value;
  }

  isEmpty() {
    return this.front == null;
  }
}

module.exports = Queue;