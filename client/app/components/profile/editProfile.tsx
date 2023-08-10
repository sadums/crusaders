import React from "react";
import PictureUploader from "../pictureUploader";
import { useMutation } from "@apollo/client";
import { UPDATE_USER_MUTATION } from "../../GraphQL/mutations";
import { useState, FC } from "react";
import Auth from "../../(utils)/auth";

interface EditProfileProps {
  setUserData: (data: any) => void;
  userInfo: any;
  toggleEditModal: (data: any) => void;
  editModal: any;
}

//MAKE THE FORM CLEAR AUTO MATICALLY AND RESET THE PICTURE STATE
const EditProfile: FC<EditProfileProps> = ({ setUserData, userInfo, toggleEditModal, editModal}) => {
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
      console.log(response.data.editUser.user)
      setUserData(response.data.editUser.user);
      toggleEditModal(!editModal)
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex items-center justify-center mt-16 pt-2 ">
      <form className="bg-white dark:bg-darkModeDarkGray rounded-lg w-full shadow-xl p-2 mx-auto">
        <div className="mb-4">
          <h1 className="text-sm font-semibold text-neonBlue">Username</h1>
          <input
            type="text"
            id="username"
            name="username"
            className="bg-transparent border-solid border-neonBlue border-t-0 border-r-0 border-l-0 border-b-2 outline-none w-[100%] dark:text-white text-black"
            placeholder="Username"
          />
        </div>
        <div className="mb-4 flex">
          <div className="mr-2">
            <label className="text-sm font-semibold text-neonBlue">
              Firstname
            </label>

            <input
              type="text"
              name="first-name"
              className="bg-transparent border-solid border-neonBlue border-t-0 border-r-0 border-l-0 border-b-2 outline-none w-[100%] dark:text-white text-black"
              placeholder="Last Name"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-neonBlue">
              Lastname
            </label>

            <input
              type="text"
              name="last-name"
              className="bg-transparent border-solid border-neonBlue border-t-0 border-r-0 border-l-0 border-b-2 outline-none w-[100%] dark:text-white text-black"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="bio" className="text-sm font-semibold text-neonBlue">
            Biography
          </label>
          <input
            type="text"
            id="bio"
            name="bio"
            className="bg-transparent border-solid border-neonBlue border-t-0 border-r-0 border-l-0 border-b-2 outline-none w-[100%] dark:text-white text-black"
            placeholder="Bio"
          />
        </div>
        <div className="mb-4 pb-1 flex-col border-neonBlue border-t-0 border-r-0 border-l-0 border-b-2 outline-none w-[100%]">
          <h1 className="mb-1 text-sm font-semibold text-neonBlue">
            Profile Picture
          </h1>
          <PictureUploader
            pictureState={pictureState}
            setPictureState={handleSetPictureState}
            uploadText={"Upload a pfp"}
          />
        </div>

        <div>
          <button
            onClick={updateUserHandler}
            type="submit"
            className="font-semibold bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
