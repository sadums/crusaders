"use client";
import "../(styles)/profile.css";
import PictureUploader from "./pictureUploader";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_USER_MUTATION } from "../(GraphQL)/mutations";

interface UserInfo {
  userInfo: {
    username: string;
    bio: string;
    pfp: string;
    email: string;
    posts: string[];
    followers: string[];
    following: string[];
  };
}

function ProfileSideInfo({ userInfo }: UserInfo) {
  const [updateUserMutation, { loading, error, data }] =
    useMutation(UPDATE_USER_MUTATION);
console.log(userInfo)
  const [userData, setUserData] = useState(userInfo)

  const [pictureState, setPictureState] = useState<string>("");
  const validateEmail = (email: string) => {
    var re = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
    return re.test(email);
  };

  const updateUserHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const target = event.target as HTMLFormElement;
      if (validateEmail(target.form[1].value)) {
        const updateUserData = {
          username: target.form[0].value,
          email: target.form[1].value,
          bio: target.form[2].value,
          pfp: pictureState,
          // followers: [],
          // following: []
        };
        console.log(updateUserData);

        const response = await updateUserMutation({
          variables: {input: updateUserData}
        })
        console.log(response)
        setUserData(response.data.editUser.user)
        
      } else {
        alert("Please enter a valid email");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSetPictureState = (url: string): void => {
    setPictureState(url);
  };
  return (
    <>
      <div className="profileSideInfoMainDiv mb-0">
        <img
          src={userData.pfp}
          className="h-40 w-40 rounded-full object-cover"
        ></img>
        <h1 className="text text-2xl mt-4">
          @{userData ? userData.username : ""}
        </h1>
        <div className="relative flex items-start space-x-4 mt-4">
          <button
            type="button"
            className="rounded-[5px] p-2 text-white text-sm font-semibold bg-blue-800"
          >
            <span className="">Follow</span>
          </button>
          <button
            type="button"
            className="rounded-[5px] p-2 text-black text-sm font-semibold bg-white"
          >
            <span className="">Message</span>
          </button>
          <button
            type="button"
            className="rounded-[5px] p-2 text-black text-sm font-semibold bg-white"
          >
            <span className="">Bookmarked</span>
          </button>
        </div>
        <p className="text-sm mt-10">{userData.bio}</p>
        <span className="flex mt-8">
          <h2 className="mr-1">{userData.followers.length}</h2>
          <a>Followers</a>
        </span>
        <span className="flex mt-1">
          <h2 className="mr-1">{userData.following.length}</h2>
          <a>Following</a>
        </span>
      </div>
      <div className="flex items-center justify-center mt-0">
        <form className="bg-white rounded-lg shadow-md p-6 max-w-sm mx-auto">
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Change Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 p-2 w-full border rounded-md text-black"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Change Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md text-black"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="bio"
              className="block text-sm font-medium text-gray-700"
            >
              Change bio
            </label>
            <input
              type="text"
              id="bio"
              name="bio"
              className="mt-1 p-2 w-full border rounded-md text-black"
            />
          </div>
          <PictureUploader
            pictureState={pictureState}
            setPictureState={handleSetPictureState}
            uploadText={"Upload a pfp"}
          />
          <div>
            <button
              onClick={updateUserHandler}
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ProfileSideInfo;
