"use client"
import { useSubscription } from "@apollo/client";
import { CHAT_SUBSCRIPTION } from "../../(GraphQL)/subscriptions";

export default function MyComponent() {
  const { data, loading, error } = useSubscription(
    CHAT_SUBSCRIPTION,);
  console.log(loading)
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p className="">Error: {error.message}</p>;
  }

  // Data is available here, and you can access the new chat messages
  // using `data.chat.messages` array.
  console.log(data);
  return (
    <p>DATA:{data.messages}</p>
  );
}