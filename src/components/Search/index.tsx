import * as React from "react";
import { liteClient as algoliasearch } from "algoliasearch/lite";
import "instantsearch.css/themes/satellite.css";
import { Configure, Hits, InstantSearch, SearchBox } from "react-instantsearch";

import Hit from "../Hit";

const algoliaClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID as string,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY as string,
);

export default function Search() {
  return (
    <InstantSearch
      searchClient={{
        ...algoliaClient,
        search(requests) {
          if (requests.every(({ params }) => !params.query)) {
            return Promise.resolve({
              results: requests.map(() => ({
                hits: [],
                nbHits: 0,
                nbPages: 0,
                page: 0,
                processingTimeMS: 0,
                hitsPerPage: 0,
                exhaustiveNbHits: false,
                query: "",
                params: "",
              })),
            });
          }
          return algoliaClient.search(requests);
        },
      }}
      indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME ?? "Posts"}
      future={{
        preserveSharedStateOnUnmount: true,
      }}
    >
      <Configure hitsPerPage={5} />
      <div className="ais-InstantSearch py-6">
        <SearchBox
          classNames={{
            root: "!bg-transparent",
            form: "!bg-transparent !relative",
            input:
              "!bg-white !border-0 !shadow-md !h-14 !rounded-full !text-xl !pl-14",
          }}
          placeholder="Search posts"
        />
        <Hits hitComponent={Hit} />
      </div>
    </InstantSearch>
  );
}
