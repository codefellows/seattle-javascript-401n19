'use strict';

const Node = require('../util/node');

describe('Node', () => {

    it('constructor()', () => {
        let value = 8;
        let node = new Node(value);
        expect(node.value).toEqual(value);
        expect(node.left).toBeNull();
        expect(node.right).toBeNull();
    });
});