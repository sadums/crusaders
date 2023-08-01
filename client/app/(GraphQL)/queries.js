import { gql } from "@apollo/client";

// export const GET_LOGGED_IN_USER = gql`
//   query GetLoggedInUser {
//     getLoggedInUser {
//         _id
//         username
//         bio
//         pfp
//         email
//         posts
//         followers
//         following
//     }
//   }
// `;

export const GET_LOGGED_IN_USER = gql`
  query GetLoggedInUser {
    getLoggedInUser {
      _id
      username
      bio
      pfp
      email
      posts {
        _id
      }
      followers {
        _id
      }
      following {
        _id
      }
    }
  }
`;
