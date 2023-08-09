"use client";
import "../(styles)/profile.css";
import "../(styles)/homepage.css";
import ProfileSideInfo from "../../components/profile/profileSideInfo";
import ProfilePosts from "../../components/profile/profilePosts";

import Auth from "../../(utils)/auth";
import { useQuery } from "@apollo/client";
import { GET_USER_BY_ID } from "../../GraphQL/queries";

export const dynamic = "auto",
  dynamicParams = true,
  revalidate = Infinity,
  fetchCache = "auto",
  runtime = "nodejs",
  preferredRegion = "auto";

  export default function Profile() {
    const profile = Auth.getProfile();
    const id = profile?.data?._id;
  
    if (!id) {
      // Handle the error or return early
      return <div>Error: No user ID found</div>;
    }
  
    const { loading, error, data } = useQuery(GET_USER_BY_ID, {
      variables: {
        userId: id,
      },
    });
  return (
    <div className="ml-20 bg-mediumWhite dark:bg-black">
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-1 bg-mainDarkPurple dark:bg-mainPurple border-darkModeDarkGray border-r-2 ">
          <div className="bg-darkestWhite  dark:bg-darkModeDarkestGray p-2 pt-20 h-[100vh] secondaryMenuMainDiv"></div>
        </div>
        <div className="col-span-5 pl-20 pr-24 pt-4">
          <div className="bg-white shadow-2xl rounded-tl-md rounded-tr-md dark:bg-darkModeDarkGray pt-1 pl-2 pr-2">
            <div className="relative h-56 w-[full] mt-1 bg-center bg-cover rounded-tl-md rounded-tr-md border-b-0 border-t-2 border-r-2 border-l-2 border-black bg-[url('https://upcdn.io/FW25bUs/raw/uploads/2023/08/09/newyorkpfp-fRjQ.jpg')]">
              <div className="z-30 absolute flex items-center justify-between h-14 -ml-[10px] pr-4 w-[70.55vw] mt-[222px] border-t-2 border-black dark:border-black rounded-bl-md rounded-br-md bg-white dark:bg-darkModeDarkGray">
                <div className="flex">
                  <img
                    className="h-48 w-48 ml-4 rounded-full object-cover -mt-28 border-[3px] dark:border-mainBlueComp border-mainPurple"
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.Cl56H6WgxJ8npVqyhefTdQHaHa%26pid%3DApi&f=1&ipt=6d8f99d774b5ded67bd249f919c6c9a2182cbc97eb41eb1bc083d1efa39169c4&ipo=images"
                    alt="Your Company"
                  ></img>
                  <button className="ml-36 text-md font-semibold dark:text-white text-black hover:text-blue-700 dark:hover:text-blue-500 duration-100">
                    Posts
                  </button>
                  <button className="ml-6 text-md font-semibold dark:text-white text-black hover:text-blue-700 dark:hover:text-blue-500 duration-100">
                    Following: 12
                  </button>
                  <button className="ml-6 text-md font-semibold dark:text-white text-black hover:text-blue-700 dark:hover:text-blue-500 duration-100">
                    Followers: 14
                  </button>
                </div>
                <button className="text-lg text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-500 duration-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </button>

              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-3">
              <div className="mt-20 h-72 p-2 pt-2 pl-4 ">
                <h1 className="font-semibold dark:text-white text-black text-xl">
                  John Doe
                </h1>
                <h1 className=" dark:text-gray-500 text-gray-700 text-md">
                  @JohnDoe123Long
                </h1>

                <div className="border-b-[1px] dark:border-gray-500 pb-1 mb-2">
                  <button className=" px-5 mt-2 mr-3 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-mainPurple hover:bg-mainDarkBlue duration-300 ">
                    Follow
                  </button>
                  <button className="px-6 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-mainPurple hover:bg-mainDarkBlue duration-300 ">
                    Message
                  </button>
                </div>

                <p className="text-sm mt-4 leading-[1.75] text-black dark:text-white border-b-[1px] dark:border-gray-500 pb-1">
                  ChatGPT is a cutting-edge AI language model developed by
                  OpenAI. Built upon the GPT-3.5 architecture, it's a powerful
                  tool for generating human-like text responses.
                </p>
              </div>
            </div>
            <div className="col-span-7 gap-3 h-[75vh] z-60 profilePostsDiv overflow-y-scroll">
              <div className="grid mt-20 p-2 grid-cols-3 gap-2">
                {data && data.getUserById && (
                  <>
                    {data.getUserById.posts?.map(
                      (
                        post: { title: string; preview: string; _id: string },
                        index: number
                      ) => (
                        <div className="border-2 border-darkModeMediumGray rounded-2xl">
                          <ProfilePosts postInfo={post} key={index} />
                        </div>
                      )
                    )}
                  </>
                )}
              </div>
            </div>
            <div className="col-span-2">
              <div>
                {data && <ProfileSideInfo userInfo={data.getUserById} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
