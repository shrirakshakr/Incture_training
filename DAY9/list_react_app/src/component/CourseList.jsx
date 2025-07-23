import {useState} from "react";
function CourseList()
{
    const [courses, setCourse]=useState([
        {id : 100, name : 'Java Script'},
        {id : 200, name : 'React'},
        {id : 300, name : 'Python'},
        {id : 400, name : 'Java'},
    ])
    const handleDeleteButton=(id)=>{
        const newCourses=courses.filter((c)=>c.id!==id);
        setCourse(newCourses);
    }
    return(
        <div>
            <h2>Course list :</h2>
            {
                courses.map((c)=>(
                    <div key={c.id}>{c.name}
                    <button onClick={()=>handleDeleteButton(c.id)}>Delete</button>
                    </div>
                ))
            }
        </div>
    )
}
export default CourseList;