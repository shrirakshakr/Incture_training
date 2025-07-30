// import { Link } from "react-router-dom"
// function NavBar()
// {
//     return(
//         <div>
//                 <Link to="/home">Home</Link>
//                 <br></br>           
//                 <Link to="/profile">Profile</Link>
//                 <br></br>
//         </div>
//     )
// }
// export default NavBar;



//----------------------------------------------------------------------------------------------------------
// import { Link } from "react-router-dom"
// function NavBar()
// {
//     return(
//         <div>
//                 <li><a href="/home">Home</a></li>
//                 <li><a href="/profile">Profile</a></li>
//         </div>
//     )
// }
// export default NavBar;




//----------------------------------------------------------------------------------------------------------
import { Link } from "react-router-dom"
function NavBar()
{
    return(
        <div>
                <Link to="/home">Home</Link>
                <br></br>           
                <Link to="/profile/Ram">Profile</Link>
                <br></br>
                <Link to="/profile/Sachin">Profile</Link>
                <br></br>
                <Link to="/profile/Ajay">Profile</Link>
                <br></br>
        </div>
    )
}
export default NavBar;