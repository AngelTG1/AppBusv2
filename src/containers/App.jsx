import Home from "../pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "../pages/Login"
import Register from "../pages/Register"
import AutobusForm from "../components/organims/AutobusForm"
import '../assets/style/index.css'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/registro" element={<Register/>} />
          <Route path="/busform" element={<AutobusForm/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
