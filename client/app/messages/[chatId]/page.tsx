"use client";
import Message from "../betterMessageComponents/message";
import Input from "../betterMessageComponents/input";

import { useMutation, useQuery, useSubscription } from "@apollo/client";
import { GET_CHAT_BY_ID } from "../../GraphQL/queries";
import { CHAT_SUBSCRIPTION } from "../../GraphQL/subscriptions";
import { CREATE_MESSAGE } from "@/app/GraphQL/mutations";
import Auth from "../../(utils)/auth";

export default function Page({ params }: { params: { chatId: string } }) {
  const userId = Auth.getProfile().data._id;
  const username = Auth.getProfile().data.username;

  // GET INITIAL CONVERSATION DATA
  const {
    data: chatData,
    loading: chatLoading,
    error: chatError,
  } = useQuery(GET_CHAT_BY_ID, {
    variables: {
      chatId: params.chatId,
    },
  });

  // WEB SOCKET TO GET NEW INFORMATION
  const { data, loading, error } = useSubscription(CHAT_SUBSCRIPTION, {
    variables: {
      chatId: params.chatId,
      userId: userId,
    },
  });
  console.log(chatData);
  console.log(data);

  // CREATE MESSAGE EXAMPLE
  const [
    createMessage,
    { data: messageData, loading: messageLoading, error: messageError },
  ] = useMutation(CREATE_MESSAGE);



  console.log(chatData);
  return (
    <div className="flex flex-col flex-grow w-screen text-gray-800 max-w-xl bg-white shadow-xl rounded-lg overflow-hidden">
      <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
        <Message body="test" pfp="https://i.pinimg.com/236x/85/9a/f7/859af748d1eed0d67d5801a6df188a89.jpg" date="2 min ago" username="sadums" who={true}></Message>
        <Message body="test" pfp="https://i.pinimg.com/236x/85/9a/f7/859af748d1eed0d67d5801a6df188a89.jpg" date="2 min ago" username="sadums" who={true}></Message>
        <Message body="test" pfp="https://i.pinimg.com/236x/85/9a/f7/859af748d1eed0d67d5801a6df188a89.jpg" date="2 min ago" username="sadums" who={false}></Message>
        <Message body="test" pfp="https://i.pinimg.com/236x/85/9a/f7/859af748d1eed0d67d5801a6df188a89.jpg" date="2 min ago" username="sadums" who={true}></Message>
        <Message body="test" pfp="https://i.pinimg.com/236x/85/9a/f7/859af748d1eed0d67d5801a6df188a89.jpg" date="2 min ago" username="sadums" who={true}></Message>
      </div>

      <Input chatId={params.chatId} username={username}/>
    </div>
  );
}
