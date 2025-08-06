import {useState, useEffect} from "react"
function UserList(){
    const [users, setUsers]=useState([]);
    const [loading, setLoading]=useState(true);
    const [error, setErrors]=useState(null);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
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
    },[]) //we are using useEffect with empty array as dependency then only once the page will be rendered
    //if we don't use useEffect i.e as n SecondUserList then every time the page will be rendered
    if(loading){
        return <p>Loading Userss Details.... Please Wait for Sometime...</p>
    }
    if(error){
        return <p>Error : {error}</p>
    }
    return(
        <div>
            <h2>User List :</h2>
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
export default UserList;