"use client";

import "../(styles)/homepage.css";

interface User {
  username: string;
  profilePic: string;
  postTitle: string;
  postDesc: string;
  postImg: string;
  date: string;
}

function FeedPosts({ users }: { users: User[] }) {
  return (
    <>
      {users.map((user, index) => (
        <div
          key={index}
          className="mt-4 p-3 border-b-[1px] border-t-[1px] border-customPurple bg-darkCoolGray"
        >
          <div className="flex justify-between border-gray-700 pb-2 border-b-[1px]">
            <div className="flex">
              <img
                className="h-12 w-auto rounded-full object-cover"
                src={user.profilePic}
                alt="Your Company"
              ></img>
              <div>
                <h2 className="text-md ml-1">Carter Johnson</h2>
                <div>
                  <a
                    href="#"
                    className="text-gray-500 text-md ml-1 py-2"
                    aria-current="page"
                  >
                    @{user.username}
                  </a>
                </div>
              </div>
            </div>
            <div className="my-auto">
              <button className=" text-neonBlue p-1 pl-2 pr-2 rounded-xl">
                Follow
              </button>
            </div>
          </div>
          <div className="mt-4">
            <p>{user.postDesc}</p>
          </div>
          <div className="mt-0">
            <a className="mr-1 text-gray-500">#fun</a>
            <a className="mr-1 text-gray-500">#javascript</a>
            <a className="mr-1 text-gray-500">#coding</a>
          </div>
          <div className="mt-4 border-gray-700 pb-2 border-b-[1px]">
            <img
              className="postContentImg w-[90%] border-[1px] border-gray-500 rounded-xl"
              src={user.postImg}
              alt="Post"
            ></img>
          </div>
          <div className="flex justify-between">
            <div className="flex mt-2">
              <button
                type="button"
                className="rounded-full mr-3 p-1 text-black-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="sr-only">Like</span>
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
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="rounded-full mr-3 p-1 text-black-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="sr-only">Comment</span>
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
                    d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="rounded-full mr-3 p-1 text-black-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="sr-only">Bookmark</span>
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
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="rounded-full mr-3 p-1 text-black-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="sr-only">Share</span>
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
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </button>
            </div>
            <h2 className="mt-4 text-sm text-gray-500">Posted: {user.date}</h2>
          </div>
        </div>
      ))}
    </>
  );
}

export default FeedPosts;
