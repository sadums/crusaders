import Image from "next/image";
import Head from "next/head";
import HomeController from "./(components)/tempHomeController";
import "./globals.css";

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        ></link>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div>
          <HomeController />
        </div>
      </main>
    </>
  );
}
