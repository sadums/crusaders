import React from "react";

function YourText({ text, date }: { text: string; date: string; }) {
  return (
    <div className="flex justify-end mt-2">
      <div className="max-w-[60%]">
        <h1 className="border-0 leading-tight rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl rounded-br-none p-2 pr-4 pl-4 bg-blue-400 dark:bg-blue-700 dark:text-white text-black text-md">
          {text}
        </h1>
        <div className="flex justify-end mt-1">
          <h1 className="text-xs text-gray-500">{date ? `${date}` : ""}</h1>
        </div>
      </div>
    </div>
  );
}

export default YourText;
