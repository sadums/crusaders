"use client";

import { useState } from "react";

function ProfileUserMobile({ userData, isUserProfile }: any) {
  const [profileFollowerCount, setProfileFollowerCount] = useState<number>(
    userData.followers.length
  );

  const followCountHandler = (state: any) => {
    if (state) {
      setProfileFollowerCount((prev) => prev + 1);
    } else {
      setProfileFollowerCount((prev) => prev - 1);
    }
  };

  return (
    <div>
        <h1 className="text-black dark:text-white text-[24px] leading-6">{`${userData.firstName} ${userData.lastName}`}</h1>
        <h1 className="text-gray-700 dark:text-gray-400 text-md">{`@${userData ? userData.username : ""}`}</h1>
        <p className="text-black dark:text-white text-md pt-2">{userData.bio}</p>
        <div className="flex mt-2">
        <span className="flex mr-4">
            <h2 className="mr-1 text-md text-gray-700 dark:text-gray-400">
              {profileFollowerCount}
            </h2>
            <a className="text-md text-gray-700 dark:text-gray-400">Followers</a>
          </span>
          <span className="flex ">
            <h2 className="mr-1 text-md text-gray-700 dark:text-gray-400">
              {userData.following.length}
            </h2>
            <a className=" text-md text-gray-700 dark:text-gray-400">Following</a>
          </span>
        </div>
    </div>
  );
}

export default ProfileUserMobile;
