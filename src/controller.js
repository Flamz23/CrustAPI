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
                    f.notify('jbh', 'gygyh');
                    break;
                case "TEXT":

                    break;
            }
        });
    }

}









// /*
//  *Shamelessly stolen from https://medium.com/javascript-in-plain-english/implementing-a-linked-list-in-javascript-3f71c83487b5
//  */


// class LinkedListNode {
//     constructor(value, next) {
//         this.value = value;
//         this.next = next || null;
//     }
// }

// class Link {
//     constructor() {
//         this.size = 0;
//         this.head = null;
//         this.tail = null;

//         if (value) {
//             if (Array.isArray(value)) return this.fromArray(value);
//             return new TypeError(value + ' is not iterable');
//         };
//         return this;
//     }

//     prepend(value) {
//         this.size += 1;
//         const newNode = new LinkedListNode(value, this.head);
//         this.head = newNode;
//         if (!this.tail) this.tail = newNode;
//         return this;
//     }

//     append(value) {
//         this.size += 1;
//         const newNode = new LinkedListNode(value);
//         if (!this.head) {
//             this.head = newNode;
//             this.tail = newNode;
//             return this;
//         };
//         this.tail.next = newNode;
//         this.tail = newNode;
//         return this;
//     }

//     fromArray(values) {
//         values.forEach(value => this.append(value));
//         return this;
//     }
// }

// export default { Controller, Link }