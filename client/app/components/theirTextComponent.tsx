import React from "react";

function TheirText({ text }: { text: string }) {
  return (
    <div className="flex justify-start mt-2">
      <div className="max-w-[60%]">
        <h1 className="border-2 border-green-600 dark:border-green-400 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-none p-[4px] dark:bg-green-900 bg-green-300 dark:text-gray-100 text-black text-md">
          {text}
        </h1>
        <div className="flex justify-start mt-1">
          <h1 className="text-xs text-gray-500">8:01 PM, 08/01/2023</h1>
        </div>
      </div>
    </div>
  );
}

export default TheirText;
