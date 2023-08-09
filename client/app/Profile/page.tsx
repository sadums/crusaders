"use client";
import "../(styles)/profile.css";
import "../(styles)/homepage.css";
import ProfileSideInfo from "../components/profile/profileSideInfo";
import ProfilePosts from "../components/profile/profilePosts";

import Auth from "../(utils)/auth";
import { useQuery } from "@apollo/client";
import { GET_USER_BY_ID } from "../GraphQL/queries";

export const dynamic = "auto",
  dynamicParams = true,
  revalidate = Infinity,
  fetchCache = "auto",
  runtime = "nodejs",
  preferredRegion = "auto";

export default function Profile() {
  const id = Auth.getProfile().data._id;
  const { loading, error, data } = useQuery(GET_USER_BY_ID, {
    variables: {
      userId: id,
    },
  });
  return (
    // <div className="grid grid-cols-3 gap-3 overflow-y-scroll">
    //             {data && data.getUserById && (
    //               <>
    //                 {data.getUserById.posts?.map(
    //                   (
    //                     post: { title: string; preview: string, _id: string },
    //                     index: number
    //                   ) => (
    //                     <div className="border-2 border-darkModeMediumGray rounded-2xl">
    //                       <ProfilePosts
    //                         postInfo={post}
    //                         key={index}
    //                       />
    //                     </div>
    //                   )
    //                 )}
    //               </>
    //             )}
    //           </div>

    //* <div>{data && <ProfileSideInfo userInfo={data.getUserById} />}</div> */

    <div className="ml-20 bg-mediumWhite dark:bg-black">
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-1 bg-mainDarkPurple dark:bg-mainPurple border-darkModeDarkGray border-r-2 ">
          <div className="bg-darkestWhite  dark:bg-darkModeDarkestGray p-2 pt-20 h-[100vh] secondaryMenuMainDiv"></div>
        </div>
        <div className="col-span-5 pl-20 pr-24 pt-4">
          <div className="bg-white shadow-2xl rounded-tl-md rounded-tr-md dark:bg-darkModeDarkGray pt-1 pl-2 pr-2">
            <div className="relative h-56 w-[full] mt-1 bg-center bg-cover rounded-tl-md rounded-tr-md border-b-0 border-t-2 border-r-2 border-l-2 border-black bg-[url('https://upcdn.io/FW25bUs/raw/uploads/2023/08/09/newyorkpfp-fRjQ.jpg')]">
              <div className="absolute flex h-14 -ml-[10px] w-[70.55vw] mt-[222px] border-t-2 border-black dark:border-black rounded-bl-md rounded-br-md bg-white dark:bg-darkModeDarkGray">
                <img
                  className="h-48 w-48 ml-24 rounded-full object-cover -mt-28 border-[3px] dark:border-mainPurple border-mainPurple"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.Cl56H6WgxJ8npVqyhefTdQHaHa%26pid%3DApi&f=1&ipt=6d8f99d774b5ded67bd249f919c6c9a2182cbc97eb41eb1bc083d1efa39169c4&ipo=images"
                  alt="Your Company"
                ></img>
                <button className="ml-8 text-md font-semibold dark:text-white text-black hover:text-blue-700 dark:hover:text-blue-500 duration-100">
                  Posts
                </button>
                <button className="ml-6 text-md font-semibold dark:text-white text-black hover:text-blue-700 dark:hover:text-blue-500 duration-100">
                  Following: 12
                </button>
                <button className="ml-6 text-md font-semibold dark:text-white text-black hover:text-blue-700 dark:hover:text-blue-500 duration-100">
                  Followers: 14
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
