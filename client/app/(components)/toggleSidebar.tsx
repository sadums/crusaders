import "../(styles)/navbar.css";
import { useState, useEffect } from "react";
import MessagesSidebar from "./messagesSidebar";

interface toggle {
    props: any
    type: string;
    sidebarOpacity: boolean | undefined;
}

const ToggleSidebar = ({ props, type, sidebarOpacity }:toggle) => {
  console.log(sidebarOpacity);
  console.log(type);
  console.log(props);
  const sidebarSelector = () => {
    if (type === "None") {
      return <></>;
    }
    if (type === "Messages") {
      return (
        <div
          className={`top-0 left-0 w-48  text-white fixed h-full z-10 ease-in-out duration-300 toggleSidebarMainDiv ${
            sidebarOpacity
              ? "w-0 opacity-0 translate-x-0 "
              : "w-60 opacity-1 translate-x-20"
          }`}
        >
          <MessagesSidebar props={props}/>
        </div>
      );
    }
    if (type === "Likes") {
      return (
        <>
          <div
            className={`top-0 left-0 w-48 text-white fixed h-full z-10 ease-in-out duration-300 toggleSidebarMainDiv ${
              sidebarOpacity
                ? "w-0 opacity-0 translate-x-0 "
                : "w-60 opacity-1 translate-x-20"
            }`}
          >
            <h2 className="mt-20 text-4xl font-semibold text-white">
              I am a sidebar
            </h2>
          </div>
        </>
      );
    }
  };

  return <>{sidebarSelector()}</>;
};

export default ToggleSidebar;
