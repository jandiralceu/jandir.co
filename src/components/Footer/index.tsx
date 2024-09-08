import * as React from "react";
import { Link } from "gatsby";

import Logo from "../Logo";
import SiteDescription from "../SiteDescription";
import SocialIcons from "../SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-20 py-24">
      <div className="container m-auto flex justify-center items-center flex-col gap-12">
        <Logo />

        <ul className="flex gap-6">
          <li className="text-xl">
            <Link to="/">Home</Link>
          </li>
          <li className="text-xl">
            <Link to="/">Blog</Link>
          </li>
          <li className="text-xl">
            <Link to="/">About</Link>
          </li>
          <li className="text-xl">Sitemap.xml</li>
        </ul>

        <SiteDescription className="text-xl font-extralight" />

        <SocialIcons className="flex justify-center items-center gap-8" />
      </div>
    </footer>
  );
}
