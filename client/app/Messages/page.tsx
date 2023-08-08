"use client";

import "../(styles)/messages.css";
import "../(styles)/homepage.css";
import { useEffect, useState } from "react";
import Conversations from "./messagesComponents/conversation";
import { CHAT_SUBSCRIPTION } from "../GraphQL/subscriptions";
import { useSubscription } from "@apollo/client";
import Searchbar from "../components/searchbar";
import FriendListItem from "../components/friendListItem";

export const dynamic = "auto",
  dynamicParams = true,
  revalidate = Infinity,
  fetchCache = "auto",
  runtime = "nodejs",
  preferredRegion = "auto";

export default function Messages() {
  function chatSubscription() {
    const { data, loading, error } = useSubscription(CHAT_SUBSCRIPTION);
    console.log(data, loading, error);
  }
  chatSubscription();
  const tempFriendLinks = [
    {
      username: "Sadums",
      firstname: "John",
      lastname: "Doe",
      pfp: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpixel.nymag.com%2Fimgs%2Fdaily%2Fintelligencer%2F2019%2F10%2F15%2F15-hunter-biden.w700.h700.jpg&f=1&nofb=1&ipt=875a251388322106d0ff37211cd4197c54ee31a308e9798c16c74fd34e3262fc&ipo=images",
      convo: [
        {
          speaker: true,
          message: "Whats good",
        },
        {
          speaker: true,
          message:
            "Idk idk idk, tried to commit repo to github, massive rip, fuck",
        },
        {
          speaker: false,
          message: "That sucks ass man",
        },
        {
          speaker: true,
          message: "Yeah brother",
          date: "08/02/2023",
        },
      ],
      newMessage: false,
    },
    {
      username: "TitanicYoshi",
      firstname: "John",
      lastname: "Doe",
      pfp: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.E3v8f0j8uhgRLnAk_2ou7AHaGX%26pid%3DApi&f=1&ipt=a532fbd2d3b278b927f5504a1cdab794f079828da0702c589a23a5a4cddf28f1&ipo=images",
      convo: [
        {
          speaker: false,
          message: "I love OceanGate",
          date: "08/01/2023",
        },
        {
          speaker: true,
          message:
            "Me too, lololo lolol olol olo lasdf asd fsd fs dfa sdf asd fasd fas dfa sdfasdfasdfasd fasdfasdfa sdfdsfdsds as dfasdf asdfsdfs dsfdfdsdfa",
          date: "08/01/2023",
        },
        {
          speaker: false,
          message: "That sucks ass man",
          date: "08/01/2023",
        },
        {
          speaker: true,
          message: "Yeah brother",
          date: "08/02/2023",
        },
      ],
      newMessage: true,
    },
    {
      username: "Carreejoh",
      firstname: "John",
      lastname: "Doe",
      pfp: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.E3v8f0j8uhgRLnAk_2ou7AHaGX%26pid%3DApi&f=1&ipt=a532fbd2d3b278b927f5504a1cdab794f079828da0702c589a23a5a4cddf28f1&ipo=images",
      convo: [
        {
          speaker: false,
          message: "I love OceanGate",
        },
        {
          speaker: true,
          message:
            "Me too, lololo lolol olol olo lasdf asd fsd fs dfa sdf asd fasd fas dfa sdfasdfasdfasd fasdfasdfa sdfdsfdsds as dfasdf asdfsdfs dsfdfdsdfa",
        },
        {
          speaker: false,
          message: "That sucks ass man",
        },
        {
          speaker: true,
          message: "Yeah brother",
        },
      ],
      newMessage: true,
    },
    {
      username: "Xtra",
      firstname: "John",
      lastname: "Doe",
      pfp: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2ttZm63g10QST-zUfee9bAHaHa%26pid%3DApi&f=1&ipt=2a2e9a8ed813a72d1e579820ca1d4eedbba93128fafac81acac7c6a220bfee88&ipo=images",
      convo: [
        {
          speaker: false,
          message: "I love OceanGate",
        },
        {
          speaker: true,
          message:
            "Me too, lololo lolol olol olo lasdf asd fsd fs dfa sdf asd fasd fas dfa sdfasdfasdfasd fasdfasdfa sdfdsfdsds as dfasdf asdfsdfs dsfdfdsdfa",
        },
        {
          speaker: true,
          message: "That sucks ass man",
        },
        {
          speaker: false,
          message: "Yeah brother",
        },
        {
          speaker: true,
          message:
            "Whats good my guy, React is dank, I need to make this sentence logn enough so that it will wrap around and make a full semi paragraph so I can style it",
        },
        {
          speaker: true,
          message: "Yeah brother",
          date: "08/01/2023",
        },
        {
          speaker: false,
          message: "I love OceanGate",
          date: "08/01/2023",
        },
        {
          speaker: false,
          message:
            "Me too, lololo lolol olol olo lasdf asd fsd fs dfa sdf asd fasd fas dfa sdfasdfasdfasd fasdfasdfa sdfdsfdsds as dfasdf asdfsdfs dsfdfdsdfa",
          date: "08/01/2023",
        },
        {
          speaker: true,
          message: "That sucks ass man",
          date: "08/02/2023",
        },
        {
          speaker: false,
          message: "Yeah brother",
          date: "08/02/2023",
        },
        {
          speaker: true,
          message:
            "Whats good my guy, React is dank, I need to make this sentence logn enough so that it will wrap around and make a full semi paragraph so I can style it",
        },
        {
          speaker: true,
          message: "Yeah brother",
          date: "08/01/2023",
        },
        {
          speaker: true,
          message:
            "Whats good my guy, React is dank, I need to make this sentence logn enough so that it will wrap around and make a full semi paragraph so I can style it",
          date: "08/01/2023",
        },
        {
          speaker: true,
          message: "Yeah brother",
        },
        {
          speaker: false,
          message:
            "Whats good my guy, React is dank, I need to make this sentence logn enough so that it will wrap around and make a full semi paragraph so I can style it",
        },
        {
          speaker: false,
          message:
            "Whats good my guy, React is dank, I need to make this sentence logn enough so that it will wrap around and make a full semi paragraph so I can style it",
          date: "08/05/2023",
        },
      ],
      newMessage: true,
    },
    {
      username: "Xtra1",
      firstname: "John",
      lastname: "Doe",
      id: 1,
      pfp: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2ttZm63g10QST-zUfee9bAHaHa%26pid%3DApi&f=1&ipt=2a2e9a8ed813a72d1e579820ca1d4eedbba93128fafac81acac7c6a220bfee88&ipo=images",
      convo: [],
      newMessage: false,
    },
    {
      username: "Xtra2",
      firstname: "John",
      lastname: "Doe",
      id: 2,
      pfp: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2ttZm63g10QST-zUfee9bAHaHa%26pid%3DApi&f=1&ipt=2a2e9a8ed813a72d1e579820ca1d4eedbba93128fafac81acac7c6a220bfee88&ipo=images",
      convo: [],
      newMessage: false,
    },
    {
      username: "Xtra3",
      firstname: "John",
      lastname: "Doe",
      id: 3,
      pfp: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2ttZm63g10QST-zUfee9bAHaHa%26pid%3DApi&f=1&ipt=2a2e9a8ed813a72d1e579820ca1d4eedbba93128fafac81acac7c6a220bfee88&ipo=images",
      convo: [],
      newMessage: false,
    },
    {
      username: "Xtra4",
      firstname: "John",
      lastname: "Doe",
      id: 4,
      pfp: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2ttZm63g10QST-zUfee9bAHaHa%26pid%3DApi&f=1&ipt=2a2e9a8ed813a72d1e579820ca1d4eedbba93128fafac81acac7c6a220bfee88&ipo=images",
      convo: [],
      newMessage: false,
    },
    {
      username: "Xtra123",
      firstname: "John",
      lastname: "Doe",
      id: 1,
      pfp: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2ttZm63g10QST-zUfee9bAHaHa%26pid%3DApi&f=1&ipt=2a2e9a8ed813a72d1e579820ca1d4eedbba93128fafac81acac7c6a220bfee88&ipo=images",
      convo: [],
      newMessage: false,
    },
    {
      username: "Xtra1234",
      firstname: "John",
      lastname: "Doe",
      id: 2,
      pfp: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2ttZm63g10QST-zUfee9bAHaHa%26pid%3DApi&f=1&ipt=2a2e9a8ed813a72d1e579820ca1d4eedbba93128fafac81acac7c6a220bfee88&ipo=images",
      convo: [],
      newMessage: false,
    },
    {
      username: "Xtra12345",
      firstname: "John",
      lastname: "Doe",
      id: 3,
      pfp: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2ttZm63g10QST-zUfee9bAHaHa%26pid%3DApi&f=1&ipt=2a2e9a8ed813a72d1e579820ca1d4eedbba93128fafac81acac7c6a220bfee88&ipo=images",
      convo: [],
      newMessage: false,
    },
    {
      username: "Xtra123456",
      firstname: "John",
      lastname: "Doe",
      id: 4,
      pfp: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2ttZm63g10QST-zUfee9bAHaHa%26pid%3DApi&f=1&ipt=2a2e9a8ed813a72d1e579820ca1d4eedbba93128fafac81acac7c6a220bfee88&ipo=images",
      convo: [],
      newMessage: false,
    },
    {
      username: "Xtra3",
      firstname: "John",
      lastname: "Doe",
      id: 3,
      pfp: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2ttZm63g10QST-zUfee9bAHaHa%26pid%3DApi&f=1&ipt=2a2e9a8ed813a72d1e579820ca1d4eedbba93128fafac81acac7c6a220bfee88&ipo=images",
      convo: [],
      newMessage: false,
    },
    {
      username: "Xtra4",
      firstname: "John",
      lastname: "Doe",
      id: 4,
      pfp: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2ttZm63g10QST-zUfee9bAHaHa%26pid%3DApi&f=1&ipt=2a2e9a8ed813a72d1e579820ca1d4eedbba93128fafac81acac7c6a220bfee88&ipo=images",
      convo: [],
      newMessage: false,
    },
    {
      username: "Xtra123",
      firstname: "John",
      lastname: "Doe",
      id: 1,
      pfp: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2ttZm63g10QST-zUfee9bAHaHa%26pid%3DApi&f=1&ipt=2a2e9a8ed813a72d1e579820ca1d4eedbba93128fafac81acac7c6a220bfee88&ipo=images",
      convo: [],
      newMessage: true,
    },
    {
      username: "Xtra1234",
      firstname: "John",
      lastname: "Doe",
      id: 2,
      pfp: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2ttZm63g10QST-zUfee9bAHaHa%26pid%3DApi&f=1&ipt=2a2e9a8ed813a72d1e579820ca1d4eedbba93128fafac81acac7c6a220bfee88&ipo=images",
      convo: [],
      newMessage: false,
    },
    {
      username: "Xtra12345",
      firstname: "John",
      lastname: "Doe",
      id: 3,
      pfp: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2ttZm63g10QST-zUfee9bAHaHa%26pid%3DApi&f=1&ipt=2a2e9a8ed813a72d1e579820ca1d4eedbba93128fafac81acac7c6a220bfee88&ipo=images",
      convo: [],
      newMessage: false,
    },
    {
      username: "Xtra123456",
      firstname: "John",
      lastname: "Doe",
      id: 4,
      pfp: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2ttZm63g10QST-zUfee9bAHaHa%26pid%3DApi&f=1&ipt=2a2e9a8ed813a72d1e579820ca1d4eedbba93128fafac81acac7c6a220bfee88&ipo=images",
      convo: [],
      newMessage: false,
    },
  ];

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

  //   const setUserHandler = (newUser: string) => {
  //     setUser(newUser);
  //   };

  useEffect(() => {
    let newConvo = tempFriendLinks
      .filter((friend) => friend.username === user)
      // .filter((friend) => friend.pfp === pfp)
      .map((friend) => friend.convo)
      .flat();
    console.log(newConvo);
    setUserConvo(newConvo);
  }, [user]);

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
          <div className="bg-white dark:bg-darkModeDarkGray p-2 mt-4 flex-column bottom-0 flex-grow-1">
            <h2 className="mb-1 font-semibold text-xl dark:text-white text-black">
              Your Friends
            </h2>
            <div className="overflow-y-scroll h-[60vh] friendListMessages">
              {tempFriendLinks.map((friend, index) => (
                <FriendListItem
                  username={friend.username}
                  firstname={friend.firstname}
                  lastname={friend.lastname}
                  pfp={friend.pfp}
                  key={index}
                  setUser={setUser}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-5 border-mainDarkPurple dark:border-mainPurple border-l-2 border-r-2 h-[97vh]">
        <div className="relative w-full flex flex-col ">
          <Conversations
            pfp={
              "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2ttZm63g10QST-zUfee9bAHaHa%26pid%3DApi&f=1&ipt=2a2e9a8ed813a72d1e579820ca1d4eedbba93128fafac81acac7c6a220bfee88&ipo=images"
            }
            user={user}
            convo={userConvo}
          />

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
      </div>
    </>
  );
}
