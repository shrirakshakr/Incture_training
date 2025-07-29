// import { useState, useEffect } from 'react'

// function App() {
//   const [name, setName] = useState("");
//   useEffect(() => {
//     const savedName=localStorage.getItem("userName");  // If we comment these three lines, the name stored in localStorage will
//     if(savedName) {                                    //not be displayed because we did not get the item from localStorage
//       setName(savedName);                              //and set it to the state variable name.
//     }
//   },[]);
//   const handleChange = (event) => {
//     setName(event.target.value);
//     localStorage.setItem("userName", event.target.value);
//   }

//   return (
//     <div>
//       <h2>Welcome : {name||"Guest"}</h2>
//       <input type="text"
//       value={name}
//       onChange={handleChange}
//       placeholder="Enter Name"/>
//     </div>
//   )
// }

// export default App




//--------------------------------Sesssion Storage Example--------------------------------
// import { useState, useEffect } from 'react'

// function App() {
//   const [name, setName] = useState("");
//   useEffect(() => {
//     const savedName=sessionStorage.getItem("userName");  
//     if(savedName) {                                    
//       setName(savedName);                              
//     }
//   },[]);
//   const handleChange = (event) => {
//     setName(event.target.value);
//     sessionStorage.setItem("userName", event.target.value);
//   }

//   return (
//     <div>
//       <h2>Welcome : {name||"Guest"}</h2>
//       <input type="text"
//       value={name}
//       onChange={handleChange}
//       placeholder="Enter Name"/>
//     </div>
//   )
// }

// export default App
//once tab is closed data is not stored i.e lost




//------------------------------------------------------------------------
import { useState, useEffect } from 'react'

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [usn, setUSN] = useState("");
  useEffect(() => {
    const savedName = sessionStorage.getItem("userName");
    const savedEmail = sessionStorage.getItem("userEmail");
    const savedGender = sessionStorage.getItem("userGender");
    const savedCity = sessionStorage.getItem("userCity");
    const savedUSN = sessionStorage.getItem("userUSN");
    if (savedName) setName(savedName);
    if (savedEmail) setEmail(savedEmail);
    if (savedGender) setGender(savedGender);
    if (savedCity) setCity(savedCity);
    if (savedUSN) setUSN(savedUSN);
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
    sessionStorage.setItem("userName", event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    sessionStorage.setItem("userEmail", event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
    sessionStorage.setItem("userGender", event.target.value);
  };
  const handleCityChange = (event) => {
    setCity(event.target.value);
    sessionStorage.setItem("userCity", event.target.value);
  };
  const handleUSNChange = (event) => {
    setUSN(event.target.value);
    sessionStorage.setItem("userUSN", event.target.value);
  };
  

  return (
    <div>
      <form>
        Name :
        <input type="text" value={name} onChange={handleNameChange} placeholder="Enter Name"/>
        <br />
        Email :
        <input type="email" value={email} onChange={handleEmailChange} placeholder="Enter Email"/>
        <br />
        Gender :
        <label>
          <input
            type="radio"
            value="Male"
            checked={gender === "Male"}
            onChange={handleGenderChange}
            name="gender"
          /> Male
        </label>
        <label>
          <input
            type="radio"
            value="Female"
            checked={gender === "Female"}
            onChange={handleGenderChange}
            name="gender"
          /> Female
        </label>
        <br />
        City :
        <select value={city} onChange={handleCityChange}>
          <option value="">Select City</option>
          <option value="c">Mangalore</option>
          <option value="c">Bengaluru</option>
          <option value="c">Mumbai</option>
          <option value="c">Hyderabad</option>
        </select>
        <br></br>
        USN :
        <input type="text" value={usn} onChange={handleUSNChange} placeholder="Enter USN" />
      </form>
    </div>
  )
}

export default App
