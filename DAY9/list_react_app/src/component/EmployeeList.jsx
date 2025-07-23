import EmployeeCard from "./EmployeeCard";
function EmployeeList()
{
    const employees=[
        {id:111, name:"Ajay", city:"Mangalore"},
        {id:222, name:"Ravi", city:"Mysore"},
        {id:333, name:"Sachin", city:"Bangalore"},
        {id:444, name:"Ram", city:"Pune"}
    ]
    return(
        <div>
            <h2>Employee List :</h2>
            {
                employees.map((employee)=>
                <EmployeeCard key={employee.id} name={employee.name} city={employee.city}/>
                )
            }
        </div>
    )
}
export default EmployeeList;