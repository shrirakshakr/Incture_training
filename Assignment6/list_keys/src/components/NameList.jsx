//-----------------------TASK 1-----------------------------------

// function NameList()
// {
//     const names=[
//         {id:101, name:"Shriraksha"},
//         {id:102, name:"Sameeksha"},
//         {id:103, name:"Sinchana"},
//         {id:104, name:"Venugopal"}
//     ]
//     return(
//         <div>
//             <h2>Students List : </h2>
//             {
//                 names.map((s)=>
//                     <ul key={s.id}>
//                         <li>{s.name}</li>
//                     </ul>
//                 )
//             }
//         </div>
//     )
// }
// export default NameList;

//-----------------------------------------------------------------------------





//-------------------------------TASK 2-------------------------------------

// function NameList()
// {
//     const names=[
//         {id:101, name:"Shriraksha", age:"21"},
//         {id:102, name:"Sameeksha", age:"20"},
//         {id:103, name:"Sinchana", age:"20"},
//         {id:104, name:"Venugopal",age:"21"}
//     ]
//     return(
//         <div>
//             <h2>Student Table : </h2>
//             <table border="2" cellPadding="10" cellSpacing="0">
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>NAME</th>
//                         <th>AGE</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         names.map((s)=>(
//                             <tr key={s.id}>
//                                 <td>{s.id}</td>
//                                 <td>{s.name}</td>
//                                 <td>{s.age}</td>
//                             </tr>
//                         ))
//                     }
//                 </tbody>
//             </table>
//         </div>
//     )
// }
// export default NameList;

//------------------------------------------------------------------------------





//----------------------------------TASK 3----------------------------------------

// import {useState} from "react";
// function NameList()
// {
//     const [names, setCourse]=useState([
//         {id:101, name:"Shriraksha", age:"21"},
//         {id:102, name:"Sameeksha", age:"20"},
//         {id:103, name:"Sinchana", age:"20"},
//         {id:104, name:"Venugopal",age:"21"}
//     ])
//     const handleDeleteButton=(id)=>{
//         const newNames=names.filter((s)=>s.id!==id);
//         setCourse(newNames);
//     }
//     return(
//         <div>
//             <h2>Student Table : </h2>
//             <table border="2" cellPadding="10" cellSpacing="0">
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>NAME</th>
//                         <th>AGE</th>
//                         <th>Operation</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         names.map((s)=>(
//                             <tr key={s.id}>
//                                 <td>{s.id}</td>
//                                 <td>{s.name}</td>
//                                 <td>{s.age}</td>
//                                 <td>
//                                     <button onClick={()=>handleDeleteButton(s.id)}>Delete</button>
//                                 </td>
//                             </tr>
//                         ))
//                     }
//                 </tbody>
//             </table>
//         </div>
//     )
// }
// export default NameList;

//----------------------------------------------------------------------------





//------------------------------------------TASK 4-------------------------------

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
    const handleAddButton=()=>{
        setNameList(...names,{id:newId,name:newName,age:newAge});
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
            Id : <input type="text" placeholder="Enter id" onChange={name=>setNewId(name.target.value)} />
            Name : <input type="text" placeholder="Enter name" onChange={name=>setNewName(name.target.value)} />
            Age : <input type="text" placeholder="Enter age" onChange={name=>setNewAge(name.target.value)}/>
            <button onClick={()=>handleAddButton()}>Add</button>
        </div>
    )
}

export default NameList;

//----------------------------------------------------------------------------------



// import {useState} from "react";
// function FirstEvent()
// {
//     const [text, setText]=useState('');
    // const handleClick=(event)=>{
    //     setText(event.target.value);
    // }
//     return(
//         <div>
//             <h2>React Events : </h2>
//             <input type="text" placeholder="Enter Text" onChange={handleClick}/>
//             <p>Your Text : {text} </p>
//         </div>
//     )
// }
// export default FirstEvent;






// import {useState} from "react";
// function NameList()
// {
//     const [names, setCourse]=useState([
//         {id:101, name:"Shriraksha", age:"21"},
//         {id:102, name:"Sameeksha", age:"20"},
//         {id:103, name:"Sinchana", age:"20"},
//         {id:104, name:"Venugopal",age:"21"}
//     ])
//     const handleDeleteButton=(id)=>{
//         const newNames=names.filter((s)=>s.id!==id);
//         setCourse(newNames);
//     }
//     const [newId, setNewId] = useState("");
//     const [newName, setNewName] = useState("");
//     const [newAge, setNewAge] = useState("");

//     const handleAddButton = () => {
//         if (newId && newName && newAge) {
//             setCourse([
//                 ...names,
//                 { id: Number(newId), name: newName, age: newAge }
//             ]);
//             setNewId("");
//             setNewName("");
//             setNewAge("");
//         }
//     };

//     return(
//         <div>
//             <h2>Student Table : </h2>
//             <table border="2" cellPadding="10" cellSpacing="0">
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>NAME</th>
//                         <th>AGE</th>
//                         <th>Operation</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         names.map((s)=>(
//                             <tr key={s.id}>
//                                 <td>{s.id}</td>
//                                 <td>{s.name}</td>
//                                 <td>{s.age}</td>
//                                 <td>
//                                     <button onClick={()=>handleDeleteButton(s.id)}>Delete</button>
//                                 </td>
//                             </tr>
//                         ))
//                     }
//                 </tbody>
//             </table>
//             Id : <input type="text" placeholder="Enter id" value={newId} onChange={e => setNewId(e.target.value)} />
//             Name : <input type="text" placeholder="Enter name" value={newName} onChange={e => setNewName(e.target.value)} />
//             Age : <input type="text" placeholder="Enter age" value={newAge} onChange={e => setNewAge(e.target.value)} />
//             <button onClick={handleAddButton}>Add</button>
//         </div>
//     )
// }
// export default NameList;




