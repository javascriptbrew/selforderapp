
import { Route, Routes } from "react-router-dom"
import Login from "./components/Auth/Login"
import Home from "./components/Home/Home"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
