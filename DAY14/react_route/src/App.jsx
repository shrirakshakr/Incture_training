// import {BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './component/Home';
// import Profile from './component/Profile';

// function App() {
  

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/home" element={<Home />} />
//         <Route path="/profile" element={<Profile />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App




//----------------------------------------------------------------------------------------------------------

// import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import Home from './component/Home';
// import Profile from './component/Profile';


// function App() {
  

//   return (
//     <BrowserRouter>
//       <Link to="/home">Home</Link>
//       <br></br>
//       <Link to="/profile">Profile</Link>
      
//       <Routes>
//         <Route path="/home" element={<Home />} />
//         <Route path="/profile" element={<Profile />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App



//----------------------------------------------------------------------------------------------------------

// import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import Home from './component/Home';
// import Profile from './component/Profile';
// import NavBar from './component/NavBar';


// function App() {
  

//   return (
//     <BrowserRouter>
//       <NavBar />
      
//       <Routes>
//         <Route path="/home" element={<Home />} />
//         <Route path="/profile" element={<Profile />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App





//----------------------------------------------------------------------------------------------------------
// import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import Home from './component/Home';
// import Profile from './component/Profile';
// import NavBar from './component/NavBar';


// function App() {
  

//   return (
//     <BrowserRouter>
//       <NavBar />
      
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/profile" element={<Profile  />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App

//check it is wrong


//----------------------------------------------------------------------------------------------------------
// import {BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
// import Home from './component/Home';
// import Profile from './component/Profile';
// import NavBar from './component/NavBar';
// import Error from './component/Error';
// import User from './profile/User';


// function App() {
  

//   return (
//     <BrowserRouter>
//       <NavBar />
      
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/profile" element={<Profile  />} />
//         <Route path="/*" element={<Error />} />
//         <Route path="/home" element={<Navigate to="/" />} />
//         <Route path="/user/:username" element={<User />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App

//check it is wrong  



//----------------------------------------------------------------------------------------------------------
// import {BrowserRouter, Routes, Route, Link, Navigate, NavLink} from 'react-router-dom';
// import Home from './component/Home';
// import Profile from './component/Profile';
// import NavBar from './component/NavBar';
// import Error from './component/Error';
// import User from './profile/User';


// function App() {
  

//   return (
//     <BrowserRouter>
//       <nav style={{margin:'20px'}}></nav>
//       <NavLink to="/" style={({isActive})=>({
//         marginRight : '15px',
//         color : isActive ? 'green' : 'blue',
//         fontweight : isActive ? 'bold' : 'normal'
//       })}>Home</NavLink>
      
//       <NavLink to="/profile" style={({isActive})=>({
//         marginRight : '15px',
//         color : isActive ? 'green' : 'blue',
//         fontweight : isActive ? 'bold' : 'normal'
//       })}>Profile</NavLink>
      
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/profile" element={<Profile  />} />
//         <Route path="/*" element={<Error />} />
//         <Route path="/home" element={<Navigate to="/" />} />
        
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App





//----------------------------------------------------------------------------------------------------------
// import {BrowserRouter, Routes, Route, Link, Navigate, NavLink} from 'react-router-dom';
// import Home from './component/Home';
// import Profile from './component/Profile';
// import NavBar from './component/NavBar';
// import Error from './component/Error';
// import User from './profile/User';
// import './App.css'; 


// function App() {
  

//   return (
//     <BrowserRouter>
//       <nav style={{margin:'20px'}}></nav>
//       <NavLink to="/" className={({isActive})=>isActive ? "active-link ":"link"}>Home</NavLink>
//       <NavLink to="/profile" className={({isActive})=>isActive ? "active-link ":"link"}>Profile</NavLink>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/profile" element={<Profile  />} />
//         <Route path="/*" element={<Error />} />
//         <Route path="/home" element={<Navigate to="/" />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App






//----------------------------------------------------------------------------------------------------------
import {BrowserRouter, Routes, Route, Link, Navigate, NavLink} from 'react-router-dom';
import Home from './component/Home';
import Profile from './component/Profile';
import NavBar from './component/NavBar';
import Error from './component/Error';
import User from './profile/User';
import Profile1 from './nested/Profile1';
import Dashboard from './nested/Dashboard';
import Setting from './nested/Setting';
import Product from './nested/Product';
import './App.css'; 



function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product  />} />
      <Route path="/dashboard" element={<Dashboard />} >
            <Route path="profile1" element={<Profile1 />} />
            <Route path="setting" element={<Setting />} />
      </Route>
    </Routes>
      
    </BrowserRouter>
  )
}

export default App