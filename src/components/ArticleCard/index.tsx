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
  };
  readonly tags: string[];
};

export default function ArticleCard({
  title,
  slug,
  cover,
  tags,
}: ArticleCardProps) {
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
      </Link>

      <div className="p-6">
        <div className="flex justify-between gap-4">
          <div className="flex items-center gap-2">
            <strong>Tags: </strong>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className=" text-sm text-slate-500 lowercase">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-md text-slate-500">August 24th, 2020</p>
          </div>
        </div>

        <Link to={buildPostUrl(slug)} className="text-2xl mt-4 block">
          <h4>{title}</h4>
        </Link>
      </div>
    </article>
  );
}
