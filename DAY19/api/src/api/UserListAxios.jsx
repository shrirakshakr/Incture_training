import {useState, useEffect} from "react";
import axios from "axios";
const UserListAxios=()=>{
    const [users, setUsers]=useState([]);
    const [loading, setLoading]=useState(true);
    const [error, setErrors]=useState("");
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            setUsers(response.data);
            setLoading(false);
        })
        // in axios we don't need to convert into json type, it is done automatically
        .catch((err)=>{
            setErrors(err.message);
            setLoading(false);
        })
    },[])
    if(loading){
        return <p>Loading User Details....</p>
    }
    if(error){
        return <p>Error : {error}</p>
    }
    return(
        <div>
            <h2>User List With Axios : </h2>
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
export default UserListAxios;