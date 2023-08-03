import Image from "next/image";
import Head from "next/head";
import HomeController from "./(components)/tempHomeController";
import "./globals.css";

export default function Home() {

  return (
    <>
      <main className="flex min-h-screen flex-col ">
        <div>
          <HomeController />
        </div>
      </main>
    </>
  );
}
