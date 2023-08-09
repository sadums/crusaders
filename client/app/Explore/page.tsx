"use client";

export const dynamic = 'auto',
dynamicParams = true,
revalidate = Infinity,
fetchCache = 'auto',
runtime = 'nodejs',
preferredRegion = 'auto'

import SearchBar from "../components/searchbar";
import "../(styles)/explore.css";
import "../(styles)/homepage.css";
import ProfilePosts from "../components/profile/profilePosts";

export default function Main() {
  const tempHashtagData = [
    "coding",
    "traveling",
    "javascript",
    "reactjs",
    "science",
    "chatGPT",
    "2024election",
    "snowboarding",
    "hunterbiden",
    "codingbootcamp",
    "football",
    "computers",
    "rust",
    "python",
    "instagram",
    "oceangate",
    "tomcruise",
    "donaldtrump",
    "joebiden",
    "guncontrol",
    "america",
    "tyrsvault",
    "jonathon",
    "sexymormons",
  ];

  const tempExploreData = [
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

  return (
    <div className="explorePageMainDiv bg-darkestCoolGray ml-20 h-[100vh]">
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-1 bg-[#131922] border-coolGray border-r-4">
          <div className="bg-darkCoolGray h-[100vh] p-2 secondaryMenuMainDiv"></div>
        </div>
        <div className="col-span-1 mt-24">
          {/* <h2 className="pl-16 font-crusadersFont pt-8 text-2xl font">Explore</h2> */}
          <div className="pl-4 pr-4 pb-4">
            <SearchBar />
          </div>
          <div className="p-4">
            <h3 className="text-2xl border-customPurple border-b-2">
              Trending
            </h3>
            <div className="mt-2">
              {tempHashtagData.map((tag) => (
                <a
                  key={tag}
                  className="inline-block mr-2 mt-1 hover:text-customPurple cursor-pointer duration-200 ease-in-out"
                >
                  #{tag}
                </a>
              ))}
            </div>
            <h3 className="text-2xl border-customPurple border-b-2 mt-8">
              For You
            </h3>
            <div className="mt-2">
              {tempHashtagData.map((tag) => (
                <a
                  key={tag}
                  className="inline-block mr-2 mt-1 hover:text-customPurple cursor-pointer duration-200 ease-in-out"
                >
                  #{tag}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-4 mt-24">
          <h3 className="ml-8 text-2xl h-8 pt-3">Results For #Coding</h3>
          <div className="grid grid-cols-3 overflow-scroll h-[90vh] p-4 mt-8 explorePageContentDiv">
            {tempExploreData.map((post) => (
              <div className="p-1.5">
                <ProfilePosts postInfo={post} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
