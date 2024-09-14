interface PageNode {
  readonly id: string;
  readonly frontmatter: {
    title: string;
    slug: string;
    cover: {
      publicURL: string;
    };
    tags: string[];
  };
  readonly excerpt: string;
}

interface PageQueryResult {
  readonly data: {
    pages: {
      edges: {
        node: PageNode;
      }[];
    };
  };
}

interface AlgoliaRecord {
  readonly objectID: string;
  readonly title: string;
  readonly slug: string;
  readonly excerpt: string;
  readonly cover: {
    publicURL: string;
  };
  readonly tags: string[];
}

interface AlgoliaQuery {
  readonly query: string;
  readonly transformer: (result: PageQueryResult) => AlgoliaRecord[];
  readonly indexName: string;
  readonly settings: {
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
          tags
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
