import { sign } from "crypto";
import React, { useState } from "react";

interface SignInModalProps {
  setIsSignInModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignInModal: React.FC<SignInModalProps> = ({ setIsSignInModalOpen }) => {
  const handleSignIn = async (event: React.FormEvent) => {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const usernameValue = target.form[0].value;
    const passwordValue = target.form[1].value;

    try {
      if (usernameValue && passwordValue) {
        console.log(usernameValue);
        console.log(passwordValue);
      } else {
        alert("Please fill out both fields");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 sign-in-modal">
      <form className="bg-white rounded-lg p-8 w-96">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block font-medium mb-1">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="flex justify-end">
          <button
            className="mr-2 px-4 py-2 border border-gray-300 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
            onClick={() => setIsSignInModalOpen(false)}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            onClick={handleSignIn}
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInModal;
