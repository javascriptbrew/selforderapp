
import { Route, Routes } from "react-router-dom"
import SignIn from "./components/Auth/User/SignIn"
import SignUp from "./components/Auth/User/SignUp"
import Home from "./components/Home/User/Home"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/signin" element={<SignIn />} />
        <Route path="/user/signup" element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App
