interface Header {
  type: string;
  pfp: string;
  username: string;
  firstname: string;
  lastname: string;
}

function ChatHeader({ type, pfp, username, firstname, lastname }: Header) {
  if (type === "none") {
    return <div className="w-[full] h-16 bg-black"></div>;
  }
  if (type === "user") {
    return (
      <div
        className="absolute align-center min-w-[192px] max-w-xs mt-4 ml-4 rounded-xl shadow-2xl dark:notificationShadowPink cursor-pointer dark:bg-opacity-90 bg-opacity-90 bg-darkestWhite dark:bg-darkModeDarkGray p-2"
      >
        <div className="flex">
          <a className="cursor-pointer">
            <img
              src={pfp}
              className="h-12 w-12 rounded-full object-cover border-customPurple border-2"
            ></img>
          </a>
          <div className="items-center  align-center h-full">
            <h2 className="text-md cursor-pointer text-black font-semibold dark:text-white ml-1">
              {`${firstname} ${lastname}`}
            </h2>
            <div>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-500 cursor-pointer text-md ml-1 py-2"
                aria-current="page"
              >
                @{username}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatHeader;
