import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RepoCard from "./RepoCard";
import Navbar from "./Navbar";
import Loading from "./Loading";

const Profile = () => {
    let { username } = useParams();
    const [data, setData] = useState<userData | null>(null);
    const [repos, setRepos] = useState<RepoCardProps[]>([]);
    useEffect(() => {
        const apiCall = setTimeout(() => {
            axios.get(`https://api.github.com/users/${username}`).then((res) => setData(res.data));
            axios.get(`https://api.github.com/users/${username}/repos`).then((res) => setRepos(res.data));
        }, 1500);
        return () => clearTimeout(apiCall);
    }, []);
    interface RepoCardProps {
        id: number;
        liveDemo: string;
        homepage: string; // Add the 'homepage' property
        html_url: string;
        language: string;
        name: string;
        description: string;
        topics: string[];
        htmlUrl: string;
    }
    interface userData {
        avatar_url: string;
        name: string;
        public_repos: number;
        followers: number;
        following: number;
        location: string;
        blog: string;
        html_url: string;
    }
    // interface repoData {
    //     id: number;
    //     homepage: string;
    //     html_url: string;
    //     language: string;
    //     name: string;
    //     description: string;
    //     topics: string[]; }
  return (
    <>
    <Navbar/>
       <div className="items-center flex flex-col mb-5 px-5 h-auto bg-gray-500 min-h-[75vh]">
                <h1 className="text-4xl font-bold my-5 text-center text-white">
                    {username} GitHub Profile
                </h1>
                {/* Loader animation data control  */}
                {data !== null ? (
                    <>
                        {/* Profile Card */}
                        <div className="card lg:card-side border-2 border-white rounded-lg flex md:px-5 py-5 w-full md:w-5/12">
                            {/* Card Avatar */}
                            <div className="avatar flex items-center justify-center">
                                <div className="mb-8 rounded-full w-40 h-40">
                                    <img alt="avatar" className="rounded-full" src={data?.avatar_url} />
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="card-body flex items-center p-0 sm:p-5 flex-col">
                                <h1 className="card-title text-3xl text-white">{data.name ? data.name : username}</h1>
                                <div className="badges my-1 flex w-full justify-evenly text-white mt-3">
                                    <div className="badge badge-primary cursor-pointer ">
                                        <a href={`https://github.com/${username}?tab=repositories`} target="_blank">
                                            <b className="bg-pink-400 rounded-full px-2 py-1">Repos: {data.public_repos}</b>
                                        </a>
                                    </div>
                                    <div className="badge badge-secondary cursor-pointer ">
                                        <a href={`https://github.com/${username}?tab=followers`} target="_blank">
                                            <b className="bg-purple-600 rounded-full px-2 py-1">Followers {data.followers}</b>
                                        </a>
                                    </div>
                                    <div className="badge badge-accent cursor-pointer">
                                        <a href={`https://github.com/${username}?tab=following`} target="_blank">
                                            <b className="bg-green-700 rounded-full px-2 py-1">Following {data.following}</b>
                                        </a>
                                    </div>
                                </div>

                                <div className="location mt-3 flex items-center text-white">
                                    <p className="ml-2 text-xl"><i className="fa-solid fa-location-dot mr-2"></i> {data.location}</p>
                                </div>
                                
                                <div className="blog flex items-center text-white">
                                    <i className="fa-solid fa-link ml-2"></i> 
                                    <a className={`ml-2 ${data.blog ? '' : 'cursor-not-allowed'}`} target="_blank" href={`${data.blog}`}>
                                        {data.blog ? data.blog : "Not Available"}
                                    </a>
                                </div>
                                <div className="text-white bg-gray-500 hover:bg-white border-2 border-white hover:text-black font-medium rounded-lg text-sm px-5 py-2.5 me-2 mt-7 mb-2">
                                    <a href={`${data.html_url}`} className="btn btn-outline" target="_blank">
                                        {/* <BsGithub className="mr-2 text-lg" /> */}
                                        <i className="fa-brands fa-github mr-2"></i> View Profile
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Repositories  */}
                        <div className="w-12/12 h-2/5 mt-10 ">
                            <h1 className="text-3xl text-center font-bold ">Repositories</h1>
                            <p className="text-center font-bold text-2xl">({data.public_repos})</p>
                            <div className="border-l-2 mt-10">
                                {repos.map((repo) => (
                                    <RepoCard key={repo.id} liveDemo={repo.homepage} name={repo.name} description={repo.description} topics={repo.topics} htmlUrl={repo.html_url} language={repo.language}/>
                                ))}
                            </div>
                            {data.public_repos > 30 && <a href={`${data.html_url}`} className="btn btn-outline w-full">View all repos</a>}
                        </div>
                    </>
                ) : (<Loading/>)}
            </div>
    </>
  )
}

export default Profile
