"use client";

import { ApolloProvider } from "@apollo/client";
import client from "../(utils)/apollo-client";
import "./globals.css";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loading from "./loading";

const Sidebar = dynamic(() => import("../components/sidebar"), {
  ssr: false,
});

function BodyContent({ children }: { children: React.ReactNode }) {
  return (
    <ApolloProvider client={client}>
      <Sidebar />
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </ApolloProvider>
  );
}

export default BodyContent;
