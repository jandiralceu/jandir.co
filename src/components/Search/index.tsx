import * as React from "react";
import { liteClient as algoliasearch } from "algoliasearch/lite";
import "instantsearch.css/themes/satellite.css";
import { Configure, Hits, InstantSearch, SearchBox } from "react-instantsearch";

import Hit from "../Hit";

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID ?? "",
  process.env.GATSBY_ALGOLIA_SEARCH_KEY ?? "",
);

export default function Search() {
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME ?? "Posts"}
      future={{
        preserveSharedStateOnUnmount: true,
      }}
      initialUiState={{}}
    >
      <Configure hitsPerPage={5} />
      <div className="ais-InstantSearch">
        <SearchBox />
        <Hits hitComponent={Hit} />
      </div>
    </InstantSearch>
  );
}
