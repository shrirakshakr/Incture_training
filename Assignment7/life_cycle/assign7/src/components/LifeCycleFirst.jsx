import React, {Component} from "react";
import ChildComponent from "./ChildComponent";
class LifeCycleFirst extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            count:0,
            showCounter:true
        };
    }
    toggleCounter=()=>{
        this.setState({showCounter: !this.state.showCounter});
    };
    static getDerivedStateFromProps(props,state){
        return null;
    }
    render(){
        console.log("Heading is rendered.....");
        return(
            <div>
                <h1>React Lifecycle Demo : </h1>
                <button onClick={this.toggleCounter}>Toggle Child Component</button>
                {this.state.showCounter && <ChildComponent />}
                
            </div>
        )
    }
    componentDidMount(){
    }
}
export default LifeCycleFirst;






// import React, {Component} from "react";
// import TimerComponent from "./TimerComponent";
// class LifeCycleThird extends Component{
//     constructor(){
//         super();
//         this.state={
//             showTimer:true
//         };
//     }
    // toggleTimer=()=>{
    //     this.setState({showTimer: !this.state.showTimer});
    // };
//     render(){
//         return(
//             <div>
                // <button onClick={this.toggleTimer}>Toggle Timer</button>
                // {this.state.showTimer && <TimerComponent />}
//             </div>
//         )
//     }
// }
// export default LifeCycleThird;