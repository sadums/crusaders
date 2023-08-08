"use client";

import "./(styles)/homepage.css";
import FeedPosts from "./components/feedPosts";
import { useState, useEffect } from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import {
  GET_ALL_FOLLOWERS,
  GET_USER_BY_ID,
  GET_ALL_POSTS,
} from "./GraphQL/queries";
import Auth from "./(utils)/auth";
import PostModal from "./components/postModal";
import LikeFollowerModal from "./components/likeFollowerFollowingModal";
import Widgets from "./components/homepage/widgets";
import CreateAPost from "./components/homepage/createAPost";

interface ProfileData {
  _id: string;
}

const HomeController: React.FC = () => {
  const [
    getUserById,
    {
      loading: singleUserLoading,
      error: singleUserError,
      data: singleUserData,
    },
  ] = useLazyQuery(GET_USER_BY_ID, {
    variables: { id: "" },
  });
  const {
    loading: allPostLoading,
    error: allPostsError,
    data: allPostsData,
  } = useQuery(GET_ALL_POSTS);

  const [showModalState, setShowModalState] = useState(false);
  const [showLikeModalState, setShowLikeModalState] = useState(false);
  const [activePostId, setActivePostId] = useState<string>("");
  //CHANGE THIS
  const [likeCount, setLikeCount] = useState<number | null>(null);
  const [likeModalDataState, setLikeModalDataState] = useState();

  const likeClickHandler = (postLikes: any) => {
    console.log(postLikes);
    if (postLikes.length) {
      setLikeModalDataState(postLikes);
      setShowLikeModalState(true);
    } else {
      alert(`Post doesn't have any likes`);
    }
  };
  //Change this to work
  const postClickHandler = async (postInfo: any) => {
    try {
      setActivePostId(postInfo._id);
      setShowModalState(true);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (Auth.loggedIn()) {
      const profileData: ProfileData = Auth.getProfile().data;
      const id = profileData._id;
      getUserById({ variables: { id } });
    }
  }, []);

  return (
    // Original Background bg-gradient-to-tr from-lightestWhite via-slate-300 to-lightestWhite
    <div className="homePageMainDiv bg-gradient-to-tr from-mediumWhite via-mediumWhite to-mediumWhite dark:from-black dark:to-black ml-20">
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-1 bg-mainDarkPurple border-customPurpleDark border-r-[2px] dark:border-0 dark:bg-mainPurple">
          <div className="bg-darkestWhite  dark:bg-darkModeDarkestGray h-[100%] p-2 pt-20 secondaryMenuMainDiv"></div>
        </div>
        <div className="col-span-3 pl-40">
          <div className="homePageFeedMainDiv bg- pl-2 pr-2 border-customPurpleDark dark:border-customPurple">
            <div className="feedPostsTop"></div>
            {allPostsData ? (
              <FeedPosts
                posts={allPostsData}
                setLikeCount={setLikeCount}
                postClickHandler={postClickHandler}
                likeClickHandler={likeClickHandler}
              />
            ) : null}
          </div>
        </div>
        {Auth.loggedIn() && (
          <div className="col-span-2 mt-4">
            <div className="homepageInfoMainDiv">
              <CreateAPost />
              <Widgets />
            </div>
          </div>
        )}
      </div>
      {showLikeModalState && (
        <LikeFollowerModal
          handleClose={() => {
            setShowLikeModalState(false);
          }}
          users={likeModalDataState ?? []}
        />
      )}
      {showModalState && (
        <PostModal
          postId={activePostId}
          handleClose={function (): void {
            setShowModalState(false);
          }}
        />
      )}
    </div>
  );
};

export default HomeController;