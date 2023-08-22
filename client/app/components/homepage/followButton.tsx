"use client";
import { GET_USER_FOLLOWERS } from "@/app/GraphQL/queries";
import { FOLLOW_USER, UNFOLLOW_USER } from "../../GraphQL/mutations";
import { useLazyQuery, useMutation } from "@apollo/client";
import { useState, useEffect, useRef } from "react";
import Auth from "../../(utils)/auth";

export default function FollowButton({ userId, getFollow }: any) {
  const [followUser, { data: followData }] = useMutation(FOLLOW_USER);
  const [unfollowUser, { data: unfollowData }] = useMutation(UNFOLLOW_USER);
  const [loadUserFollowers, { loading, error, data }] =
    useLazyQuery(GET_USER_FOLLOWERS);

  const [isFollowingState, setIsFollowingState] = useState(false);
  const followButtonRef = useRef(null);

  const followButtonHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const mainUserId = Auth.getProfile().data._id;
      if (isFollowingState) {
        const response = await followUser({
          variables: {
            userId: userId,
            followerId: mainUserId,
          },
        });
        console.log(response);
        setIsFollowingState((prev) => !prev);
      } else {
        const response = await unfollowUser({
          variables: {
            userId: userId,
            followerId: mainUserId,
          },
        });
        console.log(response);
        setIsFollowingState((prev) => !prev);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (data) {
      const isFollowing = data.getUserById.following.some(
        (user: { _id: any }) => {
          return user._id === userId;
        }
      );
      setIsFollowingState(!isFollowing);
    }
  }, [data]);

  useEffect(() => {
    if (Auth.loggedIn()) {
      loadUserFollowers({
        variables: {
          userId: Auth.getProfile().data._id,
        },
      });
    }
  }, []);
  return (
    <>
      {Auth.loggedIn() && (
        <>
          {userId !== Auth.getProfile().data._id && (
            <div onClick={() => getFollow(isFollowingState)}>
              <div className="my-auto">
                <button
                  ref={followButtonRef}
                  className=" font-semibold  text-neonBlue p-[1px] pl-2 pr-2 rounded-md"
                  onClick={followButtonHandler}
                >
                  {isFollowingState ? "Follow" : "Unfollow"}
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
