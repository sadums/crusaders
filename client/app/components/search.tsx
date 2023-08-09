import { useState, useEffect, Key } from "react";
import jaroWinkler from "../(utils)/search/jaroWinklerSearch";
import terms from "../(searchData)/terms.json";

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
      <h1 className="dark:text-white font-semibold text-lg mr-8 text-black mt-2 border-customPurpleDark border-b-2">Search</h1>
      <input
        type="text"
        placeholder="Search Crusaders..."
        className="text-black dark:text-white border-[1px] mt- border-mainPurple rounded-lg p-1 dark:bg-darkModeDarkGray bg-white border-solid outline-none w-64"
        value={search}
        onChange={(e) => {
          setResults(e);
          setShowResults(true);
        }}
      />

        <div className={`${
          showResults ? "block" : "hidden scale-0"
        } float-left m-0 w-64 mt-2 list-none overflow-hidden rounded-lg border-none bg-clip-padding text-left text-base dark:bg-neutral-700 [&[data-te-dropdown-show]]:block`}
        aria-labelledby="dropdownMenuButton1"
        data-te-dropdown-menu-ref>

          <h1 className="dark:text-white text-lg text-white">Users</h1>
          <div className="">

          </div>

        </div>
        {/* <li>
          <a
            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
            href="#"
            data-te-dropdown-item-ref
          >
            {result1}
          </a>
        </li>
        <li>
          <a
            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
            href="#"
            data-te-dropdown-item-ref
          >
            {result2}
          </a>
        </li>
        <li>
          <a
            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
            href="#"
            data-te-dropdown-item-ref
          >
            {result3}
          </a>
        </li>
        <li>
          <a
            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
            href="#"
            data-te-dropdown-item-ref
          >
            {result4}
          </a>
        </li>
        <li>
          <a
            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
            href="#"
            data-te-dropdown-item-ref
          >
            {result5}
          </a>
        </li> */}
    </div>
  );
}

export default Search;
