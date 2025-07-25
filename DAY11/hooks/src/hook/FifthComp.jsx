// import {useState} from "react";
// function FifthComp() 
// {
//     const[count,setCount]=useState(0);
//     const[number,setNumber]=useState(10);
//     function expFunc(num)
//     {
//         console.log("Expensive Function Called....");
//         for(let i=1;i<=100000;i++)
//         {
//             return num*num;
//         }
//     }
//     const result=expFunc(number);
//     return (
//         <div>
//             <h1>Fifth Componrnt : </h1>
//             <h2>Result : {result}</h2>
//             <h3>Count : {count}</h3>
//             <button onClick={()=>setCount(count+1)}>UpdateCount</button><br></br>
//             <h3>Number : {number}</h3>
//             <button onClick={()=>setNumber(number+5)}>UpdateCount</button>
//         </div>
//     )
// }
// export default FifthComp

//In the above code, when we click on UpdateCount button then again the whole component will be rendered and again the expensive function 
//is called even though number is not changed i.e not clicked, that is why we use useMemo where it memorizes the expFunc value and when 
//UpdateCount button is clicked expFunc is not called the previou evaluated value itself will be dispalyed until the number button is 
//clicked i.e number value is changed







//------------------------------------WITH useMemo---------------------------------------------
import {useState, useMemo} from "react";
function FifthComp() 
{
    const[count,setCount]=useState(0);
    const[number,setNumber]=useState(10);
    function expFunc(num)
    {
        console.log("Expensive Function Called....");
        for(let i=1;i<=100000;i++)
        {
            return num*num;
        }
    }
    const result=useMemo(()=>expFunc(number),[number]);  //[number] is dependency
    return (
        <div>
            <h1>Fifth Componrnt : </h1>
            <h2>Result : {result}</h2>
            <h3>Count : {count}</h3>
            <button onClick={()=>setCount(count+1)}>UpdateCount</button><br></br>
            <h3>Number : {number}</h3>
            <button onClick={()=>setNumber(number+5)}>UpdateCount</button>
        </div>
    )
}

export default FifthComp