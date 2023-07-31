import "../(styles)/profile.css";
import ProfileSideInfo from "../(components)/profileSideInfo";
import ProfilePosts from "../(components)/profilePosts";

export default function Profile() {
  const sidebarInfo = {
    username: "Carreejoh",
    description:
      "Idk idk idk idk basd fasdf asd fasdf asdf asd fasdf asdf asdfasdfasdf asdfasdf fd d fasdfas dfdfdsf df dfd dfa sdf asdf asdf asdfasdfas",
    pfp: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs.abcnews.com%2Fimages%2FNightline%2F191018_ntl_hunter_biden_1_1239_hpMain_1x1_992.jpg&f=1&nofb=1&ipt=622f05d73b64dcad7acc99165e37727bc9ee27c841f790f83f7628673c9df3d4&ipo=images",
    followers: [
      "JohnDoe",
      "SadamHussan",
      "HunterBiden",
      "JoeBiden",
      "Xx_Trump_xX",
    ],
    followerCount: 312,
    following: [
      "JohnDoe",
      "SadamHussan",
      "HunterBiden",
      "JoeBiden",
      "Xx_Trump_xX",
    ],
    followingCount: 120,
  };

  const profilePostData = [
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
      picture: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.UNY2Aohxm8cYxJ7JbELKBgHaE7%26pid%3DApi&f=1&ipt=5e53029b6947625da5c8b94c9a3eb790041f1784372b1f23d0bb902508dcadfc&ipo=images"
    },
    {
      title: "Scuba Diving",
      picture: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.4diJwgKVPmNeaSOImvSHggHaE8%26pid%3DApi&f=1&ipt=f9cd121a49cfa9f697da84d17b5502471593277070c3e1da0f67641522f9ee46&ipo=images"
    }
  ];

  return (
    <div className="profileMainDiv">
      <div className="grid grid-cols-10 gap-4">
        <div className="col-span-2">{/* For Spacing */}</div>
        <div className="col-span-2 w-[100%]">
          <ProfileSideInfo userInfo={sidebarInfo} />
        </div>
        <div className="col-span-5 bg-slate-400 w-[100%] h-5 profilePostsMainDiv">
          <div className="grid grid-cols-3 gap-3">
            {profilePostData.map((post) => (
              <ProfilePosts postInfo={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
