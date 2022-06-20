import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    channelModel: [Channel]
    friends: [User]
  }

  type Query {
    Project(username: String): User
    History(username: String): User
    users(username: String): [User]
  }

  type Mutation {
    addUser(username: String): Auth
  }
`;
export default typeDefs;
