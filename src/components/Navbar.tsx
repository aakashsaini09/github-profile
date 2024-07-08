import { useRecoilState } from "recoil"
import { UserName } from "../Store/user"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    
  const navigate = useNavigate();
  const [username, setusername] = useState("")
    // @ts-ignore
    const [recoilUser, setRecoilUser] = useRecoilState(UserName)
    const submitFunction = async() => {
      setRecoilUser(username)
      navigate("/myprofile")
  }
  return (
    <>
     <div className="mb-6 bg-gray-500 flex items-center justify-center pt-5">
      <input onChange={(e)=> setusername(e.target.value)} type="text" id="large-input" className="block w-full md:w-[50vw] p-4 text-gray-900 border outline-none rounded-lg bg-gray-50 text-base"/>
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-7 mx-3 py-4 my-auto "  onClick={submitFunction}>Search</button>

</div>
    </>
  )
}

export default Navbar
