"use client";
import "../../(styles)/profile.css";
import { FOLLOW_USER, UNFOLLOW_USER } from "../../GraphQL/mutations";
import Auth from "../../(utils)/auth";
import { useMutation } from "@apollo/client";
import { useEffect, useState, useRef } from "react";
import FollowButton from "../homepage/followButton";

function ProfileUser({ userData, isUserProfile }: any) {
  const [profileFollowerCount, setProfileFollowerCount] = useState<number>(
    userData.followers.length
  );

  const followCountHandler = (state: any) => {
    if(state){
          setProfileFollowerCount((prev) => prev + 1);
    }else{
      setProfileFollowerCount((prev) => prev - 1);
    }
  };

  return (
    <div className=" dark:bg-darkModeDarkGray bg-white shadow-2xl mt-20 pb-4 rounded-md p-2 pt-2 pl-4">
      <h1 className="text-black dark:text-white font-semibold text-xl">
        {`${userData.firstName} ${userData.lastName}`}
      </h1>
      <h1 className="text-gray-700 dark:text-gray-500 text-lg -mt-1">
        @{userData ? userData.username : ""}
      </h1>
      {!isUserProfile && (
        <div className="relative flex items-start space-x-4 mt-2 border-b-[1px] border-gray-700 dark:border-gray-500 pb-2">
          <FollowButton userId={userData._id} getFollow={followCountHandler} />

          <button
            type="button"
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-mainBlue hover:bg-mainDarkBlue duration-300"
          >
            <span className="text-white">Message</span>
          </button>
        </div>
      )}
      <p className="text-md text-black dark:text-white mt-4 border-b-[1px] border-gray-700 dark:border-gray-500 pb-2">
        {userData.bio}
      </p>
      <div className="flex justify-between mt-2 border-b-[1px] border-gray-700 dark:border-gray-500 pb-2">
        <div>
          <span className="flex mt-2">
            <h2 className="mr-1 text-lg text-black dark:text-white">
              {profileFollowerCount}
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
      </div>
    </div>
  );
}

export default ProfileUser;
