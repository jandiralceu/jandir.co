import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import Layout from "../components/Layout";
import SiteDescription from "../components/SiteDescription";
import LatestPosts from "../components/LatestPosts";
import Subscribe from "../components/Subscribe";

export default function IndexPage(data: PageProps) {
  return (
    <Layout>
      <main>
        <SiteDescription className="leading-[4rem] text-5xl font-extralight" />

        <section className="mt-16 grid grid-cols-[500px_300px] items-center gap-6">
          <Subscribe />
          <p className="">
            Subscribe to my newsletter for updates, tips, and exclusive content.
            Don't miss out!
          </p>
        </section>

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
