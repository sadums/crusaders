"use client";
import React, { useState } from "react";

interface ModalProps {
  title: string;
  preview: string;
  media: string;
  body: string;
  date: string;
  comments: string[];
  hashtags: string[];
  username: string;
  pfp: string;
  firstName: string;
  lastName: string;
  handleClose: () => void;
}

const PostModal: React.FC<ModalProps> = ({
  title,
  preview,
  media,
  body,
  date,
  comments,
  hashtags,
  username,
  handleClose,
  pfp,
  firstName,
  lastName
}) => {

  const [showComments, setShowComments] = useState(false);
  console.log(media);
  const isVideo = media.endsWith(".mp4");
  return (
    <>
      <div className="fixed z-10 inset-0 overflow-y-auto duration-200 ease-in-out flex items-center justify-center">
        <div
          className="fixed inset-0 bg-black opacity-90 duration-200 transition-all ease-in-out"
          aria-hidden="true"
        ></div>
        <div className="inline-block align-bottom bg-white dark:bg-coolGray rounded-lg overflow-hidden shadow-xl transform transition-all">
          <div className="h-[60vh] max-w-[80vw] p-2">
            <div className="flex justify-between border-gray-700 pb-2 border-b-[1px]">
              <div className="flex">
                <img
                  className="h-8 w-8 rounded-full object-cover"
                  src={pfp}
                  alt="Your Company"
                ></img>
                <div>
                  <a
                    href="#"
                    className="text-gray-500 text-lg ml-1 py-2"
                    aria-current="page"
                  >
                    @{username}
                  </a>
                </div>
                <h4>{`${firstName} ${lastName}`}</h4>
              </div>

              <button
                onClick={handleClose}
                className="ml-auto bg-transparent border-0 text-white"
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
              <h1 className="text-2xl mt-2 text-center">{title}</h1>
              <h2 className="mt-2">{body}</h2>
              <div className="">
                {hashtags.map((tag, index) => (
                  <span key={index} className="text-gray-500">
                    #{tag}
                  </span>
                ))}
              </div>
              {isVideo ? (
                <video
                  className="w-[100%] h-auto mt-2 border-[1px] border-gray-600 rounded-xl"
                  controls
                >
                  <source src={media} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={media}
                  className="w-[100%] h-auto mt-2 border-[1px] border-gray-600 rounded-xl"
                />
              )}
            </div>
            {/* {showComments && (
                <div className="mt-2">
                  <h4 className="text-black">TEST COMMENT</h4>
                  {comments.map((comment, index) => (
                    <p key={index} className="text-sm text-gray-500">
                      {comment}
                    </p>
                  ))}
                </div>
              )} */}
            <div className="flex justify-between">
              <button
                onClick={() => setShowComments((prev) => !prev)}
                className="mt-2 text-blue-500 hover:text-blue-700"
              >
                {showComments ? "Hide Comments" : "Show Comments"}
              </button>
              {showComments && (
                <div className="mt-2">
                  <h4 className="text-black">TEST COMMENT</h4>
                  {comments.map((comment, index) => (
                    <p key={index} className="text-sm text-gray-500">
                      {comment}
                    </p>
                  ))}
                </div>
              )}
              <h2 className="mt-2">posted on: {date}</h2>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex">
                <img
                  className="h-14 w-14 rounded-full object-cover"
                  src={tempPfp}
                  alt="Your Company"
                ></img>
                <div>
                  <h2 className="text-lg ml-1">Carter Johnson</h2>
                  <div>
                    <a
                      href="#"
                      className="text-gray-500 text-lg ml-1 py-2"
                      aria-current="page"
                    >
                      @{username}
                    </a>
                  </div>
                </div>
              </div> */}

      {/* <div
        className="fixed z-10 inset-0 overflow-y-auto duration-200 ease-in-out"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center md:block sm:p-0">
          <div
            className="fixed inset-0 bg-black opacity-80"
            aria-hidden="true"
          ></div>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <button
                  onClick={handleClose}
                  className="ml-auto bg-transparent border-0 text-gray-900 hover:text-gray-600"
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
                <div className="mt-3 text-center sm:mt-0 sm:text-left">
                  <div className="flex items-center">
                    <p className="text-lg leading-6 font-medium text-gray-900 mr-2">
                      {username}
                    </p>
                    <p className="text-sm text-gray-500">{date}</p>
                  </div>
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900"
                    id="modal-title"
                  >
                    {title}
                  </h3>
                  <img
                    src={image}
                    alt="Post thumbnail"
                    className="w-full h-48 object-cover mt-2"
                  />
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">{body}</p>
                  </div>
                  <div className="mt-2 flex">
                    <button className="mr-2 text-blue-500 hover:text-blue-700">
                      Like
                    </button>
                    <button className="text-blue-500 hover:text-blue-700">
                      Share
                    </button>
                  </div>
                  <div className="mt-2">
                    {hashtags.map((tag, index) => (
                      <span key={index} className="text-blue-500 mr-2">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setShowComments((prev) => !prev)}
                    className="mt-2 text-blue-500 hover:text-blue-700"
                  >
                    {showComments ? "Hide Comments" : "Show Comments"}
                  </button>
                  {showComments && (
                    <div className="mt-2">
                      <h4 className="text-black">TEST COMMENT</h4>
                      {comments.map((comment, index) => (
                        <p key={index} className="text-sm text-gray-500">
                          {comment}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default PostModal;
