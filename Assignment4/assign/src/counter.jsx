import { useState } from "react";
function Counter(props)
{
        const[count, setCount]=useState(props.num)
        function setDec()
        {
            if (count > 0) {
                setCount(count - 1);
            }
            else {
                setCount(0);    
            }
        }
        return(
            <div>
                <h2>Counter : {count}</h2>
                <button onClick={()=>setCount(count+1)}>Increment</button>
                <button onClick={()=>setDec()}>Decrement</button>
                <button onClick={()=>setCount(0)}>Reset</button>
            </div>
        )
}
export default Counter;