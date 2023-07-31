import '../(styles)/profile.css'

interface PostInfo {
  postInfo: {
    title: string;
    picture: string;
  };
}

function ProfilePosts({ postInfo }: PostInfo) {
  return (
    <div className="relative profilePostMainDiv" key={postInfo.picture}>
      <img
        className="w-full h-64 object-cover z-10 profilePostImg "
        src={postInfo.picture}
        alt="Post"
      />
      {/* <div className="absolute inset-0 flex items-center justify-center profilePostTitle">
        {" "}
        <h3 className="text-white bg-black p-2 z-10 scale-0">{postInfo.title}</h3>
      </div> */}
    </div>
  );
}

export default ProfilePosts;
