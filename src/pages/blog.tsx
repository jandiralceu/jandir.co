import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";
import SearchBox from "../components/SearchBox";

export default function BlogPage(_: PageProps) {
  return (
    <Layout>
      <div>
        <h2>Blog</h2>

        <SearchBox />
      </div>
    </Layout>
  );
}

export const Head: HeadFC = () => <title>Blog | Jandir A. Cutabiala</title>;
