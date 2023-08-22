"use client";

import { useState, useEffect } from "react";
import Auth from "../../(utils)/auth";
import SignInModal from "../signin";
import SignUpModal from "../signup";

function MobileSettings() {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState<boolean>(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState<boolean>(false);
  const [currentColorMode, setColorMode] = useState(false);

  const signUpButtonHandler = () => {
    console.log("SIGN UP");
    setIsSignUpModalOpen(true);
  };

  const signInButtonHandler = () => {
    console.log("SIGN IN");
    setIsSignInModalOpen(true);
  };

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

  return (
    <div className="w-full h-full p-2">
      <div className="flex">
        <h1 className="text-black dark:text-white">Change Color Mode:</h1>
        <li
          onClick={() => enableDarkMode()}
          className={` rounded-full p-1 bg-gradient-to-tr from-purple-900  to-[#0f0466] group ${
            currentColorMode ? "hidden" : "block"
          }`}
        >
          <a
            href="/"
            className="text-white rounded-md  py-2 text-md font-medium transition duration-300 hover:scale-100"
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
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          </a>
          <span className="sidebarIconInfo flex group-hover:scale-100">
            <span>Dark</span>
            <span className="ml-1">Mode</span>
          </span>
        </li>
        <li
          onClick={() => enableLightMode()}
          className={`rounded-full p-1 bg-gradient-to-tr from-yellow-500  to-red-500 group ${
            currentColorMode ? "block" : "hidden"
          }`}
        >
          <a
            href="/"
            className="text-black rounded-md py-2 text-md font-medium transition duration-300 hover:scale-100"
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
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          </a>
          <span className="sidebarIconInfo flex group-hover:scale-100">
            <span>Light</span>
            <span className="ml-1">Mode</span>
          </span>
        </li>
      </div>
      {Auth.loggedIn() ? (
        <div className="">
          <button onClick={() => Auth.logout()}>Log out</button>
        </div>
      ) : (
        <div>
          <button onClick={signUpButtonHandler}>Sign Up</button>
          <button onClick={signInButtonHandler}>Sign In</button>
        </div>
      )}
      {isSignUpModalOpen && (
        <SignUpModal setIsSignUpModalOpen={setIsSignUpModalOpen} />
      )}
      {isSignInModalOpen && (
        <SignInModal setIsSignInModalOpen={setIsSignInModalOpen} />
      )}
    </div>
  );
}

export default MobileSettings;
