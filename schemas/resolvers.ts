//import signToken function

const resolvers = {
  Query: {
    project: async () => {},
    history: async () => {}
    // users: async (p, { username }) => {
    //   const params = username ? { username } : {};
    //   return await User.find(params)
    //     .populate('channelModel')
    //     .populate('friends');
    //}
  },
  Mutation: {
    addUser: () => {
      //   const user = await User.create(args);
      //   //jwt token stuff goes here
      //   const token = signToken(user);
      //   return { token, user };
    }
  }
};
export default resolvers;
