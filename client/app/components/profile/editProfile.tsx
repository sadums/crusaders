import React from "react";
import PictureUploader from "../pictureUploader";
import { useMutation } from "@apollo/client";
import { UPDATE_USER_MUTATION } from "../../GraphQL/mutations";
import { useState, FC } from "react";
import Auth from "../../(utils)/auth";

interface EditProfileProps {
  setUserData: (data: any) => void; // Replace 'any' with the type of your user data if known
}

const EditProfile: FC<EditProfileProps> = ({ setUserData }) => {
  const [updateUserMutation, { loading, error, data }] =
    useMutation(UPDATE_USER_MUTATION);

  const [pictureState, setPictureState] = useState<{
    cropped: string;
    original: string;
  }>({
    cropped: "",
    original: "",
  });

  const handleSetPictureState = (url: {
    cropped: string;
    original: string;
  }): void => {
    setPictureState(url);
  };

  const updateUserHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const target = event.target as HTMLFormElement;
      console.log([target.form]);
      const updateUserData = {
        ...(target.form[0].value ? { username: target.form[0].value } : {}),
        ...(target.form[1].value ? { firstName: target.form[1].value } : {}),
        ...(target.form[2].value ? { lastName: target.form[2].value } : {}),
        ...(target.form[3].value ? { bio: target.form[3].value } : {}),
        ...(pictureState.cropped ? { pfp: pictureState.cropped } : {}),
      };
      console.log(updateUserData);
      const id = Auth.getProfile().data._id;
      console.log(id);

      const response = await updateUserMutation({
        variables: { input: updateUserData, _id: id },
      });
      setUserData(response.data.editUser.user);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex items-center justify-center mt-16 pt-2 shadow-2xl">
      <form className="bg-darkModeDarkGray rounded-lg shadow-md p-2 w-72 mx-auto">
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-semibold dark:text-gray-400 text-gray-700"
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
          <label className="block text-sm font-semibold dark:text-gray-400 text-gray-700">
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
            className="block text-sm font-semibold dark:text-gray-400 text-gray-700"
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
  );
};

export default EditProfile;
