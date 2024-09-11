import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";

export default function BlogPage(_: PageProps) {
  return (
    <Layout>
      <div>
        <h2>Blog</h2>
        <h2>Blog</h2>
        <h2>Blog</h2>
        <h2>Blog</h2>
      </div>
    </Layout>
  );
}

export const Head: HeadFC = () => <title>Blog | Jandir A. Cutabiala</title>;
