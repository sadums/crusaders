import React from "react";

function TheirText({ text, date }: { text: string; date: string; }) {
  return (
    <div className="flex justify-start mt-2">
      <div className="max-w-[60%]">
        <h1 className="border-0 rounded-tl-3xl rounded-tr-3xl leading-tight rounded-bl-none rounded-br-3xl pr-4 pl-4 p-2 bg-green-400 dark:bg-green-700 dark:text-white text-black text-md">
          {text}
        </h1>
        <div className="flex justify-start mt-1">
          <h1 className="text-xs text-gray-500">{date ? `${date}` : ""}</h1>
        </div>
      </div>
    </div>
  );
}

export default TheirText;
