"use client";

import "../(styles)/homepage.css";

interface Post {
  username: string;
  firstName: string | null;
  lastName: string | null;
  pfp: string;
  userId: string;
  postBody: string;
  postComments: any[]; // If possible, provide a more specific type here
  postDate: string;
  postHashtags: { [key: string]: any }[]; // If possible, provide a more specific type here
  postId: string;
  postPreview: string | null;
  postTitle: string;
  // If there are more fields in your actual data, add them here
}

// The component's props type
interface FeedPostsProps {
  posts: Post[];
  postClickHandler: (postInfo: Post) => void;
}

function FeedPosts({ posts, postClickHandler }: FeedPostsProps) {

  function formatDate(timestamp: string) {
    let date = new Date(parseInt(timestamp));

    let month = date.getMonth() + 1; // JavaScript counts months from 0 to 11, so we add 1 to get the correct month.
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    // The minutes are less than 10, we add a '0' before it.
    let formattedMinute = minute < 10 ? `0${minute}` : `${minute}`;

    return `${month}/${day} ${hour}:${formattedMinute}`;
}

  return posts.map((post, index) => {
    return (
      <>
        <div>
          <div
            key={index}
            className="mt-4 p-3 border-[1px] rounded-lg border-black dark:border-0 shadow-2xl bg-white dark:bg-darkCoolGray"
          >
            <div className="flex justify-between border-gray-700 pb-2 border-b-[1px]">
              <div className="flex">
                <img
                  className="h-12 w-auto rounded-full object-cover"
                  src={post.pfp}
                  alt="Your Company"
                ></img>
                <div>
                  <h2 className="text-md text-black font-semibold dark:text-white ml-1">
                    {`${post.firstName} ${post.lastName}`}
                  </h2>
                  <div>
                    <a
                      href="#"
                      className="text-gray-500 text-md ml-1 py-2"
                      aria-current="page"
                    >
                      @{post.username}
                    </a>
                  </div>
                </div>
              </div>
              <div className="my-auto">
                <button className=" text-customPurple font-semibold dark:text-neonBlue p-1 pl-2 pr-2 rounded-xl">
                  Follow
                </button>
              </div>
            </div>
            <div className="mt-4">
              <p className="dark:text-white text-black">{post.postBody}</p>
            </div>
            {post.postHashtags && (
              <div className="mt-0">
                {post.postHashtags.map((hashtag, hashIndex) => {
                  return (
                    <a className="mr-1 text-gray-500" key={hashIndex}>
                      #{hashtag.hashtagText}
                    </a>
                  );
                })}
              </div>
            )}

            <div className="mt-4 border-gray-700 pb-2 border-b-[1px]">
              <img
                onClick={() => postClickHandler(posts[index])}
                className="postContentImg w-[90%] border-[2px] border-gray-500 rounded-xl"
                src={post.postPreview || "no preview"}
                alt="Post"
              ></img>
            </div>
            <div className="flex justify-between">
              <div className="flex mt-2">
                <button
                  type="button"
                  className="rounded-full mr-3 p-1 text-customPurpleDark dark:text-white "
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
                  className="rounded-full mr-3 p-1 text-customPurpleDark dark:text-white"
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
                  className="rounded-full mr-3 p-1 text-customPurpleDark dark:text-white"
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
              <h2 className="mt-4 text-sm text-gray-500">
              <p>Posted: {formatDate(post.postDate)}</p>
              </h2>
            </div>
          </div>
        </div>
      </>
    );
  });
}

export default FeedPosts;
