import React, { FC } from 'react';
import Link from "next/link";

interface SidebarIconProps {
    text: string;
    pathD: string;
    href: string;
    onClick: () => void;
}


//MAYBE ADD BACK IN THE GEAR THING HERE FOR THE SETTINGS
const SidebarIcon: FC<SidebarIconProps> = ({ text, href, pathD, onClick }) => {
  return (
    <li className="flex items-center space-x-2 sm:sidebarIcon group">
      <Link
        href={href}
        onClick={onClick}
        className="text-gray-300 rounded-md py-2 text-md font-medium transition duration-300 hover:scale-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`sm:w-7 sm:h-7 h-8 w-8 ${href === "#settings" ? "h-6 w-6" : "h-7"}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={pathD}
          />
        </svg>
      </Link>
      <span className="sm:block hidden sidebarIconInfo group-hover:scale-100">
        {text}
      </span>
    </li>
  );
}

export default SidebarIcon;
