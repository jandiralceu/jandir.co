import * as React from "react";
import ArticleCard from "../ArticleCard";
import { graphql, useStaticQuery } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";

interface Post {
  readonly node: {
    frontmatter: {
      title: string;
      slug: string;
      date: string;
      cover: {
        childImageSharp?: {
          gatsbyImageData: IGatsbyImageData;
        };
        publicURL: string;
      };
    };
  };
}

interface RecentPostsData {
  readonly allMdx: {
    edges: Post[];
  };
}

export default function LatestPosts() {
  const data = useStaticQuery<RecentPostsData>(graphql`
    query {
      allMdx(sort: { frontmatter: { date: DESC } }, limit: 3) {
        edges {
          node {
            frontmatter {
              title
              slug
              date
              cover {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
                }
                publicURL
              }
            }
          }
        }
      }
    }
  `);

  return (
    <section>
      <hr />
      <h3 className="text-4xl font-extralight mt-16 leading-[3.2rem] tracking-wide">
        See what I’ve <br />
        <strong>written lately</strong>
      </h3>

      <div className="grid grid-cols-3 gap-12 pt-10">
        {data.allMdx.edges.map(({ node }) => (
          <ArticleCard
            key={node.frontmatter.slug}
            title={node.frontmatter.title}
            slug={node.frontmatter.slug}
            cover={node.frontmatter.cover}
          />
        ))}
      </div>
    </section>
  );
}
