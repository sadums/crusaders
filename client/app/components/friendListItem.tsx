"use client"

import { Dispatch, SetStateAction } from "react";

interface ModalProps {
  username: string;
  firstname: string;
  lastname: string;
  pfp: string;
  setUser: Dispatch<SetStateAction<string>>;
}

function FriendListItem({ username, firstname, lastname, pfp, setUser }: ModalProps) {
  return (
    <div onClick={() => setUser(username)} className="align-center mt-1 shadow-2xl rounded-lg cursor-pointer bg-white dark:bg-darkModeDarkGray p-2 duration-150 ease-in-out scale-95 hover:scale-100">
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
              className="text-gray-500 cursor-pointer text-md ml-1 py-2"
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

export default FriendListItem;
