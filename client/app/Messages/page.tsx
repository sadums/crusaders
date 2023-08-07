"use client";
import "../(styles)/messages.css";
import "../(styles)/homepage.css";
import { useEffect, useState } from "react";
import Conversations from "../components/conversation";
import { CHAT_SUBSCRIPTION } from "../GraphQL/subscriptions";
import { useSubscription } from "@apollo/client";
import Searchbar from "../components/searchbar";

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

  useEffect(() => {
    let newConvo = tempFriendLinks
      .filter((friend) => friend.username === user)
      .map((friend) => friend.convo)
      .flat();
    console.log(newConvo);
    setUserConvo(newConvo);
  }, [user]);

  return (
    <div className="ml-20 bg-gradient-to-tr from-mediumWhite via-mediumWhite to-mediumWhite dark:from-black dark:to-black">
      <div className="grid grid-cols-6 gap-4 h-[97vh]">
        <div className="col-span-1 bg-mainDarkPurple dark:bg-mainPurple border-customPurpleDark border-r-[2px] dark:border-0 ">
          <div className="bg-darkestWhite  dark:bg-darkModeDarkestGray h-[100%] p-2 pt-20 secondaryMenuMainDiv"></div>
        </div>

        <div className="col-span-4 h-full">
          <div className="flex">
            <div className="mt-20 pl-32">
              <div className="w-72 pr-2 pl-2">
                <Searchbar />
              </div>
              <div className="mt-4 flex-column overflow-y-scroll bottom-0 h-[82vh] friendListMessages">
                {tempFriendLinks.map((friend, index) => (
                  <div
                    key={index}
                    className="align-center mt-1 shadow-2xl bg-white dark:bg-darkModeDarkGray p-2 duration-150 ease-in-out scale-95 hover:scale-100"
                  >
                    <div className="flex">
                      <a className="cursor-pointer">
                        <img
                          src={friend.pfp}
                          className="h-12 w-12 rounded-full object-cover border-customPurple border-2"
                        ></img>
                      </a>
                      <div className="items-center  align-center h-full">
                        <h2 className="text-md cursor-pointer text-black font-semibold dark:text-white ml-1">
                          {`${friend.firstname} ${friend.lastname}`}
                        </h2>
                        <div>
                          <a
                            href="#"
                            className="text-gray-500 cursor-pointer text-md ml-1 py-2"
                            aria-current="page"
                          >
                            @{friend.username}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full mt-20 ml-4 border-2 border-black"></div>
          </div>
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>

    // <div className="ml-20 bg-gradient-to-tr from-mediumWhite via-mediumWhite to-mediumWhite dark:from-black dark:to-black">
    //   <div className="grid grid-cols-6 gap-4 bottom-0">
    //     <div className="col-span-1 bg-mainDarkPurple dark:bg-mainPurple border-customPurpleDark border-r-[2px] dark:border-0 ">
    //       <div className="bg-darkestWhite  dark:bg-darkModeDarkestGray h-[100%] p-2 pt-20 secondaryMenuMainDiv"></div>
    //     </div>
    //     {/* <div className="col-span-5 pl-40 pr-24 mt-4">

    //     </div> */}
    //     <div className="col-span-2">
    //       <div className="mt-4 flex-column border-coolGray border-b-2 pb-4">
    //         {tempFriendLinks.map((friend) => (
    //           <a
    //             onClick={() => setUser(friend.username)}
    //             key={friend.username}
    //             className="mr-3 overflow-x-hidden cursor-pointer hover:scale-110 duration-150 ease-in-out"
    //           >
    //             <img
    //               src={friend.pfp}
    //               className="h-20 w-20 rounded-full object-cover border-customPurple border-2"
    //             ></img>
    //           </a>
    //         ))}
    //       </div>
    //     </div>
    //     <div className="col-span-3">
    //       <div className="w-[50%] pt-4 ml-[25%] border-coolGray border-r-2 border-l-2 relative flex flex-col">
    //         <div className="overflow-y-scroll pb-16 conversationDiv">
    //           <Conversations user={user} convo={userConvo} />
    //         </div>
    //         <div
    //           className={`w-[100%] bottom-0 left-0 p-3 flex bg-darkCoolGray ease-in-out duration-200
    //         ${
    //           textBox
    //             ? "h-72 bg-opacity-90"
    //             : "h-[6.5vh] justify-center bg-opacity-90"
    //         }`}
    //         >
    //           <button
    //             onClick={() => setTextBox(!textBox)}
    //             className={`text-black rounded-xl h-9 p-1 border-2 border-customPurple bg-customPurple ${
    //               textBox ? "hidden" : "block"
    //             }`}
    //           >
    //             Send a message
    //           </button>
    //           <div
    //             className={`w-[100%] h-[100%] justify-between ${
    //               textBox ? "block" : "hidden"
    //             }`}
    //           >
    //             <button
    //               onClick={() => setTextBox(!textBox)}
    //               className={`top-0 h-4 right-0 relative ml-[96%] ${
    //                 textBox ? "block" : "hidden"
    //               }`}
    //             >
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //                 strokeWidth={1.5}
    //                 stroke="currentColor"
    //                 className="w-6 h-6"
    //               >
    //                 <path
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   d="M6 18L18 6M6 6l12 12"
    //                 />
    //               </svg>
    //             </button>

    //             <textarea className="bg-transparent border-solid border-neonBlue border-t-0 border-r-0 border-l-0 border-b-2 outline-none w-[80%] h-20"></textarea>
    //             <button className=" rounded-full h-10 w-10 ">
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //                 strokeWidth={1.5}
    //                 stroke="currentColor"
    //                 className="w-6 h-6"
    //               >
    //                 <path
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
    //                 />
    //               </svg>
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
