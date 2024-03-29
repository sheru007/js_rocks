import DOM from "./DOM";
import MultiChild from './MultiChild';

console.log("i am src/DOMComponentWrapper.js")

class DOMComponentWrapper extends MultiChild{
    constructor(element) {
        super()
        this._currentElement = element;
        this._domNode = null;
    }

    mountComponent() {
        let el = document.createElement(this._currentElement.type);
        this._domNode = el;
        this._createInitialDOMChildren(this._currentElement.props);
        return el;
    }

    // before or for 1 children
    // _createInitialDOMChildren(props) {
    //     if (typeof props.children === "string") {
    //         this._domNode.textContent = props.children;
    //     }
    // }

    // after or for multi children
    _createInitialDOMChildren(props) {
        if (typeof props.children === "string") {
            this._domNode.textContent = props.children;
        } else if(Array.isArray(props.children)) {
            let mountImage = this.mountChildren(props.children)
            DOM.appendChildren(this._domNode, mountImage)
        }
    }
}

export default DOMComponentWrapper;
