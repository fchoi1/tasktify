import jwt from 'jsonwebtoken';
import { Request } from 'express';

const secret = 'secretsarebestheldclosetotheheart';
const expiration = '2h';

export const authMiddleware = function ({ req }: { req: Request }) {
  // allows token to be sent via req.body, req.query, or headers
  let token = req.body.token || req.query.token || req.headers.authorization;

  // seperate "bearer" from "<tokenvalue>"
  if (req.headers.authorization) {
    token = token.split(' ').pop().trim();
  }

  // if no token return request object as is
  if (!token) {
    return req;
  }

  try {
    // decode and attach user data to request object
    const { data } = jwt.verify(token, secret, { maxAge: expiration });
    req.user = data;
  } catch {
    console.log('Invalid token');
  }

  // return updated request object
  return req;
};

export const signToken = function ({
  username,
  email,
  _id
}: {
  username: string;
  email: string;
  _id: number;
}) {
  const payload = { username, email, _id };

  return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
};
