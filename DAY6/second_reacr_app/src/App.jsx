//------------------PROPS----------------------
// import First from "./First"
// import Second from "./Second"
// import Third from "./Third"
// import Fourth from "./Fourth"
// import Card from "./Card"
// function App() {


//   return (
//     <div>
//       <h2>React app</h2>
//       {/* <First /> 
//       <Second /> 
//       <Third />
//       <Fourth /> */}
//       <Card name="Ajay" city="Mangalore"/>
//       <Card name="Ravi" city="Mysore"/>
//       <Card name="Sachin" city="Bangalore"/>
//     </div>
//   )
// }

// export default App;





//--------------------------Props destructuring-----------------------
// import Card from "./Card"
// function App() {


//   return (
//     <div>
//       <h2>React app</h2>
//       {/* <First /> 
//       <Second /> 
//       <Third />
//       <Fourth /> */}
//       <Card name="Ajay" city="Mangalore"/>
//       <Card name="Ravi" city="Mysore"/>
//       <Card name="Sachin" city="Bangalore"/>
//     </div>
//   )
// }

// export default App;



//-------------------------------------------------------------
// import Card from "./Card"
// function App() {
//   function handleClick()
//   {
//     alert("Function from parent component");
//   }

//   return (
//     <div>
//       <h1>React App with Vite Tool :</h1>
//       <Card label="Click Me" onClick={handleClick}/>
//     </div>
//   )
// }

// export default App;





//-------------------------Check once, it's not working---------------
// import Card from "./Card"
// import Store from "./Store";
// function App() {
//   function handleClick()
//   {
//     alert("Function from parent component");
//   }

//   return (
//     <div>
//       <Store />
//     </div>
//   )
// }

// export default App;




//----------------------------------------------------
// import Counter from "./Counter"
// function App() {
//   return (
//     <div>
//       <Counter />
//     </div>
//   )
// }

// export default App;




//---------------------Show_Hide-----------------------------
// import ShowHide from "./ShowHide";
// function App() {
//   return (
//     <div>
//       <ShowHide />
//     </div>
//   )
// }

// export default App;



//--------------------------------------------------------
import ShowHide from "./ShowHide";
import Firstcomp from "./Firstcomp";
import Secondcomp from "./Secondcomp";
function App() {
  return (
    <div>
      <Firstcomp />
      <Secondcomp />
    </div>
  )
}

export default App;