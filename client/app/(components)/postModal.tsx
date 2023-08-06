"use client";
import React, { useState } from "react";
interface Hashtag {
  hashtagText: string;
  catagory: string;
  // add other properties here if they exist
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
  lastName,
}) => {

  const tempComments = [
    {
      id: 1,
      comment: "Nice post! This reminds me of so and so",
      user: "carreejoh",
      pfp: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.s__coU_NozvbjdTfl1ybNgHaEo%26pid%3DApi&f=1&ipt=dd5c31b186f062eacf4e9cf3f1a9b823fb0e9302f51f85bc6530c68952c83d29&ipo=images",
    },
    {
      id: 2,
      comment:
        "Nice post! This reminds me of so and so, long text, long text, long text, Nice post! This reminds me of so and so, long text, long text, long text, Nice post! This reminds me of so and so, long text, long text, long text, Nice post! This reminds me of so and so, long text, long text, long text,",
      user: "carreejoh",
      pfp: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.s__coU_NozvbjdTfl1ybNgHaEo%26pid%3DApi&f=1&ipt=dd5c31b186f062eacf4e9cf3f1a9b823fb0e9302f51f85bc6530c68952c83d29&ipo=images",
    },
    {
      id: 3,
      comment:
        "Nice post! This reminds me of so and so, long text, long text, long text, Nice post! This reminds me of so and so, long text, long text, long text, Nice post! This reminds me of so and so, long text, long text, long text, Nice post! This reminds me of so and so, long text, long text, long text,",
      user: "carreejoh",
      pfp: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.s__coU_NozvbjdTfl1ybNgHaEo%26pid%3DApi&f=1&ipt=dd5c31b186f062eacf4e9cf3f1a9b823fb0e9302f51f85bc6530c68952c83d29&ipo=images",
    },
    {
      id: 4,
      comment:
        "Nice post! This reminds me of so and so, long text, long text, long text, Nice post! This reminds me of so and so, long text, long text, long text, Nice post! This reminds me of so and so, long text, long text, long text, Nice post! This reminds me of so and so, long text, long text, long text,",
      user: "carreejoh",
      pfp: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.s__coU_NozvbjdTfl1ybNgHaEo%26pid%3DApi&f=1&ipt=dd5c31b186f062eacf4e9cf3f1a9b823fb0e9302f51f85bc6530c68952c83d29&ipo=images",
    },
    {
      id: 5,
      comment: "Nice post!  long text, long text, long text,",
      user: "carreejoh",
      pfp: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.s__coU_NozvbjdTfl1ybNgHaEo%26pid%3DApi&f=1&ipt=dd5c31b186f062eacf4e9cf3f1a9b823fb0e9302f51f85bc6530c68952c83d29&ipo=images",
    },
  ];

  const [showComments, setShowComments] = useState(false);
  console.log(media);
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
              <h1 className="text-2xl mt-2 text-center text-black dark:text-white ">{title}</h1>
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
                  className="w-[100%] h-auto mt-2 border-[1px] border-gray-600 rounded-xl"
                  controls
                >
                  <source src={media} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={media}
                  className="w-auto max-h-[80vh] max-w-[55vw] object-contain mt-2 border-[1px] border-gray-600 rounded-xl"
                />
              )}
            </div>

              <div className={`${showComments ? "h-36 scale-100" : " h-0 scale-0"} transition-all duration-400 ease-in-out`}>
                <div className=" mt-2 border-[2px] h-36 max-w-[40vw] rounded-xl overflow-y-scroll p-2 border-black">
                {tempComments.map((comment, commentIndex) => (
                  <div
                    key={commentIndex}
                    className="flex justify-between border-gray-700 pb-2 border-b-[1px]"
                  >
                    <p className="dark:text-white transition-all duration-500 ease-in-out w-[75%] text-black self-end">
                      {comment.comment}
                    </p>

                    <a className="dark:text-white transition-all duration-500 ease-in-out text-black cursor-pointer self-end">
                      -{comment.user}
                    </a>
                  </div>
                ))}
                </div>
              </div>

            <div className="flex justify-between">
              <button
                onClick={() => setShowComments((prev) => !prev)}
                className="mt-2 text-blue-500 hover:text-blue-700"
              >
                {showComments ? "Hide Comments" : "Show Comments"}
              </button>
              <h2 className="mt-2">Posted on: {formatDate(date)}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostModal;
