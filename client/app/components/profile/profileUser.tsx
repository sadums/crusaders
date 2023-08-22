"use client";
import "../../(styles)/profile.css";
import { FOLLOW_USER, UNFOLLOW_USER } from "../../GraphQL/mutations";
import Auth from "../../(utils)/auth";
import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";

function ProfileUser({ userData, isUserProfile }: any) {
  const [followUser, { data: followData }] = useMutation(FOLLOW_USER);
  console.log(UNFOLLOW_USER);
  const [unfollowUser, { data: unfollowData }] = useMutation(UNFOLLOW_USER);
  const [profileFollowerCount, setProfileFollowerCount] = useState<number>(
    userData.followers.length
  );
  const [isFollowingState, setIsFollowingState] = useState(false);

  const followButtonHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      if (Auth.loggedIn()) {
        const mainUserId = Auth.getProfile().data._id;
        if (isFollowingState) {
          const response = await followUser({
            variables: {
              userId: userData._id,
              followerId: mainUserId,
            },
          });
          console.log(response);
          setIsFollowingState((prev) => !prev);
          setProfileFollowerCount((prev) => prev + 1);
        } else {
          const response = await unfollowUser({
            variables: {
              userId: userData._id,
              followerId: mainUserId,
            },
          });
          console.log(response);
          setIsFollowingState((prev) => !prev);
          setProfileFollowerCount((prev) => prev - 1);
        }
      } else {
        alert("Sign in to follow someone");
      }
    } catch (err) {
      console.error(err);
    }
  };
  // const unfollowHandler = async (event: React.FormEvent) => {
  //   event.preventDefault();
  //   try {
  //     if (Auth.loggedIn()) {
  //       const mainUserId = Auth.getProfile().data._id;

  //       setProfileFollowerCount(profileFollowerCount - 1);
  //     } else {
  //       alert("Somethign went wrong, please reload");
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
  useEffect(() => {
    if (Auth.loggedIn()) {
      const id = Auth.getProfile().data._id;
      const isFollower = userData.followers.some((follower: { _id: any }) => {
        console.log(follower._id);
        console.log(id);
        return follower._id === id;
    });
    
    if(isFollower) {
        console.log("The user is a follower!");
    } else {
        console.log("The user is not a follower.");
    }

    console.log(userData.followers)
      setIsFollowingState(!isFollower);
    }
  }, []);
  return (
    <>
      <div className=" dark:bg-darkModeDarkGray bg-white shadow-2xl mt-20 pb-4 rounded-md p-2 pt-2 pl-4">
        <h1 className="text-black dark:text-white font-semibold text-xl">
          {`${userData.firstName} ${userData.lastName}`}
        </h1>
        <h1 className="text-gray-700 dark:text-gray-500 text-lg -mt-1">
          @{userData ? userData.username : ""}
        </h1>
        {!isUserProfile && (
          <div className="relative flex items-start space-x-4 mt-2 border-b-[1px] border-gray-700 dark:border-gray-500 pb-2">
            <button
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-mainBlue hover:bg-mainDarkBlue duration-300"
              onClick={(event) => followButtonHandler(event)}
            >
              {isFollowingState ? "Follow" : "Unfollow"}
            </button>
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
    </>
  );
}

export default ProfileUser;
