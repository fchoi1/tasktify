import express, { Express, Request, Response } from 'express';
import path from 'path';

// const express = require('express');
// const path = require('path');
// const db = require('./config/connection');
// const routes = require('./routes');

import { authMiddleware } from './utils/auth';
import { ApolloServer } from 'apollo-server-express';

import { typeDefs, resolvers } from './schemas';

const PORT = process.env.PORT || 3001;
const app: express.Application = express();

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
  });

  await server.start();
  server.applyMiddleware({ app });

  console.log(`Use GraphQ at http://localhost:${PORT}${server.graphqlPath}`);
};

// startServer();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// serve up react front-end in production
app.use((req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

// app.use(routes);

// db.once('open', () => {
app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
// });
