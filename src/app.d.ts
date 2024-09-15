interface INodeValues<T> {
  readonly id: string;
  readonly frontmatter: T;
}

interface IPageData<T> {
  readonly allMdx: {
    readonly edges: { readonly node: INodeValues<T> }[];
  };
}

interface IPost {
  readonly title: string;
  readonly slug: string;
  readonly date: string;
  readonly tags: string[];
  readonly cover: {
    childImageSharp?: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
}

interface ISiteMetadata {
  readonly site: {
    readonly siteMetadata: {
      readonly title: string;
      readonly description: string;
      readonly siteUrl: string;
      readonly author: {
        readonly name: string;
      };
    };
  };
}
