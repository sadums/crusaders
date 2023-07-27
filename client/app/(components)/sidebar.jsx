"use client";

import "../(styles)/navbar.css";
import { useState } from "react";
import ToggleSidebar from "./toggleSidebar";
import { render } from "react-dom";

// interface NavbarProps {
//   setIsSignInModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
//   setIsSignUpModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
// }

// const Sidebar: React.FC<NavbarProps> = ({
//   setIsSignInModalOpen,
//   setIsSignUpModalOpen,
// }) => {
const signUpButtonHandler = () => {
  console.log("SIGN UP");
  setIsSignUpModalOpen(true);
};

const signInButtonHandler = () => {
  console.log("SIGN IN");
  setIsSignInModalOpen(true);
};

// const [isSidebarOpen, setIsSidebarOpen] = useState(false);

// const handleToggleSidebar = () => {
//   setIsSidebarOpen(!isSidebarOpen);
// };

function Sidebar() {
  
  const sidebarData = [
    {
      username: "Carreejoh",
      title: "Messages",
      content: [
        {
          username: "carreejoh",
          pfp: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs.abcnews.com%2Fimages%2FNightline%2F191018_ntl_hunter_biden_1_1239_hpMain_1x1_992.jpg&f=1&nofb=1&ipt=622f05d73b64dcad7acc99165e37727bc9ee27c841f790f83f7628673c9df3d4&ipo=images",
          message: "super sexy messages thing you got there, massive dubs, huge REACT win, tsx can suck my balls"
        },
        {
          username: "JohnDoe",
          pfp: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs.abcnews.com%2Fimages%2FNightline%2F191018_ntl_hunter_biden_1_1239_hpMain_1x1_992.jpg&f=1&nofb=1&ipt=622f05d73b64dcad7acc99165e37727bc9ee27c841f790f83f7628673c9df3d4&ipo=images",
          message: "Huge GPT dubs, massive typescript L"
        }
      ]
    },
    {
      title: "Likes",
      content: "Your Likes",
    },
  ];

  const [showSidebar, setShowSidebar] = useState("None");
  const [sidebarOpacity, setSidebarOpacity] = useState(true);

  const renderSidebar = () => {
    if (showSidebar === "None") {
      return (
        <>
          <ToggleSidebar props={"None"} />
        </>
      );
    }
    if (showSidebar === "Messages") {
      return <ToggleSidebar type="Messages" props={sidebarData[0]} sidebarOpacity={sidebarOpacity}/>;
    }
    if (showSidebar === "Likes") {
      return <ToggleSidebar type="Likes" props={sidebarData[1]} sidebarOpacity={sidebarOpacity}/>;
    }
  };

  const handleSidebarChange = (page) => setShowSidebar(page);

  return (
    <>
      <div className="sidebarMainDiv">
        <div className="container mx-auto z-50">
          <div className="grid grid-cols-1 gap-4">
            <div className="sidebarLogo">
              <img className="h-20" src="/logo.svg" alt="Your Company"></img>
            </div>
            <ul className="list-outside ... sidebarLinkList">
              <li className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                <a
                  href="#"
                  className="text-gray-300rounded-md py-2 text-md font-medium hover:text-indigo-700 transition duration-300 hover:scale-105"
                >
                  Home
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>

                <a
                  href="#"
                  className="text-gray-300rounded-md py-2 text-md font-medium hover:text-indigo-700 transition duration-300 hover:scale-105"
                >
                  Search
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>

                <a
                  href="#"
                  className="text-gray-300rounded-md py-2 text-md font-medium hover:text-indigo-700 transition duration-300 hover:scale-105"
                  onClick={() => {
                    handleSidebarChange('Messages');
                    setSidebarOpacity(!sidebarOpacity);
                  }}
                >
                  Messages
                </a>
              </li>
              <li className="flex items-center space-x-2">
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
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>

                <a
                  href="#"
                  className="text-gray-300rounded-md py-2 text-md font-medium hover:text-indigo-700 transition duration-300 hover:scale-105"
                  onClick={() => {
                    handleSidebarChange('Likes');
                    setSidebarOpacity(!sidebarOpacity);
                  }}
                >
                  Likes
                </a>
              </li>
              <li className="flex items-center space-x-2">
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
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>

                <a
                  href="#"
                  className="text-gray-300rounded-md py-2 text-md font-medium hover:text-indigo-700 transition duration-300 hover:scale-105"
                >
                  Saved
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>

                <a
                  href="#"
                  className="text-gray-300rounded-md py-2 text-md font-medium hover:text-indigo-700 transition duration-300 hover:scale-105"
                >
                  Upgrade
                </a>
              </li>
              <li className="flex items-center space-x-2">
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
                    d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <a
                  href="#"
                  className="text-gray-300rounded-md py-2 text-md font-medium hover:text-indigo-700 transition duration-300 hover:scale-105"
                >
                  Settings
                </a>
              </li>
              <li className="flex items-center space-x-2">
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
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>

                <a
                  href="#"
                  className="text-gray-300rounded-md py-2 text-md font-medium hover:text-indigo-700 transition duration-300 hover:scale-105"
                  // onClick={() => setShowSidebar(!showSidebar)}
                >
                  Profile
                </a>
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

      {renderSidebar()}
    </>
  );
}

export default Sidebar;
