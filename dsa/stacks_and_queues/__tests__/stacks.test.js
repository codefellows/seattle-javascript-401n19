'use strict';

const Stack = require('../stacks.js');

describe('stack', () => {

    describe('peek', () => {
        it('returns null on an empty stack', () => {
            let stack = new Stack();
            expect(stack.peek().toBeNull());
        })
    });

    describe('push', () => {
        it('adds a value to the top of the stack', () => {
            //create a new stack
            //push 3 values
            // expect those values??? -> peek, pop
            let stack = new Stack();
            stack.push(1);
            stack.push(2);
            stack.push(3);
            expect(stack.pop()).toEqual(3);
            expect(stack.pop()).toEqual(2);
            expect(stack.pop()).toEqual(1);
            expect(stack.peek()).toBeNull();
        })
    })

    describe('pop', () => {
        it('returns and removes the top item', () => {
            // create a new stack
            // push 3 values
            // expect the top was removed
            let stack = new Stack();
            stack.push(1);
            stack.push(2);
            stack.push(3);
            expect(stack.pop().toEqual(3));
            expect(stack.pop()).toEqual(2);
            expect(stack.pop()).toEqual(1);
        })
    })

})