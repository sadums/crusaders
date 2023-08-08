import React from "react";

function YourText({ text }: { text: string }) {
  return (
    <div className="flex justify-end mt-2">
      <div className="max-w-[60%]">
        <h1 className="border-2 border-blue-500 dark:border-blue-400 dark:bg-opacity-60 bg-opacity-70 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-none p-[4px] bg-blue-300 dark:bg-blue-900 dark:text-gray-100 text-black text-md">
          {text}
        </h1>
        <div className="flex justify-end mt-1">
          <h1 className="text-xs text-gray-500">8:01 PM, 08/01/2023</h1>
        </div>
      </div>
    </div>
  );
}

export default YourText;
