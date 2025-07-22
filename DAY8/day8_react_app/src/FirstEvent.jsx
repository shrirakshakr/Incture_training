// function FirstEvent()
// {
//     const handleClick=()=>{
//         alert("Button was Clicked...");
//     }
//     return(
//         <div>
//             <h2>React Events : </h2>
//             <button onClick={handleClick}>Click</button>
//         </div>
//     )
// }
// export default FirstEvent;



//---------------------------------------------------------------------------------
// import {useState} from "react";
// function FirstEvent()
// {
//     const [text, setText]=useState('');
//     const handleClick=(event)=>{
//         setText(event.target.value);
//     }
//     return(
//         <div>
//             <h2>React Events : </h2>
//             <input type="text" placeholder="Enter Text" onChange={handleClick}/>
//             <p>Your Text : {text} </p>
//         </div>
//     )
// }
// export default FirstEvent;





//----------------------------------------------------------------------------------------
// import {useState} from "react";
// function FirstEvent()
// {
//     const [name, setName]=useState('');
//     const handleSubmit=()=>{
//         alert(`Form Submitted by : ${name}`)
//     }
//     return(
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <h2>Enter Name :</h2>
//                 <input type="text" value={name} 
//                 onChange={(event)=>setName(event.target.value)}/><br></br>
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     )
// }
// export default FirstEvent;






//----------------------------MOUSE EVENT-------------------------------
// import {useState} from "react";
// function FirstEvent()
// {
//     const handleMouseEnter=()=>{
//         console.log("Mouse Entered the Box : ");
//     }
//     const handleMouseLeave=()=>{
//         console.log("Mouse Left the Box : ");
//     }
//     return(
//         <div onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         style={{
//             width: "200px",
//             height: "200px",
//             backgroundColor: "lightBlue",
//             textAlign: "center",
//             lineHeight: "200px"
//         }}>
//             Hover Over Me !
//         </div>
//     )
// }
// export default FirstEvent;





//-----------------------------------------------------------------------------
// import {useState} from "react";
// function FirstEvent()
// {
//     const greet=(name)=>{
//         alert(`welcoming ${name} to React Session`)
//     }
//     return(
//         <div>
//             <button onClick={()=>greet("Ajay")}>Greet</button>
//         </div>
//     )
// }
// export default FirstEvent;




//-------------------------------------------------------------------------------------
// import {useState} from "react";
// function FirstEvent()
// {
//     const handleKeyDown=()=>{
//         alert(`Key Pressed : ${event.key}`);
//     }
//     return(
//         <div>
//             <h2>Type something : </h2>
//             <input type="text" onKeyUp={handleKeyDown}/>   
//             {/* <input type="text" onKeyDown={handleKeyDown}/> */}
//         </div>
//     )
// }
// export default FirstEvent;


//------------------------------------------------------------------------------------
import {useState} from "react";
function FirstEvent()
{
    const handleKeyDown=()=>{
        if(event.key==='Enter'){
            alert('Welcome to React : ');
        }
    }
    return(
        <div>
            <h2>Type something : </h2>  
            <input type="text" onKeyDown={handleKeyDown}/>
        </div>
    )
}
export default FirstEvent;