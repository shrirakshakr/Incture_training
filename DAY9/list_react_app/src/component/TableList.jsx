function TableList()
{
    const students=[
        {id:111, name:"Ajay", city:"Mangalore"},
        {id:222, name:"Ravi", city:"Mysore"},
        {id:333, name:"Sachin", city:"Bangalore"},
        {id:444, name:"Ram", city:"Pune"}
    ]
    return(
        <div>
            <h2>Student Table : </h2>
            <table border="2" cellPadding="10" cellSpacing="0">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>CITY</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((s)=>(
                            <tr key={s.id}>
                                <td>{s.id}</td>
                                <td>{s.name}</td>
                                <td>{s.city}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default TableList;