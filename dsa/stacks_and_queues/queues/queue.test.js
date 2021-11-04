'use strict';

const UnsupportedMethodError = require('../UnsupportedMethodError.js');
const Queue = require('./queue.js');

describe('Queue', () => {

  it(`enqueues one item to empty`, () => {

    const queue = new Queue();
    queue.enqueue("apples");
    const actual = queue.peek();
    const expected = "apples";
    expect(actual).toEqual(expected);
  });

  it(`enqueues two item to empty`, () => {

    const queue = new Queue();
    queue.enqueue("apples");
    queue.enqueue("bananas");
    const actual = queue.peek();
    const expected = "apples";
    expect(actual).toEqual(expected);
  });

  it(`implements first in first out functionality`, () => {

    const queue = new Queue();
    queue.enqueue("apples");
    queue.enqueue("bananas");
    queue.enqueue("cucumbers");
    expect(queue.dequeue()).toEqual("apples");
    expect(queue.dequeue()).toEqual("bananas");
    expect(queue.dequeue()).toEqual("cucumbers");
  });

  it(`throws error when calling peek on empty`, () => {

    const queue = new Queue();
    expect(() => queue.peek()).toThrow(UnsupportedMethodError);
  });

  it(`throws error when calling dequeue on empty`, () => {

    const queue = new Queue();
    expect(() => queue.dequeue()).toThrow(UnsupportedMethodError);
  });

  it(`correctly reports that collection is empty`, () => {

    const queue = new Queue();
    const actual = queue.isEmpty();
    const expected = true;
    expect(actual).toEqual(expected);
  });

  it(`correctly reports that collection is not empty`, () => {

    const queue = new Queue();
    queue.enqueue("apples");
    const actual = queue.isEmpty();
    const expected = false;
    expect(actual).toEqual(expected);
  });
});