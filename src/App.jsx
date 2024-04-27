import { Routes, Route } from "react-router-dom"
import { Signup } from "./components/Signup"
import { Login } from "./components/Login"
import { Mainarea } from "./components/Mainarea"





export default function App() {
  return (
    <>
      <Routes>
        <Route path="/mainarea" element={ <Mainarea/> } />
        <Route path="/signup" element={ <Signup/> } />
        <Route path="/login" element={ <Login/> } />
      </Routes>
    </>
  )
}