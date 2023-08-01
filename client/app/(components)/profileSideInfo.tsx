import "../(styles)/profile.css";

interface UserData {
  userData: {
    username: string,
    bio: string,
    pfp: string,
    email: string,
    posts: string[],
    followers: string[],
    following: string[]
  };
}

function ProfileSideInfo({ userData }: UserData) {
  return (
    <div className="profileSideInfoMainDiv">
      <img
        src={userData.pfp}
        className="h-40 w-auto rounded-full object-cover"
      ></img>
      <h1 className="text text-2xl mt-4">@{userData ? userData.username : ''}</h1>
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
      <p className="text-sm mt-10">{userData.bio}</p>
      <span className="flex mt-8">
        <h2 className="mr-1">{userData.followers.length}</h2>
        <a>Followers</a>
      </span>
      <span className="flex mt-1">
        <h2 className="mr-1">{userData.following.length}</h2>
        <a>Following</a>
      </span>
    </div>
  );
}

export default ProfileSideInfo;
