import * as React from "react";
import { liteClient as algoliasearch } from "algoliasearch/lite";
import { InstantSearch, SearchBox as SearchInput } from "react-instantsearch";

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID as string,
  process.env.ALGOLIA_API_KEY as string,
);

export default function SearchBox() {
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME ?? "Posts"}
    >
      <SearchInput />
    </InstantSearch>
  );
}
