"use client";
import Auth from "../../(utils)/auth";
import { useQuery } from "@apollo/client";
import { GET_ALL_FOLLOWERS, GET_USER_BY_ID } from "../../GraphQL/queries";
import { useEffect } from "react";
import Link from "next/link";

type WidgetsProps = {
  displayPosts: any[] | null; // assuming displayPosts is either an array or null
};

function Widgets({ displayPosts }: WidgetsProps) {
  const {
    loading: getFollowersLoading,
    error: getFollowersError,
    data: getFollowerData,
  } = useQuery(GET_ALL_FOLLOWERS);

  const id = Auth.getProfile().data._id;
  const {
    loading: userByIdLoading,
    error: userByIdError,
    data: userByIdData,
  } = useQuery(GET_USER_BY_ID, {
    variables: {
      userId: id,
    },
  });
  return (
    <div className="col-span-2 mt-4">
      <div className="homepageInfoMainDiv">
        <div className="max-w-sm mt-3 w-[50%]">
          <div className="grid grid-cols-2 gap-3">
            <div className="h-32 flex flex-col justify-center border-0 dark:shadow-notificationShadowPink dark:bg-coolGray bg-white border-black shadow-xl dark:border-customPurple rounded-xl p-2">
              <h3 className="text-black font-semibold text-center dark:text-white">
                Go Pro!
              </h3>
              <p className="text-gray-500 text-sm  text-center">
                First Month Free!
              </p>
              <button className="ml-2 mr-2 px-4 py-2 mt-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 hover:scale-105">
                Sign up
              </button>
            </div>
            {userByIdData && (
              <div className="h-32 border-0 dark:shadow-notificationShadowPink dark:bg-coolGray bg-white border-black shadow-xl dark:border-customPurple rounded-xl p-2">
                <h3 className="text-black text-center font-semibold dark:text-white">
                  Like Counter
                </h3>
                <h3 className=" text-gray-500 text-center text-sm">
                  Your Post's Likes
                </h3>
                <div className="flex justify-around items-center mt-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="text-red-600 w-14 h-14"
                  >
                    <path
                      fill="#cc0000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                  <h1 className="text-black text-[54px] dark:text-white">
                    {userByIdData.getUserById.likes.length}
                  </h1>
                </div>
              </div>
            )}

            {displayPosts && (
              <div className="h-32 border-0 dark:shadow-notificationShadowPink dark:bg-coolGray bg-white border-black shadow-xl dark:border-customPurple rounded-xl p-2">
                <h3 className="text-black font-semibold dark:text-white text-center">
                  Posts Counter
                </h3>
                <h3 className=" text-gray-500 text-sm text-center">
                  Number Of Posts
                </h3>
                <div className="flex justify-around items-center mt-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="w-14 h-14 text-blue-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                    />
                  </svg>

                  <h1 className="text-black text-[54px] dark:text-white">
                    {displayPosts.length}
                  </h1>
                </div>
              </div>
            )}

            <div className="h-32 border-0 dark:shadow-notificationShadowPink dark:bg-coolGray bg-white border-black shadow-xl dark:border-customPurple rounded-xl p-2">
              <h3 className="text-black font-semibold dark:text-white text-center">
                Messages
              </h3>
              <div className="">
                <div className="flex items-center justify-between">
                  <h3 className=" text-gray-500 text-[12px] text-center">
                    Recieved
                  </h3>
                  <div className="flex justify-around items-center mt-0">
                    <h2 className="text-black dark:text-white text-[30px] mr-1">
                      19
                    </h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-10 h-10 text-green-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <h3 className=" text-gray-500 text-[12px] text-center">
                    Sent
                  </h3>
                  <div className="flex justify-around items-center mt-0">
                    <h2 className="text-black text-[30px] mr-1 dark:text-white">
                      219
                    </h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-10 h-10 text-blue-700"
                      transform="scale(1,1) scale(-1,1)"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {getFollowerData && (
          <div className="max-w-sm mt-3 border-0 dark:shadow-notificationShadowPink dark:bg-coolGray bg-white border-black shadow-xl dark:border-customPurple rounded-xl p-2 w-[50%]">
            <h3 className="text-black font-semibold dark:text-white">
              Who To Follow
            </h3>
            {getFollowerData.getAllUsers.map((user: any, index: any) => {
              return (
                <div
                  className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
                  key={index}
                >
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="h-7 w-auto rounded-full object-cover"
                      src={user.pfp}
                    ></img>
                  </div>
                  <div className="hidden sm:ml-0 sm:flex sm:items-center sm:justify-center">
                    <div className="flex space-x-4">
                      <Link
                        href={`/profile/${user._id}`}
                        className="text-black font-semibold dark:text-white px-3 py-2"
                        aria-current="page"
                      >
                        {user.username}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        <form className="max-w-sm mt-3 border-0 dark:shadow-notificationShadowPink dark:bg-coolGray bg-white border-black shadow-xl dark:border-customPurple rounded-xl p-2 w-[50%]">
          <div className="mb-2">
            <h3 className="text-black font-semibold dark:text-white">
              Follow Hashtags
            </h3>
            <div className="flex items-center flex-wrap infoInterestsDiv">
              <label
                id="interest1"
                className="ml-2 text-black font-normal dark:text-white"
              >
                Travel
              </label>
              <input
                type="checkbox"
                id="interest1"
                name="interest1"
                className="form-checkbox ml-2 h-4 w-4 text-blue-500"
              ></input>
              <label
                id="interest1"
                className="ml-2 text-black font-normal dark:text-white"
              >
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
              <label
                id="interest1"
                className="ml-2 text-black font-normal dark:text-white"
              >
                Coding
              </label>
              <input
                type="checkbox"
                id="interest1"
                name="interest1"
                className="form-checkbox ml-2 h-4 w-4 text-blue-500"
              ></input>
              <label
                id="interest1"
                className="ml-2 text-black font-normal dark:text-white"
              >
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
  );
}

export default Widgets;
