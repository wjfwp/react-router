import { Route, Routes } from "react-router-dom"
import Header from "./layout/Header"
import Home2 from "./component/Home2"
import User2 from "./component/User2"

function App () {
  return (
    <Routes>
      <Route element={<Header/>}>
        <Route path="/" element={<Home2/>} />
        <Route path="/user2" element={<User2/>}/>
      </Route>
    </Routes>
  )
}

export default App