// If you can import the workspace array from vue and feed this

class Controller {
    constructor(actionArray) {
        this.input = actionArray
    }

    // checks whether input array is complete or has missing propeerties
    static verify() {
        const actions = this.input
        if (typeof actions !== Array) {
            //throw proper errorr
            throw "Input is not of type array";
        }
        // filters out object in the array that have missing properties
        const check = actions.filter(action => {
            //let check = action.name || action.type || action.id
            if (!(action.name && action.type && action.id)) {
                return true
            } else { return false }
        })

        if (check) {
            console.error(`objects at ${JSON.stringify(check)} have missing properties`)
            return false
        }
        return true;
    }
}