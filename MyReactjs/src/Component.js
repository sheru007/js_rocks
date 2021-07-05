import Reconciler from "./Reconciler";
import HostComponent from "./HostComponent";
console.log("i am src/Component.js")

export function instantiateComponent(element) {
    let wrapperInstance;
    if (typeof element.type === "string") {
        wrapperInstance = HostComponent.construct(element);
    } else if (typeof element.type === "function") {
        wrapperInstance = new element.type(element.props);
        wrapperInstance._construct(element);
    } else if (typeof element === "string" || typeof element === "number") {
        wrapperInstance = HostComponent.constructTextComponent(element);
    }

    return wrapperInstance;
}

export class Component {
    constructor(props) {
        this.props = props
        this._currentElement = null;
        this._renderedComponent = null;
    }

    _construct(element) {
        this._currentElement = element
    }

    mountComponent() {
        const renderedElement = this.render()
        console.log("renderedElement in Component.mountComponent", renderedElement);

        const renderedComponent = instantiateComponent(renderedElement);
        console.log("DOMComponentWrapper", renderedComponent);

        this._renderedComponent = renderedComponent;

        return Reconciler.mountComponent(renderedComponent);

    }
}