import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

import { buildPostUrl } from "../../utils";

type ArticleCardProps = {
  readonly title: string;
  readonly slug: string;
  readonly cover: {
    childImageSharp?: {
      gatsbyImageData: IGatsbyImageData;
    };
    publicURL: string;
  };
};

export default function ArticleCard({ title, slug, cover }: ArticleCardProps) {
  const image = getImage(cover.childImageSharp ?? null);

  return (
    <article className="w-full bg-white shadow-sm rounded-xl hover:shadow-xl transition-all duration-300 ease-in">
      <Link to={buildPostUrl(slug)} className="w-full h-[320px] block">
        {image && (
          <GatsbyImage
            image={image}
            title={title}
            alt={title}
            className="w-full h-full rounded-t-xl"
          />
        )}

        {!image && cover.publicURL && (
          <img
            src={cover.publicURL}
            alt={title}
            className="w-full h-full"
            title={title}
          />
        )}
      </Link>

      <div className="p-6">
        <div className="flex justify-between items-center">
          <div className="bg-slate-950/80 text-white px-4 py-2 rounded-full text-sm shadow-md">
            Category
          </div>
          <p className="text-lg text-slate-500">August 24th, 2020</p>
        </div>
        <Link to={buildPostUrl(slug)} className="text-2xl mt-4 block">
          <h4>{title}</h4>
        </Link>
      </div>
    </article>
  );
}
