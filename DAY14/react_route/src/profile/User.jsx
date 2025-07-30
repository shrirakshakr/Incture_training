// import {useParams} from 'react-router-dom';
// function User(){
//     const {username} = useParams();
//     return(
//         <div>
//             <h2>User Component</h2>
//             <h3>Welcome : {username}</h3>
//             <p>This is {username} profile page ... in react routing ...</p>
//         </div>
//     )
// }
// export default User;



//------------------------------------------------------------------------------------------------------
import {useParams} from 'react-router-dom';
import User1 from './User1';
import User2 from './User2';
import User3 from './User3';
function User(){
    const {username} = useParams();
    return(
        <div>
            {username === "ram" ? <User1 /> : username === "sachin" ? <User2 /> : username === "ajay" ? <User3 /> : <h2>Guest Component</h2>}
        </div>
    )
}
export default User;

//check this is wrong, sachin is not coming