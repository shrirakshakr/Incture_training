// -------------------------------TASK 2-------------------------------------
//In this a table is created and the objects from the list is accesed and each object details is shown in the form of rows and columns
function NameList()
{
    const names=[
        {id:101, name:"Shriraksha", age:"21"},
        {id:102, name:"Sameeksha", age:"20"},
        {id:103, name:"Sinchana", age:"20"},
        {id:104, name:"Venugopal",age:"21"}
    ]
    return(
        <div>
            <h2>Student Table : </h2>
            <table border="2" cellPadding="10" cellSpacing="0">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>AGE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        names.map((s)=>(
                            <tr key={s.id}>
                                <td>{s.id}</td>
                                <td>{s.name}</td>
                                <td>{s.age}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default NameList;

