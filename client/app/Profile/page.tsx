"use client";
import "../(styles)/profile.css";
import "../(styles)/homepage.css";
import ProfileSideInfo from "../(components)/profileSideInfo";
import ProfilePosts from "../(components)/profilePosts";
import { useEffect, useState } from "react";
import PostModal from "../(components)/postModal";
import Auth from '../(utils)/auth'
import { useQuery, useLazyQuery } from "@apollo/client";
import { GET_USER_BY_ID } from "../(GraphQL)/queries";

export default function Profile() {
  const id = Auth.getProfile().data._id
  console.log(id)
  const { loading, error, data } = useQuery(GET_USER_BY_ID, {
    variables: {
      userId: id,
    },
  });


  const [showModalState, setShowModalState] = useState(false);
  const [activePostId, setActivePostId] = useState<string>('');

  const postClickHandler = async (postInfo: any) => {
    try{
      //console.log(data.getUserById)
    console.log(postInfo._id)
    setActivePostId(postInfo._id)
    setShowModalState(true);
    }catch(err){
      console.error(err)
    }
  };

  return (
    <div className="ml-20 bg-darkestCoolGray">
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-1 bg-coolGray">
        <div className="bg-darkCoolGray p-2 pt-20 h-[100vh] secondaryMenuMainDiv"></div>
        </div>
        <div className="col-span-1 w-[100%] mt-10">
          {data && <ProfileSideInfo userInfo={data.getUserById} />}
        </div>
        <div className="col-span-4 w-[100%] mt-10">
          <div className="grid grid-cols-3 gap-3">
            {data && data.getUserById && (
              <>
                {data.getUserById.posts.map(
                  (post: { title: string; preview: string }, index: number) => (
                    <div className="border-2 border-green-400 rounded-2xl">
                      <ProfilePosts
                      postInfo={post}
                      key={index}
                      postClickHandler={postClickHandler}
                    />
                    </div>
                  )
                )}
              </>
            )}
          </div>
        </div>
      </div>
      {showModalState && (
        <PostModal
          //The error is that this data is possibly null which is fine
          postId={activePostId}
          handleClose={function (): void {
            setShowModalState(false);
          }}
        />
      )}
    </div>
  );
}
