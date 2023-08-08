import { useEffect, useState } from "react";
import TheirText from "./theirTextComponent";
import YourText from "./yourTextComponent";
import NobodyChat from "./nobodyTextComponent";
import ChatHeader from "../messages/messagesComponents/chatHeader";

interface Convo {
  speaker: boolean;
  message: string;
  date: string;
}

function Conversations({
  pfp,
  user,
  convo,
  date
}: {
  user: string;
  convo: Convo[];
  pfp: string;
  date: string;
}) {
  const buildConversation = () => {

    const tempFillerData = {
      
    }

    if (user === "Nobody") {
      return (
        <div className="w-[100%] p-2 overflow-y-scroll friendListMessages pt-0 pb-32 h-[97vh]">
          <NobodyChat firstInfoText="Welcome to the messaging page!" secondInfoText="Looks like you aren't currently talking to anyone, select a user to chat with."/>
        </div>
      );
    }
    if (!convo[0]) {
      return (
        <div className="w-[100%] p-2 overflow-y-scroll friendListMessages  pb-32 h-[97vh]">
          <NobodyChat firstInfoText="This chat is empty!" secondInfoText="Select a user to chat with, or send a message."/>
        </div>
      );
    } else {
      return (
        <div className="bg-transparent">
          {/* <div className="flex w-full p-2 bg-transparent ">
            <div className="flex items-center bg-transparent h-full">
              <div className="bg-transparent">
                <a
                  href="#"
                  className="text-black dark:text-white font-semibold cursor-pointer text-xl mr-2 py-2"
                  aria-current="page"
                >
                  @{user}
                </a>
              </div>
              <a className="cursor-pointer">
                <img
                  src={pfp}
                  className="h-12 w-12 rounded-full object-cover border-customPurple border-2"
                ></img>
              </a>
            </div>
          </div> */}
          <ChatHeader />

          <div className="w-[100%] p-2 overflow-y-scroll friendListMessages pt-20 pb-40 h-[97vh]">
            {convo.map((text, index) => {
              if (text.speaker === true) {
                return <YourText date={text.date} text={text.message} key={index} />;
              }
              if (text.speaker === false) {
                return <TheirText date={text.date} text={text.message} key={index} />;
              }
            })}
          </div>
        </div>
      );
    }
  };

  return <>{buildConversation()}</>;
}

export default Conversations;
