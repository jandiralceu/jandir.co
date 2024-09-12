interface PageNode {
  id: string;
  frontmatter: {
    title: string;
    slug: string;
    cover: {
      publicURL: string;
    };
  };
  excerpt: string;
}

interface PageQueryResult {
  data: {
    pages: {
      edges: {
        node: PageNode;
      }[];
    };
  };
}

interface AlgoliaRecord {
  objectID: string;
  title: string;
  slug: string;
  excerpt: string;
  cover: {
    publicURL: string;
  };
}

interface AlgoliaQuery {
  query: string;
  transformer: (result: PageQueryResult) => AlgoliaRecord[];
  indexName: string;
  settings: {
    attributesToSnippet: string[];
  };
}

const pageQuery = `{
  pages: allMdx {
    edges {
      node {
        id
        frontmatter {
          title
          slug
          cover {
            publicURL
          }
        }
        excerpt(pruneLength: 120)
      }
    }
  }
}`;

function pageToAlgoliaRecord({ node }: { node: PageNode }): AlgoliaRecord {
  const { id, frontmatter, excerpt } = node;
  return {
    objectID: id,
    ...frontmatter,
    excerpt,
  };
}

const queries: AlgoliaQuery[] = [
  {
    query: pageQuery,
    transformer: ({ data }) => {
      return data.pages.edges.map(pageToAlgoliaRecord);
    },
    indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME ?? "Posts",
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
];

export default queries;
