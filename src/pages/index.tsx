import { PageProps } from "gatsby";
import { type } from "os";
import React from "react";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: "#663399",
};
const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const doclistStyles = {
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
};

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};


// markup
const IndexPage: React.FC<PageProps> = () => {

  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1>Test</h1>
    </main>
  );
};

export default IndexPage;
