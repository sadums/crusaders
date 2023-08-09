"use client";
import "../../(styles)/profile.css";
import "../../(styles)/homepage.css";
import ProfileSideInfo from "../../components/profile/profileSideInfo";
import ProfilePosts from "../../components/profile/profilePosts";

import Auth from "../../(utils)/auth";
import { useQuery } from "@apollo/client";
import {
  GET_USER_BY_ID,
} from "../../GraphQL/queries";


export const dynamic = 'auto',
dynamicParams = true,
revalidate = Infinity,
fetchCache = 'auto',
runtime = 'nodejs',
preferredRegion = 'auto'


export default function OtherProfile({ params }: { params: {
    id: any; slug: string 
} }) {
    console.log(params)
  const id = params.id;
  console.log(id);
  const { loading, error, data } = useQuery(GET_USER_BY_ID, {
    variables: {
      userId: id,
    },
  });
  return (
    <div className="ml-20 bg-gradient-to-tr from-mediumWhite via-mediumWhite to-mediumWhite dark:from-black dark:to-black">
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-1 bg-mainDarkPurple dark:bg-mainPurple border-customPurpleDark">
          <div className="bg-darkestWhite  dark:bg-darkModeDarkestGray p-2 pt-20 h-[100vh] secondaryMenuMainDiv"></div>
        </div>
        <div className="col-span-5 pl-40 pr-24 mt-4">
          <div className="flex">
            <div>{data && <ProfileSideInfo userInfo={data.getUserById} />}</div>
            <div className="ml-6">
              <div className="grid grid-cols-3 gap-3 overflow-y-scroll">
                {data && (
                  <>
                    {data.getUserById.posts?.map(
                      (
                        post: { title: string; preview: string, _id: string },
                        index: number
                      ) => (
                        <div className="border-2 border-darkModeMediumGray rounded-2xl">
                          <ProfilePosts
                            postInfo={post}
                            key={index}
                          />
                        </div>
                      )
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}