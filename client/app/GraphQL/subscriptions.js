import { gql } from "@apollo/client";

export const CHAT_SUBSCRIPTION = gql`
  subscription messages {
    messages {
      body
      userId
    }
  }
`;
