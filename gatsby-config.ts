import "dotenv/config";
import type { GatsbyConfig } from "gatsby";

import algoliaQueries from "./algolia-queries";

const siteUrl = "https://jandir.co";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Jandir A. Cutabiala | Software Engineer`,
    siteUrl,
    author: {
      name: `Jandir Alceu Cutabiala`,
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
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap-index.xml`,
        policy: [
          {
            userAgent: "*",
            allow: ["/"],
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl,
        stripQueryString: true,
      },
    },
    {
      resolve: "gatsby-plugin-brotli",
      options: {
        extensions: ["css", "html", "js", "svg", "json"],
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Reddit Sans Condensed`,
            file: `https://fonts.googleapis.com/css2?family=Reddit+Sans+Condensed:wght@200..900&display=swap`,
          },
        ],
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
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: process.env.GATSBY_GOOGLE_TAG_MANAGER_ID,
        enableWebVitalsTracking: true,
      },
    },
  ],
};

export default config;
