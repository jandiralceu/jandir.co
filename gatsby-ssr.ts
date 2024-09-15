import * as React from "react";
import { GatsbySSR } from "gatsby";

export const onRenderBody: GatsbySSR["onRenderBody"] = ({
  setHeadComponents,
}) => {
  setHeadComponents([
    React.createElement("link", {
      key: "kally-dreams",
      rel: "preload",
      href: "/fonts/Kally_dreams.otf",
      as: "font",
      type: "font/otf",
      crossOrigin: "anonymous",
    }),
  ]);
};
