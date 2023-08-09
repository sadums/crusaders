"use client";

export const dynamic = "auto",
  dynamicParams = true,
  revalidate = Infinity,
  fetchCache = "auto",
  runtime = "nodejs",
  preferredRegion = "auto";

import SearchBar from "../components/searchbar";
import "../(styles)/explore.css";
import "../(styles)/homepage.css";
import ProfilePosts from "../components/profile/profilePosts";
import { GET_ALL_POSTS } from "../GraphQL/queries";
import { useQuery } from "@apollo/client";
import { Key, useState, useEffect } from "react";

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
  const {
    loading: allPostLoading,
    error: allPostsError,
    data: allPostsData,
  } = useQuery(GET_ALL_POSTS);

  const [displayPosts, setDisplayPosts] = useState<any[] | null>(null);

  useEffect(() => {
    if (allPostsData) {
      setDisplayPosts([...allPostsData.getAllPosts].reverse());
    }
  }, [allPostsData]);

  return (
    <div className="bg-mediumWhite dark:bg-black ml-20 h-[100vh]">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2 bg-mainDarkPurple dark:bg-mainPurple border-customPurpleDark">
          <div className="bg-darkestWhite  dark:bg-darkModeDarkestGray p-2 pt-20 h-[100vh] secondaryMenuMainDiv"></div>
        </div>

        <div className="col-span-1">{/* For Spacing */}</div>

        <div className="col-span-2">
          <div className="w-72 pr-2 mt-16 p-2 pl-2">
            <h1 className="mb-1 font-semibold text-xl dark:text-white text-black">
              Search Hashtags
            </h1>
            <SearchBar />
          </div>
          <div className="p-2">
            <h3 className="text-xl font-semibold border-customPurple text-black dark:text-white border-b-2">
              Trending
            </h3>
            <div className="mt-2">
              {tempHashtagData.map((tag) => (
                <a
                  key={tag}
                  className="inline-block mr-2 mt-1 text-black dark:text-white hover:text-customPurple cursor-pointer duration-200 ease-in-out"
                >
                  #{tag}
                </a>
              ))}
            </div>
            <h3 className="text-xl font-semibold text-black dark:text-white border-customPurple border-b-2 mt-8">
              For You
            </h3>
            <div className="mt-2">
              {tempHashtagData.map((tag) => (
                <a
                  key={tag}
                  className="inline-block mr-2 mt-1 text-black dark:text-white hover:text-customPurple cursor-pointer duration-200 ease-in-out"
                >
                  #{tag}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-6 mt-2">
          <h3 className="text-xl font-semibold h-8">Results For #Coding</h3>
          <div className="overflow-y-scroll">
            <div className="grid grid-cols-3 h-[92vh] p-4 mt-4 ">
              {displayPosts
                ? displayPosts.map(
                    (post: any, index: Key | null | undefined) => (
                      <ProfilePosts postInfo={post} key={index} />
                    )
                  )
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
