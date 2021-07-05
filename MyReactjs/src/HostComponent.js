import DOMComponentWrapper from "./DOMComponentWrapper";
console.log("i am src/HostComponent.js")

function construct(element) {
    return new DOMComponentWrapper(element);
}

function constructTextComponent(element) {
    return construct({
        type: "span",
        props: {
            children: element
        }
    });
}

export default {
    construct,
    constructTextComponent
};
