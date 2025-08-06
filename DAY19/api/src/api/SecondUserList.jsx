import {useState} from "react"
function SecondUserList(){
    const [users, setUsers]=useState([]);
    const [loading, setLoading]=useState(true);
    const [error, setErrors]=useState(null);

    const fetchData=() =>{  fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            if(!response.ok){
                throw new Error("Something went wrong....");
            }
            return response.json();
        })
        .then((data)=>{
            setUsers(data);
            setLoading(false);
        })
        .catch((err)=>{
            setErrors(err.message);
            setLoading(false);
        })
        }  
    // if(loading){
    //     return <p>Loading Userss Details.... Please Wait for Sometime...</p>
    // }
    if(error){
        return <p>Error : {error}</p>
    }
    return(
        <div>
            <h2>User List :</h2>
            <button onClick={fetchData}>Fetch User List</button>
            <ul>
                {users.map((user)=>(
                    <li key={user.id}>
                        <strong>{user.name}</strong> - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default SecondUserList;