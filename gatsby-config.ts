import type { GatsbyConfig } from 'gatsby';
const path = require('path');

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Tasktify`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        resolveModules: [path.join(__dirname, 'src')],
        components: path.join(__dirname, 'src', 'components')
      }
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true // defaults to false
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png'
      }
    }
  ]
};

export default config;
