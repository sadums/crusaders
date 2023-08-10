"use client"

import { useEffect, useState } from "react";
import TheirText from "./theirTextComponent";

function NobodyChat() {
  const [nobodyChatWelcome, activateNobodyChatWelcome] = useState(false);
  const [nobodyChatMessage, activateNobodyChatMessage] = useState(false);

  useEffect(() => {
    // Redundent if I need to tweak animations
    const timeoutWelcome = setTimeout(() => {
      activateNobodyChatWelcome(true);
    }, 200);
    const timeoutMessage = setTimeout(() => {
      activateNobodyChatMessage(true);
    }, 650);
  }, []);

  return (
    <>
      <div
        className={`${
          nobodyChatWelcome
            ? "w-100 opacity-1 translate-x-0"
            : "w-0 opacity-0 translate-x-[-20px]"
        } ease-in-out duration-200`}
      >
        <TheirText date="" text={"It looks like you don't have a chat open yet..."} />
      </div>
      <div
        className={`${
          nobodyChatMessage
            ? "w-100 opacity-1 translate-x-0"
            : "w-0 opacity-0 translate-x-[-20px]"
        } ease-in-out duration-200`}
      >
        <TheirText date="" text={"Click on a chat or start a new one to the left"} />
      </div>
    </>
  );
}

export default NobodyChat;
