'use strict'

class Stack {

    constructor() {
        this.storage = new Array();
        this.top = null;
    }

    push(val) {
        this.storage.unshift(val);
        this.top = val;
    }

    pop() {
        // temp variable
        //reassign top
        // reassign temp.next to empty
        // return
        let temp = this.storage.shift();
        this.top = this.storage[0]
        return temp;
    }

    peek() {
        // check if empty
        return this.top;
    }
    
    isEmpty() {
        // how do u check the length of an array to see if it is empty
    }

}
module.exports = Stack;