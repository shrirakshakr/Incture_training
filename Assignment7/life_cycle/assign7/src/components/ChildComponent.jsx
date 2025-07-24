import React, {Component} from "react";
class ChildComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            value:0
        };
        console.log("Constructor Called.....")
    }
    componentDidMount(){
        console.log("componentDidMount() called.....");
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log("shouldComponentUpdate() method called.....");
        return true;
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("componentDidUpdate() method called.....");
    }
    componentWillUnmount(){
        console.log("Component Will Unmount. Clearing Interval.....");
        clearInterval(this.interval);
    }
    render(){
        return(
            <div>
                <h2>Counter : {this.state.value}</h2>
                <button onClick={()=>this.setState({value:this.state.value+1})}>Increment</button>
            </div>
        )
    }
}
export default ChildComponent;




// componentDidMount(){
//         console.log("Timer Component Mounted.....");
//         this.interval=setInterval(()=>{
//             this.setState({seconds:this.state.seconds+1});
//         },1000);
//     }