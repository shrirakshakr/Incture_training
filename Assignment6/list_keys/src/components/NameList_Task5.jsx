
//-------------------------------TASK 5----------------------------------------

import { useState } from "react";

function NameList() {
    const [names, setNameList] = useState([
        { id: 101, name: "Shriraksha", age: "21" },
        { id: 102, name: "Sameeksha", age: "20" },
        { id: 103, name: "Sinchana", age: "20" },
        { id: 104, name: "Venugopal", age: "21" }
    ]);

    const [newId, setNewId] = useState("");
    const [newName, setNewName] = useState("");
    const [newAge, setNewAge] = useState("");

    const handleDeleteButton = (id) => {
        const newNames = names.filter((s) => s.id !== id);
        setNameList(newNames);
    };

    const handleAddButton = () => {
        if (newId && newName && newAge) {
            setNameList([
                ...names,
                { id: Number(newId), name: newName, age: newAge }
            ]);
            setNewId("");
            setNewName("");
            setNewAge("");
        }
    };

    return (
        <div>
            <h2>Student Table :</h2>
{/* here ternery operator is used, if the list length>0 then the first condition i.e true is executed */}
            {names.length > 0 ? (
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
                        {names.map((s) => (
                            <tr key={s.id}>
                                <td>{s.id}</td>
                                <td>{s.name}</td>
                                <td>{s.age}</td>
                                <td>
                                    <button onClick={() => handleDeleteButton(s.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No users available</p>
                // else this conditioni is executed i.e false
            )}

            <br />
            Id : <input type="text" placeholder="Enter id" value={newId} onChange={(e) => setNewId(e.target.value)} />
            Name : <input type="text" placeholder="Enter name" value={newName} onChange={(e) => setNewName(e.target.value)} />
            Age : <input type="text" placeholder="Enter age" value={newAge} onChange={(e) => setNewAge(e.target.value)} />
            <button onClick={handleAddButton}>Add</button>
        </div>
    );
}

export default NameList;