import { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { UserName } from "../Store/user";
import { Link } from "react-router-dom";
const MyProfile = () => {
const name = useRecoilValue(UserName)
const [userList, setUserList] = useState<null | userListInterface[]>(null)
const [loading, setLoading] = useState(false)
useEffect(() => {
    setLoading(true)
    console.log("name:", name)
    axios.get(`https://api.github.com/search/users?q=${name}`)
    .then((res) => {
        setUserList(res.data.items)
        setLoading(false)
        console.log("userList:", userList)
    });
}, [])
interface userListInterface {
    avatar_url: string;
    login: string;
    location: string;
    blog: string;
    id: number;
}

  return (
    <>

    <section className="bg-gray-500 px-12">
  <div className="py-8 px-4 mx-auto text-center lg:py-16 lg:px-6">
    {/* <Home/> */}
     {loading? <div>loading...</div> : <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {userList?.map((user) =>{
        return  <div className="bg-gray-700 text-center text-white min-w-44 min-h-[28rem] rounded-md
         border-2 border-white">
             <img className="mx-auto mb-4 w-full h-auto" src={user.avatar_url}/>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-white">
                  <div className="my-6">{user.login}</div>
              </h3>
            <Link className="text-white bg-gray-700 border-2 border-white hover:bg-white hover:text-gray-600 font-medium rounded-lg text-base px-5 py-2.5 mb-2 " to={`/${user.login}`}><i className="fa-brands fa-github mr-2"></i>View Profile</Link>
          </div> 
        })}
      </div>}
  </div>
</section>
        {/* {repos.map((repo) => (
          <RepoCard key={repo.id} liveDemo={repo.homepage} name={repo.name} description={repo.description} topics={repo.topics} htmlUrl={repo.html_url} language={repo.language}/>
        ))} */}  
      {/* </div> */}

    </>
  );
};

export default MyProfile;