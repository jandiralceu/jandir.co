import * as React from "react";
// import { graphql } from "gatsby";
import type { HeadFC, PageProps } from "gatsby";

import Layout from "../components/Layout";
import SearchBar from "../components/Search";
// import { useState } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";
// import ArticleCard from "../components/ArticleCard";

const topics = [
  "React",
  "Gatsby",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "GraphQL",
  "AWS",
  "Azure",
  "Google Cloud",
  "CI/CD",
  "Testing",
  "Performance",
  "Security",
  "SEO",
  "Frontend",
  "Backend",
  "Fullstack",
  "DevOps",
  "Serverless",
  "PWA",
  "WebAssembly",
  "Web Development",
];

const BlogPage = (_: PageProps) => {
  // console.log(params);
  // // @ts-expect-error - AllMdx type is not defined
  // const initialPosts = params.data?.allMdx.edges ?? [];
  // const [posts, setPosts] = useState(initialPosts);
  // const [hasMore, setHasMore] = useState(true);
  // const [currentPage, setCurrentPage] = useState(1);

  // const loadMorePosts = async () => {
  //   const response = await fetch(`/pagination/${currentPage + 1}`);
  //   const newPosts = await response.json();
  //   if (newPosts.length > 0) {
  //     setPosts([...posts, ...newPosts]);
  //     setCurrentPage(currentPage + 1);
  //   } else {
  //     setHasMore(false);
  //   }
  // };

  return (
    <Layout>
      <div>
        <h2 className="text-4xl mb-8 font-extralight">
          <strong className="font-normal">Looking for</strong> something
          specific? <br /> Search through my{" "}
          <strong className="font-normal">posts</strong>
        </h2>

        <section className="max-w-[600px]">
          <SearchBar />
        </section>

        <section className="mt-24">
          <h2 className="text-2xl">Search by topics</h2>

          <div className="flex flex-wrap gap-4 mt-8 max-w-[80%]">
            {topics.map((topic) => (
              <p
                className="bg-slate-950/70 text-white px-4 py-2 rounded-full text-md shadow-md lowercase"
                key={topic}
              >
                {topic}
              </p>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

// export const pageQuery = graphql`
//   query BlogPostsQuery($limit: Int!, $skip: Int!) {
//     allMdx(
//       sort: { fields: frontmatter___date, order: DESC }
//       limit: $limit
//       skip: $skip
//     ) {
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             slug
//             date(formatString: "MMMM DD, YYYY")
//             cover {
//               childImageSharp {
//                 gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

/* <section className="mt-24">
          <InfiniteScroll
            dataLength={posts.length}
            next={loadMorePosts}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={<p>Você chegou ao fim!</p>}
          >
            <div className="posts-grid">
              {posts.map(({ node }: any) => (
                <ArticleCard
                  title={node.frontmatter.title}
                  slug={node.frontmatter.slug}
                  cover={node.frontmatter.cover}
                  key={node.frontmatter.id}
                />
              ))}
            </div>
          </InfiniteScroll>
        </section> */

export const Head: HeadFC = () => <title>Blog | Jandir A. Cutabiala</title>;

export default BlogPage;
