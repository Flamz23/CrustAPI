import actionFunctions from "@/windowsApi.js"


export default class Controller {
    constructor(actionArray) {
        this.input = actionArray
        this.verif();
        this.run();
    }

    // checks whether input array is complete or has missing properties
    verif() {
        const actions = this.input
        if (!(Array.isArray(actions))) {
            //throw proper errorr
            throw "Input is not of type array";
        }
        // filters out object in the array that have missing properties
        const check = actions.filter(action => {
            //let check = action.name || action.type || action.id
            if (!(action.name && action.funct && action.id)) {
                return true
            } else { return false }
        })

        if (check.length !== 0) {
            console.error(`objects at ${JSON.stringify(check)} have missing properties`)
            return false
        }
        return true;
    }

    run() {
        const actions = this.input
        var f = new actionFunctions()
        actions.forEach(action => {
            switch (action.funct) {
                case "NOTIFICATION":
                    f.notify(['ff', 'sdsd']);
                    break;
                case "TEXT":

                    break;
            }
        });
    }

}









/*
 *Shamelessly stolen from https://medium.com/javascript-in-plain-english/implementing-a-linked-list-in-javascript-3f71c83487b5
 */


class LinkedListNode {
    constructor(value, next) {
        this.value = value;
        this.next = next || null;
    }
}

class Link {
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;

        if (value) {
            if (Array.isArray(value)) return this.fromArray(value);
            return new TypeError(value + ' is not iterable');
        };

        return this;
    }

    prepend(value) {
        this.size += 1;
        const newNode = new LinkedListNode(value, this.head);
        this.head = newNode;
        if (!this.tail) this.tail = newNode;
        return this;
    }

    append(value) {
        this.size += 1;
        const newNode = new LinkedListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        };
        this.tail.next = newNode;
        this.tail = newNode;
        return this;
    }

    fromArray(values) {
        values.forEach(value => this.append(value));
        return this;
    }

    toArray(useNodes = false) {
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

    deleteHead() {
        if (!this.head) return false;
        this.size -= 1;
        const deletedHead = this.head;
        if (this.head.next) {
            this.head = this.head.next;
        } else {
            this.head = null;
            this.tail = null;
        }
        return true;
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

}

//export default { Controller, Link } 