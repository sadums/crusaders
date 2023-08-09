"use client"
import "../../(styles)/profile.css";
import { useState } from "react";
import PostModal from "../postModal";

interface PostInfo {
  title: string;
  preview: string;
  _id: string;
}

interface ProfilePostsProps {
  postInfo: PostInfo;
}

function ProfilePosts({ postInfo }: ProfilePostsProps) {

  const [showModalState, setShowModalState] = useState(false);

  return (
    <div className="relative">
      {postInfo.preview ? (
        <img
          className="w-full h-[100%] object-cover z-10 profilePostImg "
          src={postInfo.preview}
          alt="Post"
          onClick={()=> setShowModalState(true)}
        />
      ) : (
        <div>
          <h1>{postInfo.title}</h1>
        </div>
      )}
      {showModalState && (
        <PostModal
          postId={postInfo._id}
          handleClose={function (): void {
            setShowModalState(false);
          }}
        />
      )}
    </div>
  );
}

export default ProfilePosts;
