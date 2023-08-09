"use client";

import { ApolloProvider } from "@apollo/client";
import client from "./apollo-client";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loading from "./loading";

const Sidebar = dynamic(() => import("../app/components/sidebar"), {
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
