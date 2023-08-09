import React from "react";

interface toggle {
    sidebarOpacity: boolean | undefined;
  }

function Notifications({ sidebarOpacity }: toggle) {

    const tempNotificationData = [
        {
          type: "friendRequest",
          id: 1,
          data: {
            senderName: "Sadums",
            pfp: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.4diJwgKVPmNeaSOImvSHggHaE8%26pid%3DApi&f=1&ipt=f9cd121a49cfa9f697da84d17b5502471593277070c3e1da0f67641522f9ee46&ipo=images",
          },
        },
        {
          type: "messageResponse",
          id: 2,
          data: {
            senderName: "Carreejoh",
            message: "Random response",
            pfp: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.4diJwgKVPmNeaSOImvSHggHaE8%26pid%3DApi&f=1&ipt=f9cd121a49cfa9f697da84d17b5502471593277070c3e1da0f67641522f9ee46&ipo=images",
          },
        },
        {
          type: "friendRequest",
          id: 3,
          data: {
            senderName: "Xtra",
            pfp: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.4diJwgKVPmNeaSOImvSHggHaE8%26pid%3DApi&f=1&ipt=f9cd121a49cfa9f697da84d17b5502471593277070c3e1da0f67641522f9ee46&ipo=images",
          },
        },
        {
          type: "friendRequest",
          id: 4,
          data: {
            senderName: "RandomGuy",
            pfp: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.4diJwgKVPmNeaSOImvSHggHaE8%26pid%3DApi&f=1&ipt=f9cd121a49cfa9f697da84d17b5502471593277070c3e1da0f67641522f9ee46&ipo=images",
          },
        },
        {
          type: "messageResponse",
          id: 5,
          data: {
            senderName: "TitanicYoshi",
            message: "Whats up my guy",
            pfp: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.4diJwgKVPmNeaSOImvSHggHaE8%26pid%3DApi&f=1&ipt=f9cd121a49cfa9f697da84d17b5502471593277070c3e1da0f67641522f9ee46&ipo=images",
          },
        },
      ];

  return (
    <div
      className={`bottom-0 p-3 top-32 left-20 w-72 text-white fixed z-10 ease-in-out duration-300 ${
        sidebarOpacity
          ? "w-0 opacity-0 translate-x-[-350px] "
          : "w-100 opacity-1 translate-x-0"
      }`}
    >
      <h4 className="dark:text-white text-lg text-black font-semibold border-customPurpleDark border-b-2">
        Notifications
      </h4>
      <div>
        {tempNotificationData.map((notif, index) => {
          if (notif.type === "friendRequest") {
            return (
              <div
                key={index}
                className=" shadow-xl bg-white rounded-xl dark:bg-darkModeDarkGray  dark:shadow-notificationShadowPink ring-blue-700 p-1 mt-3"
              >
                <div className="flex justify-between">
                  {" "}
                  <div className="flex">
                    <img
                      className="h-10 w-10 rounded-full mt-1 border-[1px] border-black"
                      src={notif.data.pfp}
                    ></img>
                    <div className="left-0">
                      <a className="ml-2 text-lg text-black dark:text-white font-semibold cursor-pointer">
                        {notif.data.senderName}
                      </a>
                      <h4 className="ml-2 text-[.8rem] text-gray-600 font-semibold dark:text-gray-400">
                        Has sent you a friend request
                      </h4>
                    </div>
                  </div>
                  <a className="mt-1 cursor-pointer hover:rotate-3 duration-150 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </a>{" "}
                </div>
                <div className="flex justify-evenly mt-2">
                  <button className="dark:text-green-400 font-semibold text-green-600 text-sm pl-1 pr-1 p-[.5%] rounded-md hover:bg-green-400 hover:text-black duration-150 ease-in-out">
                    Accept
                  </button>
                  <button className="dark:text-red-400 font-semibold text-red-600 text-sm pl-1 pr-1 p-[.5%] rounded-md hover:bg-red-400 hover:text-black duration-150 ease-in-out">
                    Decline
                  </button>
                </div>
              </div>
            );
          }
          if (notif.type === "messageResponse") {
            return (
              <div
                key={index}
                className=" shadow-xl bg-white rounded-xl dark:shadow-notificationShadowPink dark:bg-coolGray p-1 mt-3"
              >
                <div className="flex justify-between">
                  {" "}
                  <div className="flex">
                    <img
                      className="h-10 w-10 rounded-full mt-1"
                      src={notif.data.pfp}
                    ></img>
                    <div>
                      <a className="ml-2 text-lg text-black dark:text-white font-semibold cursor-pointer">
                        {notif.data.senderName}
                      </a>
                      <h4 className="ml-2 text-[.8rem] text-gray-600 font-semibold dark:text-gray-400">
                        Has sent you a message
                      </h4>
                    </div>
                  </div>
                  <a className="mt-1 cursor-pointer hover:rotate-3 duration-150 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </a>{" "}
                </div>
                <div className="flex mt-2">
                  <button className="ml-11 text-blue-600 font-semibold dark:text-blue-500 text-sm  pl-1 pr-1 p-[.5%] rounded-md hover:bg-customPurple hover:text-white duration-150 ease-in-out">
                    <div className="flex">
                      Respond
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Notifications;
