'use strict';

const LL = require('../lib/ll.js');

describe('Linked List', () => {

    it('constructor()', () => {
        let list = new LL();
        expect(list.head).toBeNull();
    });

    it('appends to a linked list', () => {
        let list = new LL();
        let initialValue = 'Zork';
        list.append(initialValue);
        expect(list.head.value).toEqual(initialValue);

        let newValue = 'Lemi';
        list.append(newValue);
        expect(list.head.next.value).toEqual(newValue);

        console.log(list);
    })
})