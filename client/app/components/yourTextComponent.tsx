import React from "react";

function YourText({ text }: { text: string }) {
  return (
    <div className="flex justify-end mt-2">
      <div className="max-w-[60%]">
        <h1 className="border-0 rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl rounded-br-none p-2 bg-blue-400 dark:bg-blue-800 dark:text-gray-100 text-black text-md">
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
