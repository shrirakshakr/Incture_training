// import {useState, useEffect} from "react";
// function ThirdComp(){
//     const[count, setCount]=useState(0);
//     useEffect(()=>{
//         console.log("useEffect called.....")
//         console.log(`Count : ${count}`)
//     },[])
//     function increment(){
//         setCount(count+1);
//     }
//     return(
//         <div>
//             <h1>Third Component : </h1>
//             <h2>Count : {count}</h2>
//             <button onClick={increment}>Increment</button>
//         </div>
//     )
// }
// export default ThirdComp;



//in the previous only componentDidMount works because we have not passed dependency i.e count inside the useEffect, i.e why when we click 
//increment the componentDidUpdate is not called, we have to tell useEffect what is updated 
import {useState, useEffect} from "react";
function ThirdComp(){
    const[count, setCount]=useState(0);
    useEffect(()=>{
        console.log("useEffect called.....")
        console.log(`Count : ${count}`)
    },[count]) //dependency
    function increment(){
        setCount(count+1);
    }
    return(
        <div>
            <h1>Third Component : </h1>
            <h2>Count : {count}</h2>
            <button onClick={increment}>Increment</button>
        </div>
    )
}
export default ThirdComp;