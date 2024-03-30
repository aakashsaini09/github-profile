import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useSearch } from './SearchContext';
const Home = () => {
    const URL = "https://api.github.com/search/users?q="
    // const [query, setQuery] = useState("");
    const [userdata, setuserdata] = useState([])
    const { searchValue } = useSearch()
    // setQuery(searchValue)
    // set user basic data and store in userdata useState
    const getUsers = async (username) => {
        try {
            const response = await fetch(URL + username);
            if (response.ok) {
                const data = await response.json()
                setuserdata(data.items)

            }
            else {
                console.error("Failed to fetch user data")
            }
        } catch (error) {
            console.error("Error fetching user data:", error)
        }
    };
    useEffect(() => {
        getUsers(searchValue);
    }, [searchValue]);
return (
    <>
    {userdata.map(item => {
        return <section className="text-gray-600 body-font overflow-hidden" key={item.id} >
         <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            <Link className="py-8 flex flex-wrap md:flex-nowrap" to={`/repopage/${item.login}`}>
             <img className='w-36 h-36 mr-20' src={item.avatar_url} alt=""/>
             {item.login}
            </Link>
          </div>
         </div>
        </section> 
     })}
</>
)
}

export default Home
