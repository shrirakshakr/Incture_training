// function SixthComp() 
// {
//     function focus()
//     {
//         let input_obj=document.getElementById("input");
//         input_obj.focus();
//     }
//     return (
//         <div>
//             <h1>Sixth Component : </h1>
//             <input id="input" type="text"/><br></br><br></br>
//             <button onClick={focus}>Focus Input</button>
//         </div>
//     )
// }
// export default SixthComp;

//The above code is not recommended because document. is used
//*CHECK ONCE*




//----------------------------------------------------------------------------
import {useRef} from "react";
function SixthComp() 
{
    const inputRef=useRef();
    function focus()
    {
        inputRef.current.focus();
        // inputRef.current.value="React";
        // inputRef.current.style.color="red";
        inputRef.current.style.display="none";
    }
    return (
        <div>
            <h1>Sixth Component : </h1>
            <input type="text" ref={inputRef}/><br></br><br></br>
            <button onClick={focus}>Focus Input</button>
        </div>
    )
}
export default SixthComp;