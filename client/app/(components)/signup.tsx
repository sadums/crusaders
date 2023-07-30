import { sign } from "crypto";
import React, { useState } from "react";
import { CREATE_USER_MUTATION } from '../(GraphQL)/mutations'
import { useMutation } from "@apollo/client";
import Auth from '../(utils)/auth'

interface SignInModalProps {
  setIsSignUpModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUpModal: React.FC<SignInModalProps> = ({ setIsSignUpModalOpen }) => {
  const [createUserMutation, { loading, error, data }] =
    useMutation(CREATE_USER_MUTATION);

  const handleSignUp = async (event: React.FormEvent) => {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const usernameValue = target.form[0].value;
    const emailValue = target.form[1].value;
    const passwordValue = target.form[2].value;
    const confirmPasswordValue = target.form[3].value;

    try {
      if (
        usernameValue &&
        emailValue &&
        passwordValue &&
        confirmPasswordValue
      ) {
        console.log(usernameValue);
        console.log(emailValue);
        if (passwordValue === confirmPasswordValue) {
          const response = await createUserMutation({
            variables: {
              input: {
                username: usernameValue,
                email: emailValue,
                password: passwordValue,
              },
            },
          });
          const { token, user } = response.data.createUser;
          console.log(user);
          console.log(token);
          Auth.login(token);
        } else {
          alert("Passwords don't match");
        }
      } else {
        alert("Please fill out all fields");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 sign-up-modal">
  <form className="bg-white rounded-lg p-8 w-96">
    <h2 className="text-2xl font-bold mb-4 text-black">Sign Up</h2>
    <div className="mb-4">
      <label htmlFor="username" className="block font-medium mb-1 text-black">
        Username
      </label>
      <input
        type="text"
        id="username"
        className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500 text-black"
        placeholder="Enter your username"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="email" className="block font-medium mb-1 text-black">
        Email
      </label>
      <input
        type="email"
        id="email"
        className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500 text-black"
        placeholder="Enter your email"
      />
    </div>

    <div className="mb-4">
      <label htmlFor="password" className="block font-medium mb-1 text-black">
        Password
      </label>
      <input
        type="password"
        id="password"
        className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500 text-black"
        placeholder="Enter your password"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="password" className="block font-medium mb-1 text-black">
        Confirm Password
      </label>
      <input
        type="password"
        id="password"
        className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500 text-black"
        placeholder="Confirm your password"
      />
    </div>
    <div className="flex justify-end">
      <button
        className="mr-2 px-4 py-2 border border-gray-300 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
        onClick={() => setIsSignUpModalOpen(false)}
      >
        Cancel
      </button>
      <button
        type="submit"
        className="px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        onClick={handleSignUp}
      >
        Sign Up
      </button>
    </div>
  </form>
</div>


  );
};

export default SignUpModal;
