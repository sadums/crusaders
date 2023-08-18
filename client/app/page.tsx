"use client";

import "./(styles)/homepage.css";
import { Key, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_POSTS } from "./GraphQL/queries";
import Auth from "./(utils)/auth";
import Widgets from "./components/homepage/widgets";
import CreateAPost from "./components/homepage/createAPost";
import SinglePost from "./components/homepage/singlePost";

interface PostState {
  posts: any[];  // Define the type of posts as you need, I've used any[] for demonstration
}

interface CreateAPostProps {
  setDisplayPosts: React.Dispatch<React.SetStateAction<PostState[]>>;
  // ... other props
}

const HomeController: React.FC = () => {
  const {
    loading: allPostLoading,
    error: allPostsError,
    data: allPostsData,
  } = useQuery(GET_ALL_POSTS);

  const [displayPosts, setDisplayPosts] = useState<any[] | null>([]);


  useEffect(() => {
    if (allPostsData) {
      setDisplayPosts([...allPostsData.getAllPosts].reverse());
    }
  }, [allPostsData]);

  return (
    // Original Background bg-gradient-to-tr from-lightestWhite via-slate-300 to-lightestWhite
    <div className="homePageMainDiv dark:bg-black bg-mediumWhite ml-0 sm:ml-20">
      <div className="grid grid-cols-6 gap-4">
        <div className="sm:block hidden bg-mainDarkPurple border-customPurpleDark border-r-[2px] lg:col-span-1 sm:col-span-0 dark:border-0 dark:bg-mainPurple">
          <div className="bg-darkestWhite  dark:bg-darkModeDarkestGray h-[100%] p-2 pt-20 secondaryMenuMainDiv"></div>
        </div>
        <div className="sm:col-span-3 col-span-6 sm:pl-40 pl-0">
          <div className="homePageFeedMainDiv sm:pl-2 sm:pr-2 pr-1 pl-1 border-customPurpleDark dark:border-customPurple">
            <div className="feedPostsTop"></div>
            {displayPosts
              ? displayPosts.map((post: any, index: Key | null | undefined) => (
                  <SinglePost post={post} key={index} />
                ))
              : null}
          </div>
        </div>
        {Auth.loggedIn() && (
          <div className="col-span-2 mt-4">
            <div className="homepageInfoMainDiv">
              <CreateAPost setDisplayPosts={setDisplayPosts} />
              <Widgets displayPosts={displayPosts}/>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeController;
