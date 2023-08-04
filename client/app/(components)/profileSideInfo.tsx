"use client";
import "../(styles)/profile.css";
import PictureUploader from "./pictureUploader";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_USER_MUTATION } from "../(GraphQL)/mutations";
import Auth from '../(utils)/auth'

interface UserInfo {
  userInfo: {
    lastName: any;
    firstName: any;
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
  console.log(userInfo);
  const [userData, setUserData] = useState(userInfo);

  const [pictureState, setPictureState] = useState<{
    cropped: string;
    original: string;
  }>({
    cropped: "",
    original: "",
  });

  // const validateEmail = (email: string) => {
  //   var re = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
  //   return re.test(email);
  // };

  const updateUserHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const target = event.target as HTMLFormElement;
      console.log([target.form])
      const updateUserData = {
        username: target.form[0].value,
        firstName: target.form[1].value,
        lastName: target.form[2].value,
        bio: target.form[3].value,
        pfp: pictureState.cropped,
        // followers: [],
        // following: []
      };
      console.log(updateUserData);

      const id = Auth.getProfile().data._id
      console.log(id)

      const response = await updateUserMutation({
        variables: { input: updateUserData, _id: id },
      });
      
      //Add in error handling for if there is another user with the same name
      console.log(response.data);
      setUserData(response.data.editUser.user);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSetPictureState = (url: {
    cropped: string;
    original: string;
  }): void => {
    setPictureState(url);
  };
  console.log(userInfo)
  return (
    <>
      <div className="profileSideInfoMainDiv mb-0">
        <img
          src={userData.pfp}
          className="h-40 w-40 rounded-full border-[1px] border-customPurple object-cover"
        ></img>
        <h1 className="text text-xl mt-4">
          {`${userData.firstName} ${userData.lastName}`}
        </h1>
        <h1 className="text-gray-500 text-xl mt-0">
          @{userData ? userData.username : ""}
        </h1>
        <p className="text-sm mt-2">{userData.bio}</p>
        <div className="relative flex items-start space-x-4 mt-3">
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
              placeholder="Username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Change Name
            </label>
            <input
              type="text"
              name="first-name"
              className="mt-1 p-2 w-full border rounded-md text-black"
              placeholder="Last Name"
            />
            <input
              type="text"
              name="last-name"
              className="mt-1 p-2 w-full border rounded-md text-black"
              placeholder="First Name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="bio"
              className="block text-sm font-medium text-gray-700"
            >
              Change Bio
            </label>
            <input
              type="text"
              id="bio"
              name="bio"
              className="mt-1 p-2 w-full border rounded-md text-black"
              placeholder="Bio"
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
