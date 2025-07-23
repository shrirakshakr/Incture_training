// ------------------------------------------TASK 4-------------------------------

import {useState} from "react";
function NameList()
{
    const [names, setNameList]=useState([
        {id:101, name:"Shriraksha", age:"21"},
        {id:102, name:"Sameeksha", age:"20"},
        {id:103, name:"Sinchana", age:"20"},
        {id:104, name:"Venugopal",age:"21"}
    ])
    const [newId, setNewId]=useState("");
    const [newName, setNewName]=useState("");
    const [newAge, setNewAge]=useState("");
    const handleDeleteButton=(id)=>{
        const newNames=names.filter((s)=>s.id!==id);
        setNameList(newNames);
    }
     const handleAddButton = () => {
        if (newId && newName && newAge) {
            setNameList([
                ...names,
                { id: Number(newId), name: newName, age: newAge }
            ]);
            setNewId("");
            setNewName("");
            setNewAge("");
            // and the state value is again set empty so that the input fields are cleared
        }
    };
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
{/* input field where input is taken and stored in a new state which is created erlier */}
            Id : <input type="text" placeholder="Enter id" onChange={name=>setNewId(name.target.value)} />
            Name : <input type="text" placeholder="Enter name" onChange={name=>setNewName(name.target.value)} />
            Age : <input type="text" placeholder="Enter age" onChange={name=>setNewAge(name.target.value)}/>
            <button onClick={()=>handleAddButton()}>Add</button>
            {/* when onClick is triggered handleAddButton is called and in it the new values are added to the previous list */}
        </div>
    )
}

export default NameList;



