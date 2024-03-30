import React from 'react'
import { useState, useEffect } from 'react';
import '../App.css'
import { formatDistanceToNow } from 'date-fns';
const SingleUser = () => {
  const currentUrl = window.location.href;
  const first = currentUrl.toString();
  const second = first.split('/');
  const profileName = second.pop();
  const [userdata, setuserdata] = useState({})
  const URL = "https://api.github.com/users/"
  const getUserdata = async (username) => {
      try {
          const response = await fetch(URL + username);
          if (response.ok) {
              const data = await response.json()
              setuserdata(data)
              // console.log(userdata)
          }
          else {
              console.error("Failed to fetch user data")
          }
      } catch (error) {
          console.error("Error fetching user data:", error)
      }
  };
  const [repo, setRepo] = useState([])
  const getUserRepo = async (username) => {
    try {
      const response = await fetch(URL + username + '/repos');
      if (response.ok) {
          const data = await response.json()
          setRepo(data)
      }
      else {
          console.error("Failed to fetch user data")
      }
  } catch (error) {
      console.error("Error fetching user data:", error)
  }
  };
  useEffect(() => {
      getUserdata(profileName);
      getUserRepo(profileName)
  }, []);

  return (
    <>
      {
        <div className='container w-5/6 maindiv'>
          <div className="first-section">
            <img src={userdata.avatar_url} alt="" />
            <div className="nameandusername">
              <a href={userdata.url} className="name">{userdata.name} <span>{userdata.login}</span></a>
              <div className="bio">{userdata.bio}</div>
              <div className="location"><i className="fa-solid fa-location-dot"></i> {userdata.location}</div>
              <a href={userdata.blog} className="website"><i className="fa-solid fa-link"></i><span>{userdata.blog}</span></a>
              <div className="follow-details">
                <div className="follow-box following">41 <span>Following</span></div>
                <div className="follow-box followers">41 <span>Followers</span></div>
                <div className="follow-box repo-count">{userdata.public_repos} <span>Repo</span></div>
              </div>
            </div>
          </div>
          <div className="second-section">
            <div className="second-part second-left">
              <div className="title">Repositories</div>
              {repo.map((item, index) =>{
                return <div key={item.id}>
                  <hr />
                  <div className="first-row">
                    <div className="repoName font-bold size-5">{item.name}</div><div className="eyeIcon"><i className="fa-solid fa-eye"></i>{item.watchers_count}</div>
                  </div>
                  <div className="discription">{item.description}</div>
                    <div className="last-row">
                      <div className="last-row-left">
                        <div className="smallInfo"><span>{item.language}</span><i className="fa-solid fa-star">{item.stargazers_count}</i> <i className="fa-solid fa-code-fork">{item.forks_count}</i></div>
                      </div>
                      <div className="views">Last push: {formatDistanceToNow(new Date(item.updated_at), { addSuffix: true })}</div>
                    </div>
                  <div id='live-code'>
                  <a href={item.html_url}>  <i className="fa-solid fa-code"></i></a>
                  <a href={item.homepage}><i className="fa-solid fa-eye"></i></a>
                  </div>
                  <hr id='endline'/>
                </div>
              })}
            </div>
            <div className="second-part second-right">
            <div className="title">Followers</div>
            <div className="image">
            </div>
            </div>
          </div>
        </div>
        }
    </>
  )
}

export default SingleUser
