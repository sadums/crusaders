import { useState, useEffect, Key } from "react";
import jaroWinkler from "../(utils)/search/jaroWinklerSearch";
import terms from "../(searchData)/terms.json";
import HomeSearchUserResult from "./toggleSideBar/homeSearchUserResult";

interface toggle {
  sidebarOpacity: boolean | undefined;
}

function Search({ sidebarOpacity }: toggle) {
  const [search, setSearch] = useState("");

  const [showResults, setShowResults] = useState(false);

  const [result1, setResult1] = useState("");
  const [result2, setResult2] = useState("");
  const [result3, setResult3] = useState("");
  const [result4, setResult4] = useState("");
  const [result5, setResult5] = useState("");

  const setResults = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    const start = Date.now();
    const topFive: [
      [any | null, number],
      [any | null, number],
      [any | null, number],
      [any | null, number],
      [any | null, number]
    ] = [
      [null, 0.85],
      [null, 0.85],
      [null, 0.85],
      [null, 0.85],
      [null, 0.85],
    ];

    for (let i = 0; i < terms.length; i++) {
      const result = jaroWinkler(search, terms[i]);
      if (result > 0.85) {
        if (result > topFive[4][1]) {
          topFive.pop();
          topFive.push([terms[i], result]);
          topFive.sort(function (a, b) {
            return b[1] - a[1];
          });
        }
      }
    }
    setResult1(topFive[0][0]);
    setResult2(topFive[1][0]);
    setResult3(topFive[2][0]);
    setResult4(topFive[3][0]);
    setResult5(topFive[4][0]);

    const end = Date.now();
    console.log(`Time spent: ${end - start}ms`);
  };

  return (
    <div
      className={`top-32 left-4 w-72  fixed h-full z-10 ease-in-out duration-300 toggleSidebarMainDiv ${
        sidebarOpacity
          ? "w-0 opacity-0 translate-x-0 "
          : "w-100 opacity-1 translate-x-20"
      }`}
    >
      <h1 className="dark:text-white font-semibold text-lg mr-8 text-black mt-2 border-customPurpleDark border-b-2">
        Search
      </h1>
      <input
        type="text"
        placeholder="Search Crusaders..."
        className="text-black dark:text-white border-[1px] border-mainPurple mt-2 rounded-lg p-1 dark:bg-darkModeDarkGray bg-white border-solid outline-none w-64"
        value={search}
        onChange={(e) => {
          setResults(e);
          setShowResults(true);
        }}
      />

      <div
        className={`${
          showResults ? "block" : "hidden scale-0"
        } float-left m-0 w-64 mt-2 pb-4 list-none overflow-hidden border-none bg-clip-padding text-left text-base  [&[data-te-dropdown-show]]:block ease-in-out transform-all duration-100`}
        aria-labelledby="dropdownMenuButton1"
        data-te-dropdown-menu-ref
      >
        <h1 className="dark:text-white font-semibold text-lg text-black">
          Users:
        </h1>
        <HomeSearchUserResult
          username="Xtra"
          firstname="John"
          lastname="Doe"
          pfp="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.H6Znb4LwWOEUCbMW8sxrTgHaEo%26pid%3DApi&f=1&ipt=5abca4869ffed3c53d3cf378ab1b63dee6e6955f9b4d2c7ee95728f8aac85ade&ipo=images"
        />
        <HomeSearchUserResult
          username="Xtra1"
          firstname="John"
          lastname="Doe"
          pfp="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.H6Znb4LwWOEUCbMW8sxrTgHaEo%26pid%3DApi&f=1&ipt=5abca4869ffed3c53d3cf378ab1b63dee6e6955f9b4d2c7ee95728f8aac85ade&ipo=images"
        />
        <HomeSearchUserResult
          username="Xtra1"
          firstname="John"
          lastname="Doe"
          pfp="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.H6Znb4LwWOEUCbMW8sxrTgHaEo%26pid%3DApi&f=1&ipt=5abca4869ffed3c53d3cf378ab1b63dee6e6955f9b4d2c7ee95728f8aac85ade&ipo=images"
        />
        <HomeSearchUserResult
          username="Xtra1"
          firstname="John"
          lastname="Doe"
          pfp="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.H6Znb4LwWOEUCbMW8sxrTgHaEo%26pid%3DApi&f=1&ipt=5abca4869ffed3c53d3cf378ab1b63dee6e6955f9b4d2c7ee95728f8aac85ade&ipo=images"
        />
        <h1 className="dark:text-white font-semibold text-lg mt-4 text-black">
          Hashtags:
        </h1>
        <div className="inline-block mt-1 flex-wrap">
          <a className="dark:hover:text-mainPurple cursor-pointer hover:text-mainPurple text-black dark:text-white inline-block mr-2">
            #Coding
          </a>
          <a className="dark:hover:text-mainPurple cursor-pointer hover:text-mainPurple text-black dark:text-white inline-block mr-2">
            #Xtra
          </a>
          <a className="dark:hover:text-mainPurple cursor-pointer hover:text-mainPurple text-black dark:text-white inline-block mr-2">
            #Xtra1
          </a>
          <a className="dark:hover:text-mainPurple cursor-pointer hover:text-mainPurple text-black dark:text-white inline-block mr-2">
            #Coding
          </a>
          <a className="dark:hover:text-mainPurple cursor-pointer hover:text-mainPurple text-black dark:text-white inline-block mr-2">
            #Random
          </a>
          <a className="dark:hover:text-mainPurple cursor-pointer hover:text-mainPurple text-black dark:text-white inline-block mr-2">
            #Random1
          </a>
          <a className="dark:hover:text-mainPurple cursor-pointer hover:text-mainPurple text-black dark:text-white inline-block mr-2">
            #YO
          </a>
          <a className="dark:hover:text-mainPurple cursor-pointer hover:text-mainPurple text-black dark:text-white inline-block mr-2">
            #asdf
          </a>
          <a className="dark:hover:text-mainPurple cursor-pointer hover:text-mainPurple text-black dark:text-white inline-block mr-2">
            #fffff
          </a>
          <a className="dark:hover:text-mainPurple cursor-pointer hover:text-mainPurple text-black dark:text-white inline-block mr-2">
            #fsdfsd
          </a>
        </div>
      </div>
    </div>
  );
}

export default Search;
