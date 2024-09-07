import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import Layout from "../components/Layout";
import ArticleCard from "../components/ArticleCard";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main>
        <h2 className="text-5xl font-extralight leading-[3.4rem]">
          <strong className="font-semibold">
            Hey, I'm Jandir A. Cutabiala
          </strong>
          . I explore real-world{" "}
          <strong className="font-semibold">software engineering</strong>{" "}
          challenges and{" "}
          <strong className="font-semibold">share solutions</strong> from my
          daily <strong className="font-semibold">experience</strong>.
        </h2>

        <section className="mt-20">
          <hr />
          <h3 className="text-4xl font-extralight mt-10 leading-[3.2rem]">
            See what I’ve <br />
            <strong>written lately</strong>
          </h3>

          <div className="grid grid-cols-3 gap-12 pt-10">
            <ArticleCard
              title="Lorem ipsum dolor sit amet consectetur, adipisicing elit"
              resume="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        necessitatibus recusandae ex doloribus! Repellendus eius earum ipsum."
            />
            <ArticleCard
              title="Lorem ipsum dolor sit amet consectetur, adipisicing elit"
              resume="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        necessitatibus recusandae ex doloribus! Repellendus eius earum ipsum."
            />
            <ArticleCard
              title="Lorem ipsum dolor sit amet consectetur, adipisicing elit"
              resume="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
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
