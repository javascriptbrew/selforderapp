
import { Route, Routes } from "react-router-dom"
import { Home, SignIn, SignUp } from "./routes"

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
