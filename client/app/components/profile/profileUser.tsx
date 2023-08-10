"use client";
import "../../(styles)/profile.css";
import { useState } from "react";
import EditProfile from "./editProfile";
import Auth from "../../(utils)/auth";

function ProfileUser({ userInfo }: any) {
  const [userData, setUserData] = useState(userInfo);

  return (
    <>
      <div className=" dark:bg-darkModeDarkGray bg-white shadow-2xl mt-20 pb-4 rounded-md p-2 pt-2 pl-4">
        <h1 className="text-black dark:text-white font-semibold text-xl">
          {`${userData.firstName} ${userData.lastName}`}
        </h1>
        <h1 className="text-gray-700 dark:text-gray-500 text-lg -mt-1">
          @{userData ? userData.username : ""}
        </h1>
        <div className="relative flex items-start space-x-4 mt-2 border-b-[1px] border-gray-700 dark:border-gray-500 pb-2">
          {/* ADD THE REAL FUCTIONALIY OF THESE ASK SAM ABOUT IT */}
          <button className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-mainBlue hover:bg-mainDarkBlue duration-300 ">
            Follow
          </button>
          <button
            type="button"
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-mainBlue hover:bg-mainDarkBlue duration-300"
          >
            <span className="text-white">Message</span>
          </button>
        </div>
        <p className="text-md text-black dark:text-white mt-4 border-b-[1px] border-gray-700 dark:border-gray-500 pb-2">
          {userData.bio}
        </p>
        <div className="flex justify-between mt-2 border-b-[1px] border-gray-700 dark:border-gray-500 pb-2">
          <div>
            <span className="flex mt-2">
              <h2 className="mr-1 text-lg text-black dark:text-white">
                {userData.followers.length}
              </h2>
              <a className="text-lg text-black dark:text-white">Followers</a>
            </span>
            <span className="flex ">
              <h2 className="mr-1 text-lg text-black dark:text-white">
                {userData.following.length}
              </h2>
              <a className=" text-lg text-black dark:text-white">Following</a>
            </span>
          </div>
          {/* {Auth.loggedIn() && (
            <>
              {Auth.getProfile().data._id === userData._id && (
                <button className="text-gray-700 mt-3 dark:text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-9 h-9"
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
                </button>
              )}
            </>
          )} */}
        </div>
      </div>
    </>
  );
}

export default ProfileUser;
