"use client";
import "../(styles)/profile.css";
import "../(styles)/homepage.css";
import ProfileSideInfo from "../(components)/profileSideInfo";
import ProfilePosts from "../(components)/profilePosts";
import { useEffect, useState } from "react";
import PostModal from "../(components)/postModal";
import Auth from "../(utils)/auth";
import { useQuery, useLazyQuery } from "@apollo/client";
import {
  GET_LOGGED_IN_USER,
  GET_POST,
  GET_USER_BY_ID,
} from "../(GraphQL)/queries";

type PostData = {
  title: string;
  body: string;
  comments: any[]; // Adjust this type as needed
  createdAt: string;
  hashtags: any[]; // Adjust this type as needed
  preview: string;
  media: string;
  _id: string;
};

export default function Profile() {
  const id = Auth.getProfile().data._id;
  console.log(id);
  const { loading, error, data } = useQuery(GET_USER_BY_ID, {
    variables: { id: id },
  });
  //console.log(data)
  const [getPost, { loading: postLoading, data: postData }] =
    useLazyQuery(GET_POST);

  const [showModalState, setShowModalState] = useState(false);
  const [activePostData, setActivePostData] = useState<PostData | null>(null);
  // console.log(Auth.getProfile())

  const postClickHandler = async (postInfo: any) => {
    console.log(data.getUserById);
    console.log(postInfo);
    const response = await getPost({ variables: { postId: postInfo._id } });
    console.log(response.data.getPost);
    const post: PostData | null = response.data.getPost;
    console.log(post); // Using the PostData type here
    setActivePostData(post);
    setShowModalState(true);
  };

  // useEffect(() => {
  //   getUserById();
  // }, []);

  return (
    <div className="ml-20 bg-gradient-to-tr from-mediumWhite via-mediumWhite to-mediumWhite dark:from-darkModeDarkestGray dark:to-darkModeDarkestGray">
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-1 bg-mainDarkPurple dark:bg-mainPurple border-customPurpleDark">
          <div className="bg-darkestWhite  dark:bg-darkModeMediumGray p-2 pt-20 h-[100vh] secondaryMenuMainDiv"></div>
        </div>
        {/* <div className="col-span-2 ml-40 w-[100%] mt-4">
          {data && <ProfileSideInfo userInfo={data.getUserById} />}
        </div> */}
        {/* <div className="col-span-3 w-[100%] mt-4">
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
        </div> */}

        <div className="col-span-5 pl-40 pr-24 mt-4">
          <div className="flex">
            <div>{data && <ProfileSideInfo userInfo={data.getUserById} />}</div>
            <div className="ml-6">
              <div className="grid grid-cols-3 gap-3 overflow-y-scroll">
                {data && data.getUserById && (
                  <>
                    {data.getUserById.posts.map(
                      (
                        post: { title: string; preview: string },
                        index: number
                      ) => (
                        <div className="border-2 border-darkModeMediumGray rounded-2xl">
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
        </div>
      </div>
      {showModalState && (
        <PostModal
          //The error is that this data is possibly null which is fine
          title={activePostData.title}
          media={activePostData.media}
          preview={activePostData.preview}
          body={activePostData.body}
          //Format the date in the backend
          date={activePostData.createdAt}
          comments={activePostData.comments}
          hashtags={activePostData.hashtags}
          username={data.getUserById.username}
          pfp={data.getUserById.pfp}
          firstName={data.getUserById.firstName}
          lastName={data.getUserById.lastName}
          handleClose={function (): void {
            setShowModalState(false);
          }}
        />
      )}
    </div>
  );
}
