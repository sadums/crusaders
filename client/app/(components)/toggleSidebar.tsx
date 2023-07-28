import "../(styles)/navbar.css";
import { useState, useEffect } from "react";
import MessagesSidebar from "./messagesSidebar";

const ToggleSidebar = (props:any) => {
  const sidebarSelector = () => {
    if (props.type === "None") {
      return <></>;
    }
    if (props.type === "Messages") {
      return (
        <div
          className={`top-0 left-0 w-[10vw]  text-white fixed h-full z-10 ease-in-out duration-300 toggleSidebarMainDiv ${
            props.sidebarOpacity
              ? "w-0 opacity-0 translate-x-0 "
              : "w-[18vw] opacity-1 translate-x-[8vw]"
          }`}
        >
          <MessagesSidebar props={props.props}/>
        </div>
      );
    }
    if (props.type === "Likes") {
      return (
        <>
          <div
            className={`top-0 left-0 w-[10vw]  text-white fixed h-full z-10 ease-in-out duration-300 toggleSidebarMainDiv ${
              props.sidebarOpacity
                ? "w-0 opacity-0 translate-x-0 "
                : "w-[18vw] opacity-1 translate-x-[8vw]"
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
