//-----------------------------INDEX is not a good practice to provide as KEY----------------
function SecondList(){
    const students=[
        {id:111, name:"Ajay", city:"Mangalore"},
        {id:222, name:"Ravi", city:"Mysore"},
        {id:333, name:"Sachin", city:"Bangalore"},
        {id:444, name:"Ram", city:"Pune"}
    ]
    return(
        <div>
            <h2>Student List : </h2>
            {
                students.map((student)=>
                <p key={student.id}>Name : {student.name}, City : {student.city}</p>)
            }
        </div>
    )
}
export default SecondList;