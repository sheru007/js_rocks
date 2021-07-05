import ReactDOM from "./react-dom";
import { Component } from "./Component";
console.log("i am src/index.js")
class App extends Component {
    render() {
        return {
            type: "div",
            props: {
                children: [
                    {
                        type: "h1",
                        props: {
                            children: [
                                `We are building ${this.props.title}`,
                                [
                                    ' Arrre we? ',
                                    ' Really? ',
                                    [
                                        ' Well...',
                                        ' That is impressive'
                                    ]
                                ]
                            ]
            }
        },
        {
            type: "h2",
            props: { children: `And it's cool!` }
        }
                ]
    }
}
    }
}

ReactDOM.render(
    {
        type: App,
        props: { title: "React.js" }
    },
    document.getElementById("root")
)