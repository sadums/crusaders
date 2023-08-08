"use client";

import { ApolloProvider } from "@apollo/client";
import client from "./apollo-client";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loading from "./loading";
import "./globals.css";

// export const dynamic = 'auto',

export const dynamicParams = true,
  revalidate = Infinity,
  fetchCache = "auto",
  runtime = "nodejs",
  preferredRegion = "auto";

// Load Sidebar dynamically and only on the client side
const Sidebar = dynamic(() => import("../app/components/sidebar"), {
  ssr: false,
});

// If there are other components you want to load only on the client side, follow the same pattern.

export const metadata: Metadata = {
  title: "Social Media",
  description: "",
};

function RootLayout({ children }: { children: React.ReactNode }) {
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
          <Sidebar />
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </body>
      </html>
    </ApolloProvider>
  );
}

export default RootLayout;
