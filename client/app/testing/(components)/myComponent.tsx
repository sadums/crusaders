"use client";
import { useSubscription } from "@apollo/client";
import { CHAT_SUBSCRIPTION } from "../../GraphQL/subscriptions";

export default function MyComponent() {
  const { data, loading, error } = useSubscription(CHAT_SUBSCRIPTION, {
    variables: {
      chatId: "64cc0f97ded45e7f731940fb",
      userId: "64c847e9ed40b6f2b1c10ebd",
    },
  });
  console.log(loading);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p className="">Error: {error.message}</p>;
  }

  // Data is available here, and you can access the new chat messages
  // using `data.chat.messages` array.
  console.log(data);

  return <p>DATA:</p>;
}
