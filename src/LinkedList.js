/*
 *  refer to https://medium.com/javascript-in-plain-english/implementing-a-linked-list-in-javascript-3f71c83487b5
 *           https://medium.com/better-programming/singly-and-doubly-linked-lists-in-javascript-7515f47c9f60
 */

class LinkedListNode {
    constructor(value, next) {
        this.value = value;
        this.next = next || null;
        this.prev = null
    }
}

export default class Link {// doubly
    constructor(value) {
        this.size = 0;
        this.head = null;
        this.tail = null;

        if (value) {
            if (Array.isArray(value)) return this.fromArray(value);
            return new TypeError(value + ' is not iterable');
        };

        return this;
    }

    // inserts "value" at the head of the linkedlist shifting the entire list once
    prepend(value) {// doubly
        this.size += 1;
        const newNode = new LinkedListNode(value, this.head);
        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode
        };
        this.head.prev = newNode;
        newNode.next = this.head;
        return this;
    }

    // inserts "value" at the tail of a linked list
    append(value) {// doubly
        this.size += 1;
        const newNode = new LinkedListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        };
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        return this;
    }

    // converts an array into a linked list
    fromArray(values) {// doubly
        values.forEach(value => this.append(value));
        return this;
    }

    // converts linked list to an array {useNodes determines whether references to other nodes ahould be included}
    toArray(useNodes = false) {// doubly
        const nodes = [];
        let currentNode = this.head;
        while (currentNode) {
            nodes.push(useNodes ? currentNode : currentNode.value);
            currentNode = currentNode.next;
        };
        return nodes;
    }

    delete(value, deleteOne = false) {
        if (!this.head) return false;
        let deletedNode = null;
        // If the head needs to be deleted
        while (this.head && this.head.value === value) {
            this.size -= 1;
            deletedNode = this.head;
            this.head = this.head.next;
            if (deleteOne) return true;
        };
        let currentNode = this.head;
        // If any node except the head or tail needs to be deleted
        if (currentNode !== null) {
            while (currentNode.next) {
                if (currentNode.next.value === value) {
                    this.size -= 1;
                    deletedNode = currentNode.next;
                    currentNode.next = currentNode.next.next;
                    if (deleteOne) return true;
                } else {
                    currentNode = currentNode.next;
                };
            };
        };
        // If the tail needs to be deleted
        if (this.tail.value === value) {
            this.tail = currentNode;
        };
        if (deletedNode === null) {
            return false;
        } else {
            return true;
        };
    }

    deleteHead() {// doubly {not tested}
        if (!this.head) return false;
        this.size -= 1;
        const deletedHead = this.head;
        if (this.head.next) {
            this.head = this.head.next;
            this.head.prev = null;
            deletedHead.next = null
        } else {
            this.head = null;
            this.tail = null;
        }
        return deletedHead; // similar to array.shift
    }

    deleteTail() {
        if (this.size === 0) return false;
        if (this.size === 1) {
            if (this.head === null) {
                return false;
            } else {
                this.head = null;
                this.tail = null;
                this.size -= 1;
                return true;
            }
        }
        const deletedTail = this.tail;
        let currentNode = this.head;
        while (currentNode.next) {
            if (!currentNode.next.next) {
                this.size -= 1;
                currentNode.next = null;
            } else {
                currentNode = currentNode.next;
            }
        }
        this.tail = currentNode;
        return deletedTail;
    }

    includes(value) {
        if (!this.head) return false;
        let isNode = value.constructor.name === 'LinkedListNode';
        if (isNode) value = value.value;
        let currentNode = this.head;
        while (currentNode) {
            if (value !== undefined && value === currentNode.value) {
                return true;
            };
            currentNode = currentNode.next;
        };
        return false;
    }

    find(callback) {
        if (Object.prototype.toString.call(callback) !== '[object Function]') {
            return new TypeError(callback + ' is not a function');
        };
        if (!this.head) return undefined;

        let currentNode = this.head;
        while (currentNode) {
            if (callback && callback(currentNode.value)) {
                return currentNode;
            };
            currentNode = currentNode.next;
        };
        return undefined;
    }

    // returns length of list
    length() {// doubly
        return this.size;
    }

    // loops thrrough linked list accapting a callback as its parameter
    loop(fn) {// doubly
        let current = this.head;
        while (current.next) {
            fn(current)
            current = current.next;
        };
        fn(current);
    }

}