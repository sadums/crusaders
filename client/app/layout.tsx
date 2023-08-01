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
import Auth from "./(utils)/auth";
// import Navbar from "./(components)/NIU-navbar";
// import NewNavbar from "./(components)/NIU-newNavbar";
import Footer from "./(components)/footer";
import SignInModal from "./(components)/signin";
import SignUpModal from "./(components)/signup";
import Sidebar from "./(components)/sidebar";
import Profile from "./(pages)/Profile";

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
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Manrope&family=Wallpoet&display=swap"
            rel="stylesheet"
          ></link>
        </head>
        <body className={inter.className}>
          <Sidebar
            setIsSignInModalOpen={setIsSignInModalOpen}
            setIsSignUpModalOpen={setIsSignUpModalOpen}
          />
          {children}
          {/* <Footer></Footer> */}
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
