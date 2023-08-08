"use client";

import "./globals.css";
import type { Metadata } from "next";
import React, { useEffect, useState, useMemo } from "react";
import { Inter } from "next/font/google";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Auth from "../app/(utils)/auth";
// import Navbar from "./(components)/NIU-navbar";
// import NewNavbar from "./(components)/NIU-newNavbar";
import Footer from "../app/components/footer";
import SignInModal from "../app/components/signin";
import SignUpModal from "../app/components/signup";
import Sidebar from "../app/components/sidebar";
import client from "./apollo-client";
import Loading from "./loading";

export const dynamic = "auto",
  dynamicParams = true,
  revalidate = Infinity,
  fetchCache = "auto",
  runtime = "nodejs",
  preferredRegion = "auto";

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

// const inter = Inter({ subsets: ["latin"] });

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
        <body className="border-coolGray">
          <Sidebar
            setIsSignInModalOpen={setIsSignInModalOpen}
            setIsSignUpModalOpen={setIsSignUpModalOpen}
          />
          <div>{children}</div>
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
