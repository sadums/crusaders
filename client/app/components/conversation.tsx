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
    if (user === "Nobody") {
      return (
        <>
        <div className="flex w-full h-16 p-2 justify-center border-b-2 bg-darkestWhite dark:bg-darkModeDarkGray border-mainDarkPurple items-center">
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
          </div>
          <div className="w-[100%] p-2 overflow-y-scroll friendListMessages bg-white dark:bg-darkModeDarkestGray pb-32 h-[82vh]">
            
          </div>
        </>
      );
    }
    if (!convo[0]) {
      return (
        <h1 className="text-black dark:text-white text-center">
          You have no messages with this user
        </h1>
      );
    } else {
      return (
        <>
          <div className="flex w-full h-16 p-2 justify-center border-b-2 bg-darkestWhite dark:bg-darkModeDarkGray border-mainDarkPurple items-center">
            <div className="flex items-center h-full">
              <div>
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
          </div>

          <div className="w-[100%] p-2 overflow-y-scroll friendListMessages bg-white dark:bg-darkModeDarkestGray pb-32 h-[82vh]">
            {convo.map((text, index) => {
              if (text.speaker === true) {
                return <YourText text={text.message} key={index} />;
              }
              if (text.speaker === false) {
                return <TheirText text={text.message} key={index} />;
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
