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
      {users.map((user) => (
        <div className="feedPosts bg-darkCoolGray">
          <nav className="feedPostsTopNav">
            <div className="mx-auto max-w-9xl px-2 sm:px-6 lg:px-1">
              <div className="relative flex h-20 items-center justify-between">
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="h-14 w-auto rounded-full object-cover"
                      src={user.profilePic}
                      alt="Your Company"
                    ></img>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:items-center sm:justify-center">
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="text-black-800 px-3 py-2 postUsernames"
                        aria-current="page"
                      >
                        {user.username}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    className="rounded-full p-1 text-black-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="sr-only">View notifications</span>
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
                    className="rounded-full p-1 text-black-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="sr-only">View notifications</span>
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
                    className="rounded-full p-1 text-black-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="sr-only">View notifications</span>
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
              </div>
            </div>
          </nav>
          <div className="postContent">
            <div>
              <p>{user.postDesc}</p>
            </div>
            <div className="postContentImgDiv flex items-center justify-center">
              <img
                className="postContentImg w-full"
                src={user.postImg}
                alt="Post"
              ></img>
            </div>
          </div>
          <h5 className="ml-8 whitespace-nowrap text-sm font-medium text-white transition">
            Posted on: {user.date}
          </h5>
        </div>
      ))}
    </>
  );
}

export default FeedPosts;