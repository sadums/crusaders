"use client";
import { useState, useRef, useEffect } from "react";
import "../(styles)/homepage.css";
import { ADD_COMMENT } from "../(GraphQL)/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../(utils)/auth";

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

  const [expandedPosts, setExpandedPosts] = useState<{
    [key: number]: boolean;
  }>({});

  const [commentState, setCommentState] = useState<any[][]>([]);

  const showCommentsFn = (index: number) => {
    setExpandedPosts((prevExpandedPosts) => ({
      ...prevExpandedPosts,
      [index]: !prevExpandedPosts[index],
    }));
  };

  const [addComment, { data }] = useMutation(ADD_COMMENT);


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

  const postCommentHandler = async (
    event: React.FormEvent,
    post: any,
    index: number
  ) => {
    event.preventDefault();
    // console.log(Auth.getProfile().data.username);
    // console.log(commentState);
    try {
      if (Auth.loggedIn()) {
        const target = event.target as HTMLFormElement;
        const commentBody = target.form[0].value;
        if (commentBody) {
          const response = await addComment({
            variables: {
              username: Auth.getProfile().data.username,
              body: commentBody,
              postId: post.postId,
            },
          });
          console.log(response);
          const newComment = {
            username: Auth.getProfile().data.username,
            body: commentBody,
            createdAt: Date.now().toString(),
          };
          let newCommentState = [...commentState]; // copy the main array
          let currentComments = newCommentState[index] || []; // get the current comments or an empty array if undefined
          let newComments = [...currentComments, newComment]; // create a new array for the nested array
          newCommentState[index] = newComments; // assign the new array to the main array
          console.log(newCommentState[index]);
          setCommentState(newCommentState);
          target.form[0].value =''
          
        } else {
          alert("The comment cant be blank");
        }
      } else {
        alert("Sign in to make a comment");
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const dataComments = posts.map((post) => post.postComments);
    setCommentState(dataComments);
  }, [posts]);

  return posts.map((post, index) => {
    return (
      <div key={index}>
        <div className="mt-4 p-3 border-[1px] rounded-lg border-black dark:border-0 shadow-2xl bg-white dark:bg-coolGray">
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
              <button className=" font-semibold  text-neonBlue p-[1px] pl-2 pr-2 rounded-md">
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
              className="postContentImg w-[90%] border-[2px] border-black rounded-xl"
              src={post.postPreview || "no preview"}
              alt="Post"
            ></img>
          </div>
          <div
            className={`${
              expandedPosts[index] ? "h-88 scale-100" : " h-0 scale-0"
            }transition-all duration-200 ease-linear `}
          >
            <div
              className={`${expandedPosts[index] ? "h-88 scale-100" : " h-0 scale-0"} ease-in transition-all duration-200 mt-2 border-[2px] rounded-xl p-2 border-black`}
            >
              <form className={`${expandedPosts[index] ? "scale-100" : "scale-0"} ease-in transition-all duration-200 border-black pb-2 border-b-[2px]`}>
                <div className="flex">
                  <textarea
                    placeholder="Leave a comment, (200 characters max)"
                    className="bg-transparent border-solid border-customPurple text-black dark:text-white border-[1px] outline-none w-[75%] h-16 max-h-16"
                  ></textarea>
                  <button
                    className="ml-2 mr-2 px-4 py-2 mt-2 border border-customPurple rounded-md h-10 self-end shadow-sm text-sm font-medium text-black dark:text-white bg-transparent hover:bg-indigo-700 transition duration-300 hover:scale-105"
                    onClick={(event) => postCommentHandler(event, post, index)}
                  >
                    Comment
                  </button>

                </div>
              </form>

                <div
                  className={`${expandedPosts[index] ? "scale-100 max-h-64" : "scale-0"} overflow-y-scroll feedPostCommentSection`}
                >
                  {commentState[index]?.map((comment, commentIndex) => (
                    <div
                      key={commentIndex}
                      className="flex justify-between border-gray-700 pb-2 border-b-[1px]"
                    >
                      <p className="dark:text-white transition-all duration-500 ease-in-out text-black self-end max-w-[70%]">
                        {comment.body}
                      </p>
                      <p>{formatDate(comment.createdAt)}</p>

                      <a className="dark:text-white transition-all duration-500 ease-in-out text-black cursor-pointer self-end text-lg">
                        -{comment.username}
                      </a>
                    </div>
                  ))}
                </div>

            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex mt-1">
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
                id={`commentBtn${index}`}
                onClick={() => showCommentsFn(index)}
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
    );
  });
}

export default FeedPosts;
