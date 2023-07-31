import "../(styles)/profile.css";

interface UserInfo {
  userInfo: {
    username: string;
    description: string;
    pfp: string;
    followerCount: number;
    followingCount: number;
  };
}

function ProfileSideInfo({ userInfo }: UserInfo) {
  return (
    <div className="profileSideInfoMainDiv">
      <img
        src={userInfo.pfp}
        className="h-40 w-auto rounded-full object-cover"
      ></img>
      <h1 className="text text-2xl mt-4">@{userInfo.username}</h1>
      <div className="relative flex items-start space-x-4 mt-4">
        <button
          type="button"
          className="rounded-[5px] p-2 text-white text-sm font-semibold bg-blue-800"
        >
          <span className="">Follow</span>
        </button>
        <button
          type="button"
          className="rounded-[5px] p-2 text-black text-sm font-semibold bg-white"
        >
          <span className="">Message</span>
        </button>
        <button
          type="button"
          className="rounded-[5px] p-2 text-black text-sm font-semibold bg-white"
        >
          <span className="">Bookmarked</span>
        </button>
      </div>
      <p className="text-sm mt-10">{userInfo.description}</p>
      <span className="flex mt-8">
        <h2 className="mr-1">{userInfo.followerCount}</h2>
        <a>Followers</a>
      </span>
      <span className="flex mt-1">
        <h2 className="mr-1">{userInfo.followingCount}</h2>
        <a>Following</a>
      </span>
    </div>
  );
}

export default ProfileSideInfo;
