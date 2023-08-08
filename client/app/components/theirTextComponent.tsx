import React from "react";

function TheirText({ text }: { text: string }) {
  return (
    <div className="flex justify-start mt-2">
      <div className="max-w-[60%]">
        <h1 className="border-0 rounded-tl-3xl rounded-tr-3xl rounded-bl-none rounded-br-3xl p-2 bg-green-400 dark:bg-green-700 dark:text-gray-100 text-black text-md">
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
