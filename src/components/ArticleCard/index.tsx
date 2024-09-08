import * as React from "react";

export default function ArticleCard({
  title,
  abstract,
}: {
  title: string;
  abstract: string;
}) {
  return (
    <article>
      <div className="h-[400px] bg-gray-400 rounded-xl"></div>
      <h4 className="text-4xl mt-6">{title}</h4>

      <p className="mt-4 text-xl font-extralight">{abstract}</p>
    </article>
  );
}
