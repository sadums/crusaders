"use client";

import "../(styles)/navbar.css";
import { useState, useEffect } from "react";
import ToggleSidebar from "./toggleSidebar";
import { render } from "react-dom";
import Auth from "../(utils)/auth";

interface NavbarProps {
  setIsSignInModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSignUpModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<NavbarProps> = ({
  setIsSignInModalOpen,
  setIsSignUpModalOpen,
}) => {
  const sidebarData = [
    {
      username: "Carreejoh",
      title: "Messages",
      content: [
        {
          username: "carreejoh",
          pfp: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs.abcnews.com%2Fimages%2FNightline%2F191018_ntl_hunter_biden_1_1239_hpMain_1x1_992.jpg&f=1&nofb=1&ipt=622f05d73b64dcad7acc99165e37727bc9ee27c841f790f83f7628673c9df3d4&ipo=images",
          message:
            "super messages thing you got there, massive dubs, huge REACT win, tsx can suck my balls",
        },
        {
          username: "JohnDoe",
          pfp: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs.abcnews.com%2Fimages%2FNightline%2F191018_ntl_hunter_biden_1_1239_hpMain_1x1_992.jpg&f=1&nofb=1&ipt=622f05d73b64dcad7acc99165e37727bc9ee27c841f790f83f7628673c9df3d4&ipo=images",
          message: "Huge GPT dubs, massive typescript L",
        },
        {
          username: "SarahConnor",
          pfp: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs.abcnews.com%2Fimages%2FNightline%2F191018_ntl_hunter_biden_1_1239_hpMain_1x1_992.jpg&f=1&nofb=1&ipt=622f05d73b64dcad7acc99165e37727bc9ee27c841f790f83f7628673c9df3d4&ipo=images",
          message: "I'll be back!",
        },
        {
          username: "MichaelScott",
          pfp: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs.abcnews.com%2Fimages%2FNightline%2F191018_ntl_hunter_biden_1_1239_hpMain_1x1_992.jpg&f=1&nofb=1&ipt=622f05d73b64dcad7acc99165e37727bc9ee27c841f790f83f7628673c9df3d4&ipo=images",
          message: "That's what she said!",
        },
        {
          username: "ElonMusk",
          pfp: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs.abcnews.com%2Fimages%2FNightline%2F191018_ntl_hunter_biden_1_1239_hpMain_1x1_992.jpg&f=1&nofb=1&ipt=622f05d73b64dcad7acc99165e37727bc9ee27c841f790f83f7628673c9df3d4&ipo=images",
          message: "Mars, here we come!",
        },
      ],
    },
    {
      title: "Likes",
      content: "Your Likes",
    },
  ];

  const signUpButtonHandler = () => {
    console.log("SIGN UP");
    setIsSignUpModalOpen(true);
  };

  const signInButtonHandler = () => {
    console.log("SIGN IN");
    setIsSignInModalOpen(true);
  };

  const [currentColorMode, setColorMode] = useState(false);

  useEffect(() => {
    let choice = localStorage.getItem("darkMode");
    let application = window.document.body.classList;
    if (choice === "dark") {
      application.add("dark");
      application.remove("border-mainDarkPurple")
      application.add("border-mainPurple")
    } else {
      application.remove("border-mainPurple")
      application.add("border-mainDarkPurple")
    }
  }, [enableDarkMode, enableLightMode]);

  useEffect(() => {
    let choice = localStorage.getItem("darkMode");
    if (choice === "dark") {
      setColorMode(true);
    }
  }, []);

  function enableDarkMode() {
    localStorage.setItem("darkMode", "dark");
  }

  function enableLightMode() {
    localStorage.setItem("darkMode", "light");
  }

  const [showSidebar, setShowSidebar] = useState("Notifications");
  const [sidebarOpacity, setSidebarOpacity] = useState(true);

  useEffect(() => {
    setSidebarOpacity(false)
  }, [showSidebar])

  useEffect(() => {
    handleSidebarChange("Notifications");
    setSidebarOpacity(!sidebarOpacity);
  }, []);

  // useEffect(() => {
  //   if(sidebarOpacity === true) {

  //   }
  // },[sidebarOpacity])

  //This error is typescript I will change
  const handleSidebarChange = (page: any) => setShowSidebar(page);

  return (
    <> 
      <div className="bg-gradient-to-t  from-mainPurple to-mainDarkPurple dark:from-mainDarkPurple dark:to-mainPurple h-[100vh] fixed top-0 left-0 w-20 shadow-lg z-50">
        <div className="container mx-auto z-50">
          <div className="grid grid-cols-1 gap-4">
            <h5 className="text-sm text-center mt-2">Crusaders</h5>
            <div className="sidebarLogo ">
              <img
                className="h-16 mx-auto w-16 rounded-full p-1"
                src="/horseOnlyLogo.png"
                alt="Your Company"
              ></img>
            </div>
            <ul className="list-outside ... sidebarLinkList">
              <li
                className={`flex items-center space-x-2 bg-gradient-to-tr from-purple-900  to-[#0f0466] sidebarIconDarkMode group ${
                  currentColorMode ? "hidden" : "block"
                }`}
              >
                <a
                  href="/"
                  className="text-white rounded-md  py-2 text-md font-medium transition duration-300 hover:scale-100"
                  onClick={() => enableDarkMode()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                    />
                  </svg>
                </a>
                <span className="sidebarIconInfo group-hover:scale-100">
                  Dark Mode
                </span>
              </li>
              <li
                className={`flex items-center space-x-2 sidebarIconDarkMode bg-gradient-to-tr from-yellow-500 to-red-500 group ${
                  currentColorMode ? "block" : "hidden"
                }`}
              >
                <a
                  href="/"
                  className="text-black rounded-md py-2 text-md font-medium transition duration-300 hover:scale-100"
                  onClick={() => enableLightMode()}
                >
                
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    />
                  </svg>
                </a>
                <span className="sidebarIconInfo group-hover:scale-100">
                  Light Mode
                </span>
              </li>

              <li className=" flex items-center space-x-2 sidebarIcon group">
                <a
                  href="/"
                  className="dark:text-gray-300 rounded-md py-2 text-md font-medium transition duration-300 hover:scale-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                </a>
                <span className="sidebarIconInfo group-hover:scale-100">
                  Home
                </span>
              </li>
              <li className="flex items-center space-x-2 sidebarIcon group">
                <a
                  href="#search"
                  className="text-gray-300rounded-md  py-2 text-md font-medium transition duration-300 hover:scale-100"
                  onClick={() => {
                    handleSidebarChange("Search");
                    setSidebarOpacity(!sidebarOpacity);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </a>
                <span className="sidebarIconInfo group-hover:scale-100">
                  Search
                </span>
              </li>
              <li className="flex items-center space-x-2 sidebarIcon group">
                <a
                  href="/explore"
                  className="text-gray-300 rounded-md py-2 text-md font-medium transition duration-300 hover:scale-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5"
                    />
                  </svg>
                </a>
                <span className="sidebarIconInfo group-hover:scale-100">
                  Explore
                </span>
              </li>
              <li className="flex items-center space-x-2 sidebarIcon group">
                <a
                  href="#"
                  className="text-gray-300rounded-md py-2 text-md font-medium transition duration-300 hover:scale-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                </a>
                <span className="sidebarIconInfo group-hover:scale-100">
                  Upgrade
                </span>
              </li>
              {Auth.loggedIn() ? (
                <>
                  <li className=" flex items-center space-x-2 sidebarIcon group">
                    <a
                      href="#"
                      className="text-gray-300 rounded-md py-2 text-md font-medium transition duration-300 hover:scale-100"
                      onClick={() => {
                        handleSidebarChange("Notifications");
                        setSidebarOpacity(!sidebarOpacity);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                        />
                      </svg>
                    </a>
                    <span className="sidebarIconInfo group-hover:scale-100">
                      Notifications
                    </span>
                  </li>
                  <li className="flex items-center space-x-2 sidebarIcon group">
                    <a
                      href="/messages"
                      className="text-gray-300rounded-md py-2 text-md font-medium transition duration-300 hover:scale-100"
                      // onClick={() => {
                      //   handleSidebarChange("Messages");
                      //   setSidebarOpacity(!sidebarOpacity);
                      // }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
                        />
                      </svg>
                    </a>
                    <span className="sidebarIconInfo group-hover:scale-100">
                      Inbox
                    </span>
                  </li>
                  <li className="flex items-center space-x-2 sidebarIcon group">
                    <a
                      href="#"
                      className="text-gray-300rounded-md py-2 text-md font-medium transition duration-300 hover:scale-100"
                      onClick={() => {
                        handleSidebarChange("Likes");
                        setSidebarOpacity(!sidebarOpacity);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                      </svg>
                    </a>
                    <span className="sidebarIconInfo group-hover:scale-100">
                      Liked
                    </span>
                  </li>
                  <li className="flex items-center space-x-2 sidebarIcon group">
                    <a
                      href="/profile"
                      className="text-gray-300rounded-md py-2 text-md font-medium transition duration-300 group-hover:scale-100"
                      // onClick={() => setShowSidebar(!showSidebar)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </a>
                    <span className="sidebarIconInfo group-hover:scale-100">
                      Profile
                    </span>
                  </li>
                  <li
                    className="flex items-center space-x-2 sidebarIcon group"
                    onClick={() => Auth.logout()}
                  >
                    <a
                      href="#"
                      className="text-gray-300rounded-md py-2 text-md font-medium transition duration-300 group-hover:scale-100"
                      // onClick={() => setShowSidebar(!showSidebar)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </a>
                    <span className="sidebarIconInfo group-hover:scale-100">
                      Log out
                    </span>
                  </li>
                </>
              ) : (
                <>
                  <li
                    className="flex items-center space-x-2 sidebarIcon group"
                    onClick={signUpButtonHandler}
                  >
                    <a
                      href="#"
                      className="text-gray-300rounded-md py-2 text-md font-medium transition duration-300 group-hover:scale-100"
                      // onClick={() => setShowSidebar(!showSidebar)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </a>
                    <span className="sidebarIconInfo group-hover:scale-100">
                      Sign Up
                    </span>
                  </li>
                  <li
                    className="flex items-center space-x-2 sidebarIcon group"
                    onClick={signInButtonHandler}
                  >
                    <a
                      href="#"
                      className="text-gray-300rounded-md py-2 text-md font-medium transition duration-300 group-hover:scale-100"
                      // onClick={() => setShowSidebar(!showSidebar)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </a>
                    <span className="sidebarIconInfo group-hover:scale-100">
                      Sign in
                    </span>
                  </li>
                </>
              )}

              <li className="flex items-center space-x-2 sidebarIcon group">
                <a
                  href="#"
                  className="text-gray-300rounded-md py-2 text-md font-medium transition duration-300 hover:scale-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </a>
                <span className="sidebarIconInfo group-hover:scale-100">
                  Settings
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* For toggleSidebar */}

      {/* <div className={`top-0 left-0 w-[10vw] bg-blue-600  text-white fixed h-full z-10 ease-in-out duration-300 toggleSidebarMainDiv ${
      showSidebar ? "w-0 opacity-0 translate-x-0 " : "w-[18vw] opacity-1 translate-x-[10vw]"
    }`}>
        <h2 className="mt-20 text-4xl font-semibold text-white">
          I am a sidebar
        </h2>
      </div> */}

      {/* <ToggleSidebar setShowSidebar={setShowSidebar}/> */}
      {showSidebar === "None" && (
        <ToggleSidebar props={undefined} type={""} sidebarOpacity={undefined} />
      )}
      {showSidebar === "Search" && (
        <ToggleSidebar
          type="Search"
          props={sidebarData[0]}
          sidebarOpacity={sidebarOpacity}
        />
      )}
      {showSidebar === "Messages" && (
        <ToggleSidebar
          type="Messages"
          props={sidebarData[0]}
          sidebarOpacity={sidebarOpacity}
        />
      )}
      {showSidebar === "Notifications" && (
        <ToggleSidebar
          type="Notifications"
          props={sidebarData[1]}
          sidebarOpacity={sidebarOpacity}
        />
      )}
      {showSidebar === "Likes" && (
        <ToggleSidebar
          type="Likes"
          props={sidebarData[1]}
          sidebarOpacity={sidebarOpacity}
        />
      )}
    </>
  );
};

export default Sidebar;
