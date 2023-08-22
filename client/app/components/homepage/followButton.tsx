export default function FollowButton({
  followHandler,
  isFollowing,
  followerData,
}: any) {
  return (
    <div>
      {!isFollowing && !followerData.checkForFollower && (
        <div className="my-auto">
          <button
            className=" font-semibold  text-neonBlue p-[1px] pl-2 pr-2 rounded-md"
            onClick={(e) => followHandler(e)}
          >
            Follow
          </button>
        </div>
      )}
    </div>
  );
}
