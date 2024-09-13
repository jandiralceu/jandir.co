import path from "path";
import { GatsbyNode } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";

interface BlogPost {
  readonly node: {
    id: string;
    frontmatter: {
      title: string;
      slug: string;
      cover: {
        childImageSharp?: {
          gatsbyImageData: IGatsbyImageData;
        };
        publicURL: string;
      };
    };
  };
}

interface GraphQLResult {
  readonly data: {
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

  const result = await graphql<GraphQLResult>(`
    {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
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

  if (!!result.errors || !result.data) {
    reporter.panicOnBuild("Error while running GraphQL query.");
    return;
  }

  // @ts-expect-error - TS is complaining about the type of `allMdx` here
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
