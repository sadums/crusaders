"use client"
import "../(styles)/profile.css";
import { useState } from "react";

interface PostInfo {
  title: string;
  preview: string;
}

interface ProfilePostsProps {
  postInfo: PostInfo;
  postClickHandler: (postInfo: PostInfo) => void;
}

function ProfilePosts({ postInfo, postClickHandler }: ProfilePostsProps) {
  return (
    <div className="relative profilePostMainDiv" onClick={()=> postClickHandler(postInfo)}>
      {postInfo.preview ? (
        <img
          className="w-full h-64 object-cover z-10 profilePostImg "
          src={postInfo.preview}
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
