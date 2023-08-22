"use client";

import { CREATE_MESSAGE } from "@/app/GraphQL/mutations";
import { useMutation } from "@apollo/client";

export default function Input({
  chatId,
  username,
}: {
  chatId: string;
  username: string;
}) {
    // create message mutation
  const [
    createMessage,
    { data: messageData, loading: messageLoading, error: messageError },
  ] = useMutation(CREATE_MESSAGE);



  // fix this typescript
  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
        createMessage({
            variables:{
                username:username,
                chatId: chatId,
                body: event.target.value
            }
        });
      console.log(event.target.value, chatId, username);
    }
  };

  return (
    <div className="bg-gray-300 p-4">
      <input
        className="flex items-center h-10 w-full rounded px-3 text-sm"
        type="text"
        placeholder="Type your message…"
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
