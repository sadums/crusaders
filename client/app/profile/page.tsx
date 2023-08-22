"use client";
import "../(styles)/profile.css";
import "../(styles)/homepage.css";
import ProfileUser from "../components/profile/profileUser";
import ProfilePosts from "../components/profile/profilePosts";
import FollowButton from "../components/homepage/followButton";
import EditProfile from "../components/profile/editProfile";
import SidebarIconMobile from "../components/sidebar/sidebarIconMobile";
import Auth from "../(utils)/auth";
import { useQuery } from "@apollo/client";
import { GET_USER_BY_ID } from "../GraphQL/queries";
import { useEffect, useState } from "react";

export const dynamic = "auto",
  dynamicParams = true,
  revalidate = Infinity,
  fetchCache = "auto",
  runtime = "nodejs",
  preferredRegion = "auto";

interface UserData {
  pfp: string;
}
export default function Profile() {
  const profile = Auth.getProfile();
  const id = profile?.data?._id;
  const [editModal, toggleEditModal] = useState(true);
  const [userData, setUserData] = useState<UserData | undefined>();

  if (!id) {
    return <div>Error: No user ID found</div>;
  }

  const { loading, error, data } = useQuery(GET_USER_BY_ID, {
    variables: {
      userId: id,
    },
  });
  useEffect(() => {
    if (data) {
      setUserData(data.getUserById);
    }
  }, [data]);
  return (
    <div className="sm:ml-20 bg-mediumWhite dark:bg-black">
      <div className="hidden sm:grid grid-cols-6 gap-4">
        <div className="hidden sm:block col-span-1 bg-mainDarkPurple dark:bg-mainPurple border-darkModeDarkGray border-r-2 ">
          <div className="bg-darkestWhite  dark:bg-darkModeDarkestGray p-2 pt-20 h-[100vh] secondaryMenuMainDiv"></div>
        </div>
        <div className="hidden sm:block sm:col-span-5 pl-20 pr-24 pt-4">
          <div className="hidden sm:block bg-white shadow-2xl rounded-tl-md rounded-tr-md dark:bg-darkModeDarkGray pt-1 pl-2 pr-2">
            <div className="relative h-56 w-[full] mt-1 bg-center bg-cover rounded-tl-md rounded-tr-md border-b-0 border-t-2 border-r-2 border-l-2 z-10 border-black bg-[url('https://upcdn.io/FW25bUs/raw/uploads/2023/08/09/newyorkpfp-fRjQ.jpg')]">
              <div className="z-30 absolute flex items-center justify-between h-14 -ml-[10px] pr-4 w-[70.55vw] mt-[222px] border-t-2 border-black dark:border-black rounded-bl-md rounded-br-md bg-white dark:bg-darkModeDarkGray">
                <div className="flex justify-between">
                  <img
                    className="h-48 w-48 ml-4 rounded-full object-cover -mt-28 border-[3px] dark:border-mainBlueComp border-mainPurple"
                    src={userData ? userData.pfp : ""}
                    alt="Your Company"
                  ></img>
                  <button className="ml-36 text-md font-semibold dark:text-blue-500 text-blue-700  duration-100">
                    Posts
                  </button>
                  <button className="ml-6 text-md font-semibold dark:text-white text-black hover:text-blue-700 dark:hover:text-blue-500 duration-100">
                    Likes
                  </button>
                  <button className="ml-6 text-md font-semibold dark:text-white text-black hover:text-blue-700 dark:hover:text-blue-500 duration-100">
                    Comments
                  </button>
                </div>
                {Auth.loggedIn() && (
                  <button
                    onClick={() => toggleEditModal(!editModal)}
                    className="text-mainPurple font-semibold text-md dark:text-mainPurple mr-4"
                  >
                    Edit Profile
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-3">
              {userData && (
                <ProfileUser userData={userData} isUserProfile={true} />
              )}
            </div>

            <div className="col-span-6 gap-3 h-[75vh] z-60">
              {/* <h1 className="text-black mt-16 dark:text-white ml-2 mr-2 font-semibold text-lg border-b-[1px] border-gray-700 dark:border-gray-500">Posts:</h1> */}
              <div className="grid p-2 pt-0 mt-16 grid-cols-1 gap-2 h-[70vh] overflow-y-scroll profilePostsDiv">
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
            <div className="col-span-3">
              <div
                className={`${
                  editModal
                    ? "opacity-0 h-0 translate-y-[-350px] z-0"
                    : "opacity-1 h-72 translate-y-0 z-0"
                } ease-in-out duration-200`}
              >
                {data && (
                  <EditProfile
                    userInfo={data.getUserById}
                    setUserData={setUserData}
                    toggleEditModal={toggleEditModal}
                    editModal={editModal}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* MOBILE VERSION */}
      <div className="sm:hidden w-full mb-20 mt-16">
        <div className="w-full h-40 bg-transparent">
          <div className="w-full h-28 bg-center bg-cover z-0 bg-[url('https://upcdn.io/FW25bUs/raw/uploads/2023/08/09/newyorkpfp-fRjQ.jpg')]"></div>
          <div className="w-full h-12 flex justify-between pr-4 pl-4">
            <img
              className="border-black border-2 relative h-24 z-10 mt-[-48px] rounded-full"
              src={userData ? userData.pfp : ""}
            ></img>
            <div className="flex h-12 items-center">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg> */}
              <SidebarIconMobile
                text="message"
                href="#"
                pathD="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                onClick={() => console.log("click")}
              />
              <FollowButton userId={123} />
            </div>
          </div>
        </div>
        <div className="">

        </div>
      </div>
    </div>
  );
}
