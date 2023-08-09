import { useState, useEffect, Key } from "react";
import { GET_USER_BY_ID } from "../../GraphQL/queries";
import { useQuery } from "@apollo/client";
import Auth from "../../(utils)/auth";
import PostModal from "../postModal";

interface toggle {
  sidebarOpacity: boolean | undefined;
}

function Likes({ sidebarOpacity }: toggle) {
  const id = Auth.getProfile().data._id;
  console.log(id)
  const {
    loading: userByIdLoading,
    error: userByIdError,
    data: userByIdData,
  } = useQuery(GET_USER_BY_ID, {
    variables: {
        userId: id,
      },
  });

  const [activePostId, setActivePostId] = useState<string>("");
  const [showModalState, setShowModalState] = useState(false);
  const likesPictureHandler = async (postId: any) => {
    try {
      console.log(postId);
      setActivePostId(postId);
      setShowModalState(true);
      // const response = await getPost({ variables: { postId: post.postId } });
      // console.log(response.data.getPost)
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div
        className={`bottom-0 p-3 top-32 left-20 w-72 text-white fixed z-10 ease-in-out duration-500 ${
          sidebarOpacity
            ? "w-0 opacity-0 translate-x-[-350px] "
            : "w-100 opacity-1 translate-x-0"
        }`}
      >
        <h1 className="dark:text-white text-lg text-black font-semibold border-customPurpleDark border-b-2">
          Your Liked Posts:
        </h1>
        {userByIdData && (
          <div
            className="grid grid-cols-2 gap-3 scroll mt-3 homepageLikedPosts"
            style={{
              maxHeight: "100%",
              overflowY: "scroll",
              scrollbarWidth: "none",
              /* For Firefox */
              scrollbarColor: "transparent transparent",
            }}
          >
            {userByIdData.getUserById.likes?.map(
              (
                post: {
                  post: any;
                  preview: string | undefined;
                },
                index: Key | null | undefined
              ) => (
                <div key={index} className="w-[100%] h-auto">
                  <img
                    onClick={() => likesPictureHandler(post.post._id)}
                    className="h-24 w-32 object-fill rounded-xl shadow-xl transition-transform duration-200 transform scale-100 cursor-pointer hover:scale-[96%] hover:brightness-75"
                    src={post.post.preview}
                  ></img>
                </div>
              )
            )}
          </div>
        )}
      </div>
      {showModalState && (
        <div className="z-50 fixed inset-0 flex justify-center items-center">
          <PostModal
            postId={activePostId}
            handleClose={function (): void {
              setShowModalState(false);
            }}
          />
        </div>
      )}
    </>
  );
}

export default Likes;
