import "../(styles)/navbar.css";
import "../(styles)/profile.css";
import { useState, useEffect } from "react";
import MessagesSidebar from "./messagesSidebar";
import ProfilePosts from "./profilePosts";

interface toggle {
  props: any;
  type: string;
  sidebarOpacity: boolean | undefined;
}

const ToggleSidebar = ({ props, type, sidebarOpacity }: toggle) => {
  const tempLikedPostData = [
    {
      title: "Coding",
      picture:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.05gBtkpqfy-OonbTZNVNUgHaE8%26pid%3DApi&f=1&ipt=be6845eac96b9f23fb9a35404120bea1610926d7b529640e64426c73861fab7f&ipo=images",
    },
    {
      title: "Travel",
      picture:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F08%2FTravel-Images-For-Desktop.jpg&f=1&nofb=1&ipt=f102570e72b628d53418d9680add971373a1b8bb016b9be2d51594f3c5b96d30&ipo=images",
    },
    {
      title: "Plane I saw",
      picture:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.CSU0WYkZwY4keDZCuzMsfQHaE5%26pid%3DApi&f=1&ipt=4bb77a96611792db60e533091c5fa231ed0edd86d48b4cc094ce2d652769089a&ipo=images",
    },
    {
      title: "Oil Refinery",
      picture:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fwww.oilandgas360.com%2Fwp-content%2Fuploads%2F2018%2F02%2FCanton-Refinery-in-Canton-Ohio.jpg%3Ffit%3D3600%252C2400%26ssl%3D1&f=1&nofb=1&ipt=55a3e0a7127f9a0991faa9bbe41d182c06ba3cda1f157067e704ff8f5fe786b2&ipo=images",
    },
    {
      title: "Nature",
      picture:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2016%2F01%2F111509-landscape-nature.jpg&f=1&nofb=1&ipt=a8e47dc44480d87f1d5a9ded42e6337c47323587ada2e854bb957a9d96f11cde&ipo=images",
    },
    {
      title: "Mountains",
      picture:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.YEpnOBigXfti5tjP_2n3UgHaE8%26pid%3DApi&f=1&ipt=37909f0bbcad8559d7c52af3a0959cb37bf1be9018938c809523e1cf8a3ac092&ipo=images",
    },
    {
      title: "Beach",
      picture:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.H44yKeMtUgYB1W5cLslHOwHaE8%26pid%3DApi&f=1&ipt=f5f934fe840ef9b79562a21b22ea4b591c3247f92454d0fc3b93365054916edc&ipo=images",
    },
    {
      title: "Cityscape",
      picture:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2017%2F11%2F23%2F515009-cityscape-USA-Chicago.jpg&f=1&nofb=1&ipt=9b67d50523f85415891f97bfdc9a2ac106b614ece1170c2e30a75fec4deac843&ipo=images",
    },
    {
      title: "Went Snowboarding",
      picture:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.UNY2Aohxm8cYxJ7JbELKBgHaE7%26pid%3DApi&f=1&ipt=5e53029b6947625da5c8b94c9a3eb790041f1784372b1f23d0bb902508dcadfc&ipo=images",
    },
    {
      title: "Scuba Diving",
      picture:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.4diJwgKVPmNeaSOImvSHggHaE8%26pid%3DApi&f=1&ipt=f9cd121a49cfa9f697da84d17b5502471593277070c3e1da0f67641522f9ee46&ipo=images",
    },
  ];

  const sidebarSelector = () => {
    if (type === "Search") {
      return (
        <div
          className={`top-32 left-5 w-72 text-white fixed h-full z-10 ease-in-out duration-300 toggleSidebarMainDiv ${
            sidebarOpacity
              ? "w-0 opacity-0 translate-x-0 "
              : "w-100 opacity-1 translate-x-20"
          }`}
        >
            <input
              type="text"
              placeholder="Search Crusaders..."
              className="text-white mt-2 rounded-xl p-1 bg-coolGray border-solid border-customPurple border-t-2 border-r-2 border-l-2 border-b-2 outline-none w-64"
            />
        </div>
      );
    }
    if (type === "Messages") {
      return (
        <div
          className={`bottom-0 top-20 left-20 w-72 text-white fixed z-10 ease-in-out duration-500 ${
            sidebarOpacity
              ? "translate-y-full opacity-0"
              : "translate-y-0 opacity-1"
          }`}
        >
          <MessagesSidebar props={props} />
        </div>
      );
    }
    if (type === "Likes") {
      return (
        <div
          className={`bottom-0 p-5 top-32 left-20 w-72 text-white fixed z-10 ease-in-out duration-500 ${
            sidebarOpacity
              ? "translate-y-full opacity-0"
              : "translate-y-0 opacity-1"
          }`}
        >
          <h1 className="pb-4">Your Liked Posts:</h1>
          <div
            className="grid grid-cols-1 gap-3 scroll homepageLikedPosts"
            style={{
              maxHeight: "100%",
              overflowY: "scroll",
              scrollbarWidth: "none",
              /* For Firefox */
              scrollbarColor: "transparent transparent",
            }}
          >
            {tempLikedPostData.map((post) => (
              <ProfilePosts key={post.picture} postInfo={post} />
            ))}
          </div>
        </div>
      );
    }
  };

  return <>{sidebarSelector()}</>;
};

export default ToggleSidebar;
