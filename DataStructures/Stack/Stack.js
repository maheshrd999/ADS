export default class Stack {
    constructor() {
        this.items = [];
    }
    // O(1)
    isEmpty() {
        return this.items.length == 0;
    }
    
    // O(1)
    push(element) {
        this.items.push(element);
    }
    
    // O(1)
    pop() {
        if(this.isEmpty()) return null;
        return this.items.pop();
    }
    
    // O(1)
    peek() {
        if(this.isEmpty()) return null;
        return this.items[this.items.length -1];
    }
    
    // O(1)
    getSize() {
        return this.items.length;
    }

    // O(n)
    print() {
        console.log(this.items.toString());
    }
}