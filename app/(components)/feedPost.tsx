"use client";

import "../styles/homepage.css";

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
        <div className="feedPosts">
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
                  {/* <h5 className="ml-8 whitespace-nowrap text-sm font-medium text-white transition">
                    {user.date}
                  </h5> */}
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
