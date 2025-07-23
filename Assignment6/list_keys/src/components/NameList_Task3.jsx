// ----------------------------------TASK 3----------------------------------------
//In this an additional key button is added and when we click on it onClick event is triggered
// the id is taken and then if that id is equal to the id of the student then it is not added to the new list 
// else it is added to the list anf the list is rendered and updated
import {useState} from "react";
function NameList()
{
    const [names, setCourse]=useState([
        {id:101, name:"Shriraksha", age:"21"},
        {id:102, name:"Sameeksha", age:"20"},
        {id:103, name:"Sinchana", age:"20"},
        {id:104, name:"Venugopal",age:"21"}
    ])
    const handleDeleteButton=(id)=>{
        const newNames=names.filter((s)=>s.id!==id);
        setCourse(newNames);
    }
    return(
        <div>
            <h2>Student Table : </h2>
            <table border="2" cellPadding="10" cellSpacing="0">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        names.map((s)=>(
                            <tr key={s.id}>
                                <td>{s.id}</td>
                                <td>{s.name}</td>
                                <td>{s.age}</td>
                                <td>
                                    <button onClick={()=>handleDeleteButton(s.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default NameList;



