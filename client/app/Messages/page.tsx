"use client";

import "../(styles)/messages.css";
import "../(styles)/homepage.css";
import { useEffect, useState } from "react";
import Conversations from "./messagesComponents/conversation";
import { GET_CHAT_BY_ID, GET_USER_CHATS } from "../GraphQL/queries";
import { CHAT_SUBSCRIPTION } from "../GraphQL/subscriptions";
import { useQuery, useSubscription } from "@apollo/client";
import Searchbar from "../components/searchbar";
import FriendListItem from "../components/friendListItem";
import Auth from "../(utils)/auth";

export const dynamic = "auto",
  dynamicParams = true,
  revalidate = Infinity,
  fetchCache = "auto",
  runtime = "nodejs",
  preferredRegion = "auto";

export default function Messages() {
  function chatSubscription() {
    const { data, loading, error } = useSubscription(CHAT_SUBSCRIPTION);
    // console.log(data, loading, error);
  }
  chatSubscription();

  interface Convo {
    speaker: boolean;
    message: string;
  }

  const [userConvo, setUserConvo] = useState<Convo[]>([
    { speaker: false, message: "Select someone to chat with!" },
  ]);
  const [user, setUser] = useState("Nobody");
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



  const { error, loading, data } = useQuery(GET_USER_CHATS, {
    variables: {
      userId: Auth.getProfile().data._id,
    },
  });

  const chats = [];
  try {
    for(const chat in data.getUserChats.chats){
      for(const member in data.getUserChats.chats[chat].members){
        const currentMember = data.getUserChats.chats[chat].members[member];
        if(!(Auth.getProfile().data._id === currentMember._id)){
          chats.push({
            username: currentMember.username,
            firstname: currentMember.firstName,
            lastname: currentMember.lastName,
            id: currentMember._id,
            pfp: currentMember.pfp,
          });
        }
      }
    }
  } catch (e) {
    console.log(e);
  }
  return (
    <>
      <div className="col-span-3 h-[97vh] flex-grow-1">
        <div className="flex-col pl-40">
          <div className="w-72 pr-2 mt-16 pl-2">
            <h1 className="mb-1 font-semibold text-xl dark:text-white text-black">
              Find Someone
            </h1>
            <Searchbar />
          </div>
          <div className="bg-darkestWhite dark:bg-darkModeDarkestGray rounded-xl p-2 mt-4 flex-column bottom-0 flex-grow-1">
            <h2 className="mb-2 font-semibold text-xl dark:text-white text-black">
              Chats
            </h2>
            <div className="overflow-y-scroll h-[73.5vh] friendListMessages">
              {chats.map((friend, index) => (
                <FriendListItem
                  username={friend.username}
                  firstname={friend.firstname}
                  lastname={friend.lastname}
                  pfp={friend.pfp}
                  key={index}
                  setUser={() => {location.replace(`/Messages/${friend.username}`)}}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-5 border-mainDarkPurple dark:border-mainPurple border-l-2 border-r-2 h-[97vh]">
        <div className="relative w-full flex flex-col ">

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
                <h1 className="text-black dark:text-white pl-2">
                  Your Message
                </h1>
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
      </div>
    </>
  );
}
