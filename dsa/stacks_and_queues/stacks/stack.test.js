'use strict';

const Stack = require('./stack.js');
const UnsupportedMethodError = require('../UnsupportedMethodError.js');;

describe('Stacks', () => {

  //  a new stack
  // push some values
  // pop values or peek at top
  it(`can push onto empty`, () => {

    const stack = new Stack();
    stack.push("apple");
    const actual = stack.peek();
    const expected = "apple";
    expect(actual).toEqual(expected);
    expect(stack.pop()).toEqual(expected);
  });

  it(`can push onto full stack`, () => {

    const stack = new Stack();
    stack.push("apple");
    stack.push("banana");
    stack.push("cucumber");
    console.log('apple stack', stack);
    const actual = stack.peek();
    const expected = "cucumber";
    expect(actual).toEqual(expected);
    expect(stack.pop()).toEqual(expected);
  });

  it(`can pop single item stack`, () => {

    const stack = new Stack();
    stack.push("apple");
    const actual = stack.pop();
    const expected = "apple";
    expect(actual).toEqual(expected);
  });

  it(`can pop several item stack`, () => {

    const stack = new Stack();
    stack.push("apple");
    stack.push("banana");
    stack.push("cucumber");
    stack.pop();
    const actual = stack.pop();
    const expected = "banana";
    expect(actual).toEqual(expected);
  });

  it(`can pop until empty`, () => {

    const stack = new Stack();
    stack.push("apple");
    stack.push("banana");
    stack.push("cucumber");
    stack.pop();
    stack.pop();
    stack.pop();
    const actual = stack.isEmpty();
    const expected = true;
    expect(actual).toEqual(expected);
  });

  it(`implements last in first out functionality`, () => {

    const stack = new Stack();
    stack.push("apples");
    stack.push("bananas");
    stack.push("cucumbers");
    expect(stack.pop()).toEqual("cucumbers");
    expect(stack.pop()).toEqual("bananas");
    expect(stack.pop()).toEqual("apples");

  });

  it(`throws error when peeking empty`, () => {
    const stack = new Stack();
    expect(() => stack.peek()).toThrow(UnsupportedMethodError)
  });

  it(`throws error when popping empty`, () => {
    const stack = new Stack();
    expect(() => stack.pop()).toThrow(UnsupportedMethodError)
  });

});