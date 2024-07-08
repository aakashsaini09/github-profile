import { BrowserRouter, Route, Routes } from "react-router-dom"
// import Home from "./components/Home"
// import Navbar from "./components/Navbar"
import { RecoilRoot } from "recoil"
import MyProfile from "./components/MyProfile"
import Home from "./components/Home"
import Profile from "./components/Profile"
function App() {

  return (
    <>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myprofile" element={<MyProfile/>} />
          <Route path="/:username" element={<Profile />} />
        </Routes>
      </BrowserRouter>
      </RecoilRoot>
    </>
  )
}

export default App
