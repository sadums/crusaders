"use client";

import "../styles/homepage.css";
import FeedPosts from "./feedPost";

function HomeController() {
  // For fake posts
  const tempUsers = [
    {
      username: "Carreejoh",
      profilePic:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs.abcnews.com%2Fimages%2FNightline%2F191018_ntl_hunter_biden_1_1239_hpMain_1x1_992.jpg&f=1&nofb=1&ipt=622f05d73b64dcad7acc99165e37727bc9ee27c841f790f83f7628673c9df3d4&ipo=images",
      postTitle: "First post fuck yes",
      postDesc: "This post is bs idk idk idk idk",
      postImg:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.MwnKEzDKkbVbT-7aPzgwMQHaEK%26pid%3DApi&f=1&ipt=6f063d2735073ac485932a221f0f12dcb0537273747034db597b4a1436340a45&ipo=images",
      date: "07/24/2023",
    },
    {
      username: "JohnDoe",
      profilePic:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs.abcnews.com%2Fimages%2FNightline%2F191018_ntl_hunter_biden_1_1239_hpMain_1x1_992.jpg&f=1&nofb=1&ipt=622f05d73b64dcad7acc99165e37727bc9ee27c841f790f83f7628673c9df3d4&ipo=images",
      postTitle: "Exciting Adventure",
      postDesc: "Just had an amazing adventure with friends. It was thrilling!",
      postImg:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.D4p3jqDLUQWHKb9SH_2hxgHaEo%26pid%3DApi&f=1&ipt=0a15bcb5be344e2ca48b6b45e6887040dcb1c10268844223f92cfd7a62f2e3f2&ipo=images",
      date: "07/25/2023",
    },
    {
      username: "EmilySmith",
      profilePic:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs.abcnews.com%2Fimages%2FNightline%2F191018_ntl_hunter_biden_1_1239_hpMain_1x1_992.jpg&f=1&nofb=1&ipt=622f05d73b64dcad7acc99165e37727bc9ee27c841f790f83f7628673c9df3d4&ipo=images",
      postTitle: "Delicious Food",
      postDesc:
        "Tried out a new restaurant today. The food was absolutely delicious!",
      postImg:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.u0Pk-feV2uAMLCfcbXUVDwHaE8%26pid%3DApi&f=1&ipt=e178c5a0a4b20f6d9306c6359032083910827cb2bf8937709ca0b9991dd79404&ipo=images",
      date: "07/26/2023",
    },
    {
      username: "TravelBug",
      profilePic:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs.abcnews.com%2Fimages%2FNightline%2F191018_ntl_hunter_biden_1_1239_hpMain_1x1_992.jpg&f=1&nofb=1&ipt=622f05d73b64dcad7acc99165e37727bc9ee27c841f790f83f7628673c9df3d4&ipo=images",
      postTitle: "Wanderlust",
      postDesc:
        "In love with this beautiful scenic view. Can't get enough of traveling!",
      postImg:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.R_s3pH6bLBzCRLQWtFgy8gHaEr%26pid%3DApi&f=1&ipt=0760a9256a1e41d30d118b516efb1e41e60f4cf667589341f2b24a8c685536df&ipo=images",
      date: "07/27/2023",
    },
  ];

  return (
    <div className="homePageMainDiv">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-1"></div>

        <div className="col-span-2 homePageFeedMainDiv">
          <div className="feedPostsTop"></div>
          <FeedPosts users={tempUsers} />
        </div>

        <div className="col-span-1">
          <div className="homepageInfoMainDiv">
            <input
              type="text"
              placeholder="Search Crusaders..."
              className="px-4 py-2 h-8 rounded-lg focus:outline-none navBarSearchBar"
            />
            <div className="homepageInfoDivs">
              <h3>Go Pro!</h3>
              <p>Get a one month free trial idk</p>
              <button
                className=" px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 hover:scale-105"
              >
                Sign up
              </button>
            </div>
            <div className="homepageInfoDivs">
              <h3>Who To Follow</h3>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="h-7 w-auto rounded-full object-cover"
                      src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.kjCUP06WDUMR88i5wo2SqwAAAA%26pid%3DApi&f=1&ipt=f48cf9d9981fe4a656c956f9fb581cad8c3919212d8b2805255465420fcda332&ipo=images'
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
                      src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.kjCUP06WDUMR88i5wo2SqwAAAA%26pid%3DApi&f=1&ipt=f48cf9d9981fe4a656c956f9fb581cad8c3919212d8b2805255465420fcda332&ipo=images'
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeController;
