import {useState} from "react";
function Store()
{
    const [data, setData]=useState(10);
    function updateData(){
        setData(20);
        alert(`Data : ${data}`);
    }
    console.log(".................")
    return(
        <div>
            <h2>Store Component : </h2>
            <h3>Data : {data} </h3>
            <button onClick={updateData}>Update Data</button>
        </div>
    )
}
export default Store;