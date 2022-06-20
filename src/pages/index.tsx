import type { PageProps } from 'gatsby';
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

// styles
const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif'
};

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// markup
const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1>Tasktify</h1>
      <Container>
        <div> Styled Container here</div>
      </Container>
      <Link to="/about" state={{ author: 'Fabio' }}>
        <div>About</div>
      </Link>
    </main>
  );
};

export default IndexPage;
