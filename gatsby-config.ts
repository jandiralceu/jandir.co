import "dotenv/config";
import type { GatsbyConfig } from "gatsby";

import algoliaQueries from "./algolia-queries";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Jandir A. Cutabiala`,
    siteUrl: `https://jandir.co`,
    author: {
      name: `Jandir A. Cutabiala`,
      summary: `I explore real-world software engineering challenges and share solutions from my daily experience.`,
    },
    description:
      "Hey, I'm Jandir A. Cutabiala. I explore real-world software engineering challenges and share solutions from my daily experience.",
    social: {
      twitter: `jandiralceu`,
      github: `jandiralceu`,
      linkedin: `jandiralceu`,
      instagram: `jandiralceu`,
    },
  },
  trailingSlash: "never",
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: "./src/posts/",
      },
      __key: "posts",
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        queries: algoliaQueries,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME ?? "Posts",
      },
    },
  ],
};

export default config;
