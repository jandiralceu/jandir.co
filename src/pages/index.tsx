import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import Layout from "../components/Layout";
import ArticleCard from "../components/ArticleCard";
import SiteDescription from "../components/SiteDescription";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main>
        <SiteDescription className="leading-[3.4rem] text-5xl font-extralight" />

        <section className="mt-20">
          <hr />
          <h3 className="text-4xl font-extralight mt-10 leading-[3.2rem]">
            See what I’ve <br />
            <strong>written lately</strong>
          </h3>

          <div className="grid grid-cols-3 gap-12 pt-10">
            <ArticleCard
              title="Lorem ipsum dolor sit amet consectetur, adipisicing elit"
              abstract="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        necessitatibus recusandae ex doloribus! Repellendus eius earum ipsum."
            />
            <ArticleCard
              title="Lorem ipsum dolor sit amet consectetur, adipisicing elit"
              abstract="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        necessitatibus recusandae ex doloribus! Repellendus eius earum ipsum."
            />
            <ArticleCard
              title="Lorem ipsum dolor sit amet consectetur, adipisicing elit"
              abstract="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        necessitatibus recusandae ex doloribus! Repellendus eius earum ipsum."
            />
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Jandir A. Cutabiala</title>;
