export default function Footer() {
  // Footer inspired from https://www.material-tailwind.com/docs/react/footer
  return (
    <footer className="w-full dark:bg-neutral-900 p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 dark:bg-neutral-900 text-center md:justify-between">
        <img src="/logo.svg" alt="logo-ct" className="w-24" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <a
              href="#"
              className="font-normal transition duration-300 text-gray-500 hover:text-gray-600 dark:hover:text-white focus:text-gray-700 dark:focus:text-gray-100"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-normal transition duration-300 text-gray-500 hover:text-gray-600 dark:hover:text-white focus:text-gray-700 dark:focus:text-gray-100"
            >
              License
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-normal transition duration-300 text-gray-500 hover:text-gray-600 dark:hover:text-white focus:text-gray-700 dark:focus:text-gray-100"
            >
              Contribute
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-normal transition duration-300 text-gray-500 hover:text-gray-600 dark:hover:text-white focus:text-gray-700 dark:focus:text-gray-100"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <p className="font-normal transition-colors text-gray-500 hover:text-white dark:hover:text-white focus:text-gray-600 w-fit">
        &copy; 2023 The Fellas
      </p>
    </footer>
  );
}
