"use client"
import "../(styles)/profile.css";
import { useState } from "react";

interface PostInfo {
  title: string;
  image: string;
}

interface ProfilePostsProps {
  postInfo: PostInfo;
  postClickHandler: (postInfo: PostInfo) => void;
}

function ProfilePosts({ postInfo, postClickHandler }: ProfilePostsProps) {
  return (
    <div className="relative profilePostMainDiv" onClick={()=> postClickHandler(postInfo)}>
      {postInfo.image ? (
        <img
          className="w-full h-64 object-cover z-10 profilePostImg "
          src={postInfo.image}
          alt="Post"
        />
      ) : (
        <div>
          <h1>{postInfo.title}</h1>
        </div>
      )}
    </div>
  );
}

export default ProfilePosts;
