import { useState } from "react"
import Firstcomp from "./Firstcomp";
function Secondcomp()
{
    const[show,  Update]=useState(false)
    return(
        <div>
            <button onClick={()=>Update(!show)}>
                Show 1st_comp
            </button>
            {show && <Firstcomp />}
        </div>
    )
}
export default Secondcomp;