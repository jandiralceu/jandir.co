import * as React from "react";
import { graphql, navigate } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { MDXProvider } from "@mdx-js/react";

import Layout from "../components/Layout";

interface BlogPostProps {
  data: {
    mdx: {
      body: string;
      frontmatter: {
        title: string;
        cover: {
          childImageSharp?: {
            gatsbyImageData: IGatsbyImageData;
          };
          publicURL: string;
        };
      };
    };
  };
}

export default function BlogPostTemplate({ data }: BlogPostProps) {
  const post = data.mdx;
  const hasHistory = window.history.length > 2;
  const cover = getImage(post.frontmatter.cover);

  return (
    <Layout>
      <main>
        <div>
          <button
            className="flex items-center gap-3"
            type="button"
            onClick={() => {
              if (hasHistory) {
                navigate(-1);
                return;
              }

              navigate("/blog");
            }}
          >
            <FontAwesomeIcon icon={faArrowLeft} size="xl" className="" />
            <span className="text-xl">
              {hasHistory ? "Back" : "See All Posts"}
            </span>
          </button>
        </div>

        <div className="flex flex-col justify-center items-center my-20 gap-10">
          <h2 className="text-6xl leading-[4.4rem]">
            {post.frontmatter.title}
          </h2>
          <div className="flex gap-10">
            <div className="text-center">
              <h4 className="font-semibold">Date</h4>
              <p className="">05 June 2024</p>
            </div>

            <div className="text-center">
              <h4 className="font-semibold">Category</h4>
              <p>Software Development</p>
            </div>
          </div>
        </div>

        {cover && (
          <div className="flex justify-center items-center">
            <GatsbyImage
              image={cover}
              alt={post.frontmatter.title}
              title={post.frontmatter.title}
              className="w-[80%] rounded-xl"
            />
          </div>
        )}

        <div className="mt-12 text-3xl font-extralight">
          <MDXProvider>
            <div dangerouslySetInnerHTML={{ __html: post.body }} />
          </MDXProvider>
        </div>
      </main>
    </Layout>
  );
}

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        cover {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
          publicURL
        }
      }
    }
  }
`;
