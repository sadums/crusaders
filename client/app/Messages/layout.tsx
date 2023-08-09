import "../(styles)/messages.css";
import "../(styles)/homepage.css";
import Searchbar from "../components/searchbar"
import FriendsList from "./messagesComponents/friendsList";
import ChatBox from "./messagesComponents/chatBox";

export const dynamic = "auto",
  dynamicParams = true,
  revalidate = Infinity,
  fetchCache = "auto",
  runtime = "nodejs",
  preferredRegion = "auto";

export default function Messages({ children }: { children: React.ReactNode }) {
  return (
    <div className="ml-20 bg-gradient-to-tr from-mediumWhite via-mediumWhite to-mediumWhite dark:from-black dark:to-black">
      <div className="grid grid-cols-12 gap-4 h-[97vh]">
        <div className="col-span-2 bg-mainDarkPurple dark:bg-mainPurple border-customPurpleDark border-r-[2px] dark:border-0 ">
          <div className="bg-darkestWhite  dark:bg-darkModeDarkestGray h-[100%] p-2 pt-20 secondaryMenuMainDiv"></div>
        </div>
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
                  <FriendsList/>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-5 border-mainDarkPurple dark:border-mainPurple border-l-2 border-r-2 h-[97vh]">
            <div className="relative w-full flex flex-col ">
              <ChatBox/>
            </div>
          </div>
        </>
        <div className="col-span-2"></div>
      </div>
    </div>
  );
}
