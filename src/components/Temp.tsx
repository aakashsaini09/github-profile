// import { Link } from "react-router-dom"

// const Temp = () => {
//   return (
//     <div>
//       <div className="flex w-5/6 flex-wrap mx-auto">
//         {/* USER LIST */}
//         {/* {loading ? (<div>loading....</div>) : 
//         userList && userList.map(user => { */}
//           return <div key={user.id} className="mx-auto mb-5">
//             {/* USER CARD */}
//             <div className="card card-bordered border-white flex pt-5 bg-slate-800 w-72 ">
//               {/* CARD AVATAR */}
//               <div className="avatar flex items-center justify-center">
//                 <div className="rounded-full w-28 h-28 ">
//                   <img alt="avatar" src={user.avatar_url} />
//                 </div>
//               </div>
//               {/* CARD BODY */}
//               <div className="card-body flex items-center">
//                 <h1 className="card-title text-2xl">{user.login}</h1>
//                 <div className="flex items-center">
//                   <p className="text-xl">{user.location}</p>
//                 </div>
//                 <div className="flex items-center ">
//                   <a href={`${user.blog}`}>
//                     {user.blog}
//                   </a>
//                 </div>
//                 <div>
//                   <Link to={`/${user.login}`} className="btn btn-outline">
//                     {/* <BsGithub className="mr-2 text-lg" /> */}
//                     View Profile
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         })}
//         </div>
//     </div>
//   )
// }

// export default Temp
