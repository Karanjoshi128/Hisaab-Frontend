import { Routes, Route } from "react-router-dom"
import { Signup } from "./components/Signup"
import { Login } from "./components/Login"





export default function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={ <Signup/> } />
        <Route path="/login" element={ <Login/> } />
      </Routes>
    </>
  )
}