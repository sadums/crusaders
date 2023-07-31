"use client";

import SearchBar from "./searchbar";

export default function Main() {
  return (
    <div className="homePageMainDiv">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-1">
          {/* <aside
                    className={`h-screen w-64 bg-white-800 text-white p-4 ${isSidebarOpen ? '' : 'hidden'}`}
                    id="sidebar"
                  ></aside> */}
        </div>

        <div className="col-span-2 homePageFeedMainDiv">
        <SearchBar/>
          <div className="feedPostsTop"></div>
          <div>Hello world</div>
        </div>

        <div className="col-span-1">
          <div className="homepageInfoMainDiv">
            <div className="homepageInfoDivs postButtonDiv">
              <button className=" px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 hover:scale-105">
                Create A Post
              </button>
            </div>
            <div className="homepageInfoDivs">
              <h3>Go Pro!</h3>
              <p>Get a one month free trial idk</p>
              <button className=" px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 hover:scale-105">
                Sign up
              </button>
            </div>
            <div className="homepageInfoDivs">
              <h3>Who To Follow</h3>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-7 w-auto rounded-full object-cover"
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.kjCUP06WDUMR88i5wo2SqwAAAA%26pid%3DApi&f=1&ipt=f48cf9d9981fe4a656c956f9fb581cad8c3919212d8b2805255465420fcda332&ipo=images"
                    alt="Your Company"
                  ></img>
                </div>
                <div className="hidden sm:ml-0 sm:flex sm:items-center sm:justify-center">
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-black-800 px-3 py-2"
                      aria-current="page"
                    >
                      Carreejoh
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-7 w-auto rounded-full object-cover"
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.kjCUP06WDUMR88i5wo2SqwAAAA%26pid%3DApi&f=1&ipt=f48cf9d9981fe4a656c956f9fb581cad8c3919212d8b2805255465420fcda332&ipo=images"
                    alt="Your Company"
                  ></img>
                </div>
                <div className="hidden sm:ml-0 sm:flex sm:items-center sm:justify-center">
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-black-800 px-3 py-2"
                      aria-current="page"
                    >
                      EmilySmith
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="homepageInfoDivs">
                      <h3>Your Interests</h3> */}
            <form className="max-w-sm mx-auto mt-8 p-4 bg-gray-100 rounded-lg shadow homepageInfoDivs">
              <div className="mb-2">
                <h3>Your Interests</h3>
                <div className="flex items-center flex-wrap infoInterestsDiv">
                  <label id="interest1" className="ml-2 text-indigo-700">
                    Travel
                  </label>
                  <input
                    type="checkbox"
                    id="interest1"
                    name="interest1"
                    className="form-checkbox ml-2 h-4 w-4 text-blue-500"
                  ></input>
                  <label id="interest1" className="ml-2 text-indigo-700">
                    News
                  </label>
                  <input
                    type="checkbox"
                    id="interest1"
                    name="interest1"
                    className="form-checkbox ml-2 h-4 w-4 text-blue-500"
                  ></input>
                </div>
                <div className="flex items-center flex-wrap infoInterestsDiv">
                  <label id="interest1" className="ml-2 text-indigo-700">
                    Coding
                  </label>
                  <input
                    type="checkbox"
                    id="interest1"
                    name="interest1"
                    className="form-checkbox ml-2 h-4 w-4 text-blue-500"
                  ></input>
                  <label id="interest1" className="ml-2 text-indigo-700">
                    Sports
                  </label>
                  <input
                    type="checkbox"
                    id="interest1"
                    name="interest1"
                    className="form-checkbox ml-2 h-4 w-4 text-blue-500"
                  ></input>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <ToggleSidebar/> */}
    </div>
  );
}
