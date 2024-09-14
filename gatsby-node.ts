import path from "path";
import { GatsbyNode } from "gatsby";

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
  reporter,
}) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/BlogPostTemplate.tsx`);

  const result = await graphql<IPageData<IPost>>(`
    {
      allMdx(sort: { frontmatter: { date: DESC } }) {
        edges {
          node {
            id
            frontmatter {
              title
              slug
              cover {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED)
                }
                publicURL
              }
              tags
            }
          }
        }
      }
    }
  `);

  if (!!result.errors || !result.data) {
    reporter.panicOnBuild("Error while running GraphQL query.");
    return;
  }

  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: `/blog${node.frontmatter.slug}`,
      component: blogPostTemplate,
      context: {
        id: node.id,
      },
    });
  });
};
