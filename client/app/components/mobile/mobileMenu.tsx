"use client";

import { useState } from "react";
import Notifications from "../toggleSideBar/notifications";
import Likes from "../toggleSideBar/likes";
import MobileSettings from "./mobileSettings";

function MobileMenu() {
  const [secondaryMenu, setSecondaryMenu] = useState("notifications");

  return (
    <div className="w-full h-full dark:bg-black bg-mediumWhite">
      <div className="h-10 w-full justify-evenly flex">
        <button
          className={`${secondaryMenu === "notifications" ? "border-mainPurple border-b-2" : "border-0"} h-4 mt-4 pb-[20px] text-black dark:text-white text-sm w-full`}
          onClick={() => setSecondaryMenu("notifications")}
        >
          Notifications
        </button>
        <button
          className={`${secondaryMenu === "likes" ? "border-mainPurple border-b-2" : "border-0"} h-4 mt-4 pb-[20px] text-black dark:text-white  text-sm w-full`}
          onClick={() => setSecondaryMenu("likes")}
        >
          Likes
        </button>
        <button
          className={`${secondaryMenu === "settings" ? "border-mainPurple border-b-2" : "border-0"} h-4 mt-4 pb-[20px] text-black dark:text-white  text-sm w-full`}
          onClick={() => setSecondaryMenu("settings")}
        >
          Settings
        </button>
      </div>
      <div className="w-full h-full mt-4">
        {secondaryMenu === "notifications" && (
          <Notifications sidebarOpacity={false} />
        )}
        {secondaryMenu === "likes" && (
          <Likes sidebarOpacity={false} />
        )}
        {secondaryMenu === "settings" && (
          <MobileSettings />
        )}
      </div>
    </div>
  );
}

export default MobileMenu;
