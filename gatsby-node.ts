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

  const { data, errors } = await graphql<GraphQLResult>(`
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

  if (!!errors || !data) {
    reporter.panicOnBuild("Error while running GraphQL query.");
    return;
  }

  data.data.allMdx.edges.forEach(({ node }: BlogPost) => {
    createPage({
      path: `/blog${node.frontmatter.slug}`,
      component: blogPostTemplate,
      context: {
        id: node.id,
      },
    });
  });
};
