import { Link, NavLink, Outlet } from 'react-router-dom';
function Dashboard()
{
    return(
        <div>
            <h2>Dashboard :</h2>
            <nav>
                <NavLink to="profile1" className={({isActive})=>isActive ?
                "active-link" : "link"}>Profile</NavLink> |
                <NavLink to="setting" className={({isActive})=>isActive ?
                "active-link" : "link"}>Setting</NavLink>
            </nav>
            <hr></hr>
            <Outlet />
        </div>
    )
}
export default Dashboard;