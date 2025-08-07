import {useState} from "react";
function StateComp(){
    const [count,setCount]=useState<number>(0);
    const handleClick =() =>{
        setCount(count+1)
    }
    return(
        <div>
            <h3>Count : {count}</h3>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}
export default StateComp;