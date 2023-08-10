import { gql } from "@apollo/client";

export const CHAT_SUBSCRIPTION = gql`
  subscription messages($chatId: ID, $userId: ID) {
    messages(chatId: $chatId, userId: $userId) {
      body
      userId
    }
  }
`;
