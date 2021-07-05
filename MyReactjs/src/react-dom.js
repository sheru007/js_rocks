import { instantiateComponent } from "./Component";
import Reconciler from "./Reconciler";
import DOM from "./DOM";
console.log("i am src/react-dom.js")
const ROOT_KEY = "root";
let instancesByRootID = {};
let rootID = 1;

function isRoot(node) {
    return node.dataset[ROOT_KEY]
}

function mount(element, node) {
    node.dataset[ROOT_KEY] = rootID;
    
    // create the insatnce of component
    const component = instantiateComponent(element)
    console.log("App instance : ", component)

    // save component by rootID
    instancesByRootID[rootID] = component

    const renderedNode = Reconciler.mountComponent(component, node);
    console.log("this.render content as DOM element", renderedNode);
    DOM.empty(node);
    DOM.appendChild(node, renderedNode);
    rootID++;
}

function render(element, node) {
    if (isRoot(node)) {
        // update the node
        // update(element, node)
    } else {
        mount(element, node)
    }

}

export default {
    render
}