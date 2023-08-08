"use client";

import "../(styles)/messages.css";
import "../(styles)/homepage.css";
import { useEffect, useState } from "react";
import Conversations from "../components/conversation";
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
        },
        {
          speaker: false,
          message: "I love OceanGate",
        },
        {
          speaker: false,
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
        },
        {
          speaker: true,
          message:
            "Whats good my guy, React is dank, I need to make this sentence logn enough so that it will wrap around and make a full semi paragraph so I can style it",
        },
        {
          speaker: true,
          message: "Yeah brother",
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
    <div className="col-span-4 h-full">
      <div className="flex">
        <div className="mt-4 pl-32">
          <div className="w-72 pr-2 pl-2">
            <h1 className="mb-1 font-semibold text-xl dark:text-white text-black">Find Someone</h1>
            <Searchbar />
          </div>
          <div className="mt-4 flex-column bottom-0 ">
          <h2 className="pl-2 mb-1 font-semibold text-xl dark:text-white text-black">Your Friends</h2>
            <div className="overflow-y-scroll h-[81vh] friendListMessages">
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
        <div className="relative w-full mt-4 ml-4 border-2 bg-white dark:bg-darkModeDarkGray border-mainDarkPurple flex flex-col ">
          <Conversations pfp={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2ttZm63g10QST-zUfee9bAHaHa%26pid%3DApi&f=1&ipt=2a2e9a8ed813a72d1e579820ca1d4eedbba93128fafac81acac7c6a220bfee88&ipo=images"} user={user} convo={userConvo} />
          <div
            className={`absolute bottom-0 w-full transition-all duration-200 dark:bg-darkModeDarkGray bg-darkestWhite  bg-opacity-80 ease-in-out ${
              textBox ? "h-40" : "h-16"
            }`}
          >
            <div
              className={`${
                textBox ? "hidden" : "block"
              } flex h-full justify-center items-center border-t-2 border-mainDarkPurple`}
            >
              <button onClick={() => setTextBox(!textBox)} className="rounded-full bg-gradient-to-tr p-2 to-lightPink from-mainPurple hover:scale-110 hover:bg-blue-800 ease-in-out duration-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`${
                textBox ? "block" : "hidden"
              } transition-all ease-in-out duration-300`}
            >
              <div className="flex justify-end">
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
                  <form className="w-full flex ease-in-out relative transition-all">
                    <textarea placeholder="Your Message, 280 max characters" className="max-h-28 p-1 w-[80%] h-28 text-black dark:text-white text-sm"></textarea>
                    <button className="rounded-full absolute bottom-0 right-24 mb-0 h-12 w-12 bg-blue-600 dark:bg-blue-600 flex justify-center items-center hover:scale-110 hover:bg-blue-800 ease-in-out duration-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-8 h-8 transform rotate-[-35deg]"
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
    </div>
  );
}
