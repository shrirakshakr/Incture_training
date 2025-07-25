// import {useState, useEffect} from "react";
// function FourthComp(){
//     const[count, setCount]=useState(0);
//     const[theme, setTheme]=useState("light");
//     useEffect(()=>{
//         console.log("useEffect is Called.....");
//         console.log(`Count : ${count}`);
//         console.log(`Theme : ${theme}`);
//     })
//     return(
//         <div>
//             <h1>Fourth Component : </h1>
//             <h2>Count : {count}</h2>
//             <button onClick={()=>setCount(count+1)}>Increment</button><br></br>
//             <h2>Theme : {theme}</h2>
//             <button onClick={()=>setTheme(theme==='light' ? 'dark' : 'light')}>Change Theme</button>
//         </div>
//     )
// }
// export default FourthComp;


//-----------------------------------------------------------------------------------


//In the previous we don't pass any dependency so even componentDidUpdate is also executed in useEffect but if we pass dependency with enmpty
//array like in ThirdComp then only componentDidMount phase is executed
//Now if we want only when theme is changed the componentDidUpdate to be executed then we have to pass dependeny with only theme i.e [theme]

// import {useState, useEffect} from "react";
// function FourthComp(){
//     const[count, setCount]=useState(0);
//     const[theme, setTheme]=useState("light");
//     useEffect(()=>{
//         console.log("useEffect is Called.....");
//         console.log(`Count : ${count}`);
//         console.log(`Theme : ${theme}`);
//     }, [theme]) // only theme is paases in dependency
//     return(
//         <div>
//             <h1>Fourth Component : </h1>
//             <h2>Count : {count}</h2>
//             <button onClick={()=>setCount(count+1)}>Increment</button><br></br>
//             <h2>Theme : {theme}</h2>
//             <button onClick={()=>setTheme(theme==='light' ? 'dark' : 'light')}>Change Theme</button>
//         </div>
//     )
// }
// export default FourthComp;



//------------------------------------------------------------------------------------------
import {useState, useEffect} from "react";
function FourthComp(){
    const[count, setCount]=useState(0);
    const[theme, setTheme]=useState("light");
    useEffect(()=>{
        console.log("Count useEffect is Called.....");
        console.log(`Count : ${count}`);
    }, [count]) 
    useEffect(()=>{
        console.log("Theme useEffect is Called.....");
        console.log(`Theme : ${theme}`);
    }, [theme])
    return(
        <div>
            <h1>Fourth Component : </h1>
            <h2>Count : {count}</h2>
            <button onClick={()=>setCount(count+1)}>Increment</button><br></br>
            <h2>Theme : {theme}</h2>
            <button onClick={()=>setTheme(theme==='light' ? 'dark' : 'light')}>Change Theme</button>
        </div>
    )
}
export default FourthComp;