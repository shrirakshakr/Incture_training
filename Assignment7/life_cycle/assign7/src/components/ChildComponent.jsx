import React, {Component} from "react";

class ChildComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
        console.log("ChildComponent Constructor is called");
    }

    componentDidMount() {
        console.log("ChildComponent did Mount");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Should ChildComponent Update");
        return nextState.value !== this.state.value;
        // This allows update only when the counter changes
    }

    componentDidUpdate() {
        console.log("ChildComponent Did Update");
    }

    componentWillUnmount() {
        console.log("ChildComponent Will Unmount");
    }

    increment = () => {
        this.setState((prevState) => ({
            value: prevState.value + 1
        }));
    };

    render() {
        return (
            <div>
                <h2>Counter: {this.state.value}</h2>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

export default ChildComponent;
