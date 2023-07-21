"use client";

import "./globals.css";
import type { Metadata } from "next";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import Navbar from "./(components)/navbar";
import Footer from "./(components)/footer";
import SignInModal from "./user/signin/page";
import SignUpModal from "./user/signup/page";

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

  // const handleOpenSignInModal = () => {
  //   setIsSignInModalOpen(true);
  // };

  // const handleCloseSignInModal = () => {
  //   setIsSignInModalOpen(false);
  // };
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar
          setIsSignInModalOpen={setIsSignInModalOpen}
          setIsSignUpModalOpen={setIsSignUpModalOpen}
        />
        {children}
        <h1>HOME</h1>
        <Footer></Footer>
        {isSignUpModalOpen && (
          <SignUpModal setIsSignUpModalOpen={setIsSignUpModalOpen} />
        )}
        {isSignInModalOpen && (
          <SignInModal setIsSignInModalOpen={setIsSignInModalOpen} />
        )}
      </body>
    </html>
  );
}
