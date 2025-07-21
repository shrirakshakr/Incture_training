import { useState } from "react"
function ShowHide()
{
    const[show,  Update]=useState(true);
    return(
        <div>
            <button onClick={()=>Update(!show)}>
                {show ? "Hide Text" : "Show Text"}
            </button>
            {show && <p>This is my secret message.....</p>}
        </div>
    )
}
export default ShowHide;