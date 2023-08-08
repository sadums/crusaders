import { useEffect, useState } from "react";
import TheirText from "./theirTextComponent";
import YourText from "./yourTextComponent";

interface Convo {
  speaker: boolean;
  message: string;
}

function Conversations({
  pfp,
  user,
  convo,
}: {
  user: String;
  convo: Convo[];
  pfp: string;
}) {
  const buildConversation = () => {


    const [nobodyChat, activateNobodyChat] = useState(false)

    // useEffect(() => {

    // }, [])

    if (user === "Nobody") {

      // activateNobodyChat(!nobodyChat);

      return (
        <>
        {/* <div className="flex w-full h-16 p-2 justify-center darkModeGradientOpacity items-center">
            <div className="flex items-center h-full">
              <div>
                <a
                  href="#"
                  className="text-black dark:text-white font-semibold cursor-pointer text-xl mr-2 py-2"
                  aria-current="page"
                >
                  Press someone to chat with!
                </a>
              </div>
            </div>
          </div> */}
          <div className="w-[100%] p-2 overflow-y-scroll friendListMessages  pb-32 h-[97vh]">
            
          </div>
        </>
      );
    }
    if (!convo[0]) {
      return (
        <div className="w-[100%] p-2 overflow-y-scroll friendListMessages  pb-32 h-[97vh]">
            
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

          <div className="w-[100%] p-2 overflow-y-scroll friendListMessages pt-0 pb-40 h-[97vh]">
            {convo.map((text, index) => {
              if (text.speaker === true) {
                return <YourText text={text.message} key={index} />;
              }
              if (text.speaker === false) {
                return <TheirText text={text.message} key={index} />;
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
