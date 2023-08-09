
import { metadata } from "./metadata";
import "./globals.css";
import BodyContent from "./BodyContent";


export const dynamicParams = true,
  revalidate = Infinity,
  fetchCache = "auto",
  runtime = "nodejs",
  preferredRegion = "auto";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
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
        <BodyContent>{children}</BodyContent>
      </body>
    </html>
  );
}

export default RootLayout;
