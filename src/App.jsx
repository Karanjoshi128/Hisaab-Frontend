import React from "react";
import { Routes, Route } from "react-router-dom";
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";
import { Mainarea } from "./components/Mainarea";
import "./App.css";
import "tailwindcss/tailwind.css";
import Background from "./assets/images/three.png";


export default function App() {
  return (
    <div className="bg-cover bg-center h-screen min-h-screen flex justify-center items-center " style={{ backgroundImage: `url(${Background}) ` }}>
      <Routes>
        <Route path="/" element={<Mainarea />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}


// export default function App() {
//   return (
//     <div style={{ backgroundImage: `url(${skyBackground})` }}>
//       <Routes>
//         <Route path="/mainarea" element={ <Mainarea/> } />
//         <Route path="/signup" element={ <Signup/> } />
//         <Route path="/login" element={ <Login/> } />
//       </Routes>
//     </div>
//   )
// }