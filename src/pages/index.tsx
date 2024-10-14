import * as React from "react";
import { graphql, useStaticQuery, type HeadFC, type PageProps } from "gatsby";

import Layout from "../components/Layout";
import SiteDescription from "../components/SiteDescription";
import LatestPosts from "../components/LatestPosts";
import Subscribe from "../components/Subscribe";

interface IHomeMetadata extends ISiteMetadata {
  readonly file: {
    publicURL: string;
  };
}

export default function IndexPage(_: PageProps) {
  return (
    <Layout>
      <main>
        <SiteDescription className="leading-[4rem] text-5xl font-extralight container m-auto" />

        <section className="mt-16 grid grid-cols-[500px_300px] items-center gap-6 container m-auto">
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

export const Head: HeadFC = () => {
  const { site, file } = useStaticQuery<IHomeMetadata>(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          author {
            name
          }
        }
      }
      file(relativePath: { eq: "me.jpg" }) {
        publicURL
      }
    }
  `);
  const { siteUrl, title, description, author } = site.siteMetadata;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={author.name} />
      {/* Open Graph meta options */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={`${siteUrl + file.publicURL}`} />
      <meta property="og:image:width" content="2116" />
      <meta property="og:image:height" content="2646" />
      <meta property="og:image:type" content="image/jpeg" />

      {/* Twitter meta options */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl + file.publicURL}`} />
    </>
  );
};
