import * as React from "react";
import { Highlight, Snippet } from "react-instantsearch";
import { Link } from "gatsby";
import { buildPostUrl } from "../../utils";

// TODO: Add the correct type for the `hit` prop
export default function Hit({ hit }: any) {
  return (
    <Link
      to={buildPostUrl(hit.slug as string)}
      className="grid grid-cols-[180px_1fr] gap-6"
    >
      <img
        src={hit.cover.publicURL}
        alt={hit.title}
        className="shadow-md rounded-md"
      />
      <div>
        <h3 className="hit-title text-2xl mb-4">
          <Highlight attribute="title" hit={hit} />
        </h3>

        <p>
          <Snippet hit={hit} attribute="excerpt" />
        </p>
      </div>
    </Link>
  );
}
