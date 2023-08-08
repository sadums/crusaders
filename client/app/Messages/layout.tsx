import "../(styles)/messages.css";
import "../(styles)/homepage.css";
// import Conversations from "../components/conversation";
// import { CHAT_SUBSCRIPTION } from "../GraphQL/subscriptions";
// import { useSubscription } from "@apollo/client";
// import Searchbar from "../components/searchbar";

export const dynamic = "auto",
  dynamicParams = true,
  revalidate = Infinity,
  fetchCache = "auto",
  runtime = "nodejs",
  preferredRegion = "auto";

export default function Messages({ children }: { children: React.ReactNode }) {
  // function chatSubscription() {
  //   const { data, loading, error } = useSubscription(CHAT_SUBSCRIPTION);
  //   console.log(data, loading, error);
  // }
  // chatSubscription();

  return (
    <div className="ml-20 bg-gradient-to-tr from-mediumWhite via-mediumWhite to-mediumWhite dark:from-black dark:to-black">
      <div className="grid grid-cols-12 gap-4 h-[97vh]">
        <div className="col-span-2 bg-mainDarkPurple dark:bg-mainPurple border-customPurpleDark border-r-[2px] dark:border-0 ">
          <div className="bg-darkestWhite  dark:bg-darkModeDarkestGray h-[100%] p-2 pt-20 secondaryMenuMainDiv"></div>
        </div>
        {/* 
        <div className="col-span-8 h-full">
          {children}
        </div> */}
        {children}
        <div className="col-span-2"></div>
      </div>
    </div>
  );
}
