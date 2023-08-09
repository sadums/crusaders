import { useEffect, useState } from "react";
import TheirText from "./theirTextComponent";
import YourText from "./yourTextComponent";
import NobodyChat from "./nobodyTextComponent";
import ChatHeader from "./chatHeader";

interface Convo {
  speaker: boolean;
  message: string;
  date: string;
}

function Conversations({
  user,
  convo,
  date,
}: {
  user: {
    firstname: string,
    lastname: string,
    username: string,
    pfp: string
  };
  convo: Convo[];
  date: string;
}) {
  const buildConversation = () => {
    const tempFillerData = {
      firstname: "John",
      lastname: "Doe",
    };

    if (!user) {
      return (
        <div className="w-[100%] p-2 overflow-y-scroll friendListMessages pt-20 pb-32 h-[97vh]">
          <NobodyChat
            firstInfoText="Welcome to the messaging page!"
            secondInfoText="Looks like you aren't currently talking to anyone, select a user to chat with."
          />
        </div>
      );
    }
    if (!convo[0]) {
      return (
        <>
          <ChatHeader
            type={"user"}
            pfp={user.pfp}
            username={user.username}
            firstname={user.firstname}
            lastname={user.lastname}
          />
          <div className="w-[100%] p-2 overflow-y-scroll friendListMessages pt-20 pb-32 h-[97vh]">
            <NobodyChat
              firstInfoText="This chat is empty!"
              secondInfoText="Select a user to chat with, or send a message."
            />
          </div>
        </>
      );
    } else {
      return (
        <>
          <ChatHeader
            type={"user"}
            pfp={pfp}
            username={user}
            firstname={tempFillerData.firstname}
            lastname={tempFillerData.lastname}
          />

          <div className="w-[100%] p-2 overflow-y-scroll friendListMessages pt-20 pb-40 h-[97vh]">
            {convo.map((text, index) => {
              if (text.speaker === true) {
                return (
                  <YourText date={text.date} text={text.message} key={index} />
                );
              }
              if (text.speaker === false) {
                return (
                  <TheirText date={text.date} text={text.message} key={index} />
                );
              }
            })}
          </div>
        </>
      );
    }
  };

  return <>{buildConversation()}</>;
}

export default Conversations;
