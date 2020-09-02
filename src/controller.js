// the input (actionArray) is defined in the dol method in masthead.vue
import winApi from "@/windowsApi.js"
import link from "@/LinkedList.js"


export default class Controller {
    constructor(actionArray) {
        this.LinkedList = new link(actionArray); // testing

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

        // if items with missing properties >= 1 ouput to console
        if (check.length !== 0) {
            console.error(`objects at ${JSON.stringify(check)} have missing properties`)
            return false
        }
        return true;
    }

    run() {
        const actions = this.input
        var api = new winApi()

        // this is for testing... will add foreach method later
        // loops through linked list logging all the nodes
        let current = this.LinkedList.head;
        while (current.next) {
            console.log(current);
            current = current.next;
        }
        console.log(current);

        //

        // actions.forEach(action => {
        //     switch (action.funct) {
        //         case "NOTIFICATION":
        //             f.notify(['ff', 'sdsd']);
        //             break;
        //         case "TEXT":

        //             break;
        //     }
        // });
    }

}