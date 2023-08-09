"use client";
import { useEffect, useState } from "react";
import Conversations from "./conversation";

export default function ChatBox() {
  const [textBox, setTextBox] = useState(false);
  const [showTextarea, setShowTextarea] = useState(false);

  useEffect(() => {
    if (textBox) {
      const timeoutId = setTimeout(() => {
        setShowTextarea(true);
      }, 200);

      return () => {
        clearTimeout(timeoutId);
        setShowTextarea(false);
      };
    }
  }, [textBox]);
  return (
    <div className="col-span-5 border-mainDarkPurple dark:border-mainPurple border-l-2 border-r-2 h-[97vh]">
      <div className="relative w-full flex flex-col ">
        <Conversations user={{
          firstName: "",
          lastName: "",
          username: "",
          pfp: ""
        }} convo={[]} date={""}/>
        <div
          className={`${
            textBox ? "hidden" : "block"
          } absolute bottom-0 flex w-40 p-2 mb-6 ml-4 rounded-xl bg-opacity-90 dark:bg-opacity-90 bg-darkestWhite dark:bg-darkModeDarkGray ease-in-out duration-150 translate`}
        >
          <button
            onClick={() => setTextBox(!textBox)}
            className="z-20 cursor-pointer flex justify-between items-center h-10 px-4 mt-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300"
          >
            <h1 className="text-lg mr-5 text-white">Chat</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className=" top-2 right-2 w-4 h-4 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`absolute bottom-0 transition-all duration-100 ease-in-out ${
          textBox
            ? "h-40 bg-darkestWhite bg-opacity-80 dark:bg-darkModeDarkGray dark:bg-opacity-80 w-full"
            : "h-16 bg-transparent dark:bg-opacity-70 bg-opacity-70 w-[80%]"
        }`}
      >
        <div
          className={`${
            textBox ? "block" : "hidden"
          } transition-all ease-in-out duration-300`}
        >
          <div className="flex justify-between p-2">
            <h1 className="text-black dark:text-white pl-2">Your Message</h1>
            <button
              onClick={() => setTextBox(!textBox)}
              className="text-black dark:text-white"
            >
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {showTextarea && (
            <div className="pl-2 pr-2 pb-2">
              <form className="w-full flex relative transition-all">
                <textarea
                  placeholder="Your Message, 280 max characters"
                  className="rounded-lg max-h-28 p-1 w-[80%] min-h-16 h-20 outline-none bg-white dark:bg-darkModeDarkGray text-black dark:text-white text-sm"
                ></textarea>
                <button className="rounded-full bottom-0 mb-0 ml-2 mt-10 h-10 w-10 bg-mainPurple dark:bg-mainPurple flex justify-center items-center hover:scale-110 hover:bg-blue-800 ease-in-out duration-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7 transform rotate-[-35deg]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
