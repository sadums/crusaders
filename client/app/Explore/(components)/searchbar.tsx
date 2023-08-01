"use client";

// Remember to import words or whatever you're using to store all the words the user can search for

export default function Searchbar() {
  return (
    <form className="h-8">
      <div className="flex">
        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="rounded-lg block p-2.5 w-full z-20 text-sm text-white bg-transparent rounded-r-lg border-l-customPurple border-l-2 border border-customPurple focus:ring-transparent focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            placeholder="Any Hashtag..."
            required
          />

          <button
            type="submit"
            className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-customPurple rounded-r-lg border border-customPurple hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-customPurple dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
}
