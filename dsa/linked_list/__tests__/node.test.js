'use strict';

const Node = require('../lib/node.js');

describe('Node', () => {

    it('constructor()', () => {
        let value = 'Zork';
        let node = new Node(value);
        expect(node.value).toEqual(value);
        expect(node.next).toBeNull();
    });
});