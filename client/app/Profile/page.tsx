"use client";
import "../(styles)/profile.css";
import "../(styles)/homepage.css";
import ProfileUser from "../components/profile/profileUser";
import ProfilePosts from "../components/profile/profilePosts";
import EditProfile from "../components/profile/editProfile";
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

export default function Profile() {
  const profile = Auth.getProfile();
  const id = profile?.data?._id;
  const [editModal, toggleEditModal] = useState(true);
  const [userData, setUserData] = useState();

  if (!id) {
    // Handle the error or return early
    return <div>Error: No user ID found</div>;
  }

  const { loading, error, data } = useQuery(GET_USER_BY_ID, {
    variables: {
      userId: id,
    },
  });
  useEffect(()=> {
    if(data){
      setUserData(data.getUserById)
    }
  }, [data])
  return (
    <div className="ml-20 bg-mediumWhite dark:bg-black">
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-1 bg-mainDarkPurple dark:bg-mainPurple border-darkModeDarkGray border-r-2 ">
          <div className="bg-darkestWhite  dark:bg-darkModeDarkestGray p-2 pt-20 h-[100vh] secondaryMenuMainDiv"></div>
        </div>
        <div className="col-span-5 pl-20 pr-24 pt-4">
          <div className="bg-white shadow-2xl rounded-tl-md rounded-tr-md dark:bg-darkModeDarkGray pt-1 pl-2 pr-2">
            <div className="relative h-56 w-[full] mt-1 bg-center bg-cover rounded-tl-md rounded-tr-md border-b-0 border-t-2 border-r-2 border-l-2 z-10 border-black bg-[url('https://upcdn.io/FW25bUs/raw/uploads/2023/08/09/newyorkpfp-fRjQ.jpg')]">
              <div className="z-30 absolute flex items-center justify-between h-14 -ml-[10px] pr-4 w-[70.55vw] mt-[222px] border-t-2 border-black dark:border-black rounded-bl-md rounded-br-md bg-white dark:bg-darkModeDarkGray">
                <div className="flex justify-between">
                  <img
                    className="h-48 w-48 ml-4 rounded-full object-cover -mt-28 border-[3px] dark:border-mainBlueComp border-mainPurple"
                    src={data ? data.getUserById.pfp : ""}
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
                  <button onClick={() => toggleEditModal(!editModal)} className="text-mainPurple font-semibold text-md dark:text-mainPurple mr-4">
                    Edit Profile
                  </button>
                )}
                {/* {Auth.loggedIn() && (
        <>
          {Auth.getProfile().data._id === userData._id && (
            <EditProfile setUserData={setUserData} />
          )}
        </>
      )} */}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-3">
              {userData && (
                <ProfileUser userData={userData} />
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
                {data && <EditProfile userInfo={data.getUserById} setUserData={setUserData} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
