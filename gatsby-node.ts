import path from "path";
import { GatsbyNode } from "gatsby";

interface BlogPost {
  node: {
    id: string;
    frontmatter: {
      title: string;
      slug: string;
      cover: {
        childImageSharp: {
          gatsbyImageData: any;
        };
        publicURL: string;
      };
    };
  };
}

interface GraphQLResult {
  data: {
    allMdx: {
      edges: BlogPost[];
    };
  };
}

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
  reporter,
}) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/BlogPostTemplate.tsx`);

  const result: any = await graphql<GraphQLResult>(`
    {
      allMdx {
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
            }
          }
        }
      }
    }
  `);

  if (result.errors || !result.data) {
    reporter.panicOnBuild("Error while running GraphQL query.");
    return;
  }

  result.data.allMdx.edges.forEach(({ node }: BlogPost) => {
    createPage({
      path: `/blog${node.frontmatter.slug}`,
      component: blogPostTemplate,
      context: {
        id: node.id,
      },
    });
  });
};
