// import FirstComponent from "./context/FirstComponent";
// function App() {
//   const userName="Sachin";

//   return (
//     <div>
//       <FirstComponent userName={userName} />
//     </div>
//   )
// }

// export default App




//---------------------------------------------------------
// import { UserContext } from "./context/UserContext";
// import FirstComponent from "./context/FirstComponent";
// function App() {
//   const userName="Sachin";

//   return (
    
//       <UserContext.Provider value={userName}>
//         <div>
//           <FirstComponent />
//         </div>
//       </UserContext.Provider>
//   )
// }

// export default App





//-----------------------------------------------------------------------
import { ThemeProvider } from "./new_context/ThemeContext";
import ThemeToggleComponent from "./new_context/ThemeToggleComponent";
function App() {

  return (
    
      <ThemeProvider>
        <h1>Theme Toggle Application :</h1>
        <ThemeToggleComponent />
      </ThemeProvider>
  )
}

export default App

