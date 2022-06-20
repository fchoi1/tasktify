import React from 'react';
import { Link } from 'gatsby';

type AboutProps = {
  location: {
    state: {
      author: string;
    };
  };
};

export default function About({ location: { state } }: AboutProps) {
  return (
    <div>
      <h1>This is an About me Page</h1>
      <span> This is made by {state.author}! </span>
      <div>
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
}
