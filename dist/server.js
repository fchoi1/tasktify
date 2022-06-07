"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
// const express = require('express');
// const path = require('path');
// const db = require('./config/connection');
// const routes = require('./routes');
// const { authMiddleware } = require('./utils/auth');
// const { ApolloServer } = require('apollo-server-express');
// const { typeDefs, resolvers } = require('./schemas');
const PORT = process.env.PORT || 3001;
const app = (0, express_1.default)();
// const startServer = async () => {
//   const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//     context: authMiddleware
//   });
//   await server.start();
//   server.applyMiddleware({ app });
//   console.log(`Use GraphQ at http://localhost:${PORT}${server.graphqlPath}`);
// };
// startServer();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
    app.use(express_1.default.static(path_1.default.join(__dirname, '../client/build')));
}
// serve up react front-end in production
app.use((req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../../client/build/index.html'));
});
// app.use(routes);
// db.once('open', () => {
app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
// });
