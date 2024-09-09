import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

import { buildPostUrl } from "../../utils";

type ArticleCardProps = {
  title: string;
  slug: string;
  cover: {
    childImageSharp?: {
      gatsbyImageData: IGatsbyImageData;
    };
    publicURL: string;
  };
};

export default function ArticleCard({ title, slug, cover }: ArticleCardProps) {
  const image = getImage(cover.childImageSharp ?? null);

  return (
    <Link to={buildPostUrl(slug)}>
      <div className="w-full h-[370px]">
        {image && (
          <GatsbyImage
            image={image}
            title={title}
            alt={title}
            className="rounded-xl w-full h-full"
          />
        )}

        {!image && cover.publicURL && (
          <img
            src={cover.publicURL}
            alt={title}
            className="rounded-xl"
            title={title}
          />
        )}
      </div>

      <h4 className="text-2xl mt-6">{title}</h4>
    </Link>
  );
}
