// import {useState} from "react";
// function Counter(){
//     const [count, setCount]=useState(0);
//     return(
//         <div>
//             <p>You clicked Button {count} times</p>
//             <button onClick={()=>setCount(count+1)}>Click Me</button>
//         </div>
//     )
// }
// export default Counter;




//-----------------------------------------------------------------------------------------------------
import {useState} from "react";
function Counter(){
    const [count, setCount]=useState(0);
    return(
        <div>
            <h3>Count : {count}</h3>
            <p>You clicked Button {count} times</p>
            <button onClick={()=>setCount(count+1)}>Click Me</button>
        </div>
    )
}
export default Counter;