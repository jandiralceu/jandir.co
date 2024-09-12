import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import Layout from "../components/Layout";
import SearchBox from "../components/Search";

export default function BlogPage(_: PageProps) {
  return (
    <Layout>
      <div>
        <h2 className="text-4xl mb-10 font-extralight">
          <strong className="font-normal">Looking for</strong> something
          specific? <br /> Search through my{" "}
          <strong className="font-normal">posts</strong>
        </h2>

        <div className="max-w-[50%]">
          <SearchBox />
        </div>
      </div>
    </Layout>
  );
}

export const Head: HeadFC = () => <title>Blog | Jandir A. Cutabiala</title>;
