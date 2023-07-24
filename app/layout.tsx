"use client";

import "./globals.css";
import type { Metadata } from "next";
import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Auth from "./utils/auth";
import Navbar from "./(components)/navbar";
import NewNavbar from "./(components)/newNavbar";
import Footer from "./(components)/footer";
import SignInModal from "./user/signin/page";
import SignUpModal from "./user/signup/page";

const authLink = setContext((_, { headers }) => {
  //This authLink is middleware that inercepts the out going GraphQL requests and attaches an Authorization header to it
  const token = Auth.getToken(); //This is the authorization header that is attached

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "", //This sends the token with the Bearer prefix
    },
  };
});

const httpLink = createHttpLink({
  //This is what connects my client to the GraphQL server
  uri: "http://localhost:5500/graphql",
});

const client = new ApolloClient({
  //This creates the new instance of the ApolloClient so that I can wrap my app with it and then send request
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(), //This allows me to read and write to the client side cache, this is for speed
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Social Media",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState<boolean>(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState<boolean>(false);
  const [isLoggedin, setIsLoggedIn] = useState(false);

  // const handleOpenSignInModal = () => {
  //   setIsSignInModalOpen(true);
  // };

  // const handleCloseSignInModal = () => {
  //   setIsSignInModalOpen(false);
  // };
  return (
    <ApolloProvider client={client}>
      <html lang="en">
        <body className={inter.className}>
          <NewNavbar
            setIsSignInModalOpen={setIsSignInModalOpen}
            setIsSignUpModalOpen={setIsSignUpModalOpen}
          />
          
          {/* TEMPORARY */}
          {Auth.loggedIn() ? (
            <div>
              <h1 className="text-5xl">USER IS LOGGED IN</h1>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=> Auth.logout()}>
                Log out
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=> {
                console.log(Auth.getToken())
                console.log(Auth.getProfile())
              }}>
                Console.log user and token
              </button>
            </div>
          ) : (
            <div>
              <h1 className="text-5xl">USER IS NOT LOGGED IN</h1>
              <p>Click sign up or sign in at the top</p>
            </div>
          )}
          {children}
          <Footer></Footer>
          {isSignUpModalOpen && (
            <SignUpModal setIsSignUpModalOpen={setIsSignUpModalOpen} />
          )}
          {isSignInModalOpen && (
            <SignInModal setIsSignInModalOpen={setIsSignInModalOpen} />
          )}
        </body>
      </html>
    </ApolloProvider>
  );
}
