import { useState, useEffect, Key } from "react";
import jaroWinkler from "../../(utils)/search/jaroWinklerSearch";
import terms from "../../(searchData)/terms.json";

interface toggle {
    sidebarOpacity: boolean | undefined;
  }

function Search({ sidebarOpacity }: toggle) {
  const [search, setSearch] = useState("");

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
      className={`top-32 left-5 w-72 text-white fixed h-full z-10 ease-in-out duration-300 toggleSidebarMainDiv ${
        sidebarOpacity
          ? "w-0 opacity-0 translate-x-0 "
          : "w-100 opacity-1 translate-x-20"
      }`}
    >
      <input
        type="text"
        placeholder="Search Crusaders..."
        className="text-white mt-2 rounded-xl p-1 bg-coolGray border-solid border-customPurple border-t-2 border-r-2 border-l-2 border-b-2 outline-none w-64"
        value={search}
        onChange={(e) => setResults(e)}
      />
      <ul
        className="absolute z-[1000] float-left m-0 w-full mt-1 list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
        aria-labelledby="dropdownMenuButton1"
        data-te-dropdown-menu-ref
      >
        <li>
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
        </li>
      </ul>
    </div>
  );
}

export default Search;
