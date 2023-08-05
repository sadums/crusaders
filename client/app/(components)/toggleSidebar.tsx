"use client";

import "../(styles)/navbar.css";
import "../(styles)/profile.css";
import { useState, useEffect } from "react";
import MessagesSidebar from "./messagesSidebar";
import ProfilePosts from "./profilePosts";

import terms from "../(searchData)/terms.json";
import jaroWinkler from "../(utils)/search/jaroWinklerSearch";

interface toggle {
  props: any;
  type: string;
  sidebarOpacity: boolean | undefined;
}

const ToggleSidebar = ({ props, type, sidebarOpacity }: toggle) => {
  const tempLikedPostData = [
    {
      title: "Coding",
      picture:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.05gBtkpqfy-OonbTZNVNUgHaE8%26pid%3DApi&f=1&ipt=be6845eac96b9f23fb9a35404120bea1610926d7b529640e64426c73861fab7f&ipo=images",
    },
    {
      title: "Travel",
      picture:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F08%2FTravel-Images-For-Desktop.jpg&f=1&nofb=1&ipt=f102570e72b628d53418d9680add971373a1b8bb016b9be2d51594f3c5b96d30&ipo=images",
    },
    {
      title: "Plane I saw",
      picture:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.CSU0WYkZwY4keDZCuzMsfQHaE5%26pid%3DApi&f=1&ipt=4bb77a96611792db60e533091c5fa231ed0edd86d48b4cc094ce2d652769089a&ipo=images",
    },
    {
      title: "Oil Refinery",
      picture:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fwww.oilandgas360.com%2Fwp-content%2Fuploads%2F2018%2F02%2FCanton-Refinery-in-Canton-Ohio.jpg%3Ffit%3D3600%252C2400%26ssl%3D1&f=1&nofb=1&ipt=55a3e0a7127f9a0991faa9bbe41d182c06ba3cda1f157067e704ff8f5fe786b2&ipo=images",
    },
    {
      title: "Nature",
      picture:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2016%2F01%2F111509-landscape-nature.jpg&f=1&nofb=1&ipt=a8e47dc44480d87f1d5a9ded42e6337c47323587ada2e854bb957a9d96f11cde&ipo=images",
    },
    {
      title: "Mountains",
      picture:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.YEpnOBigXfti5tjP_2n3UgHaE8%26pid%3DApi&f=1&ipt=37909f0bbcad8559d7c52af3a0959cb37bf1be9018938c809523e1cf8a3ac092&ipo=images",
    },
    {
      title: "Beach",
      picture:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.H44yKeMtUgYB1W5cLslHOwHaE8%26pid%3DApi&f=1&ipt=f5f934fe840ef9b79562a21b22ea4b591c3247f92454d0fc3b93365054916edc&ipo=images",
    },
    {
      title: "Cityscape",
      picture:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2017%2F11%2F23%2F515009-cityscape-USA-Chicago.jpg&f=1&nofb=1&ipt=9b67d50523f85415891f97bfdc9a2ac106b614ece1170c2e30a75fec4deac843&ipo=images",
    },
    {
      title: "Went Snowboarding",
      picture:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.UNY2Aohxm8cYxJ7JbELKBgHaE7%26pid%3DApi&f=1&ipt=5e53029b6947625da5c8b94c9a3eb790041f1784372b1f23d0bb902508dcadfc&ipo=images",
    },
    {
      title: "Scuba Diving",
      picture:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.4diJwgKVPmNeaSOImvSHggHaE8%26pid%3DApi&f=1&ipt=f9cd121a49cfa9f697da84d17b5502471593277070c3e1da0f67641522f9ee46&ipo=images",
    },
  ];

  const tempNotificationData = [
    {
      type: "friendRequest",
      id: 1,
      data: {
        senderName: "Sadums",
        pfp: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.4diJwgKVPmNeaSOImvSHggHaE8%26pid%3DApi&f=1&ipt=f9cd121a49cfa9f697da84d17b5502471593277070c3e1da0f67641522f9ee46&ipo=images",
      },
    },
    {
      type: "messageResponse",
      id: 2,
      data: {
        senderName: "Carreejoh",
        message: "Random response",
        pfp: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.4diJwgKVPmNeaSOImvSHggHaE8%26pid%3DApi&f=1&ipt=f9cd121a49cfa9f697da84d17b5502471593277070c3e1da0f67641522f9ee46&ipo=images",
      },
    },
    {
      type: "friendRequest",
      id: 3,
      data: {
        senderName: "Xtra",
        pfp: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.4diJwgKVPmNeaSOImvSHggHaE8%26pid%3DApi&f=1&ipt=f9cd121a49cfa9f697da84d17b5502471593277070c3e1da0f67641522f9ee46&ipo=images",
      },
    },
    {
      type: "friendRequest",
      id: 4,
      data: {
        senderName: "RandomGuy",
        pfp: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.4diJwgKVPmNeaSOImvSHggHaE8%26pid%3DApi&f=1&ipt=f9cd121a49cfa9f697da84d17b5502471593277070c3e1da0f67641522f9ee46&ipo=images",
      },
    },
    {
      type: "messageResponse",
      id: 5,
      data: {
        senderName: "TitanicYoshi",
        message: "Whats up my guy",
        pfp: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.4diJwgKVPmNeaSOImvSHggHaE8%26pid%3DApi&f=1&ipt=f9cd121a49cfa9f697da84d17b5502471593277070c3e1da0f67641522f9ee46&ipo=images",
      },
    },
  ];

  interface FriendRequestNotificationData {
    senderName: string;
    pfp: string;
  }

  interface MessageNotificationData {
    senderName: string;
    message: string;
    pfp: string;
  }

  // const FriendRequestNotification = (data: FriendRequestNotificationData) => {
  //   return (
  //     <div className="flex">
  //       <img className="h-14 w-14 rounded-full" src={data.pfp}></img>
  //     </div>
  //   );
  // };

  const sidebarSelector = () => {
    if (type === "Search") {
      const [search, setSearch] = useState("");

      const [result1, setResult1] = useState("");
      const [result2, setResult2] = useState("");
      const [result3, setResult3] = useState("");
      const [result4, setResult4] = useState("");
      const [result5, setResult5] = useState("");

      const setResults = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        const start = Date.now();
        const topFive: [
          [any | null, number],
          [any | null, number],
          [any | null, number],
          [any | null, number],
          [any | null, number]
        ] = [
          [null, 0.85],
          [null, 0.85],
          [null, 0.85],
          [null, 0.85],
          [null, 0.85],
        ];

        for (let i = 0; i < terms.length; i++) {
          const result = jaroWinkler(search, terms[i]);
          if (result > 0.85) {
            if (result > topFive[4][1]) {
              topFive.pop();
              topFive.push([terms[i], result]);
              topFive.sort(function (a, b) {
                return b[1] - a[1];
              });
            }
          }
        }
        setResult1(topFive[0][0]);
        setResult2(topFive[1][0]);
        setResult3(topFive[2][0]);
        setResult4(topFive[3][0]);
        setResult5(topFive[4][0]);

        const end = Date.now();
        console.log(`Time spent: ${end - start}ms`);
      };

      return (
        <div
          className={`top-32 left-5 w-72 text-white fixed h-full z-10 ease-in-out duration-300 toggleSidebarMainDiv ${
            sidebarOpacity
              ? "w-0 opacity-0 translate-x-0 "
              : "w-100 opacity-1 translate-x-20"
          }`}
        >
          <input
            type="text"
            placeholder="Search Crusaders..."
            className="text-white mt-2 rounded-xl p-1 bg-coolGray border-solid border-customPurple border-t-2 border-r-2 border-l-2 border-b-2 outline-none w-64"
            value={search}
            onChange={(e) => setResults(e)}
          />
          <ul
            className="absolute z-[1000] float-left m-0 w-full mt-1 list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
            aria-labelledby="dropdownMenuButton1"
            data-te-dropdown-menu-ref
          >
            <li>
              <a
                className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                href="#"
                data-te-dropdown-item-ref
              >
                {result1}
              </a>
            </li>
            <li>
              <a
                className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                href="#"
                data-te-dropdown-item-ref
              >
                {result2}
              </a>
            </li>
            <li>
              <a
                className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                href="#"
                data-te-dropdown-item-ref
              >
                {result3}
              </a>
            </li>
            <li>
              <a
                className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                href="#"
                data-te-dropdown-item-ref
              >
                {result4}
              </a>
            </li>
            <li>
              <a
                className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                href="#"
                data-te-dropdown-item-ref
              >
                {result5}
              </a>
            </li>
          </ul>
        </div>
      );
    }
    if (type === "Messages") {
      return (
        <div
          className={`bottom-0 top-20 left-20 w-72 text-white fixed z-10 ease-in-out duration-500 ${
            sidebarOpacity
              ? "translate-y-full opacity-0"
              : "translate-y-0 opacity-1"
          }`}
        >
          <MessagesSidebar props={props} />
        </div>
      );
    }
    if (type === "Likes") {
      return (
        <div
          className={`bottom-0 p-5 top-32 left-20 w-72 text-white fixed z-10 ease-in-out duration-500 ${
            sidebarOpacity
              ? "translate-y-full opacity-0"
              : "translate-y-0 opacity-1"
          }`}
        >
          <h1 className="pb-4">Your Liked Posts:</h1>
          <div
            className="grid grid-cols-1 gap-3 scroll homepageLikedPosts"
            style={{
              maxHeight: "100%",
              overflowY: "scroll",
              scrollbarWidth: "none",
              /* For Firefox */
              scrollbarColor: "transparent transparent",
            }}
          >
            {tempLikedPostData.map((post, postIndex) => (
              <ProfilePosts key={postIndex} postInfo={post} />
            ))}
          </div>
        </div>
      );
    }
    if (type === "Notifications") {
      return (
        <div
          className={`bottom-0 p-3 top-32 left-20 w-72 text-white fixed z-10 ease-in-out duration-500 ${
            sidebarOpacity
              ? "translate-y-full opacity-0"
              : "translate-y-0 opacity-1"
          }`}
        >
          <h4 className="dark:text-white text-lg text-black font-semibold border-customPurpleDark border-b-2">Notifications</h4>
          <div>
            {tempNotificationData.map((notif, index) => {
              if (notif.type === "friendRequest") {
                return (
                  <div key={index} className="dark:border-customPurple shadow-xl bg-white border-[1px] rounded-xl dark:bg-coolGray dark:shadow-notificationShadowPink ring-blue-700 p-1 mt-3">
                    <div className="flex justify-between">
                      {" "}
                      <div className="flex">
                        <img
                          className="h-10 w-10 rounded-full mt-1 border-[1px] border-black"
                          src={notif.data.pfp}
                        ></img>
                        <div className="left-0">
                          <a className="ml-2 text-lg text-black dark:text-white font-semibold cursor-pointer">
                            {notif.data.senderName}
                          </a>
                          <h4 className="ml-2 text-[.8rem] text-gray-600 font-semibold dark:text-gray-400">
                            Has sent you a friend request
                          </h4>
                        </div>
                      </div>
                      <a className="mt-1 cursor-pointer hover:rotate-3 duration-150 ease-in-out">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </a>{" "}
                    </div>
                    <div className="flex justify-evenly mt-2">
                      <button className="dark:text-green-400 font-semibold text-green-600 text-sm pl-1 pr-1 p-[.5%] rounded-md hover:bg-green-400 hover:text-black duration-150 ease-in-out">
                        Accept
                      </button>
                      <button className="dark:text-red-400 font-semibold text-red-600 text-sm pl-1 pr-1 p-[.5%] rounded-md hover:bg-red-400 hover:text-black duration-150 ease-in-out">
                        Decline
                      </button>
                    </div>
                  </div>
                );
              }
              if (notif.type === "messageResponse") {
                return (
                  <div className="dark:border-customPurple border-[1px] shadow-xl bg-white rounded-xl dark:shadow-notificationShadowPink dark:bg-coolGray p-1 mt-3" key={index}>
                    <div className="flex justify-between">
                      {" "}
                      <div className="flex">
                        <img
                          className="h-10 w-10 rounded-full mt-1"
                          src={notif.data.pfp}
                        ></img>
                        <div>
                          <a className="ml-2 text-lg text-black dark:text-white font-semibold cursor-pointer">
                            {notif.data.senderName}
                          </a>
                          <h4 className="ml-2 text-[.8rem] text-gray-600 font-semibold dark:text-gray-400">
                            Has sent you a message
                          </h4>
                        </div>
                      </div>
                      <a className="mt-1 cursor-pointer hover:rotate-3 duration-150 ease-in-out">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </a>{" "}
                    </div>
                    <div className="flex mt-2">
                      <button className="ml-11 text-blue-600 font-semibold dark:text-blue-500 text-sm  pl-1 pr-1 p-[.5%] rounded-md hover:bg-customPurple hover:text-white duration-150 ease-in-out">
                        <div className="flex">
                        Respond
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          />
                        </svg>
                        </div>
                        
                      </button>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      );
    }
  };

  return <>{sidebarSelector()}</>;
};

export default ToggleSidebar;
