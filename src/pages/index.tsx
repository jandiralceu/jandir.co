import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import Layout from "../components/Layout";
import SiteDescription from "../components/SiteDescription";
import LatestPosts from "../components/LatestPosts";

export default function IndexPage(data: PageProps) {
  return (
    <Layout>
      <main>
        <SiteDescription className="leading-[3.4rem] text-5xl font-extralight" />

        <div className="mt-24">
          <LatestPosts />
        </div>
      </main>
    </Layout>
  );
}

export const Head: HeadFC = () => (
  <title>Jandir A. Cutabiala | Software Engineer</title>
);
