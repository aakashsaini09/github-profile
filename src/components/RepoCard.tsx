const RepoCard = ({ liveDemo, name, description, topics, htmlUrl, language }:any) => {
    return (
      <>
        <div className={`cursor-pointer min-h-36 ml-10 relative flex items-center px-6 py-4 ${language === "JavaScript" ? "bg-yellow-500" : language === "SCSS" ? "bg-purple-600" : language === "HTML" ? "bg-red-600" : language === "CSS" ? "bg-pink-500" : language === "Vue" ? "bg-green-500" : language === "Ruby" ? "bg-red-900" : language === "Python" ? "bg-blue-400" : language === "Java" ? "bg-orange-900" : language === "C++" ? "bg-pink-600" : language === "TypeScript" ? "bg-blue-800" : language === "Rust" ? "bg-orange-500" : language === "Shell" ? "bg-green-500" : "bg-blue-400"} text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0`}>
          <div className={`w-5 h-5 bg-white absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0`} />
          <div className={`w-10 h-1 bg-white  absolute -left-10 z-0`} />
          <div className="flex-auto w-auto md:w-[70vw]">
            <h1 className="text-xl font-bold">
              {name}
              <span className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2 ml-3">
                {language ? language : "Readme"}
              </span>
            </h1>
            <h3 className="my-2">{description}</h3>
            <h4>
              {topics.map((topic:any) => (
                <span key={topic} className="bg-gray-900 text-gray-200 text-xs font-medium mx-5 px-2.5 me-2 py-0.5 rounded border border-gray-500 relative -bottom-3">
                  #{topic}
                </span>
              ))}
            </h4>
          </div>
  
          <a href={`${htmlUrl}`} target="_blank" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 capitalize">
          <i className="fa-brands fa-github mr-2"></i> View Repo
          </a>
          {liveDemo && <a href={`${liveDemo}`} target="_blank" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 capitalize">
            Live Demo <i className="fa-solid fa-arrow-right ml-2"></i>
          </a>}
        </div>
      </>
    );
  };
  
  export default RepoCard;
  