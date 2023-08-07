"use client";
import "../(styles)/profile.css";
import PictureUploader from "./pictureUploader";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_USER_MUTATION } from "../(GraphQL)/mutations";
import Auth from "../(utils)/auth";

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
      console.log([target.form]);
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

      const id = Auth.getProfile().data._id;
      console.log(id);

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
  console.log(userInfo);
  return (
    <>
      <div className="bg-white dark:bg-coolGray p-2 rounded-xl shadow-2xl mb-0">
        <img
          src={userData.pfp}
          className="h-40 w-40 rounded-full border-[1px] border-customPurple object-cover"
        ></img>
        <h1 className="text-black dark:text-white font-semibold text-xl mt-4">
          {`${userData.firstName} ${userData.lastName}`}
        </h1>
        <h1 className="text-gray-700 dark:text-gray-500 text-xl mt-0 border-b-[1px] border-gray-700 dark:border-gray-500 pb-2">
          @{userData ? userData.username : ""}
        </h1>
        <p className="text-sm text-black dark:text-white mt-2 ">
          {userData.bio}
        </p>
        <div className="relative flex items-start space-x-4 mt-2 border-b-[1px] border-gray-700 dark:border-gray-500 pb-2">
          <button className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-mainBlue hover:bg-mainDarkBlue duration-300 ">
            Follow
          </button>
          <button
            type="button"
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-mainBlue hover:bg-mainDarkBlue duration-300"
          >
            <span className="text-white dark:text-black">Message</span>
          </button>
          {/* <button
            type="button"
            className="rounded-lg px-3 py-2 text-black dark:text-white border-2 border-blue-600 text-sm font-semibold bg-white"
          >
            <span className="">Bookmarked</span>
          </button> */}
        </div>
        <div className="flex justify-between">
          <div>
            <span className="flex mt-2">
              <h2 className="mr-1 text-black dark:text-white">
                {userData.followers.length}
              </h2>
              <a className="text-black dark:text-white">Followers</a>
            </span>
            <span className="flex mt-1">
              <h2 className="mr-1 text-black dark:text-white">
                {userData.following.length}
              </h2>
              <a className="text-black dark:text-white">Following</a>
            </span>
          </div>
          <button className="text-gray-700 mt-3 dark:text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 h-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center mt-4 shadow-2xl">
        <form className="bg-white rounded-lg shadow-md p-2 w-72 mx-auto">
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
