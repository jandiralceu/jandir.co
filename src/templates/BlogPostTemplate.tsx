import * as React from "react";
import { graphql, navigate } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { MDXProvider } from "@mdx-js/react";

import Layout from "../components/Layout";

interface BlogPostProps {
  readonly data: {
    mdx: {
      body: string;
      frontmatter: {
        title: string;
        date: string;
        cover: {
          childImageSharp?: {
            gatsbyImageData: IGatsbyImageData;
          };
        };
        readonly tags: string[];
      };
    };
  };
}

export default function BlogPostTemplate({ data }: BlogPostProps) {
  const post = data.mdx;
  const hasHistory =
    typeof window !== "undefined" ? window.history.length > 2 : false;
  const cover = getImage(post.frontmatter.cover);

  return (
    <Layout>
      <main className="container m-auto">
        <div>
          <button
            className="flex items-center gap-3"
            type="button"
            onClick={async () => {
              if (hasHistory) {
                await navigate(-1);
                return;
              }

              await navigate("/blog");
            }}
          >
            <FontAwesomeIcon icon={faArrowLeft} size="xl" className="" />
            <span className="text-xl">
              {hasHistory ? "Back" : "See All Posts"}
            </span>
          </button>
        </div>

        <div className="grid grid-cols-2 mt-20 gap-12 bg-white rounded-r-2xl ">
          <GatsbyImage
            image={cover as IGatsbyImageData}
            alt={post.frontmatter.title}
            title={post.frontmatter.title}
            className="rounded-l-2xl bg-cover"
          />

          <div className="flex flex-col justify-center items-center gap-10 pr-12 py-12">
            <h2 className="text-6xl leading-[4.4rem]">
              {post.frontmatter.title}
            </h2>

            <div className="flex justify-start w-full gap-8">
              <div>
                <h4 className="font-semibold">Date</h4>
                <p className="">{post.frontmatter.date}</p>
              </div>

              <div>
                <h4 className="font-semibold">Category</h4>
                <div className="flex flex-wrap gap-2">
                  {post.frontmatter.tags.map((tag) => (
                    <span key={tag} className=" text-md lowercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-3xl font-extralight px-24">
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
        date(formatString: "MMMM DD, YYYY")
        cover {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
        tags
      }
    }
  }
`;
