import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { MDXProvider } from "@mdx-js/react";
import Layout from "../components/Layout";

interface BlogPostProps {
  data: {
    mdx: {
      body: string;
      frontmatter: {
        title: string;
        cover: string;
      };
    };
  };
}

export default function BlogPostTemplate({ data }: BlogPostProps) {
  const post = data.mdx;

  return (
    <Layout>
      <h2>{post.frontmatter.title}</h2>

      <MDXProvider>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
      </MDXProvider>
    </Layout>
  );
}

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
      }
    }
  }
`;
