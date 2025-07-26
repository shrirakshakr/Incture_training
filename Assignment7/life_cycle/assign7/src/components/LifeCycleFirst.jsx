import React, {Component} from "react";
import ChildComponent from "./ChildComponent";

class LifeCycleFirst extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCounter: true,
            appState: 0
        };
    }

    toggleCounter = () => {
        this.setState({ showCounter: !this.state.showCounter });
    };

    componentDidMount() {
        // Updates appState for every 5 seconds
        this.interval = setInterval(() => {
            this.setState({ appState: this.state.appState + 1 });
            console.log("appState updated to : ", this.state.appState);
        }, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        console.log("Heading and button rendered");
        return (
            <div>
                <h1>React Lifecycle Demo :</h1>
                <button onClick={this.toggleCounter}>Toggle Child Component</button>
                {this.state.showCounter && <ChildComponent />}
            </div>
        );
    }
}

export default LifeCycleFirst;
