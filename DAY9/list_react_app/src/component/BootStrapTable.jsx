import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
function BootStrapTable()
{
    const students=[
        {id:111, name:"Ajay", city:"Mangalore"},
        {id:222, name:"Ravi", city:"Mysore"},
        {id:333, name:"Sachin", city:"Bangalore"},
        {id:444, name:"Ram", city:"Pune"}
    ]
    const handleDeleteButton =(id)=>{
        alert(`Delete Student with Id : ${id}`);
    }
    return(
        <div className='container mt-4'>
            <h2 className='head3'>Student Table : </h2>
            <Table striped bordered hover responsive>
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
                                <td>{s.id}</td>
                                <td>
                                    <Button variant="danger" size="em"
                                    onClick={()=>handleDeleteButton(s.id)}>Danger</Button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}
export default BootStrapTable;