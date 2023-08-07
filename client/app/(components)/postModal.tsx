"use client";
import LikeFollowerModal from "./likeFollowerFollowingModal";
import React, { useState, useEffect } from "react";
import { ADD_COMMENT, LIKE_POST, UNLIKE_POST } from "../(GraphQL)/mutations";
import { GET_USER_BY_ID } from "../(GraphQL)/queries";
import { useMutation, useLazyQuery } from "@apollo/client";
import Auth from "../(utils)/auth";
interface Hashtag {
  hashtagText: string;
  catagory: string;
  // add other properties here if they exist
}

interface Like {
  username: string;
  firstName: string | null;
  lastName: string | null;
  pfp: string;
  userId: string;
}

interface ModalProps {
  title: string;
  preview: string;
  media: string;
  body: string;
  date: string;
  comments: string[];
  hashtags: Hashtag[];
  username: string;
  pfp: string;
  firstName: string;
  lastName: string;
  postId: string;
  likes: Like[];
  handleClose: () => void;
  // likeClickHandlerFeedPosts: (likeInfo: Like) => void;
}

const PostModal: React.FC<ModalProps> = ({
  title,
  preview,
  media,
  postId,
  body,
  date,
  comments,
  hashtags,
  username,
  handleClose,
  likes,
  pfp,
  firstName,
  lastName,
}) => {
  const [showComments, setShowComments] = useState(false);
  const [likeArrayState, setLikeArrayState] = useState(likes);
  const [isPostLikedState, setIsPostLikedState] = useState<boolean>(false);
  const [commentState, setCommentState] = useState<any[]>(comments);
  const [addComment, { data: addCommentData }] = useMutation(ADD_COMMENT);
  const [showLikeModalStateFeedPosts, setShowLikeModalStateFeedPosts] =
    useState(false);
  const likeClickHandlerFeedPosts = () => {
    if (likeArrayState.length) {
      setShowLikeModalStateFeedPosts(true);
    } else {
      alert(`Post doesn't have any likes`);
    }
  };
  const [
    getUserById,
    {
      loading: singleUserLoading,
      error: singleUserError,
      data: singleUserData,
    },
  ] = useLazyQuery(GET_USER_BY_ID, {
    variables: { id: "" }, // Initialize with an empty string
  });
  const [likePost, { data: likeData }] = useMutation(LIKE_POST);
  const [unlikePost, { data: unlikeData }] = useMutation(UNLIKE_POST);

  const isVideo = media.endsWith(".mp4");

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

  const likePostHandler = async () => {
    try {
      if (Auth.loggedIn()) {
        // const { firstName, lastName, username, pfp, _id } =
        //   userByIdData.getUserById;
        // const { postPreview, postId } = post;
        if (isPostLikedState) {
          console.log("is liked");
          console.log(singleUserData.getUserById);
          const response = await unlikePost({
            variables: {
              postId: postId,
              userId: singleUserData.getUserById._id,
            },
          });
          console.log(response);
          setLikeArrayState(response.data.unlikePost.post.likes);
        } else {
          console.log("isnt liked");
          const response = await likePost({
            variables: {
              postId: postId,
              userId: singleUserData.getUserById._id,
              input: {
                username: username,
                firstName: firstName,
                lastName: lastName,
                pfp: pfp,
                preview: preview,
              },
            },
          });
          console.log(response);
          setLikeArrayState(response.data.likePost.post.likes);
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
    // console.log(Auth.getProfile().data.username);
    // console.log(commentState);
    try {
      if (Auth.loggedIn()) {
        const target = event.target as HTMLFormElement;
        const commentBody = target.form[0].value;
        if (commentBody) {
          console.log(commentBody);
          console.log(postId);
          const response = await addComment({
            variables: {
              username: Auth.getProfile().data.username,
              body: commentBody,
              postId: postId,
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
      } else {
        alert("Sign in to make a comment");
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (singleUserData) {
      console.log(singleUserData.getUserById.likes);
      const likedPosts = singleUserData.getUserById.likes.map(
        (like: { postId: any }) => {
          return like.postId;
        }
      );
      console.log(likedPosts);
      setIsPostLikedState(likedPosts.includes(postId));
    }
  }, [singleUserData]);

  useEffect(() => {
    if (Auth.loggedIn()) {
      const id = Auth.getProfile().data._id;
      getUserById({ variables: { id } }); // Call getUserById inside the useEffect with the correct variables
    }
  }, []);

  return (
    <>
      <div className="fixed z-10 inset-0 overflow-y-auto duration-200 ease-in-out flex items-center justify-center">
        <div
          className="fixed inset-0 bg-black opacity-90 duration-200 transition-all ease-in-out"
          aria-hidden="true"
        ></div>
        <div className="inline-block align-bottom bg-white dark:bg-coolGray rounded-lg overflow-hidden shadow-xl transform transition-all">
          <div className="p-2">
            <div className="flex justify-between border-gray-700 pb-2 border-b-[1px]">
              <div className="flex items-center">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  src={pfp}
                  alt="Your Company"
                ></img>
                <div className="flex flex-col">
                  <h4 className="text-black text-lg ml-1 dark:text-white">{`${firstName} ${lastName}`}</h4>
                  <a
                    href="#"
                    className="text-gray-500 text-md ml-1"
                    aria-current="page"
                  >
                    @{username}
                  </a>
                </div>
              </div>

              <button
                onClick={handleClose}
                className="ml-auto bg-transparent border-0 dark:text-white text-black"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="border-gray-700 pb-2 border-b-[1px]">
              <h1 className="text-2xl mt-2 text-center text-black dark:text-white ">
                {title}
              </h1>
              <h2 className="mt-2 text-black dark:text-white">{body}</h2>
              <div className="">
                {hashtags.map((tag, index) => (
                  <span key={index} className="text-gray-500">
                    #{tag.hashtagText}
                  </span>
                ))}
              </div>
              {isVideo ? (
                <video
                  className="w-[100%] max-h-[50vh] max-w-[55vw] mt-2 border-[1px] border-gray-600 rounded-xl"
                  controls
                >
                  <source src={media} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={media}
                  className="w-auto max-h-[50vh] max-w-[55vw] object-contain mt-2 border-[1px] border-gray-600 rounded-xl"
                />
              )}
            </div>

            <div
              className={`${
                showComments ? "h-46 scale-100" : " h-0 scale-0"
              } transition-all duration-400 ease-in-out`}
            >
              <form
                className={`${
                  showComments ? "scale-100" : "scale-0"
                } ease-in transition-all duration-200 border-black pb-2 border-b-[2px]`}
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
              <div className=" mt-2 border-[2px] h-36 max-w-[40vw] rounded-xl overflow-y-scroll p-2 border-black">
                {commentState.map((comment, commentIndex) => (
                  <div
                    key={commentIndex}
                    className="flex justify-between border-gray-700 pb-2 border-b-[1px]"
                  >
                    <p className="dark:text-white transition-all duration-500 ease-in-out w-[75%] text-black self-end">
                      {comment.body}
                    </p>
                    <p>{formatDate(comment.createdAt)}</p>

                    <a className="dark:text-white transition-all duration-500 ease-in-out text-black cursor-pointer self-end">
                      -{comment.username}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex items-center">
                <button
                  type="button"
                  className="rounded-full p-1 text-customPurpleDark dark:text-white "
                >
                  <span className="sr-only">Like</span>
                  <svg
                    onClick={() => likePostHandler()}
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
                <a
                  className="text-gray-700 text-sm dark:text-gray-500 cursor-pointer mr-2"
                  onClick={() => likeClickHandlerFeedPosts()}
                >
                  {likes ? `${likeArrayState.length} Likes` : "0 Likes"}
                </a>
                <button
                  onClick={() => setShowComments((prev) => !prev)}
                  className=" text-blue-500 hover:text-blue-700"
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
                <a
                  onClick={() => setShowComments((prev) => !prev)}
                  className="text-gray-700 text-sm dark:text-gray-500 cursor-pointer mr-2"
                >
                  {commentState.length}
                </a>
                <button
                  type="button"
                  className="rounded-full mr-2 p-1 text-customPurpleDark dark:text-white"
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
              <h2 className="mt-1 text-black dark:text-white">
                Posted on: {formatDate(date)}
              </h2>
            </div>
          </div>
        </div>
        {showLikeModalStateFeedPosts && (
          <LikeFollowerModal
            handleClose={function (): void {
              setShowLikeModalStateFeedPosts(false);
            }}
            users={likeArrayState}
          />
        )}
      </div>
    </>
  );
};

export default PostModal;
