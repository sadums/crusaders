"use client"

import { useQuery, useSubscription } from "@apollo/client"
import { GET_CHAT_BY_ID } from "../../GraphQL/queries"
import { CHAT_SUBSCRIPTION } from "../../GraphQL/subscriptions"
import Auth from "../../(utils)/auth";

export default function Page({ params }: { params: { chatId: string } }) {
  console.log(Auth.getProfile().data._id) // userId
  const { data, loading, error } = useSubscription(CHAT_SUBSCRIPTION, {
    variables: {
      chatId: params.chatId,
      userId: Auth.getProfile().data._id,
    },
  });
  
  console.log(data)
  return (<div>My Post: {params.chatId}</div>)
}
