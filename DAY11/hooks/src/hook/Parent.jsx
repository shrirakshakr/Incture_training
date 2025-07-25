import { useRef } from "react";
import Child from "./Child";
function Parent()
{
    let inputRef=useRef(null);
    function handleButton(){
        inputRef.current.style.color="red";
    }
    return(
        <div>
            <h1>Parent Component :</h1>
            <Child ref={inputRef}/>
            <button onClick={handleButton}>Update</button>
        </div>
    )
}
export default Parent;