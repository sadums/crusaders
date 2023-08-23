"use client";
import { useState, useEffect, SetStateAction } from "react";
import "../../(styles)/homepage.css";
import FollowButton from "./followButton";
import {
  ADD_COMMENT_TO_POST,
  LIKE_POST,
  UNLIKE_POST,
} from "../../GraphQL/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../../(utils)/auth";
import LikeFollowerModal from "../likeFollowerFollowingModal";
import PostModal from "../postModal";
import Link from "next/link";
import { data } from "autoprefixer";


function SinglePost(post: {
  post: {
    _id: SetStateAction<string>;
    comments: SetStateAction<any[]>;
    likes: any[];
    user: {
      _id: string;
      pfp: string | undefined;
      firstName: any;
      lastName: any;
      username: any;
    };
    body: any;
    hashtags: any[];
    preview: any;
    createdAt: string;
  };
}) {
  const [likePost, { loading: likeLoading, error: likeError, data: likeData }] =
    useMutation(LIKE_POST);
  const [unlikePost, { data: unlikeData }] = useMutation(UNLIKE_POST);
  const [
    addComment,
    { data: commentData, loading: commentLoading, error: commentError },
  ] = useMutation(ADD_COMMENT_TO_POST);

  const [expandedPosts, setExpandedPosts] = useState(false);
  const [commentState, setCommentState] = useState<any[]>([]);
  const [isPostLikedState, setIsPostLikedState] = useState<boolean>(false);
  const [likeArrayState, setLikeArrayState] = useState<any[]>([]);
  const [showLikeModalState, setShowLikeModalState] = useState(false);
  const [activePostId, setActivePostId] = useState<string>("");
  const [showModalState, setShowModalState] = useState(false);
  const showCommentsFn = () => {
    setExpandedPosts((prev) => !prev);
  };

  const postClickHandler = async () => {
    try {
      setActivePostId(post.post._id);
      setShowModalState(true);
    } catch (err) {
      console.error(err);
    }
  };

  const likeClickHandlerFeedPosts = () => {
    if (likeArrayState.length) {
      setShowLikeModalState(true);
    } else {
      alert(`Post doesn't have any likes`);
    }
  };

  function formatDate(timestamp: string) {
    let date = new Date(parseInt(timestamp));

    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();

    let formattedMinute = minute < 10 ? `0${minute}` : `${minute}`;

    return `${month}/${day} ${hour}:${formattedMinute}`;
  }

  const likePostHandler = async () => {
    try {
      if (Auth.loggedIn()) {
        if (isPostLikedState) {
          console.log("is liked");
          const response = await unlikePost({
            variables: {
              postId: post.post._id,
              userId: Auth.getProfile().data._id,
            },
          });
          console.log(response.data.unlikePost);
          setLikeArrayState((prev) =>
            prev.filter(
              (like: { _id: any }) => like._id !== response.data.unlikePost._id
            )
          );
        } else {
          console.log("isnt liked");
          const response = await likePost({
            variables: {
              postId: post.post._id,
              userId: Auth.getProfile().data._id,
            },
          });
          console.log(response.data.likePost);
          setLikeArrayState((prev) => [...prev, response.data.likePost]);
        }
        setIsPostLikedState((prev) => !prev);
      } else {
        alert("Sign into like a post");
      }
    } catch (err) {
      console.error(err);
    }
  };
  const postCommentHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      if (Auth.loggedIn()) {
        const target = event.target as HTMLFormElement;
        const commentBody = target.form[0].value;
        if (commentBody) {
          const response = await addComment({
            variables: {
              username: Auth.getProfile().data.username,
              body: commentBody,
              postId: post.post._id,
            },
          });
          console.log(response);
          const newComment = {
            username: Auth.getProfile().data.username,
            body: commentBody,
            createdAt: Date.now().toString(),
          };
          setCommentState((prev) => [...prev, newComment]);
        } else {
          alert("The comment cant be blank");
        }
        target.form[0].value = "";
      } else {
        alert("Sign in to make a comment");
      }
    } catch (err) {
      console.error(err);
    }
  };
  const setTheState = async () => {
    try {
      setCommentState(post.post.comments);
      // console.log(post.post.likes);
      if (Auth.loggedIn()) {
        const isLiked = post.post.likes.some(
          (like: { user: { _id: any } }) =>
            like.user._id === Auth.getProfile().data._id
        );
        // console.log(isLiked);
        setIsPostLikedState(isLiked);
      } else {
        setIsPostLikedState(false);
      }
      setLikeArrayState(post.post.likes);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    setTheState();
  }, []);

  return (
    <div className="sm:border-0 border-b-[1px] border-t-[1px] border-gray-700">
      <div className="sm:mt-4 mt-1 p-3 border-[1px] sm:rounded-lg  dark:border-0 sm:shadow-2xl sm:bg-white sm:dark:bg-coolGray">
        <div className="flex justify-between sm:border-gray-700 pb-2 sm:border-b-[1px]">
          <div className="flex">
            <Link href={`/profile/${post.post.user._id}`}>
              <img
                className="h-12 w-auto rounded-full object-cover"
                src={post.post.user.pfp}
                alt="Your Company"
              ></img>
            </Link>
            <Link href={`/profile/${post.post.user._id}`}>
              <div>
                <h2 className="text-md text-black font-semibold dark:text-white ml-1">
                  {`${post.post.user.firstName} ${post.post.user.lastName}`}
                </h2>
                <div className="text-gray-500 text-md ml-1">
                  @{post.post.user.username}
                </div>
              </div>
            </Link>
          </div>
            <FollowButton userId={post.post.user._id} getFollow={() => console.log("getFollow")}/>
        </div>

        <div className="mt-4">
          <p className="dark:text-white text-black">{post.post.body}</p>
        </div>
        {/* MAKE ALL THE HASHTAGS LINK TO THE EXPLORE PAGE WITH THE LINK */}
        {post.post.hashtags && (
          <div className="mt-0">
            {post.post.hashtags.map((hashtag, hashIndex) => (
              <a className="mr-1 text-gray-500" key={hashIndex}>
                #{hashtag.hashtagText}
              </a>
            ))}
          </div>
        )}

        <div className="mt-4 sm:border-gray-700 pb-2 sm:border-b-[1px]">
          <img
            onClick={postClickHandler}
            className="postContentImg w-[90%] border-[2px] border-black rounded-xl"
            src={post.post.preview || "no preview"}
            alt="Post"
          ></img>
        </div>
        <div
          className={`${
            expandedPosts
              ? "opacity-1 border-t-[2px] border-black h-[100%] max-h-72 translate-y-0 z-0 "
              : "opacity-0 h-0 -z-10"
          } ease-in-out duration-200`}
        >
          <div
            className={`${
              expandedPosts ? "" : " h-0 scale-0"
            }  mt-2 rounded-xl`}
          >
            <div
              className={`${
                expandedPosts ? "scale-100 max-h-64" : "scale-0"
              } overflow-y-scroll feedPostCommentSection`}
            >
              {commentState?.map((comment, commentIndex) => (
                <div
                  key={commentIndex}
                  className="flex justify-between mt-1 border-gray-700 pb-2 border-b-[1px]"
                >
                  <p className="dark:text-white transition-all duration-500 ease-in-out text-black self-end max-w-[70%]">
                    {comment.body}
                  </p>
                  {/* <p>{formatDate(comment.createdAt)}</p> */}
                  {/* MAKE LINK TO THE PROFILE OF THE USER */}
                  <a className="font-sm dark:text-white transition-all duration-500 ease-in-out text-black cursor-pointer self-end text-md">
                    -{comment.username}
                  </a>
                </div>
              ))}
              <form
                className={`${
                  expandedPosts ? "scale-100" : "scale-0"
                } ease-in transition-all mt-2 duration-200 border-black pb-2 border-b-[2px]`}
              >
                <div className="flex">
                  <textarea
                    placeholder="Leave a comment, (200 characters max)"
                    className="bg-transparent border-solid border-customPurple text-black dark:text-white border-[1px] outline-none w-[75%] h-16 max-h-16"
                  ></textarea>
                  <button
                    className="ml-2 mr-2 px-4 py-2 mt-2 border border-customPurple rounded-md h-10 self-end shadow-sm text-sm font-medium text-black dark:text-white bg-transparent hover:bg-indigo-700 transition duration-300 hover:scale-105"
                    onClick={(event) => postCommentHandler(event)}
                  >
                    Comment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex mt-1 items-center">
            <button
              type="button"
              className="rounded-full p-1 text-customPurpleDark dark:text-white "
            >
              <span className="sr-only">Like</span>
              <svg
                onClick={likePostHandler}
                xmlns="http://www.w3.org/2000/svg"
                fill={isPostLikedState ? "red" : "none"}
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </button>
            <div
              className="text-gray-700 text-sm dark:text-gray-500 cursor-pointer mr-4"
              onClick={likeClickHandlerFeedPosts}
            >
              {likeArrayState ? `${likeArrayState.length} Likes` : "0 Likes"}
            </div>
            <button
              type="button"
              className="rounded-full p-1 text-customPurpleDark dark:text-white"
              // id={`commentBtn${index}`}
              onClick={showCommentsFn}
            >
              <span className="sr-only">Comment</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                />
              </svg>
            </button>
            <div
              onClick={showCommentsFn}
              className="text-gray-700 text-sm dark:text-gray-500 cursor-pointer mr-4"
            >
              {commentState ? `${commentState.length} Comments` : "0 Comments"}
            </div>
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
                className="w-7 h-7"
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
            <p>Posted: {formatDate(post.post.createdAt)}</p>
          </h2>
        </div>
      </div>
      {showLikeModalState && (
        <LikeFollowerModal
          handleClose={() => {
            setShowLikeModalState(false);
          }}
          users={likeArrayState}
        />
      )}
      {showModalState && (
        <PostModal
          postId={activePostId}
          handleClose={function (): void {
            setShowModalState(false);
            setTheState();
          }}
        />
      )}
    </div>
  );
}

export default SinglePost;
