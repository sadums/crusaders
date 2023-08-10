"use client"

import { useMutation, useQuery, useSubscription } from "@apollo/client"
import { GET_CHAT_BY_ID } from "../../GraphQL/queries"
import { CHAT_SUBSCRIPTION } from "../../GraphQL/subscriptions"
import { CREATE_MESSAGE } from "@/app/GraphQL/mutations"
import Auth from "../../(utils)/auth";

export default function Page({ params }: { params: { chatId: string } }) {
  const userId = Auth.getProfile().data._id

  
  // GET INITIAL CONVERSATION DATA
  const { data:chatData, loading:chatLoading, error:chatError } = useQuery(GET_CHAT_BY_ID, {
    variables: {
      chatId: params.chatId
    }
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
  const [createMessage, {data:messageData, loading:messageLoading, error:messageError}] = useMutation(CREATE_MESSAGE);

  // createMessage({
  //   variables:{
  //     userId: userId,
  //     chatId: params.chatId,
  //     body: "" // this is what the user will send as their message
  //   }
  // });
  

  return (<div>My Post: {params.chatId}</div>)
}
