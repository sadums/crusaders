"use client";

import FriendListItem from "@/components/friendListItem";
import Auth from "@/(utils)/auth";
import { GET_CHAT_BY_ID, GET_USER_CHATS } from "@/GraphQL/queries";
import { useQuery } from "@apollo/client";

export default function FriendsList() {
  const profile = Auth.getProfile();
  const userId = profile?.data?._id;

  if (!userId) {
    return <div>Error: No user ID found</div>;
  }

  const { error, loading, data } = useQuery(GET_USER_CHATS, {
    variables: {
      userId: userId,
    },
  });

  const chats: any[] = [];

  try {
    for (const chat in data.getUserChats.chats) {
      for (const member in data.getUserChats.chats[chat].members) {
        const currentMember = data.getUserChats.chats[chat].members[member];
        if (!(Auth.getProfile().data._id === currentMember._id)) {
          chats.push({
            username: currentMember.username,
            firstname: currentMember.firstName,
            lastname: currentMember.lastName,
            id: currentMember._id,
            pfp: currentMember.pfp,
          });
        }
      }
    }
  } catch (e) {
    console.log(e);
  }

  return (
    <div>
      {chats.map((friend, index) => (
        <FriendListItem
          username={friend.username}
          firstname={friend.firstname}
          lastname={friend.lastname}
          pfp={friend.pfp}
          key={index}
        />
      ))}
    </div>
  );
}
