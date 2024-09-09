import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";

export default function AboutPage(data: PageProps) {
  return (
    <Layout>
      <div>
        <h2>About me</h2>
      </div>
    </Layout>
  );
}

export const Head: HeadFC = () => <title>About | Jandir A. Cutabiala</title>;
