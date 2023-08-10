import { useState, useEffect, Key } from "react";
import jaroWinkler from "../(utils)/search/jaroWinklerSearch";
import HomeSearchUserResult from "./toggleSideBar/homeSearchUserResult";
import { useQuery } from "@apollo/client";
import { GET_ALL_USERS_SEARCH } from "../GraphQL/queries";

interface toggle {
  sidebarOpacity: boolean | undefined;
}

function Search({ sidebarOpacity }: toggle) {
  const threshold = 0.5; // number between 0 and 1, higher number means more concise results

  let terms = useQuery(GET_ALL_USERS_SEARCH);
  console.log(terms);

  const [search, setSearch] = useState("");

  const [showResults, setShowResults] = useState(false);

  const [result1, setResult1] = useState({
    username: "",
    firstName: "",
    lastName: "",
    pfp: "",
    _id: "",
  });
  const [result2, setResult2] = useState({
    username: "",
    firstName: "",
    lastName: "",
    pfp: "",
    _id: "",
  });
  const [result3, setResult3] = useState({
    username: "",
    firstName: "",
    lastName: "",
    pfp: "",
    _id: "",
  });
  const [result4, setResult4] = useState({
    username: "",
    firstName: "",
    lastName: "",
    pfp: "",
    _id: "",
  });
  const [result5, setResult5] = useState({
    username: "",
    firstName: "",
    lastName: "",
    pfp: "",
    _id: "",
  });

  const setResults = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);

    const topFive: [
      [any | null, number],
      [any | null, number],
      [any | null, number],
      [any | null, number],
      [any | null, number]
    ] = [
      [null, threshold],
      [null, threshold],
      [null, threshold],
      [null, threshold],
      [null, threshold],
    ];

    for (let i = 0; i < terms.data.getAllUsers.length; i++) {
      const result = jaroWinkler(search, terms.data.getAllUsers[i].username);
      if (result > topFive[4][1]) {
        topFive.pop();
        topFive.push([terms.data.getAllUsers[i], result]);
        topFive.sort(function (a, b) {
          return b[1] - a[1];
        });
      }
    }
    console.log(topFive);
    setResult1(topFive[0][0]);
    setResult2(topFive[1][0]);
    setResult3(topFive[2][0]);
    setResult4(topFive[3][0]);
    setResult5(topFive[4][0]);

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
        {result1 && (
          <HomeSearchUserResult
            username={result1.username}
            firstname={result1.firstName}
            lastname={result1.lastName}
            pfp={result1.username}
            id={result1._id}
          />
        )}
        {result2 && (
          <HomeSearchUserResult
            username={result2.username}
            firstname={result2.firstName}
            lastname={result2.lastName}
            pfp={result2.username}
            id={result2._id}
          />
        )}
        {result3 && (
          <HomeSearchUserResult
            username={result3.username}
            firstname={result3.firstName}
            lastname={result3.lastName}
            pfp={result3.username}
            id={result3._id}
          />
        )}
        {result4 && (
          <HomeSearchUserResult
            username={result4.username}
            firstname={result4.firstName}
            lastname={result4.lastName}
            pfp={result4.username}
            id={result4._id}
          />
        )}
        {result5 && (
          <HomeSearchUserResult
            username={result5.username}
            firstname={result5.firstName}
            lastname={result5.lastName}
            pfp={result5.username}
            id={result5._id}
          />
        )}
        {/* <h1 className="dark:text-white font-semibold text-lg mt-4 text-black">
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
        </div> */}
      </div>
    </div>
  );
}

export default Search;
