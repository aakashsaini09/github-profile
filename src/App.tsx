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
      <div className="bg-gray-500">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myprofile" element={<MyProfile/>} />
          <Route path="/:username" element={<Profile />} />
        </Routes>
      </div>
      </BrowserRouter>
      </RecoilRoot>
    </>
  )
}

export default App
